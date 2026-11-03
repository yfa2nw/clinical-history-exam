CHE.registerModule({
  id: 'diarrhea-constipation',
  title: 'Diarrhea or constipation',
  aka: ['change in bowel habit', 'loose stool', 'hard stool', 'diarrhea', 'constipation'],
  tags: ['gastrointestinal'],
  summary: 'First establish what the patient means, and compare with their usual bowel habit. Then separate acute from chronic, and look for red flags.',
  ref: '',
  related: ['fecal-symptoms', 'nausea-vomiting', 'abdominal-pain', 'skin-changes', 'swelling', 'weakness-numbness', 'spells', 'seizures', 'dizziness', 'movement-change'],
  // Shared by all features (rendered as "All features"): the symptom SOCRATES, plus extras.
  // Each feature adds its answers to the rows through `sharedNotes`.
  pc: {
    framework: 'symptom',
    skip: ['site', 'radiation'],
    prompts: [
      'What do you mean by diarrhea or constipation? How often do you open your bowels now, and what is your usual?'
    ]
  },
  parts: [
    {
      id: 'diarrhea',
      title: 'Diarrhea',
      summary: 'Acute diarrhea (<2 weeks) is usually infective. Chronic diarrhea (>4 weeks) needs a structured search for inflammatory, malabsorptive and other causes.',
      sharedNotes: {
        onset: [
          { text: 'Less than 2 weeks ago (acute)', dx: ['Infective gastroenteritis'] },
          { text: 'More than 4 weeks ago (chronic)', dx: ['IBD', 'IBS'] },
          { text: 'After travel, takeout or undercooked food, or others unwell', dx: ['Infective gastroenteritis'] },
          { text: 'After antibiotics or a hospital stay', dx: ['C. difficile infection'] }
        ],
        character: [
          { text: 'Watery, large volume', dx: ['Infective gastroenteritis'] },
          { text: 'Bloody or with mucus', dx: ['IBD', 'CRC'] },
          { text: 'Pale, greasy, foul-smelling, hard to flush (steatorrhea)', dx: ['Celiac disease', 'Chronic pancreatitis'] }
        ],
        timing: [
          { text: 'Wakes you at night (organic cause likely)', dx: ['IBD'] },
          { text: 'Daytime only', dx: ['IBS'] },
          { text: 'Alternates with constipation', dx: ['IBS', 'CRC'] }
        ],
        exacerbating: [
          { text: 'After dairy', dx: ['Lactose intolerance'] },
          { text: 'After wheat', dx: ['Celiac disease'] },
          { text: 'Cramps relieved by defecation', dx: ['IBS'] }
        ],
        severity: [
          { text: 'Urgency or accidents', see: ['incontinence'] },
          'Lightheaded, or passing little urine (dehydration)'
        ]
      },
      associated: [
        { text: 'Any hematochezia?', dx: ['IBD', 'CRC'], see: ['fecal-symptoms'] },
        { text: 'Any abdominal pain or cramping? Is it relieved by defecation?', dx: ['IBS', 'IBD'], see: ['abdominal-pain'] },
        { text: 'Any N/V?', dx: ['Infective gastroenteritis'], see: ['nausea-vomiting'] },
        { text: 'Any bloating or flatulence?', dx: ['Lactose intolerance', 'Celiac disease'] },
        { text: 'Any fever or chills?', dx: ['Infective gastroenteritis', 'IBD'] },
        { text: 'Any weight loss or fatigue?', dx: ['CRC', 'IBD'], see: ['weight-change', 'fatigue'] },
        { text: 'Any heat intolerance, tremor or palpitations?', dx: ['Hyperthyroidism'], see: ['temperature-sweating'] },
        { text: 'Any joint pain, rash, red eyes or mouth ulcers?', dx: ['IBD'], see: ['skin-changes'] }
      ],
      redflags: [
        'Hematochezia: IBD, CRC or invasive infection',
        'Weight loss, or a new change in bowel habit at older age: CRC',
        'Nocturnal diarrhea: organic cause',
        'Lightheadedness, reduced urine output or confusion: dehydration or AKI',
        'Severe diarrhea after antibiotics or hospitalization: C. difficile colitis',
        'Immunosuppression: opportunistic infection'
      ],
      history: {
        pmh: [
          'Any IBD, IBS or celiac disease?',
          'Any previous bowel surgery or cholecystectomy?',
          'Any DM or thyroid disease?',
          'Any pancreatitis?',
          'Any HIV or other immunosuppression?'
        ],
        meds: [
          'Any recent antibiotics (C. difficile)?',
          'Any metformin (diarrhea)?',
          'Any laxatives, including OTC (laxative misuse)?',
          'Any PPIs (C. difficile, microscopic colitis)?',
          'Any magnesium-containing antacids (diarrhea)?',
          'Any NSAIDs (microscopic colitis)?'
        ],
        fhx: [
          'Any family history of IBD, celiac disease or CRC?'
        ],
        shx: [
          'Any recent travel? Where?',
          'Any takeout, undercooked meat, seafood or untreated water?',
          'Does anyone you live with have similar symptoms?',
          'How much alcohol and caffeine do you drink?',
          'Sexual history: any receptive anal intercourse? (proctitis)'
        ],
        sr: [
          'General: any fever or weight loss?',
          'Endocrine: any heat intolerance or palpitations?',
          'Musculoskeletal & integumentary: any joint pain, rash or mouth ulcers?'
        ]
      },
      differentials: [
        { name: 'Infective gastroenteritis / colitis', clues: 'Acute, N/V, fever, sick contacts or food exposure; bloody if invasive' },
        { name: 'C. difficile infection', clues: 'Recent antibiotics or hospitalization, watery diarrhea' },
        { name: 'IBD (Crohn disease, UC)', clues: 'Chronic bloody diarrhea, nocturnal symptoms, weight loss, joint, skin or eye involvement' },
        { name: 'IBS', clues: 'Chronic, pain relieved by defecation, alternating habit, no red flags' },
        { name: 'Celiac disease', clues: 'Bloating, steatorrhea, iron deficiency, family history' },
        { name: 'CRC', clues: 'Older, hematochezia, change in bowel habit, weight loss' },
        { name: 'Hyperthyroidism', clues: 'Heat intolerance, weight loss, palpitations' },
        { name: 'Lactose intolerance', clues: 'Bloating and diarrhea after dairy' },
        { name: 'Chronic pancreatitis', clues: 'Steatorrhea, alcohol use, epigastric pain' },
        { name: 'Medication-related diarrhea', clues: 'Metformin, laxatives, magnesium, antibiotics' }
      ]
    },
    {
      id: 'constipation',
      title: 'Constipation',
      summary: 'Ask what the patient means: infrequent stools, hard stools, straining or incomplete emptying. A new change at older age needs malignancy excluded.',
      sharedNotes: {
        onset: [
          { text: 'Recent, a new change', dx: ['CRC', 'Medication-related constipation'] },
          { text: 'Many years', dx: ['Functional constipation', 'IBS'] },
          { text: 'After starting opioids, iron or calcium', dx: ['Medication-related constipation'] }
        ],
        character: [
          'Hard or lumpy (Bristol type 1–2)',
          { text: 'Narrow, pencil-thin', dx: ['CRC'] },
          { text: 'Straining, or feeling of incomplete emptying', dx: ['Pelvic floor dysfunction'] },
          { text: 'Need to press around the anus or vagina to pass stool', dx: ['Pelvic floor dysfunction'] }
        ],
        timing: [
          { text: 'Alternates with diarrhea', dx: ['IBS', 'CRC'] }
        ],
        exacerbating: [
          { text: 'Low fiber or fluid, inactivity, putting off going', dx: ['Functional constipation'] },
          { text: 'Cramps relieved by defecation', dx: ['IBS'] }
        ],
        severity: [
          { text: 'No gas or stool passed, with vomiting and distension', dx: ['Bowel obstruction'] },
          'Relying on laxatives'
        ]
      },
      associated: [
        { text: 'Any hematochezia?', dx: ['CRC', 'Anal fissure'], see: ['fecal-symptoms'] },
        { text: 'Any pain on passing stool?', dx: ['Anal fissure'] },
        { text: 'Any abdominal pain or bloating, relieved by defecation?', dx: ['IBS'], see: ['abdominal-pain'] },
        { text: 'Any abdominal distension or vomiting?', dx: ['Bowel obstruction'], see: ['nausea-vomiting'] },
        { text: 'Any weight loss or fatigue?', dx: ['CRC'], see: ['weight-change', 'fatigue'] },
        { text: 'Any cold intolerance, weight gain or dry skin?', dx: ['Hypothyroidism'], see: ['weight-change', 'temperature-sweating'] },
        { text: 'Any thirst, polyuria or confusion?', dx: ['Hypercalcemia'], see: ['memory-thinking', 'polyuria-polydipsia'] },
        { text: 'Any back pain, leg weakness or saddle anesthesia?', dx: ['Cauda equina syndrome'], see: ['weakness-numbness'] }
      ],
      redflags: [
        'New constipation at older age, hematochezia or weight loss: CRC',
        'No flatus, vomiting and distension: bowel obstruction',
        'Back pain, leg weakness or saddle anesthesia: cauda equina syndrome',
        'Iron deficiency anemia: CRC'
      ],
      history: {
        pmh: [
          'Any hypothyroidism, DM or hypercalcemia?',
          'Any neurologic disease (MS, stroke, PD, spinal cord injury)?',
          'Any previous abdominal or pelvic surgery (adhesions)?',
          'How many vaginal deliveries? Any perineal tears?'
        ],
        meds: [
          'Any opioids, iron or calcium supplements (constipation)?',
          'Any anticholinergics, tricyclic antidepressants or calcium channel blockers (constipation)?',
          'Which laxatives have you tried? Did they help?'
        ],
        fhx: [
          'Any family history of CRC or IBD?'
        ],
        shx: [
          'How much fiber and fluid do you have a day?',
          'How active are you?',
          'Do you put off going to the toilet (e.g. at work)?'
        ],
        sr: [
          'Endocrine: any cold intolerance or weight gain?',
          'Neurologic: any back pain, leg weakness or numbness?'
        ]
      },
      differentials: [
        { name: 'Functional constipation', clues: 'Long-standing, hard stools, low fiber or fluid, no red flags' },
        { name: 'IBS', clues: 'Pain relieved by defecation, bloating, alternating habit' },
        { name: 'Medication-related constipation', clues: 'Opioids, iron, calcium, anticholinergics, calcium channel blockers' },
        { name: 'CRC', clues: 'Older, new change, hematochezia, weight loss, iron deficiency' },
        { name: 'Hypothyroidism', clues: 'Cold intolerance, weight gain, fatigue' },
        { name: 'Hypercalcemia', clues: 'Thirst, polyuria, confusion, abdominal pain' },
        { name: 'Pelvic floor dysfunction', clues: 'Straining, incomplete emptying, needing to press to pass stool' },
        { name: 'Anal fissure', clues: 'Sharp pain on defecation, streak of bright red blood' },
        { name: 'Bowel obstruction', clues: 'No flatus, vomiting, distension, colicky pain' },
        { name: 'Cauda equina syndrome', clues: 'Back pain, saddle anesthesia, urinary retention' }
      ]
    }
  ]
});
