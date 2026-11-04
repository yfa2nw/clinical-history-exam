/*
 * Diabetes mellitus: type 1, type 2 and other types. The review follows the annual diabetes
 * review: type and treatment, glycemic control and hypoglycemia, cardiovascular risk,
 * screening for microvascular and macrovascular complications, sick day rules and driving.
 */
CHE.registerCondition({
  id: 'diabetes-mellitus',
  title: 'Diabetes mellitus',
  aka: ['DM', 'diabetes', 'type 1 diabetes', 'type 2 diabetes', 'sugar diabetes', 'insulin', 'hypoglycemia', 'HbA1c'],
  tags: ['endocrine'],
  summary: 'Confirm the type and treatment, then review control (HbA1c, home BG or CGM) and hypoglycemia, cardiovascular risk (BP, cholesterol, smoking), the complications screen (eyes, kidneys, feet, nerves, heart and vessels), sick day rules, and the effect on driving, work and mood.',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      when: ['How old were you when it was diagnosed?'],
      stage: [
        {
          text: 'Which type do you have?',
          options: [
            'Type 1 DM',
            'Type 2 DM',
            'DM related to pancreatic disease, corticosteroids or another cause',
            'Gestational DM in the past'
          ]
        },
        'What was your last HbA1c, and what is your target?'
      ],
      understanding: ['Do you know what hypoglycemia feels like, and how to treat it?']
    },
    'risk-factors': {
      family: ['Any family history of DM or early heart disease?'],
      substances: ['Do you smoke? (heart, vessel and kidney complications)'],
      lifestyle: ['What do you eat in a typical day? How active are you? Has your weight changed?'],
      exposures: ['Do you take corticosteroids or antipsychotics? (raise BG)'],
      related: [
        'Any HTN, high cholesterol, obesity or fatty liver?',
        'Any gestational DM or PMOS?'
      ]
    },
    presentation: {
      how: [
        {
          text: 'How was it first found?',
          options: [
            'Thirst, polyuria and weight loss',
            'DKA',
            'A routine screening blood test',
            'During pregnancy',
            'When a complication appeared (e.g. an infection or foot ulcer)'
          ]
        }
      ]
    },
    investigations: {
      blood: ['Was it diagnosed by fasting BG, HbA1c or a glucose tolerance test? Any antibody tests (type 1)?'],
      monitoring: ['How often are your HbA1c, kidneys (eGFR, urine ACR), cholesterol, eyes and feet checked?'],
      results: ['What is the trend in your HbA1c?'],
      home: ['How do you check your BG: finger-prick or a CGM? How often, and what are your usual readings?']
    },
    management: {
      lifestyle: ['What changes have you made to your diet, exercise and weight?'],
      education: ['Have you done a structured diabetes education course?'],
      allied: ['Do you see a diabetes educator, dietitian, podiatrist and eye screening service?'],
      medications: [
        'Which tablets or injections do you take (metformin, SGLT2 inhibitor, GLP-1 agonist, DPP-4 inhibitor, sulfonylurea)?',
        'If on insulin: which types and doses? Do you adjust doses yourself (carbohydrate counting)? Do you use a pump?',
        'Are you on a statin, an ACE inhibitor or ARB, or aspirin?'
      ],
      sideEffects: [
        'Any hypoglycemia? How often, how severe, and do you still get warning symptoms?',
        'Any GI upset on metformin or GLP-1 agonists, or genital infections on SGLT2 inhibitors?'
      ],
      sickDay: ['When unwell, do you know to keep taking insulin, check BG and ketones more often, keep drinking, and pause metformin and SGLT2 inhibitors?'],
      procedures: ['Any laser treatment for your eyes, amputations or weight-loss surgery?'],
      missed: ['Do you ever skip insulin or tablets? What gets in the way?'],
      barriers: ['Any problems with the cost of, or access to, medications and testing supplies?']
    },
    complications: {
      disease: [
        'Any eye problems (retinopathy)?',
        'Any kidney problems (protein in the urine, falling eGFR)?',
        'Any numbness, tingling or burning in the feet?',
        'Any foot ulcers, infections or amputations?',
        'Any heart attack, stroke or peripheral vascular disease?',
        'Any erectile dysfunction, gastroparesis or dizziness on standing (autonomic neuropathy)?'
      ],
      treatment: ['Any severe hypoglycemia needing help from someone else?'],
      admissions: ['Any admissions for DKA, hyperosmolar hyperglycemic state or hypoglycemia?']
    },
    'ongoing-symptoms': {
      current: [
        {
          text: 'Which of these expected findings do you have, and how do they compare with usual?',
          options: [
            'BG mostly within your target range',
            'Occasional high readings with illness or changes in diet',
            'Occasional mild hypoglycemia that you recognize and treat'
          ]
        }
      ]
    },
    'social-impact': {
      food: ['How does managing carbohydrates affect your meals?'],
      transport: ['Do you drive? Do you check your BG before driving, and know the driving rules for DM?'],
      work: ['Can you manage BG checks and insulin at work? Any shift work?'],
      relationships: [
        'Any erectile dysfunction?',
        'Are you planning a pregnancy? (good control before conception)'
      ],
      mood: ['Any diabetes distress, low mood or concerns about eating?'],
      finances: ['Can you afford your medications and supplies?'],
      supports: ['Does someone close to you know how to treat a severe hypoglycemic episode (glucagon)?']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'Vomiting, abdominal pain, fast breathing or high ketones: DKA', see: ['nausea-vomiting', 'abdominal-pain'] },
          { text: 'Very high BG with thirst, polyuria or confusion: hyperosmolar hyperglycemic state', see: ['polyuria-polydipsia', 'memory-thinking'] },
          { text: 'Frequent or severe hypoglycemia, or loss of warning symptoms: hypoglycemia unawareness', see: ['spells'] },
          { text: 'A new foot ulcer, redness, swelling or a black area: diabetic foot infection or ischemia', see: ['skin-changes'] },
          { text: 'A hot, swollen foot, often painless: Charcot foot', see: ['swelling'] },
          { text: 'Sudden vision loss or new floaters: retinal bleeding or detachment', see: ['senses-change'] },
          { text: 'Sudden weakness, numbness or speech change: stroke', see: ['weakness-numbness'] },
          { text: 'Chest pain, dyspnea or diaphoresis, which can be atypical in DM: ACS' },
          { text: 'Unintentional weight loss with high BG: insulin deficiency', see: ['weight-change'] }
        ]
      }
    ]
  }
});
