/*
 * Polycystic kidney disease (mostly autosomal dominant, ADPKD). An inherited, multi-system
 * condition: enlarging kidney cysts with HTN and progressive loss of kidney function, plus
 * liver cysts, intracranial aneurysms, mitral valve prolapse and hernias. Once kidney
 * function falls, also cover the chronic kidney disease questions.
 */
CHE.registerCondition({
  id: 'polycystic-kidney-disease',
  title: 'Polycystic kidney disease',
  aka: ['PKD', 'ADPKD', 'kidney cysts', 'polycystic kidneys', 'tolvaptan'],
  tags: ['renal'],
  summary: 'Inherited, usually autosomal dominant. Review the family history and screening of relatives, BP control, the rate of kidney growth and eGFR decline, tolvaptan where used, and the complications: cyst pain, bleeding and infection, stones, liver cysts and intracranial aneurysm. Once kidney function has fallen, also cover the chronic kidney disease review (complications, dialysis, transplant).',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      cause: ['Do you know which form you have: autosomal dominant (most common) or recessive? Has genetic testing been done?'],
      stage: [
        'Do you know your latest eGFR, and the size of your kidneys on scans?',
        'Has your kidney function started to fall? (if so, also cover the chronic kidney disease questions)'
      ],
      understanding: ['Do you understand that each of your children has a 1 in 2 chance of inheriting it?']
    },
    'risk-factors': {
      family: [
        'Who else in your family has it? Did any of them need dialysis or a transplant, and at what age?',
        'Has anyone in your family had a brain aneurysm or SAH?'
      ],
      genetic: ['Have your relatives been offered screening or genetic testing?'],
      substances: ['Do you smoke? (aneurysm rupture, faster decline)'],
      lifestyle: ['How much salt and fluid do you have a day?'],
      related: ['Any HTN? When was it first found? (often before age 30)']
    },
    presentation: {
      how: [
        {
          text: 'How was it first found?',
          options: [
            'Screening because a relative has it',
            'HTN at a young age',
            'Flank pain, hematuria or a UTI',
            'Kidney stones',
            'An incidental finding on a scan'
          ]
        }
      ]
    },
    investigations: {
      imaging: ['Have you had a kidney ultrasound or MRI? How large are the kidneys and liver?'],
      monitoring: [
        'How often are your BP, eGFR and urine checked?',
        'Have you had a scan of the blood vessels in your brain to look for an aneurysm?'
      ],
      results: ['Are your kidneys growing quickly, or is your eGFR falling quickly?'],
      home: ['Do you check your BP at home? What are the readings?']
    },
    management: {
      lifestyle: ['Have you been advised to drink more water and limit salt?'],
      education: ['Have you had genetic counseling?'],
      medications: [
        'Are you on an ACE inhibitor or ARB? What is your BP target, and are you reaching it?',
        'Are you on tolvaptan? How are you coping with the thirst and passing urine at night?',
        'Do you avoid NSAIDs for pain? What do you use instead?'
      ],
      sideEffects: ['If on tolvaptan: are your liver blood tests being checked regularly?'],
      sickDay: ["When unwell and unable to drink, do you know to pause tolvaptan and your ACE inhibitor or ARB?"],
      procedures: [
        'Have you had any cysts drained, or a kidney removed?',
        'Are you on dialysis, or have you had a transplant?'
      ]
    },
    complications: {
      disease: [
        'Any episodes of severe flank pain or hematuria from a bleeding cyst?',
        'Any cyst infections or kidney infections?',
        'Any kidney stones?',
        'Any liver cysts? Do they cause fullness or dyspnea?',
        'Any brain aneurysm found or treated?',
        'Any heart valve problems (mitral valve prolapse)?',
        'Any hernias or diverticular disease?'
      ],
      treatment: ['Any liver problems or dehydration on tolvaptan?'],
      admissions: ['Any hospital admissions for pain, bleeding or infection?']
    },
    'ongoing-symptoms': {
      current: [
        {
          text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
          options: [
            'Dull flank or back pain',
            'Abdominal fullness or early satiety from large kidneys or liver',
            'Occasional hematuria that settles within days',
            'Nocturia',
            'Fatigue (if kidney function has fallen)'
          ]
        }
      ]
    },
    'social-impact': {
      relationships: [
        'Have you talked with your partner or children about the inherited risk?',
        'Are you planning a pregnancy? (HTN and preeclampsia risk; tolvaptan must be stopped)'
      ],
      mood: ['How do you feel about having an inherited condition, especially if family members have needed dialysis?'],
      work: ['Does pain or tiredness affect your work?'],
      finances: ['Has it affected your insurance?']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'Sudden severe headache: ruptured intracranial aneurysm (SAH)', see: ['headache'] },
          { text: 'Fever with flank pain: cyst infection or pyelonephritis', see: ['urinary-tract-pain'] },
          { text: 'Severe colicky flank pain: kidney stone', see: ['urinary-tract-pain'] },
          { text: 'Heavy or persistent hematuria, or clots: cyst hemorrhage', see: ['urinary-symptoms'] },
          { text: 'Fever with RUQ pain: liver cyst infection', see: ['abdominal-pain'] },
          { text: 'Rapidly increasing abdominal swelling or dyspnea: enlarging kidneys or liver cysts', see: ['swelling'] },
          { text: 'Much less urine than usual: AKI', see: ['urinary-symptoms'] },
          { text: 'On tolvaptan, jaundice, dark urine or fatigue: liver injury', see: ['skin-changes'] },
          { text: 'On tolvaptan, unable to keep up with thirst: dehydration', see: ['polyuria-polydipsia'] }
        ]
      }
    ]
  }
});
