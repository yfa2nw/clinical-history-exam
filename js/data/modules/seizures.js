/*
 * Seizures: a multi-system complaint (epilepsy and structural brain disease, plus provoked
 * seizures from metabolic, drug, alcohol, infective and obstetric causes). Spells covers
 * undifferentiated episodes and the mimics; this module classifies the seizure, finds a
 * cause and covers safety.
 *
 * Awaiting hand-off (answers with no matching presenting complaint yet; add `see`
 * and remove the line when one is added; see CLAUDE.md, "Multi-system complaints"):
 *   - Fever, chills or neck stiffness                                      → fever complaint
 *   - Could you be pregnant or have you recently given birth?              → pregnancy complaint
 *   - Anxiety, low mood or past trauma                                     → mood / anxiety complaint
 */
CHE.registerModule({
  id: 'seizures',
  title: 'Seizures',
  subtitle: 'First seizure or known epilepsy',
  multiSystem: true,
  aka: ['fits', 'convulsions', 'epilepsy', 'blackout with jerking', 'absence', 'staring spells', 'tonic-clonic', 'status epilepticus'],
  tags: ['neurologic'],
  summary: 'Take one seizure from start to finish, ideally from a witness. Decide whether it was a seizure (or a mimic such as syncope), what type (focal or generalized), and whether it was provoked. Then ask about injuries, driving and safety.',
  ref: '',
  related: ['spells', 'headache', 'weakness-numbness', 'movement-change', 'nausea-vomiting', 'polyuria-polydipsia', 'weight-change', 'memory-thinking'],
  pc: {
    framework: 'episode',
    notes: {
      trigger: [
        { text: 'Sleep deprivation, alcohol or flashing lights', dx: ['Generalized tonic-clonic seizure', 'Myoclonic seizure'] },
        { text: 'Missed antiseizure medication, vomiting, or a new drug', dx: ['Breakthrough seizure'] },
        { text: 'Stopping alcohol or benzodiazepines in the past 1–2 days', dx: ['Provoked seizure'] },
        { text: 'Fasting or a missed meal, on insulin or sulfonylureas', dx: ['Provoked seizure'] },
        { text: 'Fever, in a child aged 6 months to 5 years', dx: ['Febrile seizure'] },
        { text: 'A recent head injury', dx: ['Structural brain lesion'] },
        { text: 'Standing up, pain or the sight of blood', dx: ['Convulsive syncope'], see: ['spells'] },
        { text: 'Stress, or an emotional situation', dx: ['Functional seizures'] }
      ],
      warning: [
        { text: 'A rising feeling in the stomach, deja vu or sudden fear', dx: ['Focal seizure'] },
        { text: 'A strange smell or taste', dx: ['Focal seizure'] },
        { text: 'Jerking or tingling of one hand, spreading up the arm', dx: ['Focal seizure'] },
        { text: 'Colored flashing lights or shapes', dx: ['Focal seizure'], see: ['headache'] },
        { text: 'No warning at all', dx: ['Generalized tonic-clonic seizure'] },
        { text: 'Lightheaded, sweaty, vision graying', dx: ['Convulsive syncope'], see: ['spells'] }
      ],
      symptoms: [
        { text: 'Stiffening, a cry, then rhythmic jerking of all limbs', dx: ['Generalized tonic-clonic seizure'] },
        { text: 'Head and eyes turning to one side before the jerking', dx: ['Focal seizure'] },
        { text: 'Lip smacking, chewing or fumbling, with altered awareness', dx: ['Focal seizure'] },
        { text: 'Staring blankly for a few seconds, unresponsive', dx: ['Absence seizure'] },
        { text: 'Brief jerks of the arms, dropping things, especially in the morning', dx: ['Myoclonic seizure'], see: ['movement-change'] },
        { text: 'Sudden loss of tone and falling', dx: ['Atonic seizure'] },
        { text: 'Side-to-side head or pelvic movements, waxing and waning, eyes closed', dx: ['Functional seizures'] },
        { text: 'A few jerks after going pale and limp', dx: ['Convulsive syncope'], see: ['spells'] }
      ],
      awareness: [
        { text: 'Tongue bitten on the side', dx: ['Generalized tonic-clonic seizure'] },
        { text: 'Incontinence (not specific)', dx: ['Generalized tonic-clonic seizure', 'Convulsive syncope'] },
        { text: 'Aware throughout, could hear people', dx: ['Focal seizure', 'Functional seizures'] },
        { text: 'Unresponsive but stayed upright', dx: ['Focal seizure', 'Absence seizure'] },
        { text: 'Eyes closed throughout, resisting eye opening', dx: ['Functional seizures'] }
      ],
      duration: [
        { text: 'A few seconds, many times a day', dx: ['Absence seizure'] },
        { text: '1–3 minutes of jerking', dx: ['Generalized tonic-clonic seizure'] },
        { text: 'More than 5 minutes, or repeated without recovering in between', dx: ['Status epilepticus'] },
        { text: 'Prolonged and fluctuating, often more than 5 minutes', dx: ['Functional seizures'] },
        { text: 'Seconds, ending once lying flat', dx: ['Convulsive syncope'] }
      ],
      relief: [
        'Stopped on its own',
        { text: 'Needed rescue medication or an ambulance', dx: ['Status epilepticus'] }
      ],
      recovery: [
        { text: 'Confused and drowsy for minutes to hours', dx: ['Generalized tonic-clonic seizure', 'Focal seizure'] },
        { text: 'Back to normal straight away', dx: ['Absence seizure', 'Convulsive syncope'] },
        { text: 'Weakness of one side for hours (Todd paresis)', dx: ['Focal seizure', 'Structural brain lesion'], see: ['weakness-numbness'] },
        { text: 'Sore muscles and a headache', dx: ['Generalized tonic-clonic seizure'] },
        { text: 'Injuries: shoulder dislocation, burns, head injury', dx: ['Generalized tonic-clonic seizure'] },
        { text: 'Crying or distressed, but alert', dx: ['Functional seizures'] }
      ],
      pattern: [
        { text: 'A single, first episode', dx: ['Provoked seizure', 'Structural brain lesion'] },
        { text: 'Only from sleep', dx: ['Focal seizure', 'Generalized tonic-clonic seizure'] },
        { text: 'Jerks within an hour of waking, since the teenage years', dx: ['Myoclonic seizure'] },
        { text: 'More frequent despite the same medication', dx: ['Breakthrough seizure', 'Structural brain lesion'] },
        { text: 'Around periods', dx: ['Breakthrough seizure'], see: ['menstrual-sexual'] }
      ]
    },
    prompts: [
      {
        text: 'Is this your first seizure, or do you have epilepsy?',
        options: [
          { text: 'First seizure', dx: ['Provoked seizure', 'Structural brain lesion'] },
          { text: 'Known epilepsy: what is different this time?', dx: ['Breakthrough seizure'] }
        ]
      },
      { text: 'Before this, any smaller episodes you may not have recognized: staring, morning jerks, deja vu?', dx: ['Absence seizure', 'Myoclonic seizure', 'Focal seizure'] }
    ]
  },
  callouts: [
    {
      variant: 'note',
      title: 'Seizure or syncope?',
      text: 'A few jerks are common in a faint, so jerking alone doesn\'t mean a seizure. Favoring a seizure: no clear trigger, a focal warning, head turning, tongue biting on the side, and prolonged confusion afterward. Favoring syncope: a trigger (standing, pain, blood), lightheadedness and sweating first, pallor, and a quick recovery.'
    },
    {
      variant: 'tip',
      title: 'Safety',
      text: 'After any seizure, give driving advice according to local rules, and advise against bathing alone, swimming alone, working at heights or with machinery until assessed. In anyone who could become pregnant, ask about contraception and pregnancy plans (valproate, enzyme-inducing drugs).'
    }
  ],
  redflags: [
    'Seizure lasting more than 5 minutes, or repeated without recovery: status epilepticus',
    'Not back to normal after the seizure: ongoing seizure, meningitis or encephalitis, or a structural lesion',
    'First seizure with fever, headache, neck stiffness or confusion: meningitis or encephalitis',
    'New focal weakness after a seizure: structural lesion (Todd paresis is a diagnosis of exclusion)',
    'Seizure after a head injury or on anticoagulants: intracranial hemorrhage',
    'Seizure in pregnancy or postpartum: eclampsia',
    'Collapse during exertion, or with palpitations and no confusion afterward: cardiac syncope'
  ],
  history: {
    pmh: [
      'Any epilepsy? What type, how often, and when was the last seizure?',
      'Any febrile seizures in childhood, head injury, meningitis, stroke or brain surgery?',
      'Any DM, CKD, liver disease or cancer?'
    ],
    meds: [
      'Any antiseizure medications (breakthrough seizures)? Any missed doses, recent changes, or vomiting them up?',
      'Any tramadol, bupropion, antipsychotics or ciprofloxacin (lower seizure threshold)?',
      'Any insulin or sulfonylureas (hypoglycemia)?',
      'Any diuretics or SSRIs (hyponatremia)?',
      'Any hormonal contraception (interactions with enzyme-inducing antiseizure medications)?',
      'Any recently stopped benzodiazepines (withdrawal)?'
    ],
    fhx: [
      'Any family history of epilepsy or febrile seizures?',
      'Any family history of sudden death (inherited arrhythmia)?'
    ],
    shx: [
      'How much alcohol do you drink? When was your last drink?',
      'Any recreational drugs?',
      'How are you sleeping?',
      'Do you drive? What is your work? (driving and safety advice)',
      'Could you become pregnant, or are you planning a pregnancy? (valproate)'
    ],
    sr: [
      'General: any fever or weight loss?',
      'Cardiovascular: any palpitations, chest pain or syncope?',
      'Gastrointestinal: any vomiting or diarrhea?',
      'Genitourinary & reproductive: LMP? Could you be pregnant?',
      'Endocrine: any thirst or polyuria?',
      'Psychiatric: any anxiety or low mood?'
    ]
  },
  associated: [
    { text: 'Any headache before or since?', dx: ['Structural brain lesion', 'Eclampsia'], see: ['headache'] },
    { text: 'Any weakness, numbness or slurred speech?', dx: ['Structural brain lesion'], see: ['weakness-numbness'] },
    { text: 'Any tingling around the mouth, or muscle spasms?', dx: ['Provoked seizure'], see: ['weakness-numbness'] },
    { text: 'Any recent head injury?', dx: ['Structural brain lesion'] },
    { text: 'Any confusion or drowsiness that hasn\'t cleared?', dx: ['Status epilepticus', 'Meningitis or encephalitis'], see: ['memory-thinking'] },
    { text: 'Any fever, chills or neck stiffness?', dx: ['Meningitis or encephalitis', 'Febrile seizure'] },
    { text: 'Any weight loss?', dx: ['Structural brain lesion'], see: ['weight-change'] },
    { text: 'Any palpitations or chest pain before the episode?', dx: ['Convulsive syncope'], see: ['spells'] },
    { text: 'Any vomiting or diarrhea?', dx: ['Provoked seizure', 'Breakthrough seizure'], see: ['nausea-vomiting', 'diarrhea-constipation'] },
    { text: 'Could you be pregnant or have you recently given birth?', dx: ['Eclampsia'] },
    { text: 'Any thirst or polyuria, or known DM?', dx: ['Provoked seizure'], see: ['polyuria-polydipsia'] },
    { text: 'Any anxiety, low mood or past trauma?', dx: ['Functional seizures'] }
  ],
  differentials: [
    { name: 'Focal seizure', clues: 'Warning (rising stomach feeling, deja vu, smell, jerking of one limb), automatisms, altered or preserved awareness; may spread to both sides' },
    { name: 'Generalized tonic-clonic seizure', clues: 'No warning, stiffening then jerking, tongue biting on the side, prolonged confusion, sore muscles' },
    { name: 'Absence seizure', clues: 'Seconds of staring, many times a day, immediate recovery; usually children' },
    { name: 'Myoclonic seizure', clues: 'Brief arm jerks after waking, dropping things; teenagers (juvenile myoclonic epilepsy)' },
    { name: 'Atonic seizure', clues: 'Sudden loss of tone and falls; usually with other seizure types' },
    { name: 'Status epilepticus', clues: 'More than 5 minutes, or repeated without recovery; emergency' },
    { name: 'Breakthrough seizure', clues: 'Known epilepsy; missed doses, vomiting, interacting drugs, sleep loss, illness, alcohol' },
    { name: 'Provoked seizure', clues: 'Hypoglycemia, hyponatremia, hypocalcemia, alcohol or benzodiazepine withdrawal, drugs' },
    { name: 'Structural brain lesion', clues: 'Stroke, tumor, head injury, bleeding; focal onset, focal weakness, progressive headache' },
    { name: 'Meningitis or encephalitis', clues: 'Fever, headache, neck stiffness, confusion that does not clear' },
    { name: 'Febrile seizure', clues: 'Child 6 months to 5 years with fever; brief, generalized' },
    { name: 'Eclampsia', clues: 'Pregnancy over 20 weeks or postpartum, HTN, headache, vision change' },
    { name: 'Convulsive syncope', clues: 'Trigger, lightheaded and pale first, a few jerks, quick recovery' },
    { name: 'Functional seizures', clues: 'Eyes closed, fluctuating side-to-side movements, prolonged; past trauma; also called psychogenic nonepileptic seizures' }
  ]
});
