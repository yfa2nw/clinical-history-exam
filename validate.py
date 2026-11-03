#!/usr/bin/env python3
"""
Content validation for the Clinical History & Exam site.

Usage:
    python validate.py            errors and warnings
    python validate.py --errors   errors only

Node.js is used for the two JS-specific jobs: `node --check` on every script, and loading
the data files (the same way the browser does) to dump them as JSON. All rule checks run
here and follow CLAUDE.md. Exits with status 1 if there are errors.
"""

import json
import os
import re
import subprocess
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent
MODULE_DIR = ROOT / 'js' / 'data' / 'modules'

# Same pattern as the check in js/app.js: two or more capitals, optional "-1" suffix (GLP-1).
ABBR_RE = re.compile(r'\b[A-Za-z]*[A-Z][A-Za-z0-9/]*[A-Z][A-Za-z0-9]*(?:-\d+)?\b')

# Keys that hold ids or search terms rather than readable content.
NON_CONTENT_KEYS = {'id', 'see', 'related', 'tags', 'framework', 'skip', 'key', 'letter'}

# British spellings (CLAUDE.md: American spelling throughout).
BRITISH = [
    (r'\b\w*haem\w*', 'hem- (hematuria, hemoptysis)'),
    (r'\b\w*?(?<!i)oedem\w*', 'edema'),  # not angioedema
    (r'\b\w*anaem\w*', 'anemia'),
    (r'\b\w*aesthe\w*', 'esthe- (anesthesia)'),
    (r'\b\w*oesophag\w*', 'esophagus'),
    (r'\b\w*oestr\w*', 'estrogen'),
    (r'\b\w*paed\w*', 'ped- (pediatric)'),
    (r'\b\w*diarrhoea\w*', 'diarrhea'),
    (r'\bfaec\w*', 'feces, fecal'),
    (r'\b\w*ischaem\w*', 'ischemia'),
    (r'\b\w*gynaec\w*', 'gynec-'),
    (r'\bfoet\w*', 'fetus'),
    (r'\b\w*colour\w*', 'color'),
    (r'\b\w*(behaviour|tumour|favour|labour|humour)\w*', '-or'),
    (r'\b\w*(centre|litre|metre|fibre)s?\b', '-er'),
    (r'\b\w*sulph\w*', 'sulf-'),
    (r'\b(real|recogn|organ|minim|maxim|character|local|general|hospital|immobil|stabil|'
     r'priorit|summar|categor|emphas|special|util|standard|visual|normal|sensit|catheter)'
     r'is(e|ed|es|ing|ation|ations)\b', '-ize'),
    (r'\b\w*(travell|labell|modell|cancell|signall)\w*', 'single l (traveled, labeled)'),
    (r'\bprogramme\w*', 'program'),
    (r'\bgrey\w*', 'gray'),
]

# Canonical terms (CLAUDE.md). Search terms in `aka` are exempt.
CANONICAL = [
    (r'\brigors?\b', '"fever, chills" (not rigors)'),
    (r'\bloin\b', '"flank" (not loin)'),
    (r'\b(urolog|neurolog|gynecolog)ical\b', '"urologic", "neurologic", "gynecologic" (not -ical)'),
    (r'\b(rectal bleeding|PR bleeding|blood in (the )?stool)\b', '"hematochezia" or "melena"; plain phrases only in aka'),
    (r'\b(shortness of breath|SOB)\b', '"dyspnea"'),
    (r'\bnausea and vomiting\b', '"N/V" in content'),
    (r'\burinate[sd]?\b|\burinating\b', '"void"'),
]
# Symptom vs diagnosis: these belong in differentials under their canonical name.
DIFFERENTIAL_NAMES = {
    'hydronephrosis': 'obstructive uropathy',
    'nephrolithiasis': 'urolithiasis',
    'kidney stones': 'urolithiasis',
    'renal colic': 'urolithiasis',
}

HISTORY_SLOTS = ['pmh', 'meds', 'fhx', 'shx', 'sr']


class Report:
    def __init__(self):
        self.items = defaultdict(list)  # (level, check) -> [message]

    def error(self, check, msg):
        self.items[('error', check)].append(msg)

    def warn(self, check, msg):
        self.items[('warning', check)].append(msg)

    def count(self, level):
        return sum(len(v) for (lv, _), v in self.items.items() if lv == level)

    def print(self, errors_only=False):
        for level in ('error', 'warning'):
            if errors_only and level == 'warning':
                continue
            for (lv, check), msgs in sorted(self.items.items()):
                if lv != level:
                    continue
                print(f'\n{level.upper()}  {check} ({len(msgs)})')
                for m in msgs:
                    print(f'  - {m}')


# ---------- Loading ----------

def script_paths():
    html = (ROOT / 'index.html').read_text(encoding='utf-8')
    return re.findall(r'<script src="(js/[^"]+\.js)"', html)


def node_check(report):
    for path in sorted((ROOT / 'js').rglob('*.js')):
        res = subprocess.run(['node', '--check', str(path)], capture_output=True, text=True)
        if res.returncode != 0:
            first = (res.stderr.strip().splitlines() or ['syntax error'])
            report.error('Syntax', f'{path.relative_to(ROOT).as_posix()}: {first[-1]}')


LOADER = r"""
global.window = global;
const path = require('path');
const warns = [];
console.warn = (...a) => warns.push(a.join(' '));
const files = JSON.parse(process.env.CHE_FILES);
const owner = {};
let current = null;
for (const f of files) {
  // Wrap registerModule once core.js has defined it, to record each module's file.
  if (global.CHE && CHE.registerModule && !CHE.__wrapped) {
    const orig = CHE.registerModule;
    CHE.registerModule = function (m) { (owner[m.id] = owner[m.id] || []).push(current); orig(m); };
    CHE.__wrapped = true;
  }
  current = f;
  require(path.resolve(f));
}
process.stdout.write(JSON.stringify({
  modules: CHE.modules, frameworks: CHE.frameworks, abbreviations: CHE.abbreviations,
  history: CHE.history, owner, warns
}));
"""


def load_data(report, scripts):
    data_files = [s for s in scripts if s != 'js/app.js']
    env = dict(os.environ, CHE_FILES=json.dumps(data_files))
    res = subprocess.run(['node', '-e', LOADER], cwd=ROOT, env=env, capture_output=True, text=True, encoding='utf-8')
    if res.returncode != 0:
        report.error('Loading', 'data files failed to load in Node:\n    ' + res.stderr.strip().replace('\n', '\n    '))
        return None
    data = json.loads(res.stdout)
    for w in data['warns']:
        report.error('Loading', w)
    return data


# ---------- Helpers ----------

def text_of(item):
    return item if isinstance(item, str) else (item.get('text', '') if isinstance(item, dict) else '')


def walk_items(items):
    """Yield every item in a list, including nested options."""
    for item in items or []:
        yield item
        if isinstance(item, dict):
            yield from walk_items(item.get('options'))


def walk_strings(node, path='', skip=NON_CONTENT_KEYS):
    """Yield (path, string) for every readable string."""
    if isinstance(node, str):
        yield path, node
    elif isinstance(node, list):
        for i, x in enumerate(node):
            yield from walk_strings(x, f'{path}[{i}]', skip)
    elif isinstance(node, dict):
        for k, v in node.items():
            if k not in skip:
                yield from walk_strings(v, f'{path}.{k}' if path else k, skip)


def all_see(node):
    if isinstance(node, list):
        for x in node:
            yield from all_see(x)
    elif isinstance(node, dict):
        for k, v in node.items():
            if k == 'see' and isinstance(v, list):
                yield from v
            else:
                yield from all_see(v)


def sources(mod):
    """(label, source, is_shared) for the module, or its shared block and each part."""
    if mod.get('parts'):
        shared = {k: mod[k] for k in ('pc', 'associated') if k in mod}
        yield mod['id'] + ' (All features)', shared, True
        for p in mod['parts']:
            yield f"{mod['id']}/{p.get('id')}", p, False
    else:
        yield mod['id'], mod, False


def is_question(text):
    # A question, optionally followed by a parenthetical note: "Any NSAIDs (PUD)?" or "...? (tick X)"
    return bool(re.search(r'\?(\s*\([^)]*\))?\s*$', text))


# ---------- Checks ----------

def check_scripts(report, scripts):
    for s in scripts:
        if not (ROOT / s).exists():
            report.error('index.html', f'script not found: {s}')
    listed = set(scripts)
    for path in sorted((ROOT / 'js').rglob('*.js')):
        rel = path.relative_to(ROOT).as_posix()
        if rel not in listed:
            report.error('index.html', f'{rel} has no <script> tag')
    data = [s for s in scripts if s.startswith('js/data/')]
    if data and data[0] != 'js/data/core.js':
        report.error('index.html', 'js/data/core.js must be the first data script')
    if scripts and scripts[-1] != 'js/app.js':
        report.error('index.html', 'js/app.js must be the last script')


def check_modules(report, data):
    mods, fws, owner = data['modules'], data['frameworks'], data['owner']
    for mid, files in owner.items():
        if len(files) > 1:
            report.error('Modules', f'"{mid}" is registered in several files: {", ".join(files)}')
    for path in sorted(MODULE_DIR.glob('*.js')):
        rel = path.relative_to(ROOT).as_posix()
        ids = [mid for mid, files in owner.items() if rel in files]
        if len(ids) != 1:
            report.error('Modules', f'{rel} should register exactly one module (found {len(ids)})')
        elif ids[0] != path.stem:
            report.warn('Modules', f'{rel}: module id "{ids[0]}" does not match the file name')

    for mid, mod in mods.items():
        for field in ('title', 'summary', 'tags', 'related'):
            if not mod.get(field):
                report.error('Modules', f'{mid}: missing {field}')
        sub = (mod.get('subtitle') or '').lower()
        if sub and (sub == mod['title'].lower() or mod['title'].lower() in sub):
            report.warn('Library notes', f'{mid}: subtitle repeats the title')
        if mod.get('parts'):
            seen = set()
            for p in mod['parts']:
                if p.get('id') in seen:
                    report.error('Modules', f'{mid}: duplicate part id "{p.get("id")}"')
                seen.add(p.get('id'))
                for field in ('title', 'summary', 'differentials'):
                    if not p.get(field):
                        report.error('Modules', f'{mid}/{p.get("id")}: missing {field}')

        # Frameworks: notes, skip and sharedNotes must name real rows.
        pc = mod.get('pc') or {}
        fw_id = pc.get('framework')
        keys = [r['key'] for r in fws[fw_id]['rows']] if fw_id in fws else []
        if fw_id and fw_id not in fws:
            report.error('Frameworks', f'{mid}: unknown framework "{fw_id}"')
        for k in list((pc.get('notes') or {}).keys()) + list(pc.get('skip') or []):
            if fw_id in fws and k not in keys:
                report.error('Frameworks', f'{mid}: "{k}" is not a row of {fw_id}')
        for p in mod.get('parts') or []:
            ppc = p.get('pc') or {}
            if ppc.get('framework') and ppc['framework'] not in fws:
                report.error('Frameworks', f'{mid}/{p["id"]}: unknown framework "{ppc["framework"]}"')
            pkeys = [r['key'] for r in fws.get(ppc.get('framework'), {}).get('rows', [])]
            for k in (ppc.get('notes') or {}):
                if pkeys and k not in pkeys:
                    report.error('Frameworks', f'{mid}/{p["id"]}: "{k}" is not a row of {ppc["framework"]}')
            for k in (p.get('sharedNotes') or {}):
                if not fw_id:
                    report.error('Frameworks', f'{mid}/{p["id"]}: sharedNotes without a shared framework')
                elif k not in keys:
                    report.error('Frameworks', f'{mid}/{p["id"]}: sharedNotes "{k}" is not a row of {fw_id}')
                elif k in (pc.get('skip') or []):
                    report.error('Frameworks', f'{mid}/{p["id"]}: sharedNotes "{k}" is a skipped row')

        # Multi-system modules keep an "Awaiting hand-off" list in their header comment.
        if mod.get('multiSystem'):
            files = owner.get(mid) or []
            header = (ROOT / files[0]).read_text(encoding='utf-8').split('CHE.registerModule')[0] if files else ''
            if 'Awaiting hand-off' not in header:
                report.error('Multi-system', f'{mid}: flagged multiSystem but has no "Awaiting hand-off" comment')

    for fid, fw in fws.items():
        for r in fw.get('rows', []):
            for field in ('key', 'letter', 'label', 'prompt'):
                if not r.get(field):
                    report.error('Frameworks', f'{fid}: a row is missing {field}')


def check_links(report, data):
    mods = data['modules']
    for mid, mod in mods.items():
        refs = list(mod.get('related') or []) + list(all_see(mod))
        for ref in refs:
            if ref not in mods:
                report.error('Links', f'{mid}: unknown module "{ref}"')
            elif ref == mid:
                report.error('Links', f'{mid}: links to itself')
        # Reverse links (CLAUDE.md: add the reverse link in that module too).
        for ref in sorted(set(all_see(mod))):
            other = mods.get(ref)
            if other and mid not in (other.get('related') or []) and mid not in set(all_see(other)):
                report.warn('Reverse links', f'{mid} links to {ref}, but {ref} never links back')


def check_dx(report, data):
    for mid, mod in data['modules'].items():
        for label, src, shared in sources(mod):
            names = [d['name'].lower() for d in src.get('differentials') or []]
            dupes = {n for n in names if names.count(n) > 1}
            for n in sorted(dupes):
                report.warn('Differentials', f'{label}: duplicate differential "{n}"')
            pc = src.get('pc') or {}
            lists = [pc.get('prompts'), src.get('associated')] + list((pc.get('notes') or {}).values())
            ctx = [(names, label)]
            for items in lists:
                for item in walk_items(items):
                    for dx in (item.get('dx') or []) if isinstance(item, dict) else []:
                        if shared:
                            report.error('dx chips', f'{label}: shared block has a dx chip "{dx}" (move it to a feature)')
                        elif not any(n.startswith(dx.lower()) for n in names):
                            report.error('dx chips', f'{label}: "{dx}" matches no differential')
            for row, items in (src.get('sharedNotes') or {}).items():
                for item in walk_items(items):
                    for dx in (item.get('dx') or []) if isinstance(item, dict) else []:
                        if not any(n.startswith(dx.lower()) for n in names):
                            report.error('dx chips', f'{label} (sharedNotes.{row}): "{dx}" matches no differential')
            for d in src.get('differentials') or []:
                low = d['name'].lower()
                for bad, good in DIFFERENTIAL_NAMES.items():
                    if low.startswith(bad):
                        report.error('Canonical terms', f'{label}: differential "{d["name"]}" should be "{good}"')


def check_abbreviations(report, data):
    abbr = data['abbreviations']
    content = [data['history'], data['modules'], data['frameworks']]
    text = json.dumps(content, ensure_ascii=False)
    used = set()
    missing = set()
    for tok in ABBR_RE.findall(text):
        base = tok[:-1] if tok.endswith('s') else tok
        if tok in abbr:
            used.add(tok)
        elif base in abbr:
            used.add(base)
        else:
            missing.add(tok)
    for tok in sorted(missing):
        report.error('Abbreviations', f'"{tok}" is not in abbreviations.js')
    # Entries are used either as tokens above or as single-capital words (e.g. "PD" is caught;
    # lowercase-led entries such as "IgA" are matched directly).
    for key in abbr:
        if key not in used and not re.search(r'(?<![A-Za-z])' + re.escape(key) + r'(?![A-Za-z])', text):
            report.warn('Abbreviations', f'"{key}" is listed but not used in content')
    keys = list(abbr.keys())
    sort_key = str.lower
    if keys != sorted(keys, key=sort_key):
        for a, b in zip(keys, keys[1:]):
            if sort_key(a) > sort_key(b):
                report.error('Abbreviations', f'not alphabetical: "{a}" comes before "{b}"')

    # Headings stay spelled out.
    for mid, mod in data['modules'].items():
        heads = [('title', mod['title'])] + [(f'part {p["id"]}', p['title']) for p in mod.get('parts') or []]
        for src in [mod] + list(mod.get('parts') or []):
            heads += [('callout', c.get('title', '')) for c in src.get('callouts') or []]
        for where, h in heads:
            for tok in ABBR_RE.findall(h):
                report.warn('Headings', f'{mid} {where}: "{h}" uses the abbreviation {tok}')


def check_spelling_and_terms(report, data):
    content = {'history': data['history'], 'modules': data['modules'], 'frameworks': data['frameworks']}
    for path, s in walk_strings(content):
        in_aka = '.aka[' in path
        if not in_aka:
            for pat, fix in BRITISH:
                for m in re.finditer(pat, s, re.I):
                    report.error('American spelling', f'{path}: "{m.group(0)}" -> {fix}')
            for pat, fix in CANONICAL:
                if re.search(pat, s, re.I if 'SOB' not in pat else 0):
                    # The module title "Nausea and vomiting" is a heading, not content.
                    if path.endswith('.title'):
                        continue
                    report.error('Canonical terms', f'{path}: "{s}" -> use {fix}')
        if '(switch on ' in s:
            report.warn('Consistency', f'{path}: "(switch on ...)"; use "(tick ...)" to match the checkboxes')


def check_style(report, data):
    sr_groups = []
    for section in data['history'].get('acute', {}).get('sections', []):
        if section.get('id') == 'systems-review':
            for block in section.get('core', []):
                sr_groups += [g['title'] for g in block.get('groups', [])]

    for mid, mod in data['modules'].items():
        part_titles = {p['title'] for p in mod.get('parts') or []}
        for label, src, shared in sources(mod):
            pc = src.get('pc') or {}
            # Prompts and associated symptoms are direct questions to the patient.
            for key, items in (('prompts', pc.get('prompts')), ('associated', src.get('associated'))):
                for item in items or []:
                    t = text_of(item)
                    if t and not is_question(t):
                        report.warn('Question style', f'{label} {key}: "{t}" is not a question')
            # "(tick X)" must name a feature of this module.
            for _, s in walk_strings(src):
                for m in re.finditer(r'\((?:tick|switch on) ([^)]+)\)', s):
                    for name in re.split(r', | or (?=[A-Z])', m.group(1)):
                        # Feature names start with a capital; "(tick those features)" is prose.
                        if name[:1].isupper() and name not in part_titles:
                            report.error('Feature references', f'{label}: "(tick {m.group(1)})" names no feature "{name}"')
            for flag in src.get('redflags') or []:
                if ': ' not in flag:
                    report.warn('Red flags', f'{label}: "{flag}" is not "Finding: concern"')
            hist = src.get('history') or {}
            for slot in HISTORY_SLOTS:
                for q in hist.get(slot) or []:
                    if slot != 'sr' and not is_question(q):
                        report.warn('Question style', f'{label} {slot}: "{q}" is not a question')
            for q in hist.get('meds') or []:
                # Follow-ups ("Which laxatives have you tried?") are free-form; "Any X" needs a reason.
                first = q.split('?')[0] + '?'
                if first.startswith('Any ') and not re.search(r'\([^)]+\)\?$', first):
                    report.warn('Medication questions', f'{label}: "{q}" is not "Any X (reason)?"')
            order = []
            for q in hist.get('sr') or []:
                group = q.split(':')[0]
                if group not in sr_groups:
                    report.error('Systems review', f'{label}: "{q}" does not start with a systems review group')
                else:
                    order.append(sr_groups.index(group))
            if order != sorted(order):
                report.warn('Systems review', f'{label}: systems review items are out of system order')


def main():
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')  # Windows consoles default to a legacy codepage
    errors_only = '--errors' in sys.argv
    report = Report()
    scripts = script_paths()
    check_scripts(report, scripts)
    node_check(report)
    data = load_data(report, scripts)
    if data:
        check_modules(report, data)
        check_links(report, data)
        check_dx(report, data)
        check_abbreviations(report, data)
        check_spelling_and_terms(report, data)
        check_style(report, data)
    report.print(errors_only)
    n_err, n_warn = report.count('error'), report.count('warning')
    mods = len(data['modules']) if data else 0
    print(f'\n{mods} modules checked: {n_err} errors, {n_warn} warnings')
    sys.exit(1 if n_err else 0)


if __name__ == '__main__':
    main()
