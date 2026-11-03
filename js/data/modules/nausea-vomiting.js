/*
 * A multi-system complaint. Kept deliberately brief: its job is to find where the
 * N/V is coming from and hand off to the matching presenting complaint (`see`).
 *
 * Awaiting hand-off (answers with no matching presenting complaint yet; add `see`
 * and remove the line when one is added; see CLAUDE.md, "Multi-system complaints"):
 *   - Early morning (pregnancy)                 → pregnancy complaint
 *   - Any fever or chills?                     → fever complaint
 *   - Any chest pain or dyspnea?               → chest pain / dyspnea complaint
 *   - Could you be pregnant?                   → pregnancy / gynecologic complaint
 */
CHE.registerModule({
  id: 'nausea-vomiting',
  title: 'Nausea and vomiting',
  multiSystem: true,
  aka: ['N/V', 'vomiting', 'nausea', 'throwing up', 'feeling sick'],
  tags: ['gastrointestinal'],
  summary: 'N/V comes from almost every system. Characterize the vomiting briefly, check hydration, then ask where else the patient is unwell and follow that lead into the matching presenting complaint.',
  ref: '',
  related: ['abdominal-pain', 'upper-gi-symptoms', 'diarrhea-constipation', 'fecal-symptoms', 'urinary-tract-pain', 'urinary-symptoms', 'skin-changes', 'polyuria-polydipsia', 'spells', 'senses-change', 'headache', 'dizziness', 'weight-change', 'seizures', 'memory-thinking', 'appearance-change', 'weakness-numbness'],
  pc: {
    framework: 'symptom',
    skip: ['site', 'radiation'],
    notes: {
      onset: [
        { text: 'Suddenly, after a meal, with others affected', dx: ['Infective gastroenteritis'] },
        { text: 'After starting a new medication', dx: ['Medication-related nausea'] }
      ],
      character: [
        'Nausea alone, or vomiting (how often?)',
        { text: 'Vomiting undigested food, hours after eating', dx: ['Gastric outlet obstruction', 'Gastroparesis'] },
        { text: 'Green (bile) or foul-smelling (feculent)', dx: ['Bowel obstruction'] },
        { text: 'Blood or coffee-ground material (hematemesis)', dx: ['Upper GI bleed'], see: ['upper-gi-symptoms', 'fecal-symptoms'] }
      ],
      timing: [
        { text: 'Early morning', dx: ['Pregnancy', 'Raised ICP'], see: ['headache'] },
        { text: 'After meals', dx: ['PUD', 'Gastroparesis'] },
        { text: 'Recurrent bouts lasting days, well in between', dx: ['Cannabinoid hyperemesis'] }
      ],
      exacerbating: [
        { text: 'Head movement', dx: ['Vestibular disorder'], see: ['dizziness', 'spells'] },
        { text: 'Relieved by hot showers', dx: ['Cannabinoid hyperemesis'] },
        { text: 'Vomiting relieves the pain', dx: ['PUD', 'Gastric outlet obstruction'] }
      ],
      severity: [
        'Can\'t keep fluids down, or passing little urine (dehydration)'
      ]
    }
  },
  associated: [
    { text: 'Any abdominal pain?', dx: ['Acute pancreatitis', 'Bowel obstruction'], see: ['abdominal-pain'] },
    { text: 'Any diarrhea?', dx: ['Infective gastroenteritis'], see: ['diarrhea-constipation'] },
    { text: 'Any abdominal distension, or no gas or stool passed?', dx: ['Bowel obstruction'], see: ['diarrhea-constipation'] },
    { text: 'Any dysphagia, heartburn or epigastric pain?', dx: ['PUD'], see: ['upper-gi-symptoms'] },
    { text: 'Any hematemesis or melena?', dx: ['Upper GI bleed'], see: ['upper-gi-symptoms', 'fecal-symptoms'] },
    { text: 'Any fever or chills?', dx: ['Infective gastroenteritis', 'Pyelonephritis'] },
    { text: 'Any chest pain or dyspnea?', dx: ['ACS'] },
    { text: 'Any flank pain?', dx: ['Urolithiasis', 'Pyelonephritis'], see: ['urinary-tract-pain'] },
    { text: 'Any dysuria or frequency?', dx: ['Pyelonephritis'], see: ['urinary-symptoms'] },
    { text: 'Could you be pregnant?', dx: ['Pregnancy'] },
    { text: 'Any thirst or polyuria?', dx: ['DKA', 'Hypercalcemia'], see: ['polyuria-polydipsia'] },
    { text: 'Any headache, vision change or neck stiffness?', dx: ['Raised ICP', 'Meningitis'], see: ['headache', 'senses-change'] },
    { text: 'Any vertigo or hearing change?', dx: ['Vestibular disorder'], see: ['dizziness', 'spells', 'senses-change'] }
  ],
  redflags: [
    'Bilious or feculent vomiting, distension, no flatus: bowel obstruction',
    'Hematemesis or coffee-ground vomit: upper GI bleed',
    'Chest pain or diaphoresis: ACS',
    'DM with abdominal pain, thirst and polyuria: DKA',
    'Headache, confusion or neck stiffness: raised ICP or meningitis',
    'Unable to keep fluids down, reduced urine output: dehydration or AKI'
  ],
  history: {
    pmh: [
      'Any DM, CKD or liver disease?',
      'Any previous abdominal surgery (adhesions)?',
      'Any migraine or vestibular disorder?'
    ],
    meds: [
      'Any opioids, antibiotics, chemotherapy or GLP-1 agonists (nausea)?',
      'Any digoxin, lithium or theophylline (toxicity)?'
    ],
    shx: [
      'How much alcohol do you drink?',
      'Any cannabis use? (cannabinoid hyperemesis)',
      'Any recent travel or suspect food?'
    ],
    sr: [
      'Cardiovascular: any chest pain or dyspnea?',
      'Genitourinary & reproductive: LMP? Could you be pregnant?',
      'Neurologic: any headache, vertigo or vision change?'
    ]
  },
  // System-level only; the linked presenting complaints hold the detail.
  differentials: [
    { name: 'Infective gastroenteritis', clues: 'Diarrhea, fever, sick contacts or food exposure' },
    { name: 'Bowel obstruction', clues: 'Bilious or feculent vomiting, distension, no flatus, previous surgery' },
    { name: 'Gastric outlet obstruction', clues: 'Vomiting undigested food hours after meals' },
    { name: 'PUD', clues: 'Epigastric pain related to meals, NSAIDs' },
    { name: 'Acute pancreatitis', clues: 'Epigastric pain through to the back, vomiting; alcohol or gallstones' },
    { name: 'Gastroparesis', clues: 'DM, early satiety, vomiting after meals' },
    { name: 'Upper GI bleed', clues: 'Hematemesis, coffee-ground vomit, melena' },
    { name: 'Pyelonephritis', clues: 'Fever, flank pain, dysuria' },
    { name: 'Urolithiasis', clues: 'Colicky flank-to-groin pain' },
    { name: 'ACS', clues: 'Chest pain or diaphoresis, especially in DM, older patients and women' },
    { name: 'DKA', clues: 'DM, thirst, polyuria, abdominal pain' },
    { name: 'Hypercalcemia', clues: 'Thirst, constipation, confusion' },
    { name: 'Raised ICP', clues: 'Morning headache and vomiting, vision change' },
    { name: 'Meningitis', clues: 'Fever, headache, neck stiffness' },
    { name: 'Vestibular disorder', clues: 'Vertigo with head movement, hearing change' },
    { name: 'Pregnancy', clues: 'Missed period, morning nausea' },
    { name: 'Medication-related nausea', clues: 'New drug, opioids, chemotherapy, drug toxicity' },
    { name: 'Cannabinoid hyperemesis', clues: 'Heavy cannabis use, relief with hot showers' }
  ]
});
