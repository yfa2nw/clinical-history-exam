/*
 * Incontinence: a multi-system complaint (bladder and bowel, pelvic floor, prostate,
 * neurologic, metabolic, mobility and cognition, medications). Classify the type first;
 * then look for a reversible or neurologic cause.
 *
 * Awaiting hand-off (answers with no matching presenting complaint yet; add `see`
 * and remove the line when one is added; see CLAUDE.md, "Multi-system complaints"):
 *   - Urinary incontinence: vaginal bulge or heaviness                      → gynecologic complaint
 *   - Urinary incontinence: chronic cough                                   → cough complaint
 *   - Both: back pain                                                       → back pain complaint
 *   - Fecal incontinence: lump coming out of the anus                       → anal lump complaint
 */
CHE.registerModule({
  id: 'incontinence',
  title: 'Incontinence',
  multiSystem: true,
  aka: ['leaking urine', 'wetting', 'bladder control problems', 'bowel control problems', 'soiling', 'accidents', 'stress incontinence', 'urge incontinence', 'overflow incontinence', 'fecal incontinence', 'urinary incontinence'],
  tags: ['renal', 'gastrointestinal'],
  summary: 'Ask directly; patients rarely volunteer it. Classify the type from when the leakage happens, then look for a reversible cause (infection, constipation, medications, polyuria, immobility) and a neurologic cause. Switch on only the features that apply.',
  ref: '',
  related: ['urinary-symptoms', 'fecal-symptoms', 'diarrhea-constipation', 'weakness-numbness', 'movement-change', 'polyuria-polydipsia', 'weight-change', 'menstrual-sexual', 'memory-thinking'],
  // Shared by all features (rendered as "All features")
  pc: {
    prompts: [
      'When did it start? Did it come on suddenly or gradually?',
      'How often does it happen, and how much do you leak?',
      'Do you wear pads? How many a day?',
      'Can you get to the toilet in time? Any problems walking or undressing?',
      'How does it affect your daily life, work, sleep and relationships?'
    ]
  },
  associated: [
    { text: 'Any back pain, leg weakness or saddle numbness?', see: ['weakness-numbness'] }
  ],
  parts: [
    {
      id: 'urinary-incontinence',
      title: 'Urinary incontinence',
      summary: 'Classify by when leakage happens: stress (cough, sneeze, exercise), urge (can\'t reach the toilet), mixed, overflow (dribbling with incomplete emptying), continuous (fistula) or functional (can\'t get there in time).',
      pc: {
        prompts: [
          {
            text: 'When do you leak?',
            options: [
              { text: 'Coughing, sneezing, laughing or exercising', dx: ['Stress incontinence'] },
              { text: 'With a sudden urge, before reaching the toilet', dx: ['Urge incontinence'] },
              { text: 'Both', dx: ['Mixed incontinence'] },
              { text: 'Dribbling, with a weak stream or a feeling of not emptying', dx: ['Overflow incontinence'] },
              { text: 'Constantly, day and night, without warning', dx: ['Urinary fistula'] },
              { text: 'Only because I can\'t get to the toilet in time', dx: ['Functional incontinence'] }
            ]
          },
          { text: 'Any frequency, urgency, nocturia or difficulty voiding?', dx: ['Urge incontinence', 'Overflow incontinence'], see: ['urinary-symptoms'] },
          'Could you keep a bladder diary (frequency–volume chart) for 3 days?'
        ]
      },
      associated: [
        { text: 'Any dysuria, or cloudy or smelly urine?', dx: ['UTI'], see: ['urinary-symptoms'] },
        { text: 'Any hematuria?', dx: ['Bladder cancer'], see: ['urinary-symptoms'] },
        { text: 'Any vaginal bulge or heaviness?', dx: ['Pelvic organ prolapse'] },
        { text: 'Any chronic cough?', dx: ['Stress incontinence'] },
        { text: 'Any constipation?', dx: ['Fecal impaction'], see: ['diarrhea-constipation'] },
        { text: 'Any fecal incontinence? (tick Fecal incontinence)', dx: ['Neurogenic bladder'] },
        { text: 'Any thirst or polyuria?', dx: ['Polyuria'], see: ['polyuria-polydipsia'] },
        { text: 'Any change in walking, tremor or slowness?', dx: ['Normal pressure hydrocephalus', 'Neurogenic bladder'], see: ['movement-change'] },
        { text: 'Any confusion or memory problems?', dx: ['Functional incontinence', 'Normal pressure hydrocephalus'], see: ['memory-thinking'] }
      ],
      redflags: [
        'New incontinence with back pain, leg weakness or saddle numbness: cauda equina syndrome or spinal cord compression',
        'Painless retention with overflow: neurologic disease or bladder outlet obstruction',
        'Hematuria with urgency: bladder cancer',
        'Continuous leakage after pelvic surgery, childbirth or radiation: fistula',
        'New incontinence with fever or confusion in an older person: UTI or delirium'
      ],
      history: {
        pmh: [
          'How many vaginal deliveries? Any instrumental deliveries or large babies?',
          'Are you postmenopausal?',
          'Any pelvic or prostate surgery, or pelvic radiation?',
          'Any DM, stroke, MS, PD or spinal cord injury?'
        ],
        meds: [
          'Any diuretics (urgency, frequency)?',
          'Any alpha-blockers (stress incontinence in females)?',
          'Any anticholinergics, opioids or tricyclic antidepressants (retention with overflow)?',
          'Any sedatives (functional incontinence)?'
        ],
        shx: [
          'How much fluid, caffeine and alcohol do you have?',
          'Do you smoke? (cough, bladder cancer)',
          'How far is the toilet? Do you use a walking aid?'
        ],
        sr: [
          'Respiratory: any chronic cough?',
          'Gastrointestinal: any constipation or fecal incontinence?',
          'Endocrine: any thirst or polyuria?',
          'Neurologic: any back pain, weakness, numbness or change in walking?'
        ]
      },
      differentials: [
        { name: 'Stress incontinence', clues: 'Leakage with cough, sneeze or exercise; vaginal deliveries, menopause, prostatectomy' },
        { name: 'Urge incontinence', clues: 'Sudden urge, leaks before reaching the toilet, frequency, nocturia (OAB)' },
        { name: 'Mixed incontinence', clues: 'Both stress and urge; common in females' },
        { name: 'Overflow incontinence', clues: 'Dribbling, weak stream, incomplete emptying; BPH, anticholinergics, neurogenic bladder' },
        { name: 'Neurogenic bladder', clues: 'MS, stroke, PD, spinal cord injury or diabetic neuropathy' },
        { name: 'Cauda equina syndrome', clues: 'Back pain, saddle numbness, painless retention with overflow' },
        { name: 'UTI', clues: 'New urgency and incontinence with dysuria; confusion in older people' },
        { name: 'Bladder cancer', clues: 'Hematuria, urgency; smoking, older' },
        { name: 'Fecal impaction', clues: 'Constipation pressing on the bladder; older or immobile' },
        { name: 'Polyuria', clues: 'Large volumes overwhelm continence; DM, diuretics' },
        { name: 'Pelvic organ prolapse', clues: 'Vaginal bulge or heaviness, worse standing; difficulty voiding' },
        { name: 'Urinary fistula', clues: 'Continuous leakage after pelvic surgery, obstructed labor or radiation' },
        { name: 'Normal pressure hydrocephalus', clues: 'Urgency incontinence with a small-stepped walk and memory problems' },
        { name: 'Functional incontinence', clues: 'Normal bladder, but immobility, dementia or sedation prevents reaching the toilet' }
      ]
    },
    {
      id: 'fecal-incontinence',
      title: 'Fecal incontinence',
      summary: 'Separate urge incontinence (a weak external sphincter) from passive leakage without warning (a weak internal sphincter or neurologic cause), and look for overflow around impacted stool.',
      pc: {
        prompts: [
          'Do you leak stool or gas? How often?',
          {
            text: 'Do you get warning before it happens?',
            options: [
              { text: 'Urgency, but can\'t reach the toilet in time (urge incontinence)', dx: ['Anal sphincter injury', 'IBD'] },
              { text: 'No warning (passive leakage)', dx: ['Neurologic disease', 'Fecal impaction'] }
            ]
          },
          {
            text: 'Is the leaked stool liquid or formed?',
            options: [{ text: 'Liquid, around hard stool (overflow)', dx: ['Fecal impaction'] }]
          }
        ]
      },
      associated: [
        { text: 'Any hematochezia?', dx: ['Rectal cancer', 'IBD'], see: ['fecal-symptoms'] },
        { text: 'Any diarrhea?', dx: ['IBD'], see: ['diarrhea-constipation'] },
        { text: 'Any constipation or hard stools?', dx: ['Fecal impaction'], see: ['diarrhea-constipation'] },
        { text: 'Any lump coming out of the anus?', dx: ['Rectal prolapse'] },
        { text: 'Any weight loss?', dx: ['Rectal cancer'], see: ['weight-change'] },
        { text: 'Any urinary incontinence? (tick Urinary incontinence)', dx: ['Pelvic floor dysfunction', 'Neurologic disease'] },
        { text: 'Any change in walking, or memory problems?', dx: ['Neurologic disease'], see: ['memory-thinking', 'movement-change'] }
      ],
      redflags: [
        'New incontinence with back pain, leg weakness or saddle numbness: cauda equina syndrome',
        'Hematochezia or weight loss: rectal cancer'
      ],
      history: {
        pmh: [
          'How many vaginal deliveries? Any instrumental deliveries or perineal tears?',
          'Any anal surgery or pelvic radiation?',
          'Any neurologic disease (MS, stroke, PD, spinal cord injury)?',
          'Any DM (neuropathy)?'
        ],
        meds: [
          'Any laxatives (diarrhea)?',
          'Any metformin (diarrhea)?'
        ],
        shx: [
          'Any receptive anal intercourse?'
        ],
        sr: [
          'Genitourinary & reproductive: any urinary incontinence?',
          'Neurologic: any back pain, leg weakness or numbness?'
        ]
      },
      differentials: [
        { name: 'Anal sphincter injury', clues: 'Obstetric tear or anal surgery, urge incontinence' },
        { name: 'Fecal impaction', clues: 'Older or immobile, constipation, liquid overflow leakage' },
        { name: 'Neurologic disease', clues: 'MS, stroke, spinal cord injury, dementia or diabetic neuropathy; passive leakage' },
        { name: 'Cauda equina syndrome', clues: 'Back pain, saddle anesthesia, urinary retention' },
        { name: 'IBD', clues: 'Diarrhea and urgency overwhelming continence' },
        { name: 'Rectal prolapse', clues: 'Lump coming out with straining, mucus leakage; older females' },
        { name: 'Rectal cancer', clues: 'Hematochezia, change in bowel habit, weight loss' },
        { name: 'Pelvic floor dysfunction', clues: 'Multiparity, combined urinary and fecal incontinence' }
      ]
    }
  ]
});
