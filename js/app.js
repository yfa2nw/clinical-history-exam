/*
 * App shell: hash routing, module composition and rendering.
 *
 * Routes:
 *   #/history/<mode>?m=id1,id2   history skeleton with the given library entries composed in
 *                                (mode = 'acute' | 'chronic'; ?m is optional). Acute entries
 *                                are presenting complaints, chronic entries are conditions.
 *   #/exam/<mode>?m=id           examination (one at a time, like chronic): mode = 'system'
 *                                composes it into the head-to-toe skeleton; mode = 'focused'
 *                                shows the focused examination's own pages
 *   &s=<sectionId>               the section page to show (first section if absent)
 *
 * Data lives on the global CHE object (js/data/*). The selected modules live
 * in the URL, so any composed history or examination can be bookmarked or shared.
 */
(function () {
  'use strict';

  // Each mode belongs to a top-level module (the main nav), with its own skeleton and library.
  const MODES = { acute: 'history', chronic: 'history', system: 'exam', focused: 'exam' };
  const DEFAULT_MODE = { history: 'acute', exam: 'system' };
  // Modes whose library is "choose one": a chronic history reviews one condition, and an
  // examination follows one system or body part. Acute histories can combine complaints.
  const CHOOSE_ONE = { chronic: true, system: true, focused: true };
  const THEME_KEY = 'che.theme';
  const SLOT_LABELS = {
    pmh: 'PMHx',
    meds: 'Medications'
  };
  const app = document.getElementById('app');

  // UI-only state (not in the URL).
  // shownParts: { moduleId: { partId: true } } for features switched on in a card.
  // Features start switched off; the user picks the ones the patient has.
  const ui = { query: '', tag: 'all', lastMode: null, shownParts: {} };

  /* ---------- Storage (fails soft in private mode / blocked storage) ---------- */

  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (e) {
        return fallback;
      }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* ignore */ }
    }
  };

  /* ---------- Helpers ---------- */

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function slug(str) {
    return String(str).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function ddxRowId(mod, name) {
    return 'ddx-' + mod.id + '-' + slug(name);
  }

  // The differential a dx tag refers to: a case-insensitive prefix match on the
  // module's own differentials, so 'Cystitis' finds 'Cystitis (lower UTI)'.
  function findDdx(mod, dxName) {
    const needle = dxName.toLowerCase();
    return (mod && mod.differentials || []).filter(function (d) {
      return d.name.toLowerCase().indexOf(needle) === 0;
    })[0];
  }

  function dxChips(dx, mod) {
    if (!dx || !dx.length) return '';
    return '<span class="dx-list">' + dx.map(function (name) {
      const match = findDdx(mod, name);
      return match
        ? '<button type="button" class="dx dx--link" data-action="dx" data-target="' + esc(ddxRowId(mod, match.name)) + '"' +
          ' title="Show in differentials">' + esc(name) + '</button>'
        : '<span class="dx">' + esc(name) + '</span>';
    }).join('') + '</span>';
  }

  // Links from an answer to other presenting complaints: a button that adds the
  // module, or a check mark once it is already part of the history. In other modes (Chronic
  // History, examinations) they open the complaint in Acute History instead.
  function seeChips(see) {
    if (!see || !see.length) return '';
    const state = current();
    const selected = state.selected;
    return '<span class="see-list">' + see.filter(function (id) { return CHE.modules[id]; }).map(function (id) {
      const title = esc(CHE.modules[id].title);
      if (state.modeId !== 'acute') {
        return '<a class="see" href="' + pageHash('acute', [id]) + '" title="Take an acute history for this">Acute history: ' + title + ' →</a>';
      }
      return selected.indexOf(id) !== -1
        ? '<span class="see is-on">✓ ' + title + '</span>'
        : '<button type="button" class="see" data-action="add" data-id="' + esc(id) + '" title="Add this presenting complaint">+ ' + title + '</button>';
    }).join('') + '</span>';
  }

  // Hormones behind an examination finding: "↑ Cortisol" or "↓ Thyroid hormone".
  function hormoneChips(hormones) {
    if (!hormones || !hormones.length) return '';
    return '<span class="hormone-list">' + hormones.map(function (h) {
      const dir = h.charAt(0) === '↓' ? 'down' : 'up';
      return '<span class="hormone hormone--' + dir + '" title="' + (dir === 'up' ? 'Elevated' : 'Lowered') + '">' +
        '<span class="hormone__dir">' + esc(h.charAt(0)) + '</span>' + esc(h.slice(1).trim()) + '</span>';
    }).join('') + '</span>';
  }

  // Items are strings, or { text, hormones, dx, see, options } — a question or finding, the
  // hormones behind a finding, the conditions it points to, related presenting complaints,
  // and possible responses.
  function list(items, cls, mod) {
    if (!items || !items.length) return '';
    return '<ul class="' + (cls || 'bullets') + '">' +
      items.map(function (item) {
        return typeof item === 'string'
          ? '<li>' + esc(item) + '</li>'
          : '<li>' + esc(item.text) + hormoneChips(item.hormones) + dxChips(item.dx, mod) + seeChips(item.see) +
            list(item.options, 'options', mod) + '</li>';
      }).join('') + '</ul>';
  }

  // Each mode has its own library: presenting complaints (acute), chronic conditions, or
  // examinations.
  function registry(modeId) {
    if (modeId === 'chronic') return CHE.conditions || {};
    if (modeId === 'focused') return CHE.focused || {};
    if (MODES[modeId] === 'exam') return CHE.exams || {};
    return CHE.modules || {};
  }

  // The skeleton for a mode: its sections and their general content.
  function skeleton(modeId) {
    return (MODES[modeId] === 'exam' ? CHE.exam : CHE.history)[modeId];
  }

  // Sections and frameworks the selected examination leaves out (`skip`). They keep their
  // place and title, marked "(skipped)", so the full structure stays visible.
  function isSkipped(id, active) {
    return active.some(function (e) { return (e.mod.skip || []).indexOf(id) !== -1; });
  }

  const SKIPPED = ' <span class="skipped">(skipped)</span>';

  function libraryEntries(modeId) {
    const reg = registry(modeId);
    return Object.keys(reg).map(function (id) { return reg[id]; })
      .sort(function (a, b) { return a.title.localeCompare(b.title); });
  }

  function allModules() {
    return libraryEntries('acute');
  }

  function allTags(modeId) {
    const tags = {};
    libraryEntries(modeId).forEach(function (m) { (m.tags || []).forEach(function (t) { tags[t] = true; }); });
    return Object.keys(tags).sort();
  }

  function resolveActive(modeId, selected) {
    return selected.map(function (id) { return { mod: registry(modeId)[id] }; });
  }

  // The content units of a module: the module itself, or each switched-on part.
  // A part gets a unique id and a combined title so differentials and
  // contributions stay attributed to it.
  function sources(mod) {
    if (!mod.parts) return [mod];
    const shown = ui.shownParts[mod.id] || {};
    return mod.parts.filter(function (p) { return shown[p.id]; }).map(function (p) {
      return Object.assign({}, p, { id: mod.id + '--' + p.id, title: mod.title + ' · ' + p.title, partTitle: p.title });
    });
  }

  function allSources(active) {
    return active.reduce(function (acc, e) { return acc.concat(sources(e.mod)); }, []);
  }

  /* ---------- URL state ---------- */

  function parseHash() {
    const raw = location.hash.replace(/^#\/?/, '');
    const qIndex = raw.indexOf('?');
    const path = qIndex === -1 ? raw : raw.slice(0, qIndex);
    const query = qIndex === -1 ? '' : raw.slice(qIndex + 1);
    const parts = path.split('/').filter(Boolean);
    const params = new URLSearchParams(query);
    const m = params.get('m') || '';
    const reg = registry(parts[1]);
    const selected = m.split(',').filter(function (id, i, arr) {
      return reg[id] && arr.indexOf(id) === i;
    });
    return {
      module: parts[0] || 'history',
      mode: parts[1],
      selected: CHOOSE_ONE[parts[1]] ? selected.slice(0, 1) : selected,
      section: params.get('s') || null
    };
  }

  // Each section is its own page: ?s=<sectionId> (first section if absent).
  function pageHash(modeId, selected, sectionId) {
    const query = [];
    if (selected.length) query.push('m=' + selected.join(','));
    if (sectionId) query.push('s=' + sectionId);
    return '#/' + MODES[modeId] + '/' + modeId + (query.length ? '?' + query.join('&') : '');
  }

  // The section to show: the one named in the URL if it is shown in this mode, else the first.
  function currentSection(sections, sectionId) {
    return sections.filter(function (s) { return s.id === sectionId; })[0] || sections[0];
  }

  function current() {
    const state = parseHash();
    return { modeId: state.mode, selected: state.selected, section: state.section };
  }

  // Changing the selection keeps the reader on the same page.
  function setSelected(selected) {
    const state = current();
    location.hash = pageHash(state.modeId, selected, state.section);
  }

  function goToSection(sectionId) {
    const state = current();
    location.hash = pageHash(state.modeId, state.selected, sectionId);
  }

  /* ---------- Block renderers (skeleton core content) ---------- */

  function blockTitle(block) {
    return block.title ? '<h4 class="block__title">' + esc(block.title) + '</h4>' : '';
  }

  // `extra` is optional pre-rendered HTML per row key, appended under the row's own notes
  // (used by shared frameworks to show answers contributed by ticked features).
  // `skip` lists row keys that don't apply to this complaint.
  function renderFramework(id, notes, mod, extra, skip) {
    const fw = CHE.frameworks[id];
    if (!fw) return '';
    let group = null;
    // Untitled frameworks (the chronic sections) are named by their section heading.
    return '<div class="framework">' + (fw.title ? '<p class="framework__name">' + esc(fw.title) + '</p>' : '') +
      fw.rows.filter(function (row) { return !skip || skip.indexOf(row.key) === -1; }).map(function (row) {
        const rowNotes = notes && notes[row.key];
        // Rows may carry a `group`; a heading opens each new group.
        const heading = row.group && row.group !== group ? '<p class="framework__group">' + esc(row.group) + '</p>' : '';
        group = row.group || null;
        // Question leads; the module's responses sit underneath as side notes.
        return heading + '<div class="framework__row">' +
          '<span class="framework__letter">' + esc(row.letter) + '</span>' +
          '<div class="framework__body">' +
            '<p class="framework__label">' + esc(row.label) + '</p>' +
            '<p class="framework__q">' + esc(row.prompt) + '</p>' +
            list(rowNotes, 'options', mod) +
            ((extra && extra[row.key]) || '') +
          '</div></div>';
      }).join('') + '</div>';
  }

  const blockRenderers = {
    list: function (block) {
      return '<div class="block">' + blockTitle(block) + list(block.items) + '</div>';
    },

    groups: function (block) {
      return '<div class="block">' + blockTitle(block) + '<div class="groups">' +
        block.groups.map(function (group) {
          return '<div class="group"><p class="group__title">' + esc(group.title) + '</p>' +
            list(group.items) + '</div>';
        }).join('') + '</div></div>';
    },

    mnemonic: function (block) {
      return '<div class="block">' + blockTitle(block) + '<dl class="mnemonic">' +
        block.letters.map(function (row) {
          return '<div class="mnemonic__row">' +
            '<dt class="mnemonic__letter">' + esc(row[0]) + '</dt>' +
            '<dd><strong>' + esc(row[1]) + '</strong>' +
            (row[2] ? '<span class="mnemonic__detail">' + esc(row[2]) + '</span>' : '') +
            '</dd></div>';
        }).join('') + '</dl></div>';
    },

    framework: function (block, active) {
      if (isSkipped(block.id, active)) {
        const fw = CHE.frameworks[block.id] || {};
        return '<div class="block"><div class="framework"><p class="framework__name">' + esc(fw.title || '') + SKIPPED + '</p></div></div>';
      }
      return '<div class="block">' + renderFramework(block.id, null, null, conditionNotesHtml(block.id, active)) + '</div>';
    },

    callout: function (block) {
      return renderCallout(block.variant, block.title, '<p>' + esc(block.text) + '</p>');
    },

    redflags: function (block) {
      return renderCallout('redflag', block.title, list(block.items));
    },

    // Focused examination steps: technique, what to say, what to look for, what it means.
    steps: function (block, active) {
      const mod = active[0] && active[0].mod;
      const part = function (label, html) {
        return '<div class="step__part"><p class="step__label">' + label + '</p>' + html + '</div>';
      };
      return '<div class="block">' + blockTitle(block) + '<ol class="steps">' +
        block.items.map(function (s) {
          return '<li class="step"><p class="step__title">' + esc(s.title) + '</p>' +
            part('How', '<p>' + esc(s.how) + '</p>') +
            (s.say ? part('Say', '<blockquote class="step__say">' + esc(s.say) + '</blockquote>') : '') +
            (s.lookFor ? part('Look for', '<p>' + esc(s.lookFor) + '</p>') : '') +
            (s.findings ? part('What it means', list(s.findings, 'options', mod)) : '') +
            '</li>';
        }).join('') + '</ol></div>';
    }
  };

  function renderCallout(variant, title, bodyHtml) {
    const labels = { tip: 'Tip', redflag: 'Red flags', note: 'Note' };
    variant = variant || 'note';
    return '<aside class="callout callout--' + esc(variant) + '">' +
      '<p class="callout__title">' + esc(title || labels[variant]) + '</p>' + bodyHtml + '</aside>';
  }

  // `active` (the selected library entries) lets skeleton frameworks take condition notes.
  function renderBlock(block, active) {
    const fn = blockRenderers[block.type];
    if (!fn) {
      console.warn('Unknown block type:', block.type);
      return '';
    }
    return fn(block, active || []);
  }

  // What the selected library entry (a chronic condition or an examination) adds under a
  // skeleton framework's rows (`frameworkNotes`).
  function conditionNotesHtml(fwId, active) {
    const extra = {};
    (active || []).forEach(function (e) {
      const notes = e.mod.frameworkNotes && e.mod.frameworkNotes[fwId];
      Object.keys(notes || {}).forEach(function (key) {
        extra[key] = (extra[key] || '') + list(notes[key], 'options', e.mod);
      });
    });
    return extra;
  }

  /* ---------- Module renderers ---------- */

  function renderTags(mod) {
    return (mod.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('');
  }

  // Framework / prompts / associated symptoms for one source (module or part).
  // Answers that ticked features add to the module's shared framework rows (`sharedNotes`),
  // labeled with the feature name; their dx chips link to that feature's differentials.
  function sharedNotesHtml(srcs) {
    const extra = {};
    // "Hirsutism: gradually, since puberty" — lowercase the answer's first letter unless
    // it starts an abbreviation (e.g. "PE").
    const label = function (prefix, text) {
      const lower = /^[A-Z][a-z]/.test(text) ? text.charAt(0).toLowerCase() + text.slice(1) : text;
      return prefix + ': ' + lower;
    };
    srcs.forEach(function (s) {
      Object.keys(s.sharedNotes || {}).forEach(function (key) {
        const labeled = s.sharedNotes[key].map(function (item) {
          return typeof item === 'string'
            ? label(s.partTitle, item)
            : Object.assign({}, item, { text: label(s.partTitle, item.text) });
        });
        extra[key] = (extra[key] || '') + list(labeled, 'options', s);
      });
    });
    return extra;
  }

  function renderPcBody(src, extra) {
    const pc = src.pc || {};
    return (pc.framework ? renderFramework(pc.framework, pc.notes, src, extra, pc.skip) : '') +
      (pc.prompts ? '<div class="block">' + list(pc.prompts, null, src) + '</div>' : '') +
      (src.associated ? '<div class="block"><h4 class="block__title">Associated symptoms</h4>' + list(src.associated, null, src) + '</div>' : '') +
      (src.callouts || []).map(function (c) { return renderCallout(c.variant, c.title, '<p>' + esc(c.text) + '</p>'); }).join('');
  }

  function renderPartToggles(mod) {
    const shown = ui.shownParts[mod.id] || {};
    return '<div class="part-toggles" role="group" aria-label="Features the patient has">' +
      '<span class="part-toggles__label">Select the features the patient has:</span>' + mod.parts.map(function (p) {
        const on = !!shown[p.id];
        return '<button type="button" class="feature' + (on ? ' is-on' : '') + '" data-action="part" data-id="' + esc(mod.id) +
          '" data-part="' + esc(p.id) + '" aria-pressed="' + on + '">' +
          '<span class="feature__box" aria-hidden="true">' + (on ? '✓' : '') + '</span>' + esc(p.title) + '</button>';
      }).join('') + '</div>';
  }

  // Full presenting-complaint card, used by the 'pc' slot.
  function renderPcCard(entry, activeIds) {
    const mod = entry.mod;
    const srcs = sources(mod);
    const related = (mod.related || []).filter(function (id) {
      return CHE.modules[id] && activeIds.indexOf(id) === -1;
    });
    const redflags = srcs.reduce(function (acc, s) {
      return acc.concat((s.redflags || []).filter(function (f) { return acc.indexOf(f) === -1; }));
    }, []);

    // A feature-based module may carry its own pc/associated: questions shared by all features.
    const shared = mod.parts && (mod.pc || mod.associated)
      ? '<section class="part"><h4 class="part__title">All features</h4>' + renderPcBody(mod, sharedNotesHtml(srcs)) + '</section>'
      : '';

    const body = mod.parts
      ? renderPartToggles(mod) + shared + (srcs.length ? srcs.map(function (s) {
          return '<section class="part"><h4 class="part__title">' + esc(s.partTitle) + '</h4>' +
            (s.summary ? '<p class="part__summary">' + esc(s.summary) + '</p>' : '') +
            renderPcBody(s) + '</section>';
        }).join('') : '<p class="slot-empty">No features selected yet. Tick the ones the patient has above to bring in their questions.</p>')
      : renderPcBody(mod);

    return '<details class="card" data-key="card-' + esc(mod.id) + '" open>' +
      '<summary class="card__head">' +
        '<span class="card__title">' + esc(mod.title) + '</span>' +
        '<span class="card__tags">' + renderTags(mod) + '</span>' +
      '</summary>' +
      '<div class="card__body">' +
        (mod.summary ? '<p class="card__summary">' + esc(mod.summary) + '</p>' : '') +
        body +
        (redflags.length ? renderCallout('redflag', null, list(redflags)) : '') +
        (related.length ? '<div class="related"><span>Consider also:</span>' + related.map(function (id) {
          return '<button type="button" class="chip chip--add" data-action="add" data-id="' + esc(id) + '">+ ' +
            esc(CHE.modules[id].title) + '</button>';
        }).join('') + '</div>' : '') +
        (mod.ref ? '<p class="ref">Ref: ' + esc(mod.ref) + '</p>' : '') +
      '</div>' +
      '</details>';
  }

  // Module contributions to a non-PC stage (pmh, meds, fhx, shx, sr).
  function renderSlot(slot, active, showLabel) {
    const srcs = allSources(active).filter(function (s) {
      return s.history && s.history[slot] && s.history[slot].length;
    });
    if (!srcs.length) return '';
    return '<div class="slot">' +
      '<p class="slot__title">' + (showLabel ? esc(SLOT_LABELS[slot]) + ': ' : '') + 'from selected complaints</p>' +
      '<div class="contribs">' + srcs.map(function (s) {
        return '<div class="contrib"><p class="contrib__from">' + esc(s.title) + '</p>' +
          list(s.history[slot]) + '</div>';
      }).join('') + '</div></div>';
  }

  // A chronic condition's or examination's own content for this section, apart from the rows.
  function renderEntrySlot(section, active, modeId) {
    if (!active.length) {
      return '<div class="slot-empty">' + esc(MODE_TEXT[modeId].emptySlot) + '</div>';
    }
    return active.map(function (e) {
      const blocks = (e.mod.sections || {})[section.id] || [];
      if (!blocks.length) return '';
      return '<section class="condition"><h4 class="condition__title">' + esc(e.mod.title) + '</h4>' +
        blocks.map(function (b) { return renderBlock(b); }).join('') + '</section>';
    }).join('');
  }

  function renderStageSlots(section, active, modeId) {
    const slots = section.slots || [];
    if (slots.indexOf('condition') !== -1 || slots.indexOf('exam') !== -1) return renderEntrySlot(section, active, modeId);
    if (slots.indexOf('pc') !== -1) {
      if (!active.length) {
        return '<div class="slot-empty">' + esc(MODE_TEXT[modeId].emptySlot) + '</div>';
      }
      const activeIds = active.map(function (e) { return e.mod.id; });
      return '<div class="cards">' + active.map(function (e) { return renderPcCard(e, activeIds); }).join('') + '</div>';
    }
    return slots.map(function (slot) { return renderSlot(slot, active, slots.length > 1); }).join('');
  }

  /* ---------- Views ---------- */

  // Tabs for the modes of the current module (Acute / Chronic History, or the examinations).
  function renderModeTabs(activeModeId, selected) {
    return '<div class="mode-tabs" role="tablist" aria-label="Type">' +
      Object.keys(MODES).filter(function (id) { return MODES[id] === MODES[activeModeId]; }).map(function (id) {
        const mode = skeleton(id);
        if (!mode) return '';
        const active = id === activeModeId;
        // Each mode has its own library, so the selection doesn't carry across.
        return '<a role="tab" class="mode-tab' + (active ? ' is-active' : '') + '"' +
          ' aria-selected="' + active + '" href="' + pageHash(id, active ? selected : []) + '">' + esc(mode.title) + '</a>';
      }).join('') + '</div>';
  }

  const MODE_TEXT = {
    acute: {
      title: 'Presenting complaints', placeholder: 'Search, e.g. blood, colic, nocturia',
      none: 'No presenting complaints', core: 'General questions', clear: 'Clear all',
      emptySlot: 'Add a presenting complaint from the library to bring in its questions.'
    },
    chronic: {
      title: 'Chronic conditions', hint: 'Choose one', placeholder: 'Search, e.g. kidney, dialysis',
      none: 'No chronic condition', core: 'General questions', clear: 'Clear',
      emptySlot: 'Add a chronic condition from the library to bring in its questions.'
    },
    system: {
      title: 'Examinations', hint: 'Choose one', placeholder: 'Search, e.g. cardiovascular, abdomen',
      none: 'No examination', core: 'General steps', clear: 'Clear', emptyLibrary: 'No examinations yet',
      emptySlot: 'Add an examination from the library to bring in what to look for.'
    },
    focused: {
      title: 'Focused examinations', hint: 'Choose one', placeholder: 'Search, e.g. thyroid, neck',
      none: 'No focused examination', core: 'Steps', clear: 'Clear', emptyLibrary: 'No focused examinations yet',
      emptyBar: 'Choose one from the library.',
      emptySlot: 'Choose a focused examination from the library to see its steps.'
    }
  };

  function renderLibrary(modeId) {
    const text = MODE_TEXT[modeId];
    return '<div class="library">' +
      '<p class="library__title">' + esc(text.title) + '</p>' +
      (text.hint ? '<p class="library__hint">' + esc(text.hint) + '</p>' : '') +
      '<input type="search" id="module-search" class="search" placeholder="' + esc(text.placeholder) + '" ' +
        'value="' + esc(ui.query) + '" aria-label="Search ' + esc(text.title.toLowerCase()) + '">' +
      '<div class="tag-filter" role="group" aria-label="Filter by tag">' +
        ['all'].concat(allTags(modeId)).map(function (t) {
          return '<button type="button" class="chip' + (ui.tag === t ? ' is-active' : '') + '" data-action="tag" data-tag="' +
            esc(t) + '">' + esc(t === 'all' ? 'All' : t) + '</button>';
        }).join('') +
      '</div>' +
      '<ul class="module-list" id="module-list"></ul>' +
      '</div>';
  }

  // The short note under each library entry: the module's own subtitle, else the feature
  // names that don't just repeat the title ("Leg swelling" under Swelling → "Leg").
  // Search terms (aka) are for search only.
  function libraryNote(m) {
    if (m.subtitle) return m.subtitle;
    const title = m.title.toLowerCase();
    return (m.parts || []).map(function (p) {
      const t = p.title.toLowerCase();
      if (title.indexOf(t) !== -1) return '';
      const trimmed = t.indexOf(title) !== -1 ? p.title.replace(new RegExp('\\s*' + m.title + '\\s*', 'i'), ' ').trim() : p.title;
      return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
    }).filter(Boolean).join(' · ');
  }

  function renderModuleList() {
    const el = document.getElementById('module-list');
    if (!el) return;
    const state = current();
    const selected = state.selected;
    const q = ui.query.trim().toLowerCase();

    const mods = libraryEntries(state.modeId).filter(function (m) {
      if (ui.tag !== 'all' && (m.tags || []).indexOf(ui.tag) === -1) return false;
      if (!q) return true;
      const partTitles = (m.parts || []).map(function (p) { return p.title; });
      return [m.title].concat(m.aka || [], m.tags || [], partTitles).join(' ').toLowerCase().indexOf(q) !== -1;
    });

    el.innerHTML = mods.length ? mods.map(function (m) {
      const on = selected.indexOf(m.id) !== -1;
      return '<li><button type="button" class="module' + (on ? ' is-selected' : '') + '"' +
        ' data-action="toggle" data-id="' + esc(m.id) + '" aria-pressed="' + on + '">' +
        '<span class="module__title">' + esc(m.title) + '</span>' +
        (libraryNote(m) ? '<span class="module__aka">' + esc(libraryNote(m)) + '</span>' : '') +
        '<span class="module__state" aria-hidden="true">' + (on ? '✓' : '+') + '</span>' +
        '</button></li>';
    }).join('') : '<li class="module-list__empty">' +
      esc(libraryEntries(state.modeId).length ? 'No matches' : MODE_TEXT[state.modeId].emptyLibrary || 'No matches') + '</li>';
  }

  function renderActiveBar(active, modeId) {
    const text = MODE_TEXT[modeId];
    if (!active.length) {
      return '<div class="active-bar is-empty">' + esc(text.none) + ' selected. ' +
        esc(text.emptyBar || 'Showing the ' + text.core.toLowerCase() + '.') + '</div>';
    }
    return '<div class="active-bar">' +
      '<span class="active-bar__label">Composing:</span>' +
      active.map(function (e) {
        return '<span class="chip chip--active">' + esc(e.mod.title) +
          '<button type="button" class="chip__x" data-action="remove" data-id="' + esc(e.mod.id) + '" aria-label="Remove ' +
          esc(e.mod.title) + '">×</button></span>';
      }).join('') +
      '<button type="button" class="text-btn" data-action="clear">' + esc(text.clear) + '</button>' +
      '</div>';
  }

  // Page tabs: one per section, the current one highlighted.
  function renderStageNav(sections, section, active) {
    return '<nav class="stage-nav" aria-label="Sections"><ol>' +
      sections.map(function (s, i) {
        const on = s.id === section.id;
        return '<li><button type="button" class="' + (on ? 'is-current' : '') + '" data-action="page" data-section="' + esc(s.id) + '"' +
          (on ? ' aria-current="page"' : '') + '>' +
          '<span class="stage-nav__num">' + (i + 1) + '</span>' + esc(s.title) + (isSkipped(s.id, active) ? SKIPPED : '') + '</button></li>';
      }).join('') + '</ol></nav>';
  }

  function renderPager(sections, section, active) {
    const i = sections.indexOf(section);
    const prev = sections[i - 1];
    const next = sections[i + 1];
    const link = function (s, n, dir) {
      return '<button type="button" class="pager__link pager__link--' + dir + '" data-action="page" data-section="' + esc(s.id) + '">' +
        '<small>' + (dir === 'prev' ? '← Previous' : 'Next →') + '</small>' +
        '<span><span class="stage-nav__num">' + n + '</span> ' + esc(s.title) + (isSkipped(s.id, active) ? SKIPPED : '') + '</span></button>';
    };
    return '<nav class="pager" aria-label="Previous and next section">' +
      (prev ? link(prev, i, 'prev') : '<span></span>') +
      (next ? link(next, i + 2, 'next') : '<span></span>') +
      '</nav>';
  }

  function renderStage(section, index, active, modeId) {
    const skipped = isSkipped(section.id, active);
    return '<section class="stage" id="stage-' + esc(section.id) + '">' +
      '<header class="stage__head">' +
        '<span class="stage__num">' + (index + 1) + '</span>' +
        '<div><h2 class="stage__title">' + esc(section.title) + (skipped ? SKIPPED : '') + '</h2>' +
        (section.summary ? '<p class="stage__summary">' + esc(section.summary) + '</p>' : '') +
        (section.ref ? '<p class="ref">Ref: ' + esc(section.ref) + '</p>' : '') +
        '</div>' +
      '</header>' +
      (skipped
        ? '<p class="slot-empty">' + esc(active[0].mod.title) + ' leaves this section out.</p></section>'
        : renderStageBody(section, active, modeId));
  }

  function renderStageBody(section, active, modeId) {
    return (section.core && section.core.length
        ? '<details class="core" data-key="core-' + esc(section.id) + '" open><summary>' + esc(MODE_TEXT[modeId].core) + '</summary>' +
          section.core.map(function (b) { return renderBlock(b, active); }).join('') +
          '</details>'
        : '') +
      renderStageSlots(section, active, modeId) +
      '</section>';
  }

  function renderDifferentials(active) {
    const srcs = allSources(active).filter(function (s) { return s.differentials && s.differentials.length; });
    if (!srcs.length) return '';
    // A side note to the questions: collapsed until opened or a dx chip is clicked.
    return '<details class="ddx" id="ddx" data-key="ddx">' +
      '<summary class="ddx__title">Differentials <span class="ddx__hint">side notes, by response</span></summary>' +
      '<div class="ddx__grid">' + srcs.map(function (s) {
        return '<div class="ddx__card"><p class="contrib__from">' + esc(s.title) + '</p><dl>' +
          s.differentials.map(function (d) {
            return '<div class="ddx__row" id="' + esc(ddxRowId(s, d.name)) + '"><dt>' + esc(d.name) + '</dt><dd>' + esc(d.clues) + '</dd></div>';
          }).join('') + '</dl></div>';
      }).join('') + '</div></details>';
  }

  // The shell (tabs, library) is built once per mode; selection changes only
  // re-render the flow, so the library keeps its scroll position and search focus.
  // Used for both history taking and examination.
  function renderGuide(modeId, selected, sectionId) {
    const mode = skeleton(modeId);
    const active = resolveActive(modeId, selected);
    // A focused examination, or a system examination that doesn't fit the head-to-toe
    // skeleton (e.g. neurologic), brings its own pages (a list); otherwise the skeleton's sections.
    const own = active.length && Array.isArray(active[0].mod.sections) ? active[0].mod.sections : null;
    const sections = own || mode.sections;
    const section = currentSection(sections, sectionId);

    let shell = app.querySelector('.history');
    if (!shell || shell.dataset.mode !== modeId) {
      // A tag filter from the other library may not exist in this one.
      if (allTags(modeId).indexOf(ui.tag) === -1) ui.tag = 'all';
      app.innerHTML =
        '<div class="history" data-mode="' + esc(modeId) + '">' +
          '<div class="history__top"><div class="history__tabs"></div>' +
            '<p class="history__desc">' + esc(mode.description) + '</p></div>' +
          '<div class="layout">' +
            '<aside class="sidebar">' + renderLibrary(modeId) + '</aside>' +
            '<div class="flow"></div>' +
          '</div>' +
        '</div>';
      shell = app.querySelector('.history');
    }

    shell.querySelector('.history__tabs').innerHTML = renderModeTabs(modeId, selected);
    renderFlow(shell.querySelector('.flow'), mode, sections, active, section);
    renderModuleList();
    document.title = section.title + ' · ' + mode.title + ' · Clinical History & Exam';
  }

  function renderFlow(flow, mode, sections, active, section) {
    const samePage = flow.dataset.section === section.id;
    flow.dataset.section = section.id;

    // Remember which panels the user opened or collapsed.
    const openState = {};
    flow.querySelectorAll('details[data-key]').forEach(function (d) { openState[d.dataset.key] = d.open; });

    // On the same page, keep the reader's place when content above them changes.
    let anchor = null;
    if (samePage && window.scrollY > 0) {
      const stage = flow.querySelector('.stage');
      if (stage) anchor = { top: stage.getBoundingClientRect().top };
    }

    flow.innerHTML =
      // One sticky header: the complaint bar and the page tabs stay together.
      '<div class="flow-head">' + renderActiveBar(active, mode.id) + renderStageNav(sections, section, active) + '</div>' +
      renderStage(section, sections.indexOf(section), active, mode.id) +
      renderPager(sections, section, active) +
      renderDifferentials(active);

    flow.querySelectorAll('details[data-key]').forEach(function (d) {
      if (d.dataset.key in openState) d.open = openState[d.dataset.key];
    });

    // Scroll the tab strip sideways so the current page's tab is visible. Re-run once web
    // fonts load, since they change the tab widths.
    const revealTab = function () {
      const strip = flow.querySelector('.stage-nav ol');
      const tab = flow.querySelector('.stage-nav .is-current');
      if (strip && tab) strip.scrollLeft = Math.max(0, tab.parentNode.offsetLeft - strip.offsetLeft - 24);
    };
    revealTab();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(revealTab);

    if (anchor) {
      const el = flow.querySelector('.stage');
      if (el) window.scrollBy(0, el.getBoundingClientRect().top - anchor.top);
    } else if (!samePage) {
      // New page: if the reader had scrolled past the top of the text page, bring it back into view.
      const pageTop = flow.getBoundingClientRect().top + window.scrollY - document.querySelector('.site-header').offsetHeight;
      if (window.scrollY > pageTop) window.scrollTo(0, pageTop);
    }
  }

  /* ---------- Router ---------- */

  function route() {
    const state = parseHash();

    // An unknown module or mode goes to the module's default mode (History Taking if unknown).
    if (MODES[state.mode] !== state.module) {
      const fallback = DEFAULT_MODE[state.module] || DEFAULT_MODE.history;
      return location.replace(pageHash(fallback, MODES[state.mode] ? [] : state.selected));
    }

    document.querySelectorAll('.main-nav__link').forEach(function (a) {
      a.classList.toggle('is-active', a.dataset.module === state.module);
    });

    // Keep scroll position when only the module selection changes.
    if (ui.lastMode !== state.mode) window.scrollTo(0, 0);
    ui.lastMode = state.mode;
    renderGuide(state.mode, state.selected, state.section);
  }

  /* ---------- Events ---------- */

  app.addEventListener('click', function (e) {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const selected = current().selected;
    const id = el.dataset.id;

    switch (el.dataset.action) {
      case 'toggle':
        if (CHOOSE_ONE[current().modeId]) {
          // Choose one: picking an entry replaces the current one.
          setSelected(selected[0] === id ? [] : [id]);
          break;
        }
        setSelected(selected.indexOf(id) === -1
          ? selected.concat(id)
          : selected.filter(function (s) { return s !== id; }));
        break;
      case 'add':
        if (selected.indexOf(id) === -1) setSelected(selected.concat(id));
        break;
      case 'remove':
        setSelected(selected.filter(function (s) { return s !== id; }));
        break;
      case 'clear':
        setSelected([]);
        break;
      case 'part': {
        const shown = ui.shownParts[id] = ui.shownParts[id] || {};
        shown[el.dataset.part] = !shown[el.dataset.part];
        route();
        break;
      }
      case 'tag':
        ui.tag = el.dataset.tag;
        app.querySelectorAll('[data-action="tag"]').forEach(function (b) {
          b.classList.toggle('is-active', b.dataset.tag === ui.tag);
        });
        renderModuleList();
        break;
      case 'page':
        goToSection(el.dataset.section);
        break;
      case 'dx': {
        const row = document.getElementById(el.dataset.target);
        if (!row) break;
        document.getElementById('ddx').open = true;
        row.scrollIntoView({ behavior: 'smooth', block: 'center' });
        row.classList.remove('is-flash');
        void row.offsetWidth; // restart the animation on repeat clicks
        row.classList.add('is-flash');
        break;
      }
    }
  });

  app.addEventListener('input', function (e) {
    if (e.target.id !== 'module-search') return;
    ui.query = e.target.value;
    renderModuleList();
  });

  window.addEventListener('hashchange', route);

  /* ---------- Abbreviation search ---------- */

  const abbrDialog = document.getElementById('abbr-dialog');
  const abbrSearch = document.getElementById('abbr-search');

  // Matches on the abbreviation or its meaning; abbreviations that start with
  // the query come first.
  function renderAbbreviations() {
    const all = CHE.abbreviations || {};
    const q = abbrSearch.value.trim().toLowerCase();
    const keys = Object.keys(all).filter(function (k) {
      return !q || k.toLowerCase().indexOf(q) !== -1 || all[k].toLowerCase().indexOf(q) !== -1;
    }).sort(function (a, b) {
      const rank = function (k) { return q && k.toLowerCase().indexOf(q) === 0 ? 0 : 1; };
      return rank(a) - rank(b) || a.localeCompare(b, undefined, { sensitivity: 'base' });
    });

    document.getElementById('abbr-count').textContent =
      keys.length + (keys.length === 1 ? ' abbreviation' : ' abbreviations');
    document.getElementById('abbr-list').innerHTML = keys.length
      ? keys.map(function (k) {
          return '<div class="abbr__row"><dt>' + esc(k) + '</dt><dd>' + esc(all[k]) + '</dd></div>';
        }).join('')
      : '<p class="abbr__empty">No matches</p>';
  }

  document.getElementById('abbr-open').addEventListener('click', function () {
    renderAbbreviations();
    abbrDialog.showModal();
    abbrSearch.select();
  });
  document.getElementById('abbr-close').addEventListener('click', function () { abbrDialog.close(); });
  abbrSearch.addEventListener('input', renderAbbreviations);
  // Close on a click on the backdrop (outside the dialog box).
  abbrDialog.addEventListener('click', function (e) {
    if (e.target === abbrDialog) abbrDialog.close();
  });

  /* ---------- Theme ---------- */

  const savedTheme = store.get(THEME_KEY, null);
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;

  document.getElementById('theme-toggle').addEventListener('click', function () {
    const root = document.documentElement;
    const now = root.dataset.theme ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = now === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    store.set(THEME_KEY, next);
  });

  /* ---------- Data sanity checks (dev aid) ---------- */

  allModules().concat(libraryEntries('chronic'), libraryEntries('system'), libraryEntries('focused')).forEach(function (m) {
    const refs = (m.related || []).slice();
    // Collect `see` links from every item, however deeply nested.
    (function walk(node) {
      if (Array.isArray(node)) return node.forEach(walk);
      if (node && typeof node === 'object') {
        if (Array.isArray(node.see)) refs.push.apply(refs, node.see);
        Object.keys(node).forEach(function (k) { if (k !== 'see') walk(node[k]); });
      }
    })(m);
    refs.forEach(function (id) {
      if (!CHE.modules[id]) console.warn('Module "' + m.id + '" references unknown module "' + id + '"');
    });
  });

  // Every abbreviation in content must be in js/data/abbreviations.js (see CLAUDE.md).
  const abbrevs = CHE.abbreviations || {};
  const contentText = JSON.stringify([CHE.history, CHE.exam, CHE.modules, CHE.conditions, CHE.exams, CHE.focused, CHE.frameworks]);
  const missing = {};
  // Names with two capitals that are not abbreviations (keep in step with validate.py).
  const notAbbreviations = { McBurney: true, II: true, III: true, VI: true, VII: true, VIII: true, IX: true, XI: true, XII: true };
  // A trailing "-1" style suffix is part of the abbreviation (e.g. GLP-1).
  (contentText.match(/\b[A-Za-z]*[A-Z][A-Za-z0-9/]*[A-Z][A-Za-z0-9]*(?:-\d+)?\b/g) || []).forEach(function (token) {
    if (notAbbreviations[token]) return;
    const base = token.replace(/s$/, '');
    if (!abbrevs[token] && !abbrevs[base]) missing[token] = true;
  });
  if (Object.keys(missing).length) console.warn('Abbreviations missing from abbreviations.js:', Object.keys(missing).join(', '));

  route();
})();
