CHE.registerModule({
  id: 'polyuria-polydipsia',
  title: 'Polyuria, polydipsia and polyphagia',
  subtitle: 'The three Ps: urine, thirst, hunger',
  aka: ['thirst', 'drinking a lot', 'passing a lot of urine', 'large volumes of urine', 'hunger', 'eating a lot', 'polyuria', 'polydipsia', 'polyphagia'],
  tags: ['endocrine', 'renal'],
  summary: 'The "three Ps". DM is the commonest cause, but DI, hypercalcemia and primary polydipsia matter. Switch on only the features that apply.',
  ref: '',
  related: ['urinary-symptoms', 'weight-change', 'fatigue', 'spells', 'senses-change', 'headache', 'diarrhea-constipation', 'incontinence', 'nausea-vomiting', 'abdominal-pain', 'seizures', 'dizziness', 'appearance-change', 'menstrual-sexual', 'weakness-numbness'],
  // Shared by all features (rendered as "All features")
  pc: {
    prompts: [
      'When did it start? Was it sudden or gradual?',
      'Do you wake at night to drink or to void?'
    ]
  },
  parts: [
    {
      id: 'polyuria',
      title: 'Polyuria',
      summary: 'Passing large volumes of urine (more than about 3 L a day), not just voiding often. Confirm true polyuria with a frequency–volume chart, then separate a glucose-driven diuresis (DM) from a water diuresis (DI, primary polydipsia).',
      pc: {
        prompts: [
          {
            text: 'Do you pass large amounts each time, or small amounts often?',
            options: [
              { text: 'Large amounts (true polyuria)', dx: ['DM', 'DI'] },
              { text: 'Small amounts often (frequency, not polyuria)', see: ['urinary-symptoms'] }
            ]
          },
          'Could you keep a bladder diary (frequency–volume chart) for 3 days?',
          { text: 'Is the urine pale and watery, even first thing in the morning?', dx: ['DI', 'Primary polydipsia'] },
          { text: 'Did it start suddenly, after a head injury or brain surgery?', dx: ['DI'] }
        ]
      },
      associated: [
        { text: 'Any weight loss?', dx: ['DM'], see: ['weight-change'] },
        { text: 'Any fatigue?', dx: ['DM', 'Hypercalcemia'], see: ['fatigue'] },
        { text: 'Any constipation, abdominal pain or confusion?', dx: ['Hypercalcemia'], see: ['memory-thinking'] },
        { text: 'Any headache or vision change?', dx: ['DI'], see: ['headache', 'senses-change'] }
      ],
      redflags: [
        'Polyuria with N/V, abdominal pain and drowsiness: DKA',
        'Polyuria with confusion and severe dehydration in an older patient: hyperosmolar hyperglycemic state',
        'Polyuria without access to water (older, unwell): hypernatremia',
        'New polyuria after a head injury or pituitary surgery: central DI'
      ],
      history: {
        pmh: [
          'Any DM, CKD or hypercalcemia?',
          'Any recent head injury or brain surgery?'
        ],
        meds: [
          'Any lithium (nephrogenic DI)?',
          'Any diuretics or SGLT2 inhibitors (polyuria)?',
          'Any corticosteroids (hyperglycemia)?'
        ],
        fhx: [
          'Any family history of DM?'
        ],
        shx: [
          'How much fluid, caffeine and alcohol do you drink a day?'
        ],
        sr: [
          'Endocrine: any weight loss or heat intolerance?',
          'Neurologic: any headache or vision change?'
        ]
      },
      differentials: [
        { name: 'DM', clues: 'Thirst, weight loss, fatigue, recurrent infections' },
        { name: 'DI', clues: 'Large volumes of dilute urine day and night; lithium, head injury' },
        { name: 'Primary polydipsia', clues: 'Drinking comes first; psychiatric illness' },
        { name: 'Hypercalcemia', clues: 'Thirst, constipation, confusion, abdominal pain' },
        { name: 'Medication-related polyuria', clues: 'Diuretics, SGLT2 inhibitors, lithium' },
        { name: 'CKD', clues: 'Loss of concentrating ability, nocturia' }
      ]
    },
    {
      id: 'polydipsia',
      title: 'Polydipsia',
      summary: 'Excessive thirst. Usually a response to water loss (DM, DI, hypercalcemia), but in primary polydipsia the drinking comes first.',
      pc: {
        prompts: [
          {
            text: 'Which came first: the thirst, or passing more urine?',
            options: [
              { text: 'Passing more urine, then thirst', dx: ['DM', 'DI'] },
              { text: 'Drinking first, then passing more urine', dx: ['Primary polydipsia'] }
            ]
          },
          { text: 'Do you crave very cold water, even at night?', dx: ['DI'] },
          {
            text: 'Is it a dry mouth rather than thirst?',
            options: ['With dry eyes (Sjögren syndrome)', 'From medications (anticholinergics, antipsychotics)']
          },
          'How much do you drink a day?'
        ]
      },
      associated: [
        { text: 'Any polyuria? (tick Polyuria)', dx: ['DM', 'DI'] },
        { text: 'Any weight loss or fatigue?', dx: ['DM'], see: ['weight-change', 'fatigue'] },
        { text: 'Any constipation, confusion or bone pain?', dx: ['Hypercalcemia'], see: ['memory-thinking'] },
        { text: 'Any psychiatric illness?', dx: ['Primary polydipsia'] }
      ],
      redflags: [
        'Thirst with confusion or drowsiness: hypernatremia or a hyperglycemic emergency',
        'Thirst, polyuria, vomiting and abdominal pain: DKA'
      ],
      history: {
        pmh: [
          'Any DM, hypercalcemia, Sjögren syndrome or psychiatric illness?'
        ],
        meds: [
          'Any lithium (nephrogenic DI)?',
          'Any anticholinergics or antipsychotics (dry mouth)?'
        ],
        shx: [
          'How much fluid do you drink a day?'
        ],
        sr: [
          'Endocrine: any polyuria or weight loss?'
        ]
      },
      differentials: [
        { name: 'DM', clues: 'Polyuria, weight loss, fatigue' },
        { name: 'DI', clues: 'Craving cold water, large volumes of dilute urine' },
        { name: 'Primary polydipsia', clues: 'Drinking comes first; psychiatric illness' },
        { name: 'Hypercalcemia', clues: 'Constipation, confusion, bone pain' }
      ]
    },
    {
      id: 'polyphagia',
      title: 'Polyphagia',
      summary: 'Increased hunger. Weight loss despite eating more points to DM or hyperthyroidism; weight gain points to medications or eating patterns.',
      pc: {
        prompts: [
          {
            text: 'Has your weight changed?',
            options: [
              { text: 'Lost weight despite eating more', dx: ['DM', 'Hyperthyroidism'], see: ['weight-change'] },
              { text: 'Gained weight', dx: ['Medication-related hunger', 'Binge eating disorder'], see: ['weight-change'] }
            ]
          },
          { text: 'Do you get sudden hunger with shakiness or sweating, relieved by eating?', dx: ['Hypoglycemia'], see: ['spells'] },
          'When did it start?'
        ]
      },
      associated: [
        { text: 'Any thirst or polyuria? (tick Polydipsia or Polyuria)', dx: ['DM'] },
        { text: 'Any heat intolerance, palpitations or tremor?', dx: ['Hyperthyroidism'], see: ['temperature-sweating'] },
        { text: 'Any episodes of eating large amounts with loss of control?', dx: ['Binge eating disorder'] }
      ],
      redflags: [
        'Recurrent hypoglycemia without DM treatment: insulinoma',
        'Weight loss despite eating more: DM or hyperthyroidism'
      ],
      history: {
        pmh: [
          'Any DM or thyroid disease?'
        ],
        meds: [
          'Any insulin or sulfonylureas (hypoglycemia)?',
          'Any corticosteroids or antipsychotics (increased appetite)?'
        ],
        sr: [
          'Endocrine: any heat intolerance or weight change?'
        ]
      },
      differentials: [
        { name: 'DM', clues: 'Weight loss, thirst, polyuria' },
        { name: 'Hyperthyroidism', clues: 'Weight loss, heat intolerance, palpitations, tremor' },
        { name: 'Hypoglycemia', clues: 'Sudden hunger with shakiness and sweating; insulin, sulfonylureas, insulinoma' },
        { name: 'Medication-related hunger', clues: 'Corticosteroids, antipsychotics' },
        { name: 'Binge eating disorder', clues: 'Episodes of eating large amounts with loss of control' }
      ]
    }
  ]
});
