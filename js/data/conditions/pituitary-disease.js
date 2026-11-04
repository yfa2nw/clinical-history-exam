/*
 * Pituitary disease: prolactinoma, nonfunctioning adenoma, acromegaly, Cushing disease and
 * hypopituitarism. The review centers on the tumor type and size, vision, which hormones
 * are too high or replaced, sick day rules on hydrocortisone, DI, and surgery or radiotherapy.
 */
CHE.registerCondition({
  id: 'pituitary-disease',
  title: 'Pituitary disease',
  aka: ['pituitary adenoma', 'pituitary tumor', 'prolactinoma', 'acromegaly', 'Cushing disease', 'hypopituitarism', 'diabetes insipidus', 'arginine vasopressin deficiency'],
  tags: ['endocrine'],
  summary: 'Establish the tumor type and size, whether it makes too much of a hormone (prolactin, growth hormone, ACTH) or causes deficiencies, and the effect on vision. Review hormone replacement (hydrocortisone, levothyroxine, sex hormones, growth hormone, desmopressin), sick day rules, and surgery or radiotherapy.',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      cause: [
        {
          text: 'Which type of pituitary problem do you have?',
          options: [
            'Prolactinoma',
            'Nonfunctioning adenoma',
            'Acromegaly (too much growth hormone)',
            'Cushing disease (too much ACTH)',
            'Hypopituitarism after surgery, radiotherapy, injury or bleeding',
            'DI'
          ]
        }
      ],
      stage: [
        'How big is the tumor? Is it pressing on the nerves to the eyes?',
        'Which hormones are too high, and which are low?'
      ],
      understanding: ['If you take hydrocortisone, do you know what an adrenal crisis is, and how to prevent one?']
    },
    'risk-factors': {
      family: ['Any family history of pituitary, parathyroid or pancreatic tumors? (MEN)'],
      genetic: ['Have you had genetic testing?'],
      exposures: [
        'Any head injury, brain surgery or radiotherapy to the head?',
        'Do you take medications that raise prolactin (e.g. antipsychotics, metoclopramide)?'
      ]
    },
    presentation: {
      how: [
        {
          text: 'How was it first found?',
          options: [
            'Headaches or vision loss (narrowing to the sides)',
            'Galactorrhea, irregular periods, infertility or reduced libido',
            'Enlarging hands and feet or facial changes (acromegaly)',
            'Weight gain, striae and thin skin (Cushing disease)',
            'Fatigue or other symptoms of low hormones',
            'An MRI done for another reason'
          ]
        }
      ],
      admitted: ['Were you admitted with sudden headache and vision loss (pituitary apoplexy)?']
    },
    investigations: {
      blood: ['Which pituitary hormones were tested (prolactin, IGF-1, cortisol, thyroid, sex hormones)?'],
      imaging: ['When was your last pituitary MRI? Has the tumor changed size?'],
      functional: ['Have you had visual field testing? When was the last test?'],
      monitoring: ['How often are your hormone levels, MRI and vision checked?'],
      results: ['Are your hormone levels controlled? Is your sodium normal?']
    },
    management: {
      education: [
        'If on hydrocortisone: do you carry a steroid emergency card and an emergency injection kit?',
        'Do you know which hormones you are replacing, and why?'
      ],
      medications: [
        'Are you on cabergoline or bromocriptine (prolactinoma)?',
        'Are you on a somatostatin analog or pegvisomant (acromegaly)?',
        'Which replacements do you take: hydrocortisone, levothyroxine, estrogen or testosterone, growth hormone, desmopressin?'
      ],
      sideEffects: [
        'On cabergoline: any nausea, dizziness, impulsive behavior (gambling, shopping) or mood changes?',
        'On desmopressin: any headache, nausea or swelling? (low sodium)'
      ],
      sickDay: [
        'When unwell with a fever, do you know to double your hydrocortisone, and use the injection if you are vomiting?',
        'On desmopressin: do you know to drink only to thirst, and to seek advice if you have vomiting or diarrhea?'
      ],
      procedures: [
        'Have you had pituitary surgery (through the nose)? When?',
        'Have you had radiotherapy to the pituitary?'
      ],
      missed: ['Do you take every replacement every day?']
    },
    complications: {
      disease: [
        'Any loss of vision or visual field?',
        'Any infertility or bone thinning from low sex hormones?',
        'In acromegaly: any HTN, DM, sleep apnea, joint pain or colon polyps?',
        'In Cushing disease: any DM, HTN, osteoporosis or clots?'
      ],
      treatment: [
        'After surgery: any CSF leak, DI or new hormone deficiencies?',
        'After radiotherapy: any new hormone deficiencies over the years?'
      ],
      admissions: ['Any admissions for an adrenal crisis, low or high sodium, or apoplexy?']
    },
    'ongoing-symptoms': {
      current: [
        {
          text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
          options: [
            'Feeling well on your usual replacements',
            'Mild fatigue',
            'Stable, mild headaches'
          ]
        }
      ]
    },
    'social-impact': {
      transport: ['Has your vision been checked against the driving standard?'],
      work: ['Has fatigue or vision affected your work or study?'],
      relationships: [
        'Any reduced libido or erectile dysfunction?',
        'Are you planning a pregnancy? (some tumors grow in pregnancy, and fertility treatment may be needed)'
      ],
      mood: ['Any low mood or anxiety? Any changes in your appearance that worry you?']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'Sudden severe headache with vision loss or diplopia: pituitary apoplexy', see: ['headache', 'senses-change'] },
          { text: 'Worsening vision or narrowing of the visual field: tumor growth', see: ['senses-change'] },
          { text: 'Vomiting, collapse or unable to take hydrocortisone: adrenal crisis', see: ['nausea-vomiting', 'dizziness'] },
          { text: 'Polyuria and extreme thirst: DI or high BG', see: ['polyuria-polydipsia'] },
          { text: 'Confusion, headache or vomiting on desmopressin: low sodium', see: ['memory-thinking'] },
          { text: 'Clear, watery discharge from the nose after surgery: CSF leak' },
          { text: 'Returning headaches, galactorrhea or enlarging hands and feet: recurrence', see: ['headache', 'menstrual-sexual', 'appearance-change'] }
        ]
      }
    ]
  }
});
