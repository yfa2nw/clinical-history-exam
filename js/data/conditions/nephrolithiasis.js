/*
 * Recurrent nephrolithiasis: kidney stones that keep coming back. The review centers on the
 * stone type (and whether one was analyzed), the metabolic workup, diet and fluid intake,
 * preventive medications, procedures and stents, and the kidney function over time.
 */
CHE.registerCondition({
  id: 'nephrolithiasis',
  title: 'Recurrent nephrolithiasis',
  aka: ['kidney stones', 'renal stones', 'renal calculi', 'urolithiasis', 'ureteric stones', 'urinary stones', 'renal colic', 'lithotripsy'],
  tags: ['renal'],
  summary: 'Establish the stone type and how often stones recur, then review the metabolic workup (blood and 24-hour urine), fluid intake and diet, preventive medications, procedures and stents, and kidney function. Fever with renal colic, or anuria, is an emergency.',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      when: ['When was your first stone? How many have you had since, and when was the last one?'],
      cause: [
        {
          text: 'Do you know what your stones are made of?',
          options: [
            'Calcium oxalate or calcium phosphate (most common)',
            'Uric acid',
            'Struvite (infection stones)',
            'Cystine (inherited)',
            'Never analyzed'
          ]
        }
      ],
      stage: ['Do you have any stones in your kidneys now? How big, and on which side?'],
      understanding: ['Do you know what renal colic feels like, and when to seek urgent care?']
    },
    'risk-factors': {
      family: ['Any family history of kidney stones?'],
      genetic: ['Any inherited condition, such as cystinuria or renal tubular acidosis?'],
      lifestyle: [
        'How much fluid do you drink in a day? How much urine do you pass?',
        'How much salt, meat and high-oxalate food (e.g. spinach, nuts, tea) do you eat? Any sugary drinks?',
        'Has your weight changed? (obesity raises stone risk)'
      ],
      exposures: [
        'Do you work somewhere hot, or where it is hard to drink or void?',
        'Do you take calcium or vitamin C supplements, topiramate, acetazolamide or loop diuretics?'
      ],
      related: [
        'Any gout, DM, HTN or obesity?',
        'Any IBD, bowel surgery or chronic diarrhea? (oxalate stones)',
        'Any hyperparathyroidism? (calcium stones)',
        'Any recurrent UTIs? (struvite stones)'
      ]
    },
    presentation: {
      first: ['What happened with your first stone: renal colic, hematuria, or found on a scan?'],
      admitted: ['Did you need to be admitted, or have a stent or procedure, for that stone?']
    },
    investigations: {
      blood: ['Have you had blood tests for kidney function, calcium, uric acid and PTH?'],
      imaging: ['Which scans have you had: CT, ultrasound or X-ray? When was the last one?'],
      functional: ['Have you done a 24-hour urine collection? What did it show?'],
      monitoring: [
        'Was a passed or removed stone sent for analysis?',
        'How often do you have a scan to check for new stones?'
      ],
      results: ['Is your kidney function stable?'],
      home: ['Do you check your urine color, or strain your urine to catch stones?']
    },
    management: {
      lifestyle: [
        'Do you drink enough to pass at least 2.5 L of urine a day?',
        'Have you cut down on salt, animal protein and high-oxalate food, while keeping a normal calcium intake?'
      ],
      education: ['Do you know what to do if you get renal colic again?'],
      allied: ['Have you seen a dietitian?'],
      medications: [
        'Are you on a thiazide, potassium citrate or allopurinol to prevent stones?',
        'Do you have medication to take for renal colic (e.g. an NSAID) or to help a stone pass (e.g. tamsulosin)?'
      ],
      sideEffects: ['Any dizziness, gout or low potassium on a thiazide? Any GI upset on potassium citrate?'],
      procedures: [
        {
          text: 'Which procedures have you had for stones?',
          options: [
            'Shock wave lithotripsy',
            'Ureteroscopy, with or without a stent',
            'Percutaneous removal through the back',
            'A nephrostomy tube for a blocked, infected kidney'
          ]
        },
        'Do you have a stent in now? When is it due to come out?'
      ],
      followUp: ['Do you attend your urology or stone clinic appointments?']
    },
    complications: {
      disease: [
        'Have you had a UTI or kidney infection with a stone?',
        'Has a stone ever blocked a kidney (obstructive uropathy)?',
        'Has your kidney function fallen? (chronic kidney disease)'
      ],
      treatment: ['Any bleeding, infection or stent pain after a procedure? Any retained stent?'],
      admissions: ['How many ED visits or admissions for stones in the past year?']
    },
    'ongoing-symptoms': {
      current: [
        {
          text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
          options: [
            'No symptoms between episodes',
            'Occasional mild flank discomfort from a known stone',
            'Urgency, frequency or hematuria while a stent is in'
          ]
        }
      ],
      flares: ['How often do you pass a stone or have renal colic?']
    },
    'social-impact': {
      food: ['How do the diet changes affect your meals?'],
      work: ['How much work or study have you missed for stones? Can you drink and void freely at work?'],
      transport: ['Does fear of renal colic affect your driving or travel?'],
      relationships: ['Are you planning a pregnancy? (stones and imaging need special care)'],
      mood: ['Do you worry about the next episode?']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'Renal colic with fever or chills: infected, obstructed kidney', see: ['urinary-tract-pain'] },
          { text: 'Anuria, or renal colic with a solitary kidney: complete obstruction', see: ['urinary-tract-pain', 'urinary-symptoms'] },
          { text: 'Renal colic not settling with usual analgesia, or with vomiting: obstructing stone', see: ['urinary-tract-pain', 'nausea-vomiting'] },
          { text: 'Gross hematuria with clots, or without pain: another urologic cause', see: ['urinary-symptoms'] },
          { text: 'Pain, fever or hematuria with a stent in: stent infection or blockage', see: ['urinary-tract-pain'] }
        ]
      }
    ]
  }
});
