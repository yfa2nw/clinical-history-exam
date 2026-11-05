# Clinical History & Exam

Static site (no build step) for clinical history-taking and physical examination. Primary reference: *Talley & O'Connor's Clinical Examination*.

## Contents

1. [Files](#files)
2. [Workflow](#workflow)
3. [Rules for all content](#rules-for-all-content): abbreviations, spelling and vocabulary, consistency
4. [History taking](#history-taking): Acute History (presenting complaints), multi-system complaints, Chronic History (conditions)
5. [Physical examination](#physical-examination): rules for all examinations, System Examination, Focused Examination
6. [Reference](#reference): canonical terms, canonical order

## Files

| Path | What it holds |
| --- | --- |
| `index.html` | Page shell and script list. Every new data file needs a `<script>` line here. |
| `js/data/core.js` | Namespace, the registries (`registerModule`, `registerCondition`, `registerExam`, `registerFocused`) with their data format docs, and the shared history frameworks (SOCRATES and others) |
| `js/data/abbreviations.js` | Every abbreviation used in content (feeds the abbreviation search popup) |
| `js/data/history-acute.js` | Acute History skeleton: stages and general questions |
| `js/data/modules/*.js` | Presenting complaints (the Acute History library), one per file |
| `js/data/history-chronic.js` | Chronic History skeleton, and the chronic section frameworks |
| `js/data/conditions/*.js` | Chronic conditions (the Chronic History library), one per file |
| `js/data/exam-system.js` | System Examination skeleton: the regions and their frameworks |
| `js/data/exams/*.js` | System examinations (the System Examination library), one per file |
| `js/data/exam-focused.js` | Focused Examination mode (only the page shown before one is chosen) |
| `js/data/focused/*.js` | Focused examinations (the Focused Examination library), one per file |
| `js/app.js` | Routing, composition, rendering and practice mode |
| `css/styles.css` | Styles |
| `validate.py` | Content validation |
| `tools/screenshot.ps1` | Screenshot a page with headless Edge |

## Workflow

- **Validate after every content change:** `python validate.py` (needs Node). It checks syntax, script tags, structure, links and reverse links, dx chips, frameworks, abbreviations, headings, American spelling and vocabulary, canonical terms and style. Fix all errors and review warnings; `--errors` shows errors only.
- **Check visual changes with a screenshot:** `.\tools\screenshot.ps1 -Page '#/exam/system?m=renal&s=hands' -Theme dark` prints the PNG path. `-Width`, `-Height` and `-Theme` set the view; `-Seed` runs JavaScript before the app starts (e.g. to turn on practice mode through localStorage). Pass the route in `-Page`; headless Edge renders windows under about 500 px wider than asked.
- **Line endings:** `.gitattributes` keeps LF everywhere.

## Rules for all content

These apply to histories and examinations alike.

### Abbreviations

- Use standard clinical abbreviations in body content wherever applicable (e.g. UTI, PMHx, HTN, LUTS).
- Headings stay spelled out: stage, card, group, feature, condition, page and step titles. Put the abbreviation in `aka` (e.g. title "Chronic kidney disease", `aka: ['CKD']`).
- Don't add hover tooltips or `<abbr>` titles.
- Every abbreviation used must be in `js/data/abbreviations.js`, in alphabetical order, with one meaning only (e.g. PD is Parkinson disease, so spell out "peritoneal dialysis"). `app.js` logs a console warning for any that are missing. Mnemonics (DEATH, SADPEDO, IPA, WIPER, DANISH, HINTS) are listed too.
- Roman numerals (cranial nerves II to XII) and a few names with two capitals (McBurney) are not abbreviations; the validator and `app.js` keep a short list of these.

### Spelling and vocabulary

- American spelling throughout content and UI text (e.g. hematuria, edema, anemia, pediatric, color, center, labeled).
- American vocabulary too: physical therapist (not physiotherapist), acetaminophen, albuterol, infectious mononucleosis, ED (not A&E), pants, a wisp of cotton (not cotton wool), bed or examination table (not couch). The validator flags the common British words.
- Eponyms keep their spelling: Grey Turner sign, glabellar tap.

### Consistency

- One term per concept, used everywhere (e.g. "dyspnea", never "SOB" or "breathlessness"; "corticosteroids", not "steroids", except in names like "steroid emergency card" and "anabolic steroids").
- When the same group of symptoms appears in several places, list it in the same order each time (see [Canonical order](#canonical-order)).
- Keep the same grammatical form for prompts throughout: questions to the patient in histories, imperatives for clinician actions in examinations.
- Red flags read "Finding: concern" (e.g. "Anuria or solitary kidney: complete obstruction").
- Red-flag boxes that link to Acute History are titled "Outside expectations: take an acute history", and each item links its complaint with `see: [moduleId]`.
- Patient scripts (anything said to the patient) are plain English with no abbreviations ("Is that all right?", not "OK").
- Library entries: `aka` is for search only. Give an entry a short `subtitle` only when it adds information (e.g. regions, scope); never repeat the title. Without one, the library shows the feature names, minus any words that repeat the title.
- Every library is "choose one" except Acute History, which combines presenting complaints. The libraries are separate, and a selection does not carry across modes.

## History taking

### Acute History: presenting complaints

#### Questions first, differentials as side notes

- History-taking content focuses on **what questions to ask**. Write prompts as direct questions to the patient, ending in "?" (e.g. "Any fever or chills?"). Only clinician actions are imperatives (e.g. "Summarize the history back to the patient").
- Possible responses go in `options` under the question; differentials attach to responses as `dx` chips. The differentials panel is a collapsed side note, not main content.
- Medication questions read "Any X (reason)?", e.g. "Any NSAIDs (papillary necrosis)?"
- Systems review items start with the core systems review group title ("Gastrointestinal: …", "Neurologic: …") and follow the system order (see [Canonical order](#canonical-order)).

#### Symptoms, not signs

- Name presenting complaints and features as **symptoms the patient reports** (e.g. "Swelling", "Leg swelling"), not as examination signs or clinical states (not "Pitting edema", "Ascites", "Fluid overload"). Signs belong in answers and differentials (e.g. "Does it leave a dent when you press it?" → pitting) and in the physical examination. Put the clinical terms in `aka` so search still finds them. Signs that patients commonly notice themselves (e.g. jaundice, pallor) are acceptable as features.
- The test is **symptom vs sign or lab finding**, not plain English vs medical terms. Use the medical term when one exists for the symptom itself (e.g. hematuria, dysuria, melena, dysphagia, pruritus); use the patient's description when the medical term names a sign or lab finding (e.g. "Frothy urine", not proteinuria; "Swelling", not edema). Plain-English phrasings go in `aka`.

#### Links between complaints

- When an answer leads to another presenting complaint, link it with `see: [moduleId]` (renders a "+ complaint" button), and add the reverse link in that module too.

#### Frameworks

Use a framework wherever one fits, so similar complaints are structured the same way. Frameworks are defined once in `js/data/core.js`; modules add complaint-specific answers per row in `pc.notes`, and drop rows that don't apply with `pc.skip`.

| Framework | Rows | Use for |
| --- | --- | --- |
| SOCRATES | Site, Onset, Character, Radiation, Associated, Timing, Exacerbating / relieving, Severity | Any pain or discomfort, including dysuria, odynophagia, dyspepsia |
| SOCRATES (symptom) | Site / distribution, Onset, Character, Spread, Associated, Timing, Triggers / relieving, Severity / impact | Non-pain symptoms: weakness, numbness or tingling; swelling; N/V; diarrhea or constipation; fatigue; dizziness; special sense symptoms; movement symptoms |
| SOCRATES (skin) | The same rows, with prompts for appearance, spread and evolution, exposures, and treatments tried | Skin symptoms |
| IPSS | The 7 scored LUTS items | Frequency, urgency and other LUTS |
| Bleeding | Confirm first; Characteristics: color, amount, timing, pattern; Context: pain, trigger, impact | Any bleeding: hematuria, hematemesis, hematochezia, melena |
| Episode | Before: trigger, first symptom; During: what happened, awareness, duration, what stopped it; After: recovery, pattern | Spells and other paroxysmal episodes |
| Change | Timeline: onset, tempo, course; Comparison: baseline, evidence; Context: what else changed, impact | Changes against the patient's own baseline: appearance, weight, menstrual or sexual function, memory or thinking |

- In feature-based modules (with `parts`), a shared framework renders once in "All features", and each feature adds its answers to the shared rows through `sharedNotes` (labeled with the feature, shown only while it is ticked).
- With the change framework, features add their own tempo, course, baseline and context answers to the shared rows; questions about the character of the change (appetite, pattern, color, location) stay in the feature.

### Multi-system complaints

- Complaints that arise from many systems (e.g. N/V) are flagged `multiSystem: true` in their module; search for `multiSystem: true` in `js/data/modules/` to find them.
- Each keeps an "Awaiting hand-off" comment at the top of its file, listing the answers that have no matching presenting complaint yet. Multi-system complaints hand off detail outside their main system through `see`: N/V stays brief throughout; abdominal pain keeps its GI detail but hands off other systems.
- **Whenever a new presenting complaint is added, check every multi-system module:**
  1. Does any of its questions or answers point to the new complaint? If so, add `see: ['<new-id>']` to that item, and remove the item from the "Awaiting hand-off" list.
  2. Should the new complaint link back? Add the multi-system module to the new module's `related`, and `see` it from the relevant answer (e.g. a vomiting answer in a new headache module).
  3. If the new complaint is itself multi-system (e.g. fatigue, fever, weight loss, dizziness), flag it and give it its own "Awaiting hand-off" list.
- Report in the summary which multi-system modules were updated, or that none needed changes.

### Chronic History: conditions

- Chronic History is for a regular review of a known condition: the diagnosis is clear. Its library lists chronic conditions (`CHE.registerCondition`), not presenting complaints. It is "choose one", so when conditions overlap (e.g. PKD leading to CKD), say so in the condition's questions rather than expecting both to be selected.
- Each chronic section is a framework, defined in `js/data/history-chronic.js` and keyed by section id. A condition adds its questions under the matching rows with `frameworkNotes: { <section id>: { <rowKey>: [Item] } }`, not as a separate card. Questions follow the Acute History rules (direct questions, abbreviations, canonical terms).

| Section | Rows |
| --- | --- |
| Diagnosis | 5 Ws: what, when and where, why (cause), which type or stage, what they understand |
| Risk factors | Non-modifiable: demographics, family, genetic. Modifiable (SADPEDO): smoking, alcohol, drugs, physical activity, exposures, diet, others (comorbidities) |
| Presentation | 3 Fs: first symptoms, found, facility (admission) |
| Investigations | At diagnosis: blood, imaging, biopsy, functional tests. Ongoing: what is monitored, recent results, home monitoring |
| Management | Non-pharmacologic: lifestyle, education, allied health, ongoing treatment. Pharmacologic: current and previous medications, side effects, sick day rules. Adherence: missed doses, barriers, aids, follow-up |
| Complications | Of the condition, flares, hospitalizations |
| Ongoing symptoms | New symptoms, trend |
| Social impact | ADLs (DEATH), IADLs (SHAFT), wider impact (work, relationships, mood, finances, supports, advance care planning, ideas and concerns) |

- Where things go:
  - **Ongoing treatment:** treatment the patient is still on (dialysis, a stoma, a stent, a pump).
  - **Complications > Hospitalizations:** one-off procedures and surgery.
  - **Management > Side effects:** medication side effects (not Complications).
- Ongoing symptoms:
  - Put what is expected for the condition under the `trend` row ("compare with usual").
  - Then add the red-flag box in `sections: { 'ongoing-symptoms': [...] }`: findings that are new, clearly worse or red flags. In Chronic History its links open the complaint in Acute History.

## Physical examination

### Rules for all examinations

- **Steps:** steps are clinician actions, written as imperatives ("Feel the radial pulse"), not questions.
- **Findings:** findings are named as signs (clubbing, pitting edema, shifting dullness); signs belong here, not in history taking. Attach what a finding suggests as `dx` chips.
- **Hormones:** when hormones drive a finding (endocrine), name them in `hormones: ['↑ Cortisol', '↓ Thyroid hormone']`. Each starts with ↑ (elevated) or ↓ (lowered), and the same hormone names are used everywhere.
- **Ending:** every examination ends the same way on its last page (Legs and Ankles for skeleton examinations):
  1. the red-flag box ("Outside expectations: take an acute history")
  2. "To complete the examination"
  3. a summary tip
- **Practice mode** (examinations only): ticks are saved in the browser by position (page id, block index, step or row index). Reordering or inserting steps on a page shifts that page's saved ticks, which is harmless but worth knowing.

### System Examination

- **The skeleton:** `js/data/exam-system.js` runs general inspection, hands, arms, axillae, face, neck, chest, abdomen, then legs and ankles. Each region is a framework keyed by framework id:
  - General inspection: WIPER, then the patient, then the surroundings.
  - Hands: nails, dorsal side, palmar side.
  - Arms: pulse and BP, briefly.
  - Neck: includes the lymph nodes.
  - Chest: two IPA frameworks, `lungs` and `heart`. Abdomen: one (`abdomen`). IPA is I inspection, P palpation and percussion, A auscultation.
- **Adding findings:** an examination (`CHE.registerExam`, one per file in `js/data/exams/`) adds what to look for under the skeleton's rows with `frameworkNotes: { <framework id>: { <rowKey>: [Item] } }`. Content that stands apart goes in `sections: { <section id>: [Block] }`.
- **Skipping regions:** regions an examination leaves out go in `skip` (section or framework ids). They keep their title and place, marked "(skipped)", so the full structure stays visible.
- **Examinations with their own pages:** an examination that does not fit the head-to-toe order (e.g. the peripheral neurologic and cranial nerve examinations) brings its own pages instead: `sections` as a list of pages with `steps` blocks, as for focused examinations.
  - Its pages can still reuse a skeleton framework (e.g. `{ type: 'framework', id: 'general-inspection' }`) and add to it with `frameworkNotes`.
  - Neurologic pages follow the order: inspection, motor (tone, power), sensory, proprioception and coordination, reflexes, special tests. Each step title starts with its category where it helps ("Motor: …", "Reflex: …").

### Focused Examination

- **Scope:** a focused examination (`CHE.registerFocused`, one per file in `js/data/focused/`) examines one body part in depth, e.g. the thyroid. Keep it to that part only: thyroid status and the rest of the body come from the system examinations, so point to them in "To complete the examination" rather than repeating them.
- **Pages:** it brings its own pages (`sections: [{ id, title, summary, core }]`), usually Preparation, then IPA (Inspection; Palpation and Percussion; Auscultation), then Special Tests. Use a different structure when IPA does not fit (e.g. the diabetic foot: inspection, vascular, neurologic, footwear and gait).
- **Steps:** each page uses a `steps` block. Each step has:
  - `title`
  - `how`: the technique, as imperatives
  - `say`: what to say to the patient, word for word, without the quotation marks
  - `lookFor`: what to watch or feel for
  - `findings`: what you might find, as signs, with `dx` chips and `hormones` where they apply
  - `findingsLabel`: the list's heading when it is not findings (default "What it means"), e.g. "Grades" for a scale

## Reference

### Canonical terms

- "fever, chills" (not rigors); "flank" (not loin); "N/V"; "dyspnea"; "void"; "gross" / "microscopic" hematuria; "urologic", "neurologic", "gynecologic" (not -ical)
- "hematochezia" (bright red or maroon blood per rectum) and "melena" (black tarry stool) in content; "rectal bleeding", "PR bleeding" and "blood in stool" only as library search terms (`aka`)
- Symptom vs diagnosis: "renal colic" describes the pain; the differential is "urolithiasis". "Hydronephrosis" is the finding; the differential is "obstructive uropathy".
- Eponyms without the possessive: "Parkinson disease", "Crohn disease", "Cushing syndrome" (the possessive form only in `aka`)

### Canonical order

- Associated symptoms: the complaint's own system first, then every other system in this order: General (fatigue, B symptoms, appetite, hematologic and lymphatic: bruising, bleeding, lymph nodes), head, eyes, ears, nose & throat, cardiovascular, respiratory, gastrointestinal, genitourinary & reproductive, endocrine, neurologic, musculoskeletal & integumentary, psychiatric. Classify a multi-symptom question by the first symptom it names.
- Systems review groups: General, Head, eyes, ears, nose & throat, Cardiovascular, Respiratory, Gastrointestinal, Genitourinary & reproductive, Endocrine, Neurologic, Musculoskeletal & integumentary, Psychiatric
- Urinary: hematuria, frothy urine, dysuria, frequency, urgency, nocturia, incontinence
- Voiding: hesitancy, weak stream, straining, terminal dribbling, incomplete emptying
- Bowel: hematochezia, melena, diarrhea, constipation, tenesmus, fecal incontinence
- Upper GI: hematemesis, dysphagia, odynophagia, heartburn, dyspepsia, N/V
- Skin: redness, pallor, cyanosis, jaundice, easy bruising, pruritus
- Swelling: leg, facial, abdominal
- Weight: weight loss, weight gain
- Three Ps: polyuria, polydipsia, polyphagia
- Temperature: heat intolerance, cold intolerance, sweating
- Appearance (head to toe): facial changes, eye changes, alopecia, hirsutism, hyperpigmentation, striae and thin skin, enlarging hands and feet
- Menstrual or sexual function: irregular or absent periods, heavy menstrual bleeding, galactorrhea, infertility, reduced libido, erectile dysfunction, gynecomastia
- Senses: vision loss, diplopia, hearing loss, tinnitus, anosmia, dysgeusia
- Weakness and sensation: weakness, numbness or tingling
- Movement: tremor, slowness or stiffness, unsteadiness or falls, abnormal movements
- Incontinence: urinary incontinence, fecal incontinence
- Dizziness: vertigo, lightheadedness
- Memory or thinking: confusion, memory problems
- Systemic: fever, chills, night sweats, weight loss, fatigue
