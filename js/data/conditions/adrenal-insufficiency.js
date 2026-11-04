/*
 * Adrenal insufficiency: primary (Addison disease, CAH), secondary (pituitary) or from
 * long-term corticosteroids. The review centers on the replacement doses, sick day rules
 * and the emergency injection, the steroid card or bracelet, signs of under- or
 * over-replacement, and previous adrenal crises.
 */
CHE.registerCondition({
  id: 'adrenal-insufficiency',
  title: 'Adrenal insufficiency',
  aka: ['Addison disease', 'Addison\'s disease', 'hypoadrenalism', 'adrenal crisis', 'hydrocortisone', 'fludrocortisone', 'steroid dependence', 'secondary adrenal insufficiency'],
  tags: ['endocrine'],
  summary: 'Establish the type (primary, secondary or from corticosteroids), then review the hydrocortisone and fludrocortisone doses, sick day rules and the emergency injection, the steroid card or bracelet, symptoms of under- or over-replacement, and previous adrenal crises.',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      cause: [
        {
          text: 'Do you know what caused it?',
          options: [
            'Addison disease (autoimmune adrenal damage)',
            'A pituitary problem (secondary)',
            'Long-term corticosteroids for another condition',
            'CAH',
            'Adrenal surgery, infection (e.g. TB) or bleeding'
          ]
        }
      ],
      stage: ['Do you need fludrocortisone as well as hydrocortisone? (primary only)'],
      understanding: ['Do you know what an adrenal crisis is, and how to prevent one?']
    },
    'risk-factors': {
      family: ['Any family history of autoimmune disease or CAH?'],
      exposures: [
        'Have you taken corticosteroids (tablets, inhalers, injections or creams) for months?',
        'Do you take medications that affect cortisol (e.g. some antifungals, anti-epileptics, rifampin)?'
      ],
      related: ['Any thyroid disease, type 1 DM, vitiligo or pernicious anemia? (other autoimmune disease)']
    },
    presentation: {
      how: [
        {
          text: 'How was it first found?',
          options: [
            'Fatigue, weight loss and darkening skin over months',
            'An adrenal crisis: vomiting, collapse, low BP',
            'Low sodium or high potassium on a blood test',
            'After stopping long-term corticosteroids',
            'During testing for a pituitary problem'
          ]
        }
      ],
      admitted: ['Were you admitted with an adrenal crisis at diagnosis?']
    },
    investigations: {
      blood: ['Did you have a short Synacthen (ACTH stimulation) test? Any adrenal antibodies?'],
      imaging: ['Have you had an adrenal CT or a pituitary MRI?'],
      monitoring: ['How often are your sodium, potassium, BP and (on fludrocortisone) renin checked?'],
      results: ['Have your electrolytes been normal?']
    },
    management: {
      education: [
        'Do you carry a steroid emergency card, and wear a medical alert bracelet?',
        'Do you, and someone close to you, know how to give the emergency hydrocortisone injection?'
      ],
      medications: [
        'What hydrocortisone (or prednisolone) dose do you take, and at what times?',
        'Do you take fludrocortisone? What dose?',
        'Do you take other medications that affect cortisol levels?'
      ],
      sideEffects: ['Any weight gain, high BG, thin skin, bruising or poor sleep? (over-replacement)'],
      sickDay: [
        'When you have a fever or are unwell, do you know to double your dose (or triple, for a high fever)?',
        'If you are vomiting or cannot keep tablets down, do you know to give the emergency injection and go to the ED?',
        'Do you know to take extra doses before surgery, procedures or heavy exercise?'
      ],
      missed: ['Do you ever miss doses? Do you have spare tablets when you travel?'],
      followUp: ['Do you see an endocrinologist at least once a year?']
    },
    complications: {
      disease: ['How many adrenal crises have you had?'],
      treatment: [
        'Any osteoporosis, weight gain or DM from over-replacement?',
        'Any HTN or swelling on fludrocortisone?'
      ],
      admissions: ['Any admissions for an adrenal crisis or illness needing IV hydrocortisone?']
    },
    'ongoing-symptoms': {
      current: [
        {
          text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
          options: [
            'Feeling well on your usual doses',
            'Mild fatigue, especially in the afternoon or before the next dose',
            'Salt craving (primary)'
          ]
        }
      ]
    },
    'social-impact': {
      work: ['Can you take doses on time at work? Have you told your employer?'],
      transport: ['When you travel, do you carry your emergency kit and a letter?'],
      relationships: ['Are you planning a pregnancy? (doses usually rise in late pregnancy and during delivery)'],
      mood: ['Any low mood or anxiety about having a crisis?'],
      supports: ['Who at home can give the emergency injection?']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'Vomiting, or unable to keep tablets down: impending adrenal crisis (give the injection)', see: ['nausea-vomiting'] },
          { text: 'Lightheadedness on standing, fainting or collapse: adrenal crisis', see: ['dizziness', 'spells'] },
          { text: 'Abdominal pain with vomiting or fever: adrenal crisis or its trigger', see: ['abdominal-pain'] },
          { text: 'Confusion or drowsiness: adrenal crisis, low sodium or hypoglycemia', see: ['memory-thinking'] },
          { text: 'Increasing fatigue, weight loss or darkening skin: under-replacement', see: ['fatigue', 'weight-change', 'appearance-change'] },
          { text: 'Weight gain, thin skin or striae: over-replacement', see: ['weight-change', 'appearance-change'] }
        ]
      }
    ]
  }
});
