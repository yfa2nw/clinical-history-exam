# Clinical History & Exam

Static site (no build step) for clinical history-taking and, later, physical examination. Primary reference: *Talley & O'Connor's Clinical Examination*.

- `index.html`: page shell and script list (every new module file needs a `<script>` line here)
- `js/data/core.js`: namespace, module registry, shared frameworks (e.g. SOCRATES), data format docs
- `js/data/history-acute.js`, `js/data/history-chronic.js`: history skeletons (stages and general questions)
- `js/data/modules/*.js`: presenting-complaint modules (the Acute History library), one per file
- `js/data/conditions/*.js`: chronic conditions (the Chronic History library), one per file
- `js/app.js`: routing, composition and rendering
- `js/data/abbreviations.js`: every abbreviation used in content
- `css/styles.css`: styles
- `validate.py`: content validation (syntax, links, dx chips, frameworks, abbreviations, spelling, canonical terms, style). Run `python validate.py` after every content change (needs Node); fix all errors, and review warnings

## Content rules

### Abbreviations

- Use standard clinical abbreviations in content wherever applicable (e.g. UTI, PMHx, HTN, LUTS).
- Headings (stage, card, group and feature titles) stay spelled out; abbreviations are for body content.
- Don't add hover tooltips or `<abbr>` titles for them.
- Every abbreviation used must be listed in `js/data/abbreviations.js` (feeds the abbreviation search popup). `app.js` logs a console warning for any that are missing.

### Questions first, differentials as side notes

- History-taking content focuses on **what questions to ask**.
- Name presenting complaints and features as **symptoms the patient reports** (e.g. "Swelling", "Leg swelling"), not as examination signs or clinical states (e.g. not "Pitting edema", "Ascites", "Fluid overload"). Signs belong in answers and differentials (e.g. "Does it leave a dent when you press it?" → pitting), and in the physical examination module later. Put the clinical terms in `aka` so search still finds them. Signs that patients commonly notice and report themselves (e.g. jaundice, pallor) are acceptable as features.
  - The test is **symptom vs sign or lab finding**, not plain English vs medical terms. Use the medical term when one exists for the symptom itself (e.g. hematuria, dysuria, melena, dysphagia, pruritus); use the patient's description when the medical term names a sign or lab finding (e.g. "Frothy urine", not proteinuria; "Swelling", not edema). Plain-English phrasings go in `aka`.
- Write prompts as direct questions to the patient, ending in "?" (e.g. "Any fever or chills?"). Only clinician actions are imperatives (e.g. "Summarize the history back to the patient").
- Possible responses go in `options` under the question; differentials attach to responses as `dx` chips.
- The differentials panel is a collapsed side note, not main content.
- When an answer leads to another presenting complaint, link it with `see: [moduleId]` (renders a "+ complaint" button), and add the reverse link in that module too. Multi-system complaints hand off detail outside their main system through `see`: N/V stays brief throughout; abdominal pain keeps its GI detail but hands off other systems.

### Chronic conditions

- Chronic History is for a regular review of a known condition: the diagnosis is clear. Its library lists chronic conditions (`CHE.registerCondition`), not presenting complaints; the two libraries are separate and the selection does not carry across modes. The chronic library is "choose one": a chronic history reviews a single condition, so choosing another replaces it. When conditions overlap (e.g. PKD leading to CKD), say so in the condition's questions rather than expecting both to be selected.
- Each chronic section is a framework (defined in `js/data/history-chronic.js`, keyed by section id; mnemonics: Diagnosis 5 Ws; Risk Factors SADPEDO for the modifiable rows; Presentation 3 Fs; Social Impact DEATH, SHAFT and wider impact). Procedures and surgery go under Complications > Hospitalizations, but treatment the patient is still on (dialysis, a stoma, a stent) goes under Management > Ongoing treatment; medication side effects go under Management, not Complications. A condition adds its questions under the matching rows with `frameworkNotes: { <section id>: { <rowKey>: [Item] } }`, the way features add answers to a shared SOCRATES, not as a separate card. Questions follow the same rules as presenting complaints (direct questions, abbreviations, American spelling, canonical terms).
- Ongoing Symptoms: put what is expected for the condition under the `trend` row ("compare with usual"). Then add a `redflags` block in `sections: { 'ongoing-symptoms': [...] }` titled "Outside expectations: take an acute history": findings that are new, clearly worse or red flags, as "Finding: concern", each with `see: [moduleId]`. It stays a separate box so it stands out; in Chronic History its links open the presenting complaint in Acute History.
- Condition titles stay spelled out ("Chronic kidney disease"); put the abbreviation in `aka`.

### Multi-system complaints

- Complaints that arise from many systems (e.g. N/V) are flagged `multiSystem: true` in their module. Find them with a search for `multiSystem: true` in `js/data/modules/`.
- Each one keeps an "Awaiting hand-off" comment at the top of its file listing the answers that have no matching presenting complaint yet.
- **Whenever a new presenting complaint is added, check every multi-system module:**
  1. Does any of its questions or answers point to the new complaint? If so, add `see: ['<new-id>']` to that item, and remove the item from the "Awaiting hand-off" list.
  2. Should the new complaint link back? Add the multi-system module to the new module's `related`, and `see` it from the relevant answer (e.g. a vomiting answer in a new headache module).
  3. If the new complaint is itself multi-system (e.g. fatigue, fever, weight loss, dizziness), flag it and give it its own "Awaiting hand-off" list.
- Report in the summary which multi-system modules were updated, or that none needed changes.

### American spelling

- Use American spelling throughout content and UI text (e.g. hematuria, edema, anemia, pediatric, color, center).

### Consistency

- Use consistent wording and phrasing for the same concept everywhere: pick one term (e.g. "dyspnea" or "SOB") and use it in every module.
- List symptoms in a consistent order: when the same group of symptoms appears in several places, use the same order each time.
- Keep question style consistent across modules (the same grammatical form for prompts throughout).
- Library notes: `aka` is for search only. Give a module a short `subtitle` only when it adds information (e.g. regions, scope); never repeat the title. Without one, the library shows the feature names, minus any words that repeat the title.
- Use a framework wherever one fits, so similar complaints are structured the same way: SOCRATES for any pain or discomfort (including dysuria, odynophagia, dyspepsia); IPSS for frequency, urgency and other LUTS; the bleeding framework (confirm first, then Characteristics: color, amount, timing, pattern; Context: pain, trigger, impact) for any bleeding (hematuria, hematemesis, hematochezia, melena); the episode framework (Before: trigger, first symptom; During: what happened, awareness, duration, what stopped it; After: recovery, pattern) for spells and other paroxysmal episodes; the change framework (Timeline: onset, tempo, course; Comparison: baseline, evidence; Context: what else changed, impact) for changes measured against the patient's own baseline (appearance, weight, menstrual or sexual function, memory or thinking), rendered once in its shared "All features" block; features add their own tempo, course, baseline and context answers to those shared rows via `sharedNotes` (labeled with the feature, shown only while it is ticked), while questions about the character of the change (appetite, pattern, color, location) stay in the feature. The symptom SOCRATES (Site / distribution, Onset, Character, Spread, Associated, Timing, Triggers / relieving, Severity / impact) for non-pain symptoms (weakness, numbness or tingling; swelling; N/V; diarrhea or constipation; fatigue; dizziness; special sense symptoms; movement symptoms); the skin SOCRATES (same rows, with prompts for appearance, spread and evolution, exposures, and treatments tried) for skin symptoms; drop rows that don't apply with `pc.skip`, and in feature-based modules render it once in "All features" with every feature's answers added to its rows through `sharedNotes`. Frameworks are defined once in `js/data/core.js` (the chronic section frameworks in `js/data/history-chronic.js`); modules add complaint-specific answers per row in `pc.notes`.

#### Canonical terms

- "fever, chills" (not rigors); "flank" (not loin); "N/V"; "dyspnea"; "void"; "gross" / "microscopic" hematuria; "urologic", "neurologic", "gynecologic" (not -ical)
- "hematochezia" (bright red or maroon blood per rectum) and "melena" (black tarry stool) in content; "rectal bleeding", "PR bleeding" and "blood in stool" only as library search terms (`aka`)
- Symptom vs diagnosis: "renal colic" describes the pain; the differential is "urolithiasis". "Hydronephrosis" is the finding; the differential is "obstructive uropathy".
- Medication questions: "Any X (reason)?", e.g. "Any NSAIDs (papillary necrosis)?"
- Red flags: "Finding: concern", e.g. "Anuria or solitary kidney: complete obstruction"
- Systems review items in modules start with the core systems review group title: "Gastrointestinal: …", "Genitourinary & reproductive: …", "Neurologic: …"; list them in the system order below

#### Canonical order

- Associated symptoms: the complaint's own system first, then every other system in this order: General (fatigue, B symptoms, appetite, hematologic and lymphatic: bruising, bleeding, lymph nodes), head, eyes, ears, nose & throat, cardiovascular, respiratory, gastrointestinal, genitourinary & reproductive, endocrine, neurologic, musculoskeletal & integumentary, psychiatric. Classify a multi-symptom question by the first symptom it names.
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
- Systems review groups: General, Head, eyes, ears, nose & throat, Cardiovascular, Respiratory, Gastrointestinal, Genitourinary & reproductive, Endocrine, Neurologic, Musculoskeletal & integumentary, Psychiatric
