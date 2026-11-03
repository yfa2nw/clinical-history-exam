/*
 * Spells: a multi-system complaint. Paroxysmal episodes with the patient largely well
 * between them: endocrine (hypoglycemia, pheochromocytoma, carcinoid), neurologic
 * (seizures, TIA, migraine, episodic vertigo, transient global amnesia, cataplexy),
 * cardiac (arrhythmia, syncope) and psychiatric (panic, functional seizures). The
 * episode framework is built to separate them.
 *
 * Awaiting hand-off (answers with no matching presenting complaint yet; add `see`
 * and remove the line when one is added; see CLAUDE.md, "Multi-system complaints"):
 *   - Racing heart; chest pain or dyspnea with the episodes                → palpitations / chest pain complaint
 *   - Lost consciousness; warmth, nausea and graying vision                → syncope complaint
 *   - Wheeze; lip or throat swelling                                       → dyspnea complaint
 *   - Intense fear; anxiety or low mood between episodes                   → mood / anxiety complaint
 *   - Daytime sleepiness, sudden sleep attacks                             → sleep complaint
 */
CHE.registerModule({
  id: 'spells',
  title: 'Spells',
  subtitle: 'Seizures, faints, vertigo, hypoglycemia, flushing',
  multiSystem: true,
  aka: ['episodes', 'attacks', 'turns', 'funny turns', 'blackouts', 'fits', 'seizures', 'paroxysmal episodes', 'shaky episodes', 'flushing', 'vertigo attacks', 'memory loss episodes', 'hypoglycemia', 'pheochromocytoma'],
  tags: ['endocrine', 'neurologic', 'cardiovascular'],
  summary: 'Sudden episodes that last seconds to hours, with the patient largely well between them. Take one typical episode from start to finish, ideally with a witness. The causes are endocrine (hypoglycemia, pheochromocytoma, carcinoid syndrome), neurologic (seizures, TIA, migraine, episodic vertigo, transient global amnesia), cardiac (arrhythmia, syncope) and psychiatric (panic, functional seizures).',
  ref: '',
  related: ['temperature-sweating', 'weight-change', 'polyuria-polydipsia', 'fatigue', 'nausea-vomiting', 'skin-changes', 'menstrual-sexual', 'senses-change', 'headache', 'weakness-numbness', 'movement-change', 'seizures', 'dizziness'],
  pc: {
    framework: 'episode',
    notes: {
      trigger: [
        { text: 'Fasting, exercise or a missed meal; on insulin or sulfonylureas', dx: ['Hypoglycemia'] },
        { text: 'Exertion, straining, a change in posture or certain drugs', dx: ['Pheochromocytoma'] },
        { text: 'Standing up', dx: ['Orthostatic hypotension'], see: ['dizziness'] },
        { text: 'Pain, the sight of blood, prolonged standing or heat', dx: ['Vasovagal syncope'] },
        { text: 'Sleep deprivation, flashing lights, alcohol, or missed antiseizure medication', dx: ['Seizure'], see: ['seizures'] },
        { text: 'Turning the head, looking up or rolling over in bed', dx: ['BPPV'], see: ['dizziness'] },
        { text: 'Strong emotion, especially laughter', dx: ['Narcolepsy with cataplexy'] },
        { text: 'Exertion, sex, cold water or emotional stress, then memory loss', dx: ['Transient global amnesia'] },
        { text: 'A food, sting or new medication', dx: ['Anaphylaxis'] },
        { text: 'Alcohol, certain foods or stress, with flushing', dx: ['Carcinoid syndrome'] },
        { text: 'Stopping alcohol, opioids or benzodiazepines', dx: ['Withdrawal'] },
        { text: 'A stressful situation, or no trigger at all', dx: ['Panic attack', 'Functional seizures'] }
      ],
      warning: [
        { text: 'Shakiness, hunger and sweating', dx: ['Hypoglycemia'] },
        { text: 'A pounding headache', dx: ['Pheochromocytoma'], see: ['headache'] },
        { text: 'Heat spreading over the face and chest', dx: ['Menopause', 'Carcinoid syndrome'] },
        { text: 'A racing heart that starts abruptly', dx: ['Arrhythmia'] },
        { text: 'Warmth, nausea and graying of vision', dx: ['Vasovagal syncope'] },
        { text: 'Intense fear or a sense of doom', dx: ['Panic attack'] },
        { text: 'A strange smell or taste, deja vu, or a rising feeling in the stomach (focal seizure aura)', dx: ['Seizure'], see: ['seizures'] },
        { text: 'No warning at all', dx: ['Seizure', 'Arrhythmia'] },
        { text: 'Visual zigzags spreading over minutes', dx: ['Migraine'], see: ['headache'] },
        { text: 'The room spinning', dx: ['BPPV', 'Meniere disease'], see: ['dizziness'] },
        { text: 'Fullness in one ear, ringing or muffled hearing', dx: ['Meniere disease'], see: ['senses-change'] },
        { text: 'Tingling around the mouth and in the fingers', dx: ['Hypocalcemia', 'Panic attack'], see: ['weakness-numbness'] }
      ],
      symptoms: [
        { text: 'Headache, sweating and palpitations together', dx: ['Pheochromocytoma'], see: ['headache'] },
        { text: 'Flushing, with diarrhea or wheeze', dx: ['Carcinoid syndrome'] },
        { text: 'Flushing, with hives or swelling', dx: ['Anaphylaxis', 'Mastocytosis'] },
        { text: 'Stiffening then rhythmic jerking of all limbs', dx: ['Seizure'], see: ['seizures'] },
        { text: 'Jerking of one limb, spreading to others', dx: ['Seizure'], see: ['seizures'] },
        { text: 'Lip smacking, fumbling or other repetitive movements, with altered awareness', dx: ['Seizure'], see: ['seizures'] },
        { text: 'Staring blankly for a few seconds, unresponsive', dx: ['Seizure'], see: ['seizures'] },
        { text: 'Side-to-side head or pelvic movements, waxing and waning, eyes closed', dx: ['Functional seizures'] },
        { text: 'Confusion or odd behavior', dx: ['Hypoglycemia', 'Seizure'] },
        { text: 'Unable to form new memories, asking the same questions repeatedly, otherwise normal', dx: ['Transient global amnesia'] },
        { text: 'Sudden weakness, numbness or loss of speech', dx: ['TIA'], see: ['weakness-numbness'] },
        { text: 'Sudden muscle weakness or knees buckling, fully aware', dx: ['Narcolepsy with cataplexy'] },
        { text: 'Spinning vertigo with N/V', dx: ['Meniere disease', 'BPPV'], see: ['dizziness'] },
        { text: 'Spasms of the hands and feet', dx: ['Hypocalcemia'] },
        { text: 'Palpitations, dyspnea and tingling', dx: ['Panic attack'], see: ['weakness-numbness'] }
      ],
      awareness: [
        { text: 'Fainted briefly and recovered quickly', dx: ['Vasovagal syncope', 'Arrhythmia'] },
        { text: 'Witness saw jerking; tongue bitten on the side, or incontinence', dx: ['Seizure'], see: ['seizures'] },
        { text: 'Lost awareness but stayed upright, staring or fumbling', dx: ['Seizure'], see: ['seizures'] },
        { text: 'Eyes closed throughout, resisting eye opening', dx: ['Functional seizures'] },
        { text: 'Awake and talking, but no memory of the episode afterward', dx: ['Transient global amnesia'] },
        { text: 'Aware throughout', dx: ['Panic attack', 'Pheochromocytoma'] }
      ],
      duration: [
        { text: 'A few seconds, many times a day (staring spells)', dx: ['Seizure'], see: ['seizures'] },
        { text: 'Seconds, with each head movement', dx: ['BPPV'] },
        { text: 'Seconds to a few minutes', dx: ['Arrhythmia', 'Vasovagal syncope'] },
        { text: '1–3 minutes of jerking (longer than 5 minutes is an emergency)', dx: ['Seizure'], see: ['seizures'] },
        { text: 'Minutes, peaking within 10 minutes', dx: ['Panic attack'] },
        { text: 'Minutes to an hour', dx: ['Pheochromocytoma', 'Hypoglycemia'] },
        { text: 'Prolonged, fluctuating, often longer than 5 minutes', dx: ['Functional seizures'] },
        { text: '20 minutes to several hours of vertigo', dx: ['Meniere disease'] },
        { text: 'Hours', dx: ['Migraine', 'Transient global amnesia'] }
      ],
      relief: [
        { text: 'Eating or a sugary drink, within minutes', dx: ['Hypoglycemia'] },
        { text: 'Lying down', dx: ['Vasovagal syncope', 'Orthostatic hypotension'] },
        { text: 'Keeping the head still', dx: ['BPPV'] },
        { text: 'Bearing down or cold water on the face (vagal maneuvers)', dx: ['Arrhythmia'] },
        'Settled with time alone'
      ],
      recovery: [
        { text: 'Quick, full recovery', dx: ['Vasovagal syncope', 'Arrhythmia'] },
        { text: 'Prolonged confusion or drowsiness', dx: ['Seizure', 'Hypoglycemia'], see: ['seizures'] },
        { text: 'Weakness of one side, resolving over hours (Todd paresis)', dx: ['Seizure', 'TIA'], see: ['seizures', 'weakness-numbness'] },
        { text: 'Sore muscles and a headache', dx: ['Seizure'], see: ['seizures'] },
        { text: 'A memory gap for the episode only, otherwise back to normal', dx: ['Transient global amnesia'] },
        { text: 'Exhausted, with a headache', dx: ['Pheochromocytoma', 'Migraine'] }
      ],
      pattern: [
        { text: 'Clustered around meals or fasting', dx: ['Hypoglycemia'] },
        { text: 'From sleep, or soon after waking', dx: ['Seizure'], see: ['seizures'] },
        { text: 'With daytime sleepiness and sudden sleep attacks', dx: ['Narcolepsy with cataplexy'] },
        { text: 'More frequent and severe over months', dx: ['Pheochromocytoma'] },
        { text: 'Around the time periods change or stop', dx: ['Menopause'], see: ['menstrual-sexual'] },
        { text: 'Recurrent and stereotyped', dx: ['Seizure', 'Migraine'] },
        { text: 'A single episode', dx: ['Transient global amnesia'] }
      ]
    },
    prompts: [
      'Have you checked your BG or BP during an episode? What was it?'
    ]
  },
  associated: [
    { text: 'Any weight loss?', dx: ['Hyperthyroidism', 'Pheochromocytoma'], see: ['weight-change'] },
    { text: 'Any hearing loss or ringing in the ears?', dx: ['Meniere disease'], see: ['senses-change'] },
    { text: 'Any chest pain or dyspnea with the episodes?', dx: ['Arrhythmia'] },
    { text: 'Any wheeze?', dx: ['Carcinoid syndrome', 'Anaphylaxis'] },
    { text: 'Any diarrhea?', dx: ['Carcinoid syndrome', 'Hyperthyroidism'], see: ['diarrhea-constipation'] },
    { text: 'Any change in periods, or night sweats?', dx: ['Menopause'], see: ['temperature-sweating', 'menstrual-sexual'] },
    { text: 'Any heat intolerance or tremor between episodes?', dx: ['Hyperthyroidism'], see: ['temperature-sweating'] },
    { text: 'Any headache with or between episodes?', dx: ['Migraine'], see: ['headache'] },
    { text: 'Any recent head injury?', dx: ['Seizure'] },
    { text: 'Any daytime sleepiness, or vivid dreams when falling asleep?', dx: ['Narcolepsy with cataplexy'] },
    { text: 'Any anxiety, low mood or past trauma?', dx: ['Panic attack', 'Functional seizures'] }
  ],
  redflags: [
    'Loss of consciousness during exertion: arrhythmia or structural heart disease',
    'Seizure lasting more than 5 minutes, or repeated without recovery: status epilepticus',
    'First seizure: urgent assessment and driving advice',
    'Sudden focal weakness, numbness or speech loss: TIA or stroke',
    'Vertigo with a new headache, double vision, slurred speech or unsteadiness: posterior circulation stroke',
    'Confusion or seizure with a low BG: severe hypoglycemia',
    'Headache, sweating and palpitations with very high BP: pheochromocytoma crisis',
    'Flushing with lip or throat swelling, wheeze or hypotension: anaphylaxis',
    'Family history of sudden death: inherited arrhythmia'
  ],
  history: {
    pmh: [
      'Any DM? On insulin or sulfonylureas?',
      'Any heart disease or known arrhythmia?',
      'Any epilepsy, migraine or previous stroke?',
      'Any head injury, childhood febrile seizures, meningitis or brain surgery?',
      'Any thyroid or parathyroid surgery?',
      'Any anxiety, panic disorder or past trauma?'
    ],
    meds: [
      'Any insulin or sulfonylureas (hypoglycemia)?',
      'Any antiseizure medications (breakthrough seizures)? Any missed doses or recent changes?',
      'Any tramadol, bupropion or antipsychotics (lower seizure threshold)?',
      'Any antihypertensives, diuretics or alpha-blockers (orthostatic hypotension)?',
      'Any MAOIs, decongestants or stimulants (pheochromocytoma-like spells)?',
      'Any recently stopped alcohol, opioids or benzodiazepines (withdrawal)?'
    ],
    fhx: [
      'Any family history of sudden cardiac death, epilepsy or endocrine tumors (MEN, VHL)?'
    ],
    shx: [
      'How much alcohol and caffeine do you drink? Any recreational drugs?',
      'How are you sleeping? Any sleep deprivation?',
      'Do you drive? (seizures and syncope affect driving)'
    ],
    sr: [
      'Cardiovascular: any palpitations, chest pain or syncope?',
      'Gastrointestinal: any diarrhea?',
      'Endocrine: any heat intolerance or weight loss?',
      'Neurologic: any headache, weakness, numbness, vertigo or hearing change?',
      'Psychiatric: any anxiety or low mood?'
    ]
  },
  differentials: [
    { name: 'Hypoglycemia', clues: 'Shakiness, sweating, hunger, confusion; relieved by eating; insulin, sulfonylureas, insulinoma' },
    { name: 'Pheochromocytoma', clues: 'Headache, sweating and palpitations together; very high BP during episodes' },
    { name: 'Carcinoid syndrome', clues: 'Flushing with diarrhea and wheeze' },
    { name: 'Menopause', clues: 'Hot flashes, night sweats, change in periods' },
    { name: 'Hyperthyroidism', clues: 'Background heat intolerance, weight loss, tremor' },
    { name: 'Hypocalcemia', clues: 'Tingling around the mouth and fingers, spasms; after neck surgery' },
    { name: 'Seizure', clues: 'Focal (aura, automatisms, altered awareness), generalized tonic-clonic (jerking, tongue biting, prolonged confusion) or absence (brief staring, many times a day)' },
    { name: 'Functional seizures', clues: 'Eyes closed, fluctuating side-to-side movements, prolonged; past trauma; also called psychogenic nonepileptic seizures' },
    { name: 'TIA', clues: 'Sudden focal weakness, numbness or speech loss; vascular risk factors' },
    { name: 'Migraine', clues: 'Visual aura, headache for hours, nausea, recurrent pattern' },
    { name: 'BPPV', clues: 'Seconds of spinning vertigo with head movement, rolling over in bed' },
    { name: 'Meniere disease', clues: 'Vertigo for 20 minutes to hours, ear fullness, tinnitus, fluctuating hearing loss' },
    { name: 'Transient global amnesia', clues: 'Hours of being unable to form new memories, repeated questioning; older; resolves within 24 hours' },
    { name: 'Narcolepsy with cataplexy', clues: 'Sudden weakness with laughter, fully aware; daytime sleepiness, sleep attacks' },
    { name: 'Panic attack', clues: 'Fear, palpitations, dyspnea, tingling; peaks within minutes; well between' },
    { name: 'Arrhythmia', clues: 'Abrupt racing heart, lightheadedness, sometimes syncope' },
    { name: 'Vasovagal syncope', clues: 'Triggered by standing, pain or blood; warmth and nausea first; quick recovery' },
    { name: 'Orthostatic hypotension', clues: 'Lightheadedness on standing; dehydration, medications, POTS' },
    { name: 'Anaphylaxis', clues: 'Flushing, hives, swelling, wheeze, hypotension after a trigger' },
    { name: 'Mastocytosis', clues: 'Recurrent flushing and hives without a clear trigger' },
    { name: 'Withdrawal', clues: 'Recently stopped alcohol, opioids or benzodiazepines; tremor, sweating' }
  ]
});
