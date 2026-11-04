/*
 * Shared namespace, module registry and reusable frameworks.
 * Load this before any other data file.
 */
window.CHE = window.CHE || {};
CHE.history = CHE.history || {};
CHE.modules = CHE.modules || {};
CHE.conditions = CHE.conditions || {};

/*
 * Register a presenting-complaint module. Module shape (all fields optional except id/title):
 *
 *   id, title, aka: [string], tags: [string], summary, ref
 *   aka                       search terms only (synonyms, lay phrases, clinical terms)
 *   subtitle                  optional short note shown under the title in the library;
 *                             must add information, not repeat the title. Without it the
 *                             library shows the feature names not already in the title.
 *   related:  [moduleId]      offered as "consider also" suggestions
 *   multiSystem: true         arises from many systems and hands off via `see`;
 *                             re-check whenever a new complaint is added (CLAUDE.md)
 *
 *   parts: [{ id, title, summary, pc, associated, redflags, history, differentials }]
 *     For a complaint made of several features (e.g. urinary symptoms). Each part
 *     takes the fields below, and the card lets you toggle parts on and off.
 *     A module with parts puts its content in the parts, not at the top level, except
 *     for an optional top-level pc / associated: questions shared by all features
 *     (rendered as "All features" above them; keep these free of dx chips).
 *     If that shared pc uses a framework, each part may add `sharedNotes: { <rowKey>: [Item] }`:
 *     answers shown under the shared row, labeled with the part's title, only while the
 *     part is ticked (e.g. tempo and triggers for 'change'; every row for 'symptom').
 *
 *
 *   pc: {
 *     framework: 'socrates',            render a framework table...
 *     notes: { <rowKey>: [Item] },      ...with complaint-specific notes per row
 *     skip: [rowKey]                    framework rows that don't apply to this complaint
 *     prompts: [Item]                   free-form questions (for non-framework features)
 *   }
 *   associated:    [Item]
 *   callouts:      [{ variant: 'tip'|'note', title, text }]   pitfalls and teaching points
 *   redflags:      [string]
 *   history:       { pmh, meds, fhx, shx, sr: [string] }   fed into the matching skeleton stage
 *   differentials: [{ name, clues }]
 *
 * Item: a plain string, or { text, dx?, options? }
 *   text     a question to ask (or, inside options, a possible response)
 *   dx       1–2 conditions a positive answer points to. A dx name that matches the
 *            start of one of the module's differentials (case-insensitive) links to that row.
 *   options  [Item] possible responses, each with its own dx
 *   see      [moduleId] other presenting complaints a positive answer leads to; renders
 *            a button that adds that module to the history
 */
CHE.registerModule = function (mod) {
  if (CHE.modules[mod.id]) console.warn('Duplicate module id:', mod.id);
  CHE.modules[mod.id] = mod;
};

/*
 * Register a chronic condition (the Chronic History library). The diagnosis is already
 * known, so a condition adds its own questions to each section of the chronic skeleton:
 *
 *   id, title, subtitle?, aka: [string], tags: [string], summary, ref
 *   sections: { <chronic section id>: [Block] }
 *     Blocks as in the history skeletons: { type: 'list', title?, items: [Item] },
 *     { type: 'groups', groups: [{ title, items }] }, { type: 'callout', variant, title?, text },
 *     or { type: 'redflags', title?, items: [Item] }.
 *     In 'ongoing-symptoms', list what is expected for the condition, then the findings
 *     that fall outside it, each with `see: [moduleId]`: in Chronic History these render
 *     as links that open that presenting complaint in Acute History.
 *   frameworkNotes: { <section id>: { <rowKey>: [Item] } }
 *     Questions added under the rows of each chronic section's framework (defined in
 *     history-chronic.js), the way features add answers to a shared SOCRATES. Use `sections`
 *     only for content that stands apart, like the Ongoing Symptoms red flags.
 */
CHE.registerCondition = function (cond) {
  if (CHE.conditions[cond.id]) console.warn('Duplicate condition id:', cond.id);
  CHE.conditions[cond.id] = cond;
};

/*
 * Frameworks: reusable question scaffolds. Each row has a stable `key`
 * that modules reference in `pc.notes`.
 */
CHE.frameworks = {
  socrates: {
    id: 'socrates',
    title: 'SOCRATES',
    rows: [
      { key: 'site',         letter: 'S', label: 'Site',                     prompt: 'Where exactly is it? Can you point to it with one finger?' },
      { key: 'onset',        letter: 'O', label: 'Onset',                    prompt: 'Did it come on suddenly or gradually? What were you doing at the time?' },
      { key: 'character',    letter: 'C', label: 'Character',                prompt: 'What does it feel like: sharp, dull, burning, crushing or colicky?' },
      { key: 'radiation',    letter: 'R', label: 'Radiation',                prompt: 'Does it spread anywhere?' },
      { key: 'associated',   letter: 'A', label: 'Associated symptoms',      prompt: 'Have you noticed anything else with it?' },
      { key: 'timing',       letter: 'T', label: 'Timing',                   prompt: 'How long does it last? Is it constant, or does it come and go? Have you had it before?' },
      { key: 'exacerbating', letter: 'E', label: 'Exacerbating / relieving', prompt: 'Does anything make it better or worse?' },
      { key: 'severity',     letter: 'S', label: 'Severity',                 prompt: 'How bad is it from 0 to 10? Does it affect your sleep or activities?' }
    ]
  },

  // SOCRATES adapted for non-pain symptoms (weakness, numbness, swelling...). Same letters
  // and row keys as the pain version, so notes are written the same way; modules drop rows
  // that don't apply with `pc.skip` (e.g. site and radiation for fatigue).
  symptom: {
    id: 'symptom',
    title: 'SOCRATES (symptom)',
    rows: [
      { key: 'site',         letter: 'S', label: 'Site / distribution',  prompt: 'Where exactly is it? One side or both? Can you show me?' },
      { key: 'onset',        letter: 'O', label: 'Onset',                prompt: 'When did it start? Did it come on suddenly or gradually? What were you doing at the time?' },
      { key: 'character',    letter: 'C', label: 'Character',            prompt: 'Can you describe it in your own words?' },
      { key: 'radiation',    letter: 'R', label: 'Spread',               prompt: 'Has it spread or moved since it started?' },
      { key: 'associated',   letter: 'A', label: 'Associated symptoms',  prompt: 'Have you noticed anything else with it?' },
      { key: 'timing',       letter: 'T', label: 'Timing',               prompt: 'Is it there all the time, or does it come and go? Has it happened before?' },
      { key: 'exacerbating', letter: 'E', label: 'Triggers / relieving', prompt: 'Does anything bring it on, or make it better or worse?' },
      { key: 'severity',     letter: 'S', label: 'Severity / impact',    prompt: 'How bad is it? What can\'t you do now that you could do before?' }
    ]
  },

  // SOCRATES adapted for skin symptoms (redness, pallor, jaundice, bruising, itch...). Same
  // letters and row keys; the prompts cover appearance, evolution, exposures and treatments.
  skin: {
    id: 'skin',
    title: 'SOCRATES (skin)',
    rows: [
      { key: 'site',         letter: 'S', label: 'Site / distribution',    prompt: 'Where is it? One area or widespread? Can you show me?' },
      { key: 'onset',        letter: 'O', label: 'Onset',                  prompt: 'When did you first notice it? Did it come on suddenly or gradually? Who noticed it first?' },
      { key: 'character',    letter: 'C', label: 'Character / appearance', prompt: 'What does it look like: color, flat or raised, blisters, scale? Does it itch or hurt?' },
      { key: 'radiation',    letter: 'R', label: 'Spread / evolution',     prompt: 'Has it spread or changed since it started?' },
      { key: 'associated',   letter: 'A', label: 'Associated symptoms',    prompt: 'Have you noticed anything else with it?' },
      { key: 'timing',       letter: 'T', label: 'Timing',                 prompt: 'Is it there all the time, or does it come and go? Has it happened before?' },
      { key: 'exacerbating', letter: 'E', label: 'Triggers / relieving',   prompt: 'Does anything bring it on (sun, heat, cold, something touching the skin, food, medication)? What have you tried, and did it help?' },
      { key: 'severity',     letter: 'S', label: 'Severity / impact',      prompt: 'How bad is it? Does it affect your sleep or daily life?' }
    ]
  },

  // International Prostate Symptom Score: 7 LUTS items, each scored 0–5 over the past month.
  // Labels mark storage vs voiding symptoms.
  ipss: {
    id: 'ipss',
    title: 'IPSS (over the past month)',
    rows: [
      { key: 'incomplete',    letter: '1', label: 'Incomplete emptying (voiding)', prompt: 'How often do you feel your bladder isn\'t empty after you finish voiding?' },
      { key: 'frequency',     letter: '2', label: 'Frequency (storage)',           prompt: 'How often do you have to void again less than 2 hours after you last voided?' },
      { key: 'intermittency', letter: '3', label: 'Intermittency (voiding)',       prompt: 'How often does your stream stop and start while voiding?' },
      { key: 'urgency',       letter: '4', label: 'Urgency (storage)',             prompt: 'How often do you find it difficult to put off voiding?' },
      { key: 'weakStream',    letter: '5', label: 'Weak stream (voiding)',         prompt: 'How often do you have a weak urinary stream?' },
      { key: 'straining',     letter: '6', label: 'Straining (voiding)',           prompt: 'How often do you have to push or strain to begin voiding?' },
      { key: 'nocturia',      letter: '7', label: 'Nocturia (storage)',            prompt: 'How many times do you typically get up at night to void?' }
    ]
  },

  // Bleeding from any site (hematuria, hematemesis, hematochezia, melena). The site's own
  // structure, not a standard mnemonic: confirm first, then characteristics, then context.
  // Rows with a `group` render under that group heading.
  bleeding: {
    id: 'bleeding',
    title: 'Bleeding',
    rows: [
      { key: 'confirm', letter: '?', label: 'Confirm first',                prompt: 'Is it really blood, and is it coming from where you think?' },
      { key: 'color',   letter: '1', label: 'Color',   group: 'Characteristics', prompt: 'What color is it? Any clots?' },
      { key: 'amount',  letter: '2', label: 'Amount',  group: 'Characteristics', prompt: 'How much: streaks, a teaspoon, a cupful or more?' },
      { key: 'timing',  letter: '3', label: 'Timing',  group: 'Characteristics', prompt: 'When exactly does it appear?' },
      { key: 'pattern', letter: '4', label: 'Pattern', group: 'Characteristics', prompt: 'Is this the first time? How often, and since when?' },
      { key: 'pain',    letter: '5', label: 'Pain',    group: 'Context',         prompt: 'Is it painful? Where?' },
      { key: 'trigger', letter: '6', label: 'Trigger', group: 'Context',         prompt: 'Did anything bring it on? Any medications, or bleeding or bruising elsewhere?' },
      { key: 'impact',  letter: '7', label: 'Impact',  group: 'Context',         prompt: 'Have you felt lightheaded, faint, tired or short of breath?' }
    ]
  },

  // Paroxysmal episodes ("spells"): walk through one typical episode, before, during and
  // after, ideally with a witness. The site's own structure, not a standard mnemonic.
  episode: {
    id: 'episode',
    title: 'Episode (take one typical episode)',
    rows: [
      { key: 'trigger',   letter: '1', label: 'Trigger',             group: 'Before', prompt: 'What were you doing just before? Did anything set it off?' },
      { key: 'warning',   letter: '2', label: 'First symptom',       group: 'Before', prompt: 'What did you notice first?' },
      { key: 'symptoms',  letter: '3', label: 'What happened',       group: 'During', prompt: 'What happened during the episode? Was anyone with you, and did they record it on a phone?' },
      { key: 'awareness', letter: '4', label: 'Awareness',           group: 'During', prompt: 'Did you lose consciousness or awareness? What did anyone with you see?' },
      { key: 'duration',  letter: '5', label: 'Duration',            group: 'During', prompt: 'How long did it last?' },
      { key: 'relief',    letter: '6', label: 'What stopped it',     group: 'During', prompt: 'What made it stop: eating, lying down, or time alone?' },
      { key: 'recovery',  letter: '7', label: 'Recovery',            group: 'After',  prompt: 'How did you feel afterward, and how quickly did you recover?' },
      { key: 'pattern',   letter: '8', label: 'Pattern over time',   group: 'After',  prompt: 'How often do they happen, since when, and are they changing?' }
    ]
  },

  // "Changes in…" complaints (weight, appearance, skin, menstrual or sexual function).
  // Rendered once in the shared "All features" block, so it carries no dx notes; tempo is
  // the key discriminator (days to weeks: fluid, infection, drugs, tumor; years: slow
  // hormonal disease). The site's own structure, not a standard mnemonic.
  change: {
    id: 'change',
    title: 'Change',
    rows: [
      { key: 'onset',    letter: '1', label: 'Onset',             group: 'Timeline',   prompt: 'When did you first notice it?' },
      { key: 'tempo',    letter: '2', label: 'Tempo',             group: 'Timeline',   prompt: 'How fast did it happen: over days, weeks, months or years?' },
      { key: 'course',   letter: '3', label: 'Course',            group: 'Timeline',   prompt: 'Is it getting worse, staying the same, or coming and going?' },
      { key: 'baseline', letter: '4', label: 'Baseline',          group: 'Comparison', prompt: 'What was it like before? What is normal for you?' },
      { key: 'evidence', letter: '5', label: 'Evidence',          group: 'Comparison', prompt: 'Who noticed it? Any records, tests, photos or videos to compare?' },
      { key: 'context',  letter: '6', label: 'What else changed', group: 'Context',    prompt: 'Did anything else change around then: new medications, pregnancy, illness, stress, diet or exercise?' },
      { key: 'impact',   letter: '7', label: 'Impact',            group: 'Context',    prompt: 'How much does it bother you, and how does it affect your life?' }
    ]
  }
};
