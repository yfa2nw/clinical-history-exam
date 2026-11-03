CHE.registerModule({
  id: 'urinary-tract-pain',
  title: 'Urinary tract pain',
  subtitle: 'Flank or suprapubic pain, renal colic',
  aka: ['flank pain', 'suprapubic pain', 'loin pain', 'kidney pain', 'bladder pain', 'renal colic'],
  tags: ['renal', 'pain'],
  summary: 'Pain from the kidney, ureter or bladder. Ask questions that place the source (flank or suprapubic) and separate colicky pain (obstruction) from constant pain (infection or capsular stretch).',
  ref: '',
  related: ['urinary-symptoms', 'nausea-vomiting', 'abdominal-pain'],
  pc: {
    framework: 'socrates',
    notes: {
      site: [
        { text: 'One side, at the costovertebral angle', dx: ['Urolithiasis', 'Pyelonephritis'] },
        { text: 'Moving toward the groin over time', dx: ['Urolithiasis'] },
        { text: 'Both sides', dx: ['PKD'] },
        { text: 'Suprapubic (bladder)', dx: ['Cystitis', 'Urinary retention'] }
      ],
      onset: [
        { text: 'Sudden', dx: ['Urolithiasis'] },
        { text: 'Gradual over days, with fever', dx: ['Pyelonephritis'] }
      ],
      character: [
        { text: 'Colicky, in severe waves', dx: ['Urolithiasis'] },
        { text: 'Constant dull ache (capsular stretch)', dx: ['Pyelonephritis', 'Obstructive uropathy'] }
      ],
      radiation: [
        { text: 'Flank to groin, testis or labia', dx: ['Urolithiasis'] },
        { text: 'Through to the back', dx: ['Leaking AAA', 'Pancreatitis'], see: ['abdominal-pain'] }
      ],
      associated: [
        { text: 'Hematuria', dx: ['Urolithiasis', 'RCC'], see: ['urinary-symptoms'] },
        { text: 'Dysuria, frequency', dx: ['Cystitis', 'Pyelonephritis'], see: ['urinary-symptoms'] },
        { text: 'Inability to void', dx: ['Urinary retention'] },
        { text: 'Reduced or absent urine output', dx: ['Obstructive uropathy'] },
        { text: 'Missed period, vaginal bleeding', dx: ['Ectopic pregnancy'], see: ['menstrual-sexual'] },
        { text: 'Fever, chills', dx: ['Pyelonephritis', 'Obstructive uropathy'] },
        { text: 'Syncope, lightheadedness', dx: ['Leaking AAA', 'Ectopic pregnancy'] },
        { text: 'N/V', dx: ['Urolithiasis', 'Pyelonephritis'], see: ['nausea-vomiting'] }
      ],
      timing: [
        { text: 'Waves lasting minutes to hours', dx: ['Urolithiasis'] },
        { text: 'Previous similar episodes', dx: ['Urolithiasis'] }
      ],
      exacerbating: [
        { text: 'Restless, can\'t get comfortable', dx: ['Urolithiasis'] },
        { text: 'Lies still, worse with movement or coughing', dx: ['Peritonitis', 'Appendicitis'], see: ['abdominal-pain'] },
        { text: 'Worse after drinking a lot of fluid or alcohol', dx: ['Obstructive uropathy'] },
        'Response to analgesia'
      ],
      severity: [
        { text: 'Worst pain ever experienced', dx: ['Urolithiasis'] }
      ]
    }
  },
  redflags: [
    'Fever with flank pain: infected obstructed kidney (urologic emergency)',
    'Anuria or solitary kidney: complete obstruction',
    'Older patient with a first episode of "renal colic": leaking AAA',
    'Female of reproductive age: ectopic pregnancy',
    'Hypotension, tachycardia: hemorrhage or sepsis'
  ],
  history: {
    pmh: [
      'Any previous kidney stones? How many, how treated, which stone type?',
      'Any previous UTIs or pyelonephritis?',
      'Any known urinary tract abnormalities or urologic procedures?',
      'Any gout, hyperparathyroidism, IBD or bariatric surgery?'
    ],
    meds: [
      'What analgesia have you taken? Did it help?',
      'Any stone-promoting drugs (calcium or vitamin D supplements, high-dose vitamin C, topiramate, acetazolamide, indinavir)?',
      'Any anticoagulants or antiplatelets (hematuria, bleeding)?'
    ],
    fhx: [
      'Any family history of kidney stones or PKD?'
    ],
    shx: [
      'How much fluid do you drink a day?',
      'What is your diet like (salt, animal protein, high-oxalate foods)?',
      'Do you work in the heat or often get dehydrated?'
    ],
    sr: [
      'Cardiovascular: any known aneurysm or vascular risk factors?',
      'Gastrointestinal: any change in bowel habit, pain with meals, or jaundice?',
      'Genitourinary & reproductive: LMP? Any vaginal bleeding or discharge? Could you be pregnant?'
    ]
  },
  differentials: [
    { name: 'Urolithiasis (nephrolithiasis / ureterolithiasis)', clues: 'Ureteral stone: sudden colicky flank-to-groin pain, restless, hematuria. Kidney stone: often painless, or a dull ache with hematuria' },
    { name: 'Obstructive uropathy (hydronephrosis)', clues: 'Constant dull flank ache, reduced urine output. Causes: stones, UPJ obstruction (pain after a fluid load), BPH or urethral stricture, pelvic or urothelial tumor, pregnancy' },
    { name: 'Pyelonephritis', clues: 'Fever, chills, constant flank pain, dysuria' },
    { name: 'Cystitis', clues: 'Suprapubic pain, dysuria, frequency, no fever' },
    { name: 'Urinary retention', clues: 'Suprapubic pain, inability to void, palpable bladder' },
    { name: 'Leaking AAA', clues: 'Older, vascular risk factors, back pain, syncope' },
    { name: 'Biliary colic / cholecystitis', clues: 'RUQ pain, related to fatty meals' },
    { name: 'Appendicitis', clues: 'Periumbilical pain moving to the RLQ, anorexia' },
    { name: 'Ectopic pregnancy', clues: 'Missed period, vaginal bleeding, shoulder-tip pain' },
    { name: 'MSK pain', clues: 'Worse with movement and posture, tender on palpation' },
    { name: 'PKD', clues: 'Pain in both flanks, family history, HTN, hematuria' },
    { name: 'RCC', clues: 'Hematuria, flank pain, flank mass, weight loss' },
    { name: 'Pancreatitis', clues: 'Epigastric pain through to the back, vomiting; alcohol or gallstones' },
    { name: 'Peritonitis', clues: 'Constant pain, worse with movement or coughing; lies still' }
  ]
});
