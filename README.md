# Clinical History & Exam

A structured guide to clinical history-taking and physical examination, based on *Talley & O'Connor's Clinical Examination*. For educational use only.

- **History Taking**
  - **Acute History** composes a history around one or more presenting complaints.
  - **Chronic History** reviews one known condition.
- **Physical Examination**
  - **System Examination** adds what to look for at each step of a head-to-toe examination.
  - **Focused Examination** examines one body part in depth: technique, what to say, what to look for and what it means.
  - **Practice mode** lets you tick off steps, time yourself and hide the details to test your recall.

It is a static site: plain HTML, CSS and JavaScript, with no build step and no dependencies.

## Contents

- [Running it](#running-it)
- [How it is organized](#how-it-is-organized)
- [Adding content](#adding-content)
  - [A presenting complaint (Acute History)](#a-presenting-complaint-acute-history)
  - [A chronic condition (Chronic History)](#a-chronic-condition-chronic-history)
  - [A system examination](#a-system-examination)
  - [A focused examination](#a-focused-examination)
- [Frameworks](#frameworks)
- [Writing consistently](#writing-consistently)
- [Canonical order](#canonical-order)
- [Checking your work](#checking-your-work)

## Running it

Open `index.html` in a browser. Everything loads from local files, so no server is needed.

If you prefer a server (e.g. to test on a phone on the same network):

```sh
python -m http.server
```

Then open <http://localhost:8000>. Every page has its own URL (e.g. `#/history/acute?m=headache&s=pmh-meds-allergies`), so a composed history or an examination page can be bookmarked or shared.

## How it is organized

| Path | What it holds |
| --- | --- |
| `index.html` | Page shell and the list of scripts. **Every new data file needs a `<script>` line here.** |
| `js/data/core.js` | Registries, data format docs, and the shared history frameworks |
| `js/data/abbreviations.js` | Every abbreviation used in content |
| `js/data/history-acute.js` | Acute History skeleton: stages and general questions |
| `js/data/modules/*.js` | Presenting complaints, one per file |
| `js/data/history-chronic.js` | Chronic History skeleton and its section frameworks |
| `js/data/conditions/*.js` | Chronic conditions, one per file |
| `js/data/exam-system.js` | System Examination skeleton and its region frameworks |
| `js/data/exams/*.js` | System examinations, one per file |
| `js/data/exam-focused.js` | Focused Examination mode |
| `js/data/focused/*.js` | Focused examinations, one per file |
| `js/app.js` | Routing, composition, rendering and practice mode |
| `css/styles.css` | Styles (light and dark themes) |
| `validate.py` | Content checks; run after every change |
| `tools/screenshot.ps1` | Screenshot a page with headless Edge |
| `CLAUDE.md` | The full content rules, written for Claude Code; this README summarizes them |

Each mode has a **skeleton** (its sections and general questions or steps) and a **library** (the entries you choose from). Choosing an entry adds its content to the skeleton:

| Mode | Skeleton | Library entry | Register with | Choose |
| --- | --- | --- | --- | --- |
| Acute History | `history-acute.js` | presenting complaint | `CHE.registerModule` | several |
| Chronic History | `history-chronic.js` | chronic condition | `CHE.registerCondition` | one |
| System Examination | `exam-system.js` | system examination | `CHE.registerExam` | one |
| Focused Examination | (its own pages) | focused examination | `CHE.registerFocused` | one |

## Adding content

Every entry is one file named after its `id` (e.g. `js/data/conditions/epilepsy.js` registers `id: 'epilepsy'`). After creating it:

1. Add a `<script>` line to `index.html`, in the block for that library.
2. Add any new abbreviation to `js/data/abbreviations.js`.
3. Run `python validate.py` and fix every error.

**Items.** Most content is a list of **items**. An item is a plain string, or an object:

```js
{
  text: 'Sudden, peaking within a minute (thunderclap)',  // a question, answer or finding
  dx: ['SAH'],                    // what it points to (renders as chips)
  see: ['nausea-vomiting'],       // a related presenting complaint (renders as a link)
  options: ['Answer one', 'Answer two'],  // possible answers, each itself an item
  hormones: ['↑ Cortisol']        // examinations only: hormones behind a finding
}
```

### A presenting complaint (Acute History)

File: `js/data/modules/<id>.js`. A presenting complaint is something the patient reports. Write it as **questions to ask**, with possible answers and the differentials they point to.

```js
/*
 * Headache: one line on what the history needs to establish.
 */
CHE.registerModule({
  id: 'headache',
  title: 'Headache',                     // spelled out, named as a symptom
  aka: ['head pain', 'migraine'],        // search terms only (synonyms, clinical terms)
  tags: ['neurologic', 'pain'],
  summary: 'What this history needs to establish, in two or three sentences.',
  ref: '',
  related: ['nausea-vomiting'],          // offered as "Consider also"

  pc: {
    framework: 'socrates',               // see Frameworks
    notes: {                             // answers added under each framework row
      onset: [
        { text: 'Sudden, peaking within a minute (thunderclap)', dx: ['SAH'] }
      ]
    }
  },
  associated: [
    { text: 'Any neck stiffness?', dx: ['Meningitis', 'SAH'] }
  ],
  callouts: [{ variant: 'tip', title: 'Usual or new?', text: 'Teaching point or pitfall.' }],
  redflags: ['Thunderclap onset: SAH'],  // "Finding: concern"
  history: {                             // added to the other history stages
    pmh: ['Any previous headaches or migraine?'],
    meds: ['Any anticoagulants (intracranial bleeding)?'],   // "Any X (reason)?"
    fhx: ['Any family history of migraine?'],
    shx: ['How much alcohol do you drink?'],
    sr: ['Neurologic: any weakness or numbness?']            // starts with the systems review group
  },
  differentials: [
    { name: 'SAH', clues: 'Thunderclap onset, neck stiffness, reduced consciousness' }
  ]
});
```

- **Several features.** For a complaint made of several features (e.g. urinary symptoms), put the content in `parts: [{ id, title, summary, pc, associated, redflags, history, differentials }]`. The card then shows a tick box for each feature. A shared `pc` at the top level renders once as "All features", and each part adds its answers to the shared rows with `sharedNotes: { <rowKey>: [Item] }`.
- **Every `dx` chip must match the start of one of the module's differentials** (e.g. `'SAH'` matches `'SAH (subarachnoid hemorrhage)'`). Clicking it jumps to that differential.
- **Links go both ways.** When an answer links to another complaint with `see`, that complaint must link back (through `see` or `related`).
- **Multi-system complaints** (e.g. N/V, fatigue, dizziness) are flagged `multiSystem: true` and keep an "Awaiting hand-off" comment at the top of the file, listing answers with no matching complaint yet. When you add a new complaint, check every multi-system module for answers that should now link to it.

### A chronic condition (Chronic History)

File: `js/data/conditions/<id>.js`. The diagnosis is already known; this is a regular review. Each Chronic History section is a framework (see [Chronic section rows](#chronic-section-rows)), and a condition adds its questions under the matching rows.

```js
/*
 * Chronic kidney disease: one line on what the review centers on.
 */
CHE.registerCondition({
  id: 'ckd',
  title: 'Chronic kidney disease',       // spelled out; the abbreviation goes in aka
  aka: ['CKD', 'kidney failure', 'dialysis'],
  tags: ['renal'],
  summary: 'What the review covers, in two or three sentences.',
  ref: '',
  frameworkNotes: {                      // { <section id>: { <row key>: [Item] } }
    diagnosis: {
      cause: [{ text: 'Do you know what caused your kidney disease?', options: ['DM', 'HTN', 'Unknown'] }]
    },
    management: {
      sickDay: ['When unwell and unable to keep fluids down, do you know which medications to pause?']
    },
    'ongoing-symptoms': {
      trend: [{
        text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
        options: ['Fatigue', 'Itch', 'Nocturia']
      }]
    }
  },
  sections: {                            // content that stands apart from the rows
    'ongoing-symptoms': [{
      type: 'redflags',
      title: 'Outside expectations: take an acute history',
      items: [
        { text: 'Much less urine than usual: AKI on chronic kidney disease', see: ['urinary-symptoms'] }
      ]
    }]
  }
});
```

- Questions are direct questions to the patient, ending in "?".
- Put what is **expected** for the condition under Ongoing symptoms → `trend`, and what falls **outside** expectations in the red-flag box. Each red flag links to the presenting complaint to take an acute history for.
- Where things go:
  - **Management > Ongoing treatment:** treatment the patient is still on (dialysis, a stoma, a pump).
  - **Complications > Hospitalizations:** one-off procedures and surgery.
  - **Management > Side effects:** medication side effects.

### A system examination

File: `js/data/exams/<id>.js`. The skeleton walks head to toe: General Inspection, Hands, Arms, Axillae, Face, Neck, Chest, Abdomen, Legs and Ankles. An examination adds the **findings** to look for under each region's rows.

```js
/*
 * Renal examination: one line on its focus.
 */
CHE.registerExam({
  id: 'renal',
  title: 'Renal examination',
  aka: ['kidney examination'],
  tags: ['renal'],
  summary: 'What this examination looks for.',
  ref: '',
  skip: ['axilla'],                      // regions it leaves out (shown as "(skipped)")
  frameworkNotes: {                      // { <framework id>: { <row key>: [Item] } }
    hands: {
      nails: [{ text: 'Leukonychia (white nails)', dx: ['Hypoalbuminemia (nephrotic syndrome)'] }]
    },
    abdomen: {                           // IPA rows: inspection, palpation, auscultation
      auscultation: [{ text: 'Bruit above and to one side of the umbilicus', dx: ['Renal artery stenosis'] }]
    }
  },
  sections: {                            // the ending, on the last page
    legs: [
      { type: 'redflags', title: 'Outside expectations: take an acute history', items: [
        { text: 'Weakness or palpitations: high potassium', see: ['weakness-numbness'] }
      ] },
      { type: 'list', title: 'To complete the examination', items: ['Test the urine with a dipstick'] },
      { type: 'callout', variant: 'tip', text: 'How to summarize the findings.' }
    ]
  }
});
```

- **Region frameworks and their rows** are in `js/data/exam-system.js`. The chest has two frameworks (`lungs`, `heart`), and the abdomen uses `abdomen`.
- **Findings are signs.** Name them as such (clubbing, pitting edema), with `dx` chips for what they suggest.
- **Hormones.** Where hormones drive a finding, add `hormones: ['↑ Cortisol', '↓ Thyroid hormone']`.
- **Examinations that don't fit head to toe** (the neurologic examinations) bring their own pages instead. Give `sections` as a list of pages, exactly as for a focused examination (next section). A page can still reuse a skeleton framework with `{ type: 'framework', id: 'general-inspection' }`.

### A focused examination

File: `js/data/focused/<id>.js`. One body part, in depth, and nothing else (the rest of the body comes from the system examinations). It brings its own pages, usually Preparation, Inspection, Palpation and Percussion, Auscultation, then Special Tests. Each page is a list of steps.

```js
/*
 * Thyroid examination: one line on its scope.
 */
CHE.registerFocused({
  id: 'thyroid',
  title: 'Thyroid examination',
  aka: ['neck examination', 'goiter'],
  tags: ['endocrine'],
  summary: 'What this examination covers.',
  ref: '',
  sections: [
    {
      id: 'inspection',
      title: 'Inspection',
      summary: 'One line on this page.',
      core: [{
        type: 'steps',
        items: [{
          title: 'Swallow test',
          how: 'Watch the swelling from the front as the patient swallows.',   // imperatives
          say: 'Please take a sip of water and hold it in your mouth. Now swallow.',  // to the patient
          lookFor: 'Whether the swelling rises and falls with swallowing.',
          findings: [
            { text: 'Rises with swallowing', dx: ['Thyroid swelling'] },
            { text: 'Smooth, diffuse enlargement', hormones: ['↑ Thyroid hormone'], dx: ['Graves disease'] }
          ]
          // findingsLabel: 'Grades'   // when the list is not findings (default "What it means")
        }]
      }]
    }
    // ...more pages; the last ends with red flags, "To complete the examination" and a tip
  ]
});
```

**Every examination ends the same way** on its last page:

1. a red-flag box, "Outside expectations: take an acute history"
2. "To complete the examination"
3. a summary tip

## Frameworks

A framework is a reusable list of rows (e.g. SOCRATES). Every row has a stable `key`, a `letter` shown on the left, a `label`, an optional `group` heading, and a `prompt`. Entries never repeat a framework; they add their own answers under its rows, by key.

### Using a framework

- **Presenting complaint:** set `pc.framework` and add answers per row in `pc.notes`. Drop rows that don't apply with `pc.skip: ['radiation']`.
- **Chronic condition:** add questions per section and row in `frameworkNotes`.
- **System examination:** add findings per region and row in `frameworkNotes`.

Use a framework wherever one fits, so similar complaints are structured the same way:

| Framework | Use for |
| --- | --- |
| `socrates` | Any pain or discomfort, including dysuria, odynophagia, dyspepsia |
| `symptom` (SOCRATES for non-pain symptoms) | Weakness, numbness or tingling; swelling; N/V; diarrhea or constipation; fatigue; dizziness; special sense symptoms; movement symptoms |
| `skin` (SOCRATES for skin) | Skin symptoms |
| `ipss` | Frequency, urgency and other LUTS |
| `bleeding` | Any bleeding: hematuria, hematemesis, hematochezia, melena |
| `episode` | Spells and other paroxysmal episodes |
| `change` | Changes against the patient's own baseline: appearance, weight, menstrual or sexual function, memory or thinking |

### Chronic section rows

| Section | Rows |
| --- | --- |
| Diagnosis | **5 Ws**: what, when and where, why (cause), which type or stage, what they understand |
| Risk factors | Non-modifiable: demographics, family, genetic. Modifiable, **SADPEDO**: smoking, alcohol, drugs, physical activity, exposures, diet, others (comorbidities) |
| Presentation | **3 Fs**: first symptoms, found, facility (admission) |
| Investigations | At diagnosis: blood, imaging, biopsy, functional tests. Ongoing: what is monitored, recent results, home monitoring |
| Management | Lifestyle, education, allied health, ongoing treatment; current and previous medications, side effects, sick day rules; missed doses, barriers, aids, follow-up |
| Complications | Of the condition, flares, hospitalizations |
| Ongoing symptoms | New symptoms, trend |
| Social impact | ADLs (**DEATH**), IADLs (**SHAFT**), wider impact |

### Adding a framework

1. Define it once in the right file:
   - **History frameworks:** `js/data/core.js` (in `CHE.frameworks`).
   - **Chronic section frameworks:** `js/data/history-chronic.js`.
   - **Examination region frameworks:** `js/data/exam-system.js`.
2. Give every row a `key`, `letter`, `label` and `prompt`, and a `group` if the rows fall into headed groups. Keep the keys stable: entries refer to them.
3. History frameworks: point modules at it with `pc.framework`. Skeleton frameworks: add a `{ type: 'framework', id: '<id>' }` block to the section's `core`.
4. Add a comment saying what it is for, and add it to the framework table in `CLAUDE.md` and this README.

```js
bleeding: {
  id: 'bleeding',
  title: 'Bleeding',
  rows: [
    { key: 'confirm', letter: '?', label: 'Confirm first', prompt: 'Is it really blood, and is it coming from where you think?' },
    { key: 'color',   letter: '1', label: 'Color',  group: 'Characteristics', prompt: 'What color is it? Any clots?' },
    { key: 'amount',  letter: '2', label: 'Amount', group: 'Characteristics', prompt: 'How much: streaks, a teaspoon, a cupful or more?' }
  ]
}
```

## Writing consistently

These rules keep hundreds of entries reading as one book. The validator checks most of them.

#### Histories ask, examinations instruct

- Histories are **questions to the patient**, ending in "?" ("Any fever or chills?").
- Examination steps are **clinician actions**, as imperatives ("Feel the radial pulse").
- Anything said to the patient is plain English with no abbreviations ("Is that all right?", not "OK").

#### Symptoms in histories, signs in examinations

- Name presenting complaints and features as **what the patient reports** ("Swelling", "Frothy urine"), not signs or lab findings ("Pitting edema", "Proteinuria").
- Use the medical term when it names the symptom itself (hematuria, dysuria, dysphagia).
- Put clinical terms in `aka` so search still finds them.
- Examination findings are named as signs.

#### Abbreviations

- Use standard clinical abbreviations in body text (UTI, HTN, PMHx).
- Headings stay spelled out: titles of entries, features, pages and steps.
- Every abbreviation must be in `js/data/abbreviations.js` (kept alphabetical), with one meaning only.

#### American English

- Spelling: hematuria, edema, anemia, color, center, labeled.
- Vocabulary: physical therapist, acetaminophen, albuterol, infectious mononucleosis, ED, pants, bed or examination table.

#### One term per concept

| Use | Not |
| --- | --- |
| fever, chills | rigors |
| flank | loin |
| N/V | nausea and vomiting (in content) |
| dyspnea | SOB, shortness of breath, breathlessness |
| void | urinate |
| urologic, neurologic, gynecologic | urological, neurological, gynecological |
| hematochezia, melena | rectal bleeding, blood in stool (search terms only) |
| corticosteroids | steroids |
| Parkinson disease, Crohn disease | Parkinson's disease (search term only) |

- A symptom is not a diagnosis: "renal colic" describes the pain, and the differential is "urolithiasis". "Hydronephrosis" is the finding, and the differential is "obstructive uropathy".

#### Set phrasings

- Red flags: "Finding: concern" (e.g. "Anuria or solitary kidney: complete obstruction").
- Medication questions: "Any X (reason)?" (e.g. "Any NSAIDs (papillary necrosis)?").
- Systems review items start with their group ("Neurologic: any weakness?").
- Hormones: "↑ Cortisol", "↓ Thyroid hormone", with the same names everywhere.

## Canonical order

When the same group of symptoms appears in several places, list it in this order every time.

**Systems.** For associated symptoms, list the complaint's own system first, then the others in this order. A question that names several symptoms goes under the first one it names.

> General (fatigue, B symptoms, appetite, bruising, bleeding, lymph nodes) · Head, eyes, ears, nose & throat · Cardiovascular · Respiratory · Gastrointestinal · Genitourinary & reproductive · Endocrine · Neurologic · Musculoskeletal & integumentary · Psychiatric

#### Symptom groups

| Group | Order |
| --- | --- |
| Urinary | hematuria, frothy urine, dysuria, frequency, urgency, nocturia, incontinence |
| Voiding | hesitancy, weak stream, straining, terminal dribbling, incomplete emptying |
| Bowel | hematochezia, melena, diarrhea, constipation, tenesmus, fecal incontinence |
| Upper GI | hematemesis, dysphagia, odynophagia, heartburn, dyspepsia, N/V |
| Skin | redness, pallor, cyanosis, jaundice, easy bruising, pruritus |
| Swelling | leg, facial, abdominal |
| Weight | weight loss, weight gain |
| Three Ps | polyuria, polydipsia, polyphagia |
| Temperature | heat intolerance, cold intolerance, sweating |
| Appearance (head to toe) | facial changes, eye changes, alopecia, hirsutism, hyperpigmentation, striae and thin skin, enlarging hands and feet |
| Menstrual or sexual function | irregular or absent periods, heavy menstrual bleeding, galactorrhea, infertility, reduced libido, erectile dysfunction, gynecomastia |
| Senses | vision loss, diplopia, hearing loss, tinnitus, anosmia, dysgeusia |
| Weakness and sensation | weakness, numbness or tingling |
| Movement | tremor, slowness or stiffness, unsteadiness or falls, abnormal movements |
| Incontinence | urinary incontinence, fecal incontinence |
| Dizziness | vertigo, lightheadedness |
| Memory or thinking | confusion, memory problems |
| Systemic | fever, chills, night sweats, weight loss, fatigue |

#### Examinations

- **System examination regions:** General Inspection, Hands, Arms, Axillae, Face, Neck, Chest (lungs, then heart), Abdomen, Legs and Ankles.
- **Chest and abdomen:** IPA, meaning inspection, palpation and percussion, auscultation.
- **Neurologic pages:** inspection, motor (tone, power), sensory, proprioception and coordination, reflexes, special tests; upper limbs before lower.

## Checking your work

**Validate.** Run this after every change (needs Python 3 and Node.js):

```sh
python validate.py            # errors and warnings
python validate.py --errors   # errors only
```

It checks:
- syntax and script tags
- each entry's structure
- links and reverse links
- dx chips against differentials
- framework rows
- abbreviations and headings
- American spelling and vocabulary
- canonical terms, question style and red-flag phrasing

**Screenshot.** For visual changes, take a screenshot (Windows, needs Microsoft Edge):

```powershell
.\tools\screenshot.ps1 -Page '#/exam/system?m=renal&s=hands'
.\tools\screenshot.ps1 -Page '#/history/chronic?m=ckd' -Theme dark -Width 390 -Height 1600
```

It prints the path of the PNG. `-Seed` runs JavaScript before the app starts, e.g. `-Seed "localStorage.setItem('che.practice.on','true')"` to open in practice mode.

**In the browser.** Open the developer console: the app warns about unknown links and abbreviations missing from the glossary.
