/*
 * Hypothyroidism: primary (Hashimoto thyroiditis, after radioiodine or thyroid surgery) or,
 * rarely, central. The review centers on the levothyroxine dose and how it is taken, the
 * TSH trend, symptoms of under- or over-replacement, interacting medications, and pregnancy.
 */
CHE.registerCondition({
  id: 'hypothyroidism',
  title: 'Hypothyroidism',
  aka: ['underactive thyroid', 'Hashimoto thyroiditis', 'Hashimoto\'s', 'levothyroxine', 'thyroxine', 'myxedema'],
  tags: ['endocrine'],
  summary: 'Establish the cause, then review the levothyroxine dose and how it is taken, the TSH trend, symptoms of under- or over-replacement, interacting medications and supplements, and plans for pregnancy (the dose usually needs to rise).',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      when: ['How long have you been on thyroid replacement?'],
      cause: [
        {
          text: 'Do you know what caused your underactive thyroid?',
          options: [
            'Hashimoto thyroiditis (autoimmune)',
            'After radioiodine or thyroid surgery',
            'After thyroiditis, including after pregnancy',
            'Medications (e.g. amiodarone, lithium)',
            'A pituitary problem (central hypothyroidism)',
            'Unknown'
          ]
        }
      ],
      stage: ['What is your current dose, and what was your last TSH?'],
      understanding: ['Do you know that treatment is usually lifelong, and that it takes about 6 weeks for a dose change to show in your blood tests?']
    },
    'risk-factors': {
      family: ['Any family history of thyroid disease or other autoimmune disease?'],
      exposures: [
        'Do you take amiodarone, lithium or immunotherapy for cancer?',
        'Any radiation to the neck?'
      ],
      related: [
        'Any type 1 DM, celiac disease, pernicious anemia, vitiligo or adrenal insufficiency? (other autoimmune disease)',
        'Any high cholesterol or heart disease?'
      ]
    },
    presentation: {
      how: [
        {
          text: 'How was it first found?',
          options: [
            'Fatigue, weight gain, cold intolerance or constipation',
            'A goiter',
            'A routine blood test',
            'Irregular periods or infertility',
            'Tested after thyroid surgery or radioiodine'
          ]
        }
      ]
    },
    investigations: {
      blood: ['Were thyroid antibodies checked?'],
      imaging: ['Have you had a thyroid ultrasound, for a goiter or nodule?'],
      monitoring: ['How often is your TSH checked?'],
      results: ['Is your TSH within the target range? Has your dose changed recently?']
    },
    management: {
      education: ['Do you know to take levothyroxine on an empty stomach, 30–60 minutes before breakfast, with water?'],
      medications: [
        'What dose of levothyroxine do you take? Has the brand changed?',
        'Do you take calcium, iron, PPIs or soy at the same time? (reduce absorption)'
      ],
      previous: ['Have you tried liothyronine or other thyroid preparations?'],
      sideEffects: ['Any palpitations, tremor, anxiety, weight loss or poor sleep? (over-replacement)'],
      missed: ['Do you take it every day? If you miss a dose, do you know you can take it later or double up the next day?'],
      followUp: ['Do you have your TSH checked 6 weeks after each dose change?']
    },
    complications: {
      disease: [
        'Any high cholesterol?',
        'Any infertility or miscarriage?',
        'Any goiter causing pressure symptoms?'
      ],
      treatment: ['Any AF or bone thinning from too high a dose?']
    },
    'ongoing-symptoms': {
      current: [
        {
          text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
          options: [
            'Feeling well on a stable dose',
            'Mild fatigue',
            'Mild dry skin or constipation'
          ]
        }
      ],
      trend: ['Do your symptoms change as your dose or TSH changes?']
    },
    'social-impact': {
      work: ['Has fatigue affected your work or study?'],
      relationships: ['Are you planning a pregnancy? (the dose usually needs to rise early, so check your TSH as soon as you are pregnant)'],
      mood: ['Any low mood or poor concentration?']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'Marked fatigue, weight gain or cold intolerance despite treatment: under-replacement or poor absorption', see: ['fatigue', 'weight-change', 'temperature-sweating'] },
          { text: 'Palpitations, tremor, heat intolerance or weight loss: over-replacement', see: ['temperature-sweating', 'movement-change', 'weight-change'] },
          { text: 'Confusion, drowsiness or feeling very cold: myxedema coma', see: ['memory-thinking'] },
          { text: 'A new or growing neck lump, hoarseness or dysphagia: thyroid nodule or cancer', see: ['upper-gi-symptoms'] },
          { text: 'Chest pain after starting or increasing levothyroxine: ACS' }
        ]
      }
    ]
  }
});
