/*
 * Recurrent urinary tract infection: 2 or more in 6 months, or 3 or more in a year. The
 * review centers on whether each episode was confirmed by culture, the triggers, any
 * structural or functional cause, prevention (behavioral, vaginal estrogen, methenamine,
 * antibiotic prophylaxis) and resistant organisms.
 */
CHE.registerCondition({
  id: 'recurrent-uti',
  title: 'Recurrent urinary tract infection',
  aka: ['recurrent UTI', 'recurrent cystitis', 'recurrent pyelonephritis', 'bladder infections', 'urine infections'],
  tags: ['renal'],
  summary: 'Confirm the infections were proven on culture, and how often they recur. Look for triggers (sex, menopause, catheters, constipation) and structural or functional causes (stones, incomplete emptying), then review prevention, antibiotic courses and resistance. Fever or flank pain means pyelonephritis.',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      when: ['How many UTIs have you had in the past year? When was the last one?'],
      cause: [
        {
          text: 'Has a cause or trigger been found?',
          options: [
            'Sex',
            'Menopause',
            'Incomplete emptying (e.g. prostate, prolapse, neurologic bladder)',
            'A urinary catheter',
            'Kidney stones or another structural problem',
            'No cause found'
          ]
        }
      ],
      stage: [
        'Were the infections confirmed with a urine culture?',
        'Have any been kidney infections, with fever or flank pain (pyelonephritis)?'
      ],
      understanding: ['Do you know the difference between a bladder infection and a kidney infection, and when to seek urgent care?']
    },
    'risk-factors': {
      family: ['Any family history of UTIs, or of kidney or bladder abnormalities?'],
      genetic: ['Any congenital urinary tract abnormality, or reflux as a child?'],
      exposures: [
        'Do you hold on to urine for long periods, for example at work?',
        'Do you void after sex? Do you use spermicide or a diaphragm?',
        'Do you use a urinary catheter, or self-catheterize?',
        'Are you on an SGLT2 inhibitor or immunosuppressants?'
      ],
      diet: ['How much fluid do you drink in a day?'],
      related: [
        'Any DM?',
        'Any kidney stones?',
        'Any BPH, prolapse or neurologic condition affecting the bladder?',
        'Any constipation or fecal incontinence?',
        'Are you postmenopausal or pregnant?'
      ]
    },
    presentation: {
      first: ['When did the infections start, and what was the usual pattern: dysuria, frequency, urgency, hematuria?'],
      admitted: ['Have you ever been admitted with a UTI or sepsis?']
    },
    investigations: {
      blood: ['Have you had blood tests for kidney function and BG?'],
      imaging: ['Have you had a kidney and bladder ultrasound, or a CT? What did they show?'],
      functional: ['Have you had a post-void residual measured, or a cystoscopy?'],
      monitoring: ['Is a urine culture sent each time before antibiotics start?'],
      results: ['Have any cultures shown a resistant organism?'],
      home: ['Do you have urine dipsticks at home, or a standby antibiotic prescription?']
    },
    management: {
      lifestyle: ['Have you tried drinking more fluid, voiding after sex, and treating constipation?'],
      education: ['Do you have a plan for what to do when symptoms start?'],
      allied: ['Have you seen a continence nurse or pelvic floor physical therapist?'],
      medications: [
        'Are you on vaginal estrogen?',
        'Are you on methenamine, or D-mannose or cranberry products?',
        'Are you on a daily or post-sex antibiotic to prevent UTIs? Which one, and for how long?',
        'Do you have a standby antibiotic to start yourself?'
      ],
      previous: ['Which antibiotics have you had in the past year? Did they work?'],
      sideEffects: ['Any diarrhea, C. difficile infection, thrush or rash from antibiotics?'],
      missed: ['Do you take your preventive treatment every day?']
    },
    complications: {
      disease: [
        'Any kidney infections or sepsis?',
        'Any kidney scarring, or fall in kidney function?',
        'Any infections with organisms resistant to most oral antibiotics?'
      ],
      flares: ['How often do the infections come, and how quickly do they settle?'],
      hospitalizations: [
        'Any procedures on the bladder, prostate or kidneys (e.g. stone removal, prolapse repair)?',
        'Any ED visits or admissions for UTIs in the past year?'
      ]
    },
    'ongoing-symptoms': {
      trend: [
        {
          text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
          options: [
            'No symptoms between infections',
            'Dysuria, frequency and urgency during an infection, settling with antibiotics'
          ]
        }
      ]
    },
    'social-impact': {
      toileting: ['Can you reach and use a toilet when you need to?'],
      work: ['How much work or study have you missed for UTIs?'],
      relationships: ['Have UTIs affected your sex life?'],
      mood: ['Do you worry about the next infection, or about taking so many antibiotics?']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'Fever, chills or flank pain: pyelonephritis', see: ['urinary-tract-pain'] },
          { text: 'Confusion, drowsiness or vomiting with a UTI: sepsis', see: ['memory-thinking', 'nausea-vomiting'] },
          { text: 'Symptoms not settling on antibiotics: resistant organism, abscess or stone', see: ['urinary-tract-pain'] },
          { text: 'Gross hematuria that persists between infections: bladder cancer or stone', see: ['urinary-symptoms'] },
          { text: 'Difficulty voiding, or a sense of incomplete emptying: retention', see: ['urinary-symptoms'] },
          { text: 'Gas or stool in the urine: colovesical fistula', see: ['urinary-symptoms'] }
        ]
      }
    ]
  }
});
