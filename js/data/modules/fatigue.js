/*
 * Fatigue: a multi-system complaint. Clarify what "tired" means, then screen the
 * systems; most causes reveal themselves through associated symptoms (`see`).
 *
 * Awaiting hand-off (answers with no matching presenting complaint yet; add `see`
 * and remove the line when one is added; see CLAUDE.md, "Multi-system complaints"):
 *   - Breathless with exertion; dyspnea or palpitations                 → dyspnea / palpitations complaint
 *   - Sleepy, snoring, unrefreshing sleep                               → sleep complaint
 *   - Low mood, loss of interest, anxiety                               → mood complaint
 */
CHE.registerModule({
  id: 'fatigue',
  title: 'Fatigue',
  subtitle: 'Tiredness, low energy, sleepiness',
  multiSystem: true,
  aka: ['tiredness', 'tired all the time', 'lethargy', 'low energy', 'exhaustion'],
  tags: ['endocrine'],
  summary: 'Fatigue is common and nonspecific. Clarify what the patient means (sleepiness, weakness, dyspnea or low mood), then screen the systems; most causes reveal themselves through the associated symptoms.',
  ref: '',
  related: ['weight-change', 'temperature-sweating', 'polyuria-polydipsia', 'skin-changes', 'swelling', 'appearance-change', 'menstrual-sexual', 'weakness-numbness', 'dizziness', 'urinary-symptoms', 'diarrhea-constipation', 'memory-thinking', 'movement-change'],
  pc: {
    framework: 'symptom',
    skip: ['site', 'radiation'],
    notes: {
      onset: [
        { text: 'After an infection', dx: ['Post-viral fatigue', 'ME/CFS'] },
        { text: 'Gradually, over months', dx: ['Hypothyroidism', 'Malignancy'] }
      ],
      character: [
        { text: 'Sleepy, dozing off during the day', dx: ['OSA', 'Insomnia'] },
        { text: 'Weak muscles: difficulty climbing stairs or rising from a chair', dx: ['Myopathy'], see: ['weakness-numbness'] },
        { text: 'Breathless with exertion', dx: ['Anemia', 'HF'] },
        { text: 'No energy or motivation, low mood', dx: ['Depression'] }
      ],
      timing: [
        { text: 'Weeks, improving', dx: ['Post-viral fatigue'] },
        { text: 'More than 6 months', dx: ['ME/CFS'] },
        { text: 'Worst in the morning, improving through the day', dx: ['Depression'] }
      ],
      exacerbating: [
        { text: 'Worse for a day or more after exertion', dx: ['ME/CFS'] },
        { text: 'Not relieved by sleep; wakes unrefreshed', dx: ['OSA', 'ME/CFS'] }
      ],
      severity: [
        'Off work, or needing help at home'
      ]
    },
    prompts: [
      { text: 'How are you sleeping? Do you snore, or wake unrefreshed?', dx: ['OSA', 'Insomnia'] }
    ]
  },
  associated: [
    { text: 'Any weight loss or weight gain?', dx: ['Malignancy', 'Hypothyroidism'], see: ['weight-change'] },
    { text: 'Any fever or night sweats?', dx: ['Chronic infection', 'Malignancy'], see: ['temperature-sweating'] },
    { text: 'Any pallor or jaundice?', dx: ['Anemia', 'Liver disease'], see: ['skin-changes'] },
    { text: 'Any dyspnea or ankle swelling?', dx: ['HF', 'Anemia'], see: ['swelling'] },
    { text: 'Any hematochezia, melena or heavy periods?', dx: ['Anemia'], see: ['fecal-symptoms', 'menstrual-sexual'] },
    { text: 'Any reduced urine output, itch or swelling?', dx: ['CKD'], see: ['swelling'] },
    { text: 'Any cold intolerance, constipation or dry skin?', dx: ['Hypothyroidism'], see: ['temperature-sweating'] },
    { text: 'Any thirst or polyuria?', dx: ['DM', 'Hypercalcemia'], see: ['polyuria-polydipsia'] },
    { text: 'Any dizziness on standing, salt craving or darker skin?', dx: ['Addison disease'], see: ['dizziness', 'appearance-change'] },
    { text: 'Any low mood, loss of interest or anxiety?', dx: ['Depression'] }
  ],
  redflags: [
    'Fatigue with weight loss, fever or night sweats: malignancy or chronic infection',
    'Fatigue with dyspnea at rest, chest pain or syncope: severe anemia or HF',
    'Dizziness on standing, vomiting and abdominal pain: adrenal crisis',
    'Thoughts of self-harm: depression with suicide risk'
  ],
  history: {
    pmh: [
      'Any anemia, thyroid disease, DM, CKD, liver disease or heart disease?',
      'Any recent infection (e.g. infectious mononucleosis)?',
      'Any depression or anxiety?'
    ],
    meds: [
      'Any beta-blockers, antihistamines, opioids or sedatives (fatigue)?',
      'Any statins (myopathy)?',
      'Any corticosteroid course stopped abruptly (adrenal insufficiency)?'
    ],
    fhx: [
      'Any family history of thyroid disease, DM or anemia?'
    ],
    shx: [
      'How many hours do you sleep? Any shift work?',
      'How much alcohol, caffeine and recreational drugs do you use?',
      'Any stress at work or home? Do you feel safe at home?'
    ],
    sr: [
      'General: any fever, night sweats or weight change?',
      'Cardiovascular: any dyspnea or palpitations?',
      'Gastrointestinal: any hematochezia or melena?',
      'Genitourinary & reproductive: are your periods heavy?',
      'Endocrine: any cold intolerance, thirst or polyuria?',
      'Psychiatric: any low mood or poor sleep?'
    ]
  },
  differentials: [
    { name: 'Anemia', clues: 'Pallor, dyspnea on exertion, blood loss' },
    { name: 'Hypothyroidism', clues: 'Cold intolerance, weight gain, constipation, dry skin' },
    { name: 'DM', clues: 'Thirst, polyuria, weight loss' },
    { name: 'Addison disease', clues: 'Dizziness on standing, salt craving, darker skin, weight loss' },
    { name: 'Hypercalcemia', clues: 'Thirst, constipation, confusion' },
    { name: 'CKD', clues: 'Known kidney disease, itch, swelling' },
    { name: 'Liver disease', clues: 'Jaundice, alcohol, abdominal swelling' },
    { name: 'HF', clues: 'Dyspnea, orthopnea, ankle swelling' },
    { name: 'OSA', clues: 'Snoring, witnessed apneas, daytime sleepiness, morning headache' },
    { name: 'Insomnia', clues: 'Difficulty falling or staying asleep' },
    { name: 'Depression', clues: 'Low mood, loss of interest, poor sleep' },
    { name: 'Chronic infection', clues: 'Fever, night sweats; TB, HIV, endocarditis' },
    { name: 'Malignancy', clues: 'Weight loss, night sweats, older' },
    { name: 'Myopathy', clues: 'Proximal weakness; Cushing syndrome, thyroid disease, statins' },
    { name: 'Post-viral fatigue', clues: 'After an infection, improving over weeks' },
    { name: 'ME/CFS', clues: 'More than 6 months, worse after exertion, unrefreshing sleep' }
  ]
});
