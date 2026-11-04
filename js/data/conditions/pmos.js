/*
 * Polyendocrine metabolic ovarian syndrome (formerly PCOS): irregular ovulation, androgen
 * excess and polycystic ovaries, with metabolic risk. The review centers on menstrual
 * pattern and endometrial protection, hirsutism and acne, fertility plans, metabolic
 * screening (DM, weight, cholesterol, BP), OSA, and mood and body image.
 */
CHE.registerCondition({
  id: 'pmos',
  title: 'Polyendocrine metabolic ovarian syndrome',
  aka: ['PMOS', 'PCOS', 'polycystic ovary syndrome', 'polycystic ovaries'],
  tags: ['endocrine', 'reproductive'],
  summary: 'Review the menstrual pattern and endometrial protection, androgen symptoms (hirsutism, acne, alopecia), fertility plans and contraception, metabolic screening (BG or HbA1c, weight, cholesterol, BP), OSA, and mood, eating and body image.',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      when: ['How old were you when it was diagnosed?'],
      stage: ['Which features do you have: irregular periods, excess hair or acne, polycystic ovaries on ultrasound?'],
      understanding: ['Do you know that PMOS affects metabolism (DM, weight, cholesterol) as well as periods and fertility?']
    },
    'risk-factors': {
      family: ['Any family history of PMOS, type 2 DM or early heart disease?'],
      smoking: ['Do you smoke?'],
      activity: ['How active are you?'],
      diet: ['What do you eat in a typical day? Has your weight changed?'],
      related: [
        'Any type 2 DM, prediabetes or gestational DM?',
        'Any high cholesterol or HTN?',
        'Any snoring or daytime sleepiness (OSA)?',
        'Any anxiety, depression or eating disorder?'
      ]
    },
    presentation: {
      how: [
        {
          text: 'How was it first found?',
          options: [
            'Irregular or absent periods',
            'Hirsutism, acne or alopecia',
            'Difficulty getting pregnant',
            'Weight gain',
            'An ultrasound done for another reason'
          ]
        }
      ]
    },
    investigations: {
      blood: ['Were other causes excluded (thyroid, prolactin, CAH)? Were your androgens checked?'],
      imaging: ['Did you have a pelvic ultrasound?'],
      monitoring: ['How often are your HbA1c or glucose tolerance test, cholesterol, BP and weight checked?'],
      results: ['Have your BG or cholesterol been abnormal?']
    },
    management: {
      lifestyle: ['What changes have you made to your diet, activity and weight? What support have you had?'],
      education: ['Do you know why periods need to come at least every 3 months (to protect the lining of the uterus)?'],
      allied: ['Do you see a dietitian, a psychologist, or a fertility service?'],
      medications: [
        'Are you on the combined pill or a progestogen (pill or IUD)?',
        'Are you on metformin, or a GLP-1 agonist for weight?',
        'Are you on spironolactone or another treatment for excess hair or acne? Do you use effective contraception with it?',
        'Are you on letrozole or another treatment to help ovulation?'
      ],
      sideEffects: [
        'Any headaches, mood changes or leg swelling on the pill? Any GI upset on metformin?',
        'Any blood clots on the combined pill?'
      ]
    },
    complications: {
      disease: [
        'Any type 2 DM or prediabetes?',
        'Any infertility or miscarriage?',
        'Any gestational DM or preeclampsia in a past pregnancy?',
        'Has an endometrial biopsy ever been needed?'
      ],
      hospitalizations: ['Have you had laser or electrolysis for hair, or fertility treatment?']
    },
    'ongoing-symptoms': {
      trend: [
        {
          text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
          options: [
            'Irregular periods, controlled on treatment',
            'Hirsutism or acne, stable on treatment',
            'Difficulty losing weight'
          ]
        }
      ]
    },
    'social-impact': {
      food: ['Has managing weight affected your relationship with food?'],
      relationships: [
        'Are you trying to get pregnant, or planning to? Do you need contraception?',
        'Has it affected your body image or relationships?'
      ],
      mood: ['Any low mood, anxiety or concerns about eating?']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'No period for over 3 months without a progestogen, or heavy or irregular bleeding: endometrial hyperplasia', see: ['menstrual-sexual'] },
          { text: 'A missed period: pregnancy', see: ['menstrual-sexual'] },
          { text: 'Rapidly worsening hirsutism, a deeper voice or other virilization: androgen-secreting tumor', see: ['appearance-change'] },
          { text: 'Thirst, polyuria or very high BG: DM', see: ['polyuria-polydipsia'] },
          { text: 'Snoring, witnessed apneas or daytime sleepiness: OSA', see: ['fatigue'] },
          { text: 'A swollen, painful calf on the combined pill: DVT', see: ['swelling'] }
        ]
      }
    ]
  }
});
