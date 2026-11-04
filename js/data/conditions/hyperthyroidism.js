/*
 * Hyperthyroidism: Graves disease, toxic nodular goiter and thyroiditis. The review centers on
 * the cause, the treatment chosen (antithyroid drugs, radioiodine or surgery) and its side
 * effects, thyroid eye disease, relapse, and hypothyroidism after definitive treatment.
 */
CHE.registerCondition({
  id: 'hyperthyroidism',
  title: 'Hyperthyroidism',
  aka: ['overactive thyroid', 'thyrotoxicosis', 'Graves disease', 'Graves\' disease', 'toxic nodular goiter', 'thyroid eye disease', 'carbimazole', 'methimazole'],
  tags: ['endocrine'],
  summary: 'Establish the cause (Graves disease, toxic nodules, thyroiditis), then review the treatment (antithyroid drugs, radioiodine or surgery) and its side effects, beta-blockers, thyroid eye disease, relapse, and hypothyroidism after radioiodine or surgery. Sore throat or fever on antithyroid drugs means an urgent blood count.',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      when: ['When were you diagnosed? Is this the first episode or a relapse?'],
      cause: [
        {
          text: 'Do you know what caused your overactive thyroid?',
          options: [
            'Graves disease (autoimmune)',
            'Toxic multinodular goiter or a single toxic nodule',
            'Thyroiditis, including after pregnancy',
            'Medications (e.g. amiodarone, too much levothyroxine)',
            'Unknown'
          ]
        }
      ],
      stage: ['Are you in remission, still on treatment, or have you had definitive treatment (radioiodine or surgery)?'],
      understanding: ['Do you know which symptoms on your tablets need an urgent blood test (sore throat, fever, mouth ulcers)?']
    },
    'risk-factors': {
      family: ['Any family history of thyroid disease or other autoimmune disease?'],
      smoking: ['Do you smoke? (worsens thyroid eye disease)'],
      exposures: [
        'Do you take amiodarone, lithium or immunotherapy for cancer?',
        'Any iodine contrast, kelp or iodine supplements recently?'
      ],
      related: [
        'Any type 1 DM, vitiligo or other autoimmune disease?',
        'Have you been pregnant in the past year? (postpartum thyroiditis)'
      ]
    },
    presentation: {
      how: [
        {
          text: 'How was it first found?',
          options: [
            'Weight loss, heat intolerance, palpitations or tremor',
            'A goiter or neck lump',
            'Eye changes (bulging, grittiness, diplopia)',
            'AF',
            'A routine blood test'
          ]
        }
      ]
    },
    investigations: {
      blood: ['Were TSH receptor antibodies checked?'],
      imaging: ['Have you had a thyroid uptake scan or ultrasound?'],
      monitoring: [
        'How often are your thyroid function tests checked?',
        'On antithyroid drugs: are your blood count and liver tests checked?'
      ],
      results: ['Are your thyroid levels back in range? Is your dose being reduced?']
    },
    management: {
      education: ['Do you know the options: tablets, radioiodine or surgery, and their pros and cons?'],
      allied: ['Do you see an eye specialist for thyroid eye disease?'],
      medications: [
        'Are you on carbimazole, methimazole or propylthiouracil? What dose? Is it a reducing dose, or block and replace?',
        'Are you on a beta-blocker for symptoms?',
        'After radioiodine or surgery: are you now on levothyroxine?'
      ],
      sideEffects: [
        'Any rash, itch or joint pain on antithyroid drugs?',
        'Any sore throat, fever or mouth ulcers? (agranulocytosis)',
        'Any jaundice or dark urine? (liver injury)',
        'Any low blood count or liver problems from antithyroid drugs?'
      ],
      missed: ['Do you take your tablets every day?']
    },
    complications: {
      disease: [
        'Any AF or HF?',
        'Any thyroid eye disease: bulging, grittiness, diplopia or blurred vision?',
        'Any osteoporosis?'
      ],
      flares: ['Have you relapsed after stopping treatment before?'],
      hospitalizations: [
        {
          text: 'Have you had definitive treatment?',
          options: [
            'Radioiodine: when, and did you follow the precautions?',
            'Thyroidectomy: total or partial, and any problems after?',
            'Neither yet: has it been discussed?'
          ]
        },
        'After surgery: any hoarseness or low calcium?',
        'After radioiodine or surgery: have you become hypothyroid?',
        'Any admissions for thyroid storm, AF or drug side effects?'
      ]
    },
    'ongoing-symptoms': {
      trend: [
        {
          text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
          options: [
            'Feeling well with thyroid levels in range',
            'Mild palpitations or tremor while the dose is being adjusted',
            'Mild eye grittiness'
          ]
        }
      ]
    },
    'social-impact': {
      transport: ['Does diplopia affect your driving?'],
      work: ['Has it affected your work or study?'],
      relationships: [
        'Are you planning a pregnancy? (medications may need to change, and some are avoided in early pregnancy)',
        'After radioiodine: do you know how long to avoid pregnancy and close contact with children?'
      ],
      mood: ['Any anxiety, irritability or poor sleep? How do you feel about eye changes?']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'Sore throat, fever or mouth ulcers on antithyroid drugs: agranulocytosis' },
          { text: 'Jaundice, dark urine or abdominal pain on antithyroid drugs: liver injury', see: ['skin-changes'] },
          { text: 'Fever, agitation, confusion or vomiting: thyroid storm', see: ['memory-thinking', 'nausea-vomiting'] },
          { text: 'Eye pain, blurred vision, colors looking faded or new diplopia: optic nerve compression in thyroid eye disease', see: ['senses-change', 'appearance-change'] },
          { text: 'Palpitations, dyspnea or swelling: AF or HF', see: ['swelling'] },
          { text: 'Fatigue, weight gain or cold intolerance after radioiodine or surgery: hypothyroidism', see: ['fatigue', 'weight-change', 'temperature-sweating'] },
          { text: 'Tingling around the mouth or in the fingers after surgery: low calcium', see: ['weakness-numbness'] }
        ]
      }
    ]
  }
});
