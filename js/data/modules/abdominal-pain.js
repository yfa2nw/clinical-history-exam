/*
 * Abdominal pain. Keeps GI detail here; causes from other systems hand off via `see`.
 *
 * Awaiting hand-off (answers with no matching presenting complaint yet; add `see`
 * and remove the line when one is added; see CLAUDE.md, "Multi-system complaints"):
 *   - Epigastric pressure with exertion; chest pain, dyspnea or diaphoresis  → chest pain complaint
 *   - LUQ / upper quadrant pain with cough or pleuritic pain                 → cough / dyspnea complaint
 *   - Missed period, vaginal bleeding; vaginal discharge                     → gynecologic / pregnancy complaint
 *   - Testicular pain or swelling                                            → scrotal pain complaint
 */
CHE.registerModule({
  id: 'abdominal-pain',
  title: 'Abdominal pain',
  subtitle: 'Epigastric, RUQ, LUQ, RLQ, LLQ or diffuse',
  multiSystem: true,
  aka: ['stomach ache', 'belly pain', 'tummy pain', 'epigastric pain', 'RUQ pain', 'LUQ pain', 'RLQ pain', 'LLQ pain', 'biliary colic', 'gallbladder pain'],
  tags: ['gastrointestinal', 'pain'],
  summary: 'Site narrows the differential more than anything else, so start there. Then use character and timing to separate true colic (obstruction), biliary "colic" (constant), inflammatory pain and burning ulcer pain. Remember extra-abdominal causes.',
  ref: '',
  related: ['nausea-vomiting', 'upper-gi-symptoms', 'diarrhea-constipation', 'fecal-symptoms', 'urinary-tract-pain', 'urinary-symptoms', 'skin-changes', 'swelling', 'polyuria-polydipsia', 'appearance-change'],
  pc: {
    framework: 'socrates',
    notes: {
      site: [
        {
          text: 'Epigastric',
          options: [
            { text: 'Burning or gnawing, related to meals', dx: ['Gastric ulcer', 'Duodenal ulcer'] },
            { text: 'Severe and constant, boring through to the back', dx: ['Acute pancreatitis'] },
            { text: 'Burning, with heartburn or acid regurgitation', dx: ['GERD'], see: ['upper-gi-symptoms'] },
            { text: 'Pressure with exertion, diaphoresis or dyspnea', dx: ['ACS'] }
          ]
        },
        {
          text: 'RUQ',
          options: [
            { text: 'After a fatty meal, lasting hours, then settling', dx: ['Biliary colic'] },
            { text: 'Persisting more than 6 hours, with fever', dx: ['Acute cholecystitis'] },
            { text: 'With fever and jaundice', dx: ['Cholangitis'], see: ['skin-changes'] },
            { text: 'Dull ache with jaundice and malaise', dx: ['Hepatitis'], see: ['skin-changes'] }
          ]
        },
        {
          text: 'LUQ',
          options: [
            { text: 'After trauma, or with left shoulder tip pain', dx: ['Splenic rupture or infarct'] },
            { text: 'With cough, fever or pleuritic pain', dx: ['Lower lobe pneumonia'] }
          ]
        },
        {
          text: 'Periumbilical',
          options: [
            { text: 'Started here, then moved to the RLQ', dx: ['Appendicitis'] },
            { text: 'Colicky, with distension and vomiting', dx: ['Bowel obstruction'] },
            { text: 'Severe, out of proportion to the examination', dx: ['Mesenteric ischemia'] },
            { text: 'Radiating to the back, with syncope', dx: ['Leaking AAA'] }
          ]
        },
        {
          text: 'RLQ',
          options: [
            { text: 'After migrating from the umbilicus, with anorexia', dx: ['Appendicitis'] },
            { text: 'Chronic, with diarrhea and weight loss', dx: ['IBD'], see: ['weight-change'] }
          ]
        },
        {
          text: 'LLQ',
          options: [
            { text: 'Older patient, with fever and change in bowel habit', dx: ['Diverticulitis'] },
            { text: 'Sudden, followed by hematochezia', dx: ['Ischemic colitis'] }
          ]
        },
        {
          text: 'RLQ or LLQ in a female of reproductive age',
          options: [
            { text: 'Missed period, vaginal bleeding', dx: ['Ectopic pregnancy'], see: ['menstrual-sexual'] },
            { text: 'Sudden, with vomiting', dx: ['Ovarian torsion'] },
            { text: 'Both sides, with vaginal discharge or fever', dx: ['PID'] }
          ]
        },
        { text: 'Suprapubic', dx: ['Cystitis', 'Urinary retention'], see: ['urinary-tract-pain'] },
        { text: 'Flank', dx: ['Urolithiasis', 'Pyelonephritis'], see: ['urinary-tract-pain'] },
        {
          text: 'Diffuse',
          options: [
            { text: 'Constant, worse with any movement', dx: ['Peritonitis'] },
            { text: 'Crampy, with vomiting and diarrhea', dx: ['Infective gastroenteritis'] },
            { text: 'With vomiting, thirst and polyuria', dx: ['DKA'], see: ['polyuria-polydipsia'] }
          ]
        }
      ],
      onset: [
        { text: 'Sudden (seconds), worst ever', dx: ['Perforated peptic ulcer', 'Leaking AAA'] },
        { text: 'Rapid, over minutes to an hour', dx: ['Acute pancreatitis', 'Biliary colic'] },
        { text: 'Gradual, over hours to days', dx: ['Appendicitis', 'Diverticulitis'] },
        { text: 'After a fatty meal', dx: ['Biliary colic'] },
        { text: 'After heavy alcohol intake', dx: ['Acute pancreatitis'] }
      ],
      character: [
        { text: 'Colicky, coming in waves', dx: ['Bowel obstruction', 'Urolithiasis'] },
        { text: 'Constant, building over minutes, then easing after hours ("biliary colic")', dx: ['Biliary colic'] },
        { text: 'Constant, steadily worsening (inflammation)', dx: ['Appendicitis', 'Acute cholecystitis'] },
        { text: 'Burning or gnawing', dx: ['Gastric ulcer', 'Duodenal ulcer'] },
        { text: 'Tearing, severe', dx: ['Leaking AAA'] }
      ],
      radiation: [
        { text: 'To the back', dx: ['Acute pancreatitis', 'Leaking AAA'] },
        { text: 'To the right shoulder tip or scapula', dx: ['Biliary colic', 'Acute cholecystitis'] },
        { text: 'To the left shoulder tip (diaphragmatic irritation)', dx: ['Splenic rupture or infarct', 'Ectopic pregnancy'] },
        { text: 'From the umbilicus to the RLQ', dx: ['Appendicitis'] },
        { text: 'From the flank to the groin', dx: ['Urolithiasis'], see: ['urinary-tract-pain'] }
      ],
      associated: [
        {
          text: 'N/V: which came first?',
          see: ['nausea-vomiting'],
          options: [
            { text: 'Vomiting before the pain', dx: ['Infective gastroenteritis'] },
            { text: 'Pain before the vomiting', dx: ['Appendicitis', 'Bowel obstruction'] }
          ]
        },
        { text: 'Anorexia', dx: ['Appendicitis'] },
        { text: 'Heartburn or dyspepsia', dx: ['GERD', 'Duodenal ulcer'], see: ['upper-gi-symptoms'] },
        { text: 'Diarrhea', dx: ['Infective gastroenteritis', 'IBD'], see: ['diarrhea-constipation'] },
        { text: 'Constipation, distension, no flatus', dx: ['Bowel obstruction'], see: ['diarrhea-constipation'] },
        { text: 'Hematemesis or melena', dx: ['Gastric ulcer', 'Duodenal ulcer'], see: ['upper-gi-symptoms', 'fecal-symptoms'] },
        { text: 'Hematochezia', dx: ['Ischemic colitis', 'IBD'], see: ['fecal-symptoms'] },
        { text: 'Jaundice, dark urine, pale stool', dx: ['Cholangitis', 'Pancreatic cancer'], see: ['skin-changes'] },
        { text: 'Fever, chills', dx: ['Cholangitis', 'Diverticulitis'] },
        { text: 'Weight loss', dx: ['Pancreatic cancer', 'CRC'], see: ['weight-change'] },
        { text: 'Chest pain, dyspnea or diaphoresis', dx: ['ACS', 'Lower lobe pneumonia'] },
        { text: 'Dysuria, hematuria', dx: ['Pyelonephritis', 'Urolithiasis'], see: ['urinary-symptoms'] },
        { text: 'Missed period, vaginal bleeding', dx: ['Ectopic pregnancy'], see: ['menstrual-sexual'] },
        { text: 'Vaginal discharge, pain with intercourse', dx: ['PID'] },
        { text: 'Testicular pain or swelling', dx: ['Testicular torsion'] },
        { text: 'Thirst, polyuria', dx: ['DKA'], see: ['polyuria-polydipsia'] }
      ],
      timing: [
        { text: 'Waves every few minutes', dx: ['Bowel obstruction'] },
        { text: 'Constant for 30 minutes to several hours, then settles; recurs after meals or at night', dx: ['Biliary colic'] },
        { text: 'Persisting more than 6 hours, with fever', dx: ['Acute cholecystitis'] },
        { text: 'Episodes over weeks, with symptom-free gaps', dx: ['Duodenal ulcer', 'Gastric ulcer'] },
        { text: '15–60 minutes after every meal, with weight loss and fear of eating', dx: ['Mesenteric ischemia'], see: ['weight-change'] }
      ],
      exacerbating: [
        { text: 'Worse with movement or coughing; lies still', dx: ['Peritonitis', 'Appendicitis'] },
        { text: 'Restless, can\'t get comfortable', dx: ['Urolithiasis', 'Biliary colic'] },
        { text: 'Relieved by sitting forward', dx: ['Acute pancreatitis'] },
        { text: 'Worse soon after eating', dx: ['Gastric ulcer', 'Mesenteric ischemia'] },
        { text: 'Better with food or antacids; worse when hungry or at night', dx: ['Duodenal ulcer'] },
        { text: 'Brought on by fatty meals', dx: ['Biliary colic'] },
        { text: 'Relieved by defecation', dx: ['IBS'] }
      ],
      severity: [
        { text: 'Severe, out of proportion to the examination', dx: ['Mesenteric ischemia'] },
        { text: 'Sudden, worst ever', dx: ['Perforated peptic ulcer', 'Leaking AAA'] }
      ]
    },
    prompts: [
      {
        text: 'Has the pain moved since it started?',
        options: [
          { text: 'From around the umbilicus to the RLQ', dx: ['Appendicitis'] },
          { text: 'From one area to the whole abdomen', dx: ['Peritonitis', 'Perforated peptic ulcer'] }
        ]
      },
      'If you have had this pain before, what was found then?'
    ]
  },
  callouts: [
    {
      variant: 'note',
      title: 'Gastric vs duodenal ulcer',
      text: 'The classic patterns overlap and are unreliable on their own. Gastric ulcer pain is said to come on soon after eating, with weight loss; duodenal ulcer pain comes 2–3 hours after meals and at night, and is relieved by food or antacids. Many ulcers are painless until they bleed or perforate, especially with NSAIDs or at older age. The history raises suspicion; endoscopy confirms the site.'
    },
    {
      variant: 'note',
      title: 'Biliary colic is not colicky',
      text: 'Despite the name, biliary colic is a constant pain that builds over minutes, plateaus for 30 minutes to several hours, then eases. Pain lasting more than about 6 hours, or with fever, suggests acute cholecystitis; add jaundice and think of cholangitis (Charcot triad: fever, jaundice, RUQ pain).'
    }
  ],
  redflags: [
    'Sudden severe pain, then a rigid abdomen: perforated viscus',
    'Older patient with pain to the back, syncope or a pulsatile mass: leaking AAA',
    'Pain out of proportion to the examination, with AF or vascular disease: mesenteric ischemia',
    'Fever, jaundice and RUQ pain: cholangitis',
    'Bilious vomiting, distension, no flatus: bowel obstruction',
    'Female of reproductive age with pain and syncope: ruptured ectopic pregnancy',
    'Epigastric pain with diaphoresis or dyspnea: ACS',
    'Hematemesis or melena: bleeding peptic ulcer'
  ],
  history: {
    pmh: [
      'Any gallstones, pancreatitis, PUD or IBD?',
      'Any previous abdominal surgery (adhesions)?',
      'Any AF, vascular disease or known AAA?',
      'Any DM?'
    ],
    meds: [
      'Any NSAIDs or aspirin (PUD)?',
      'Any corticosteroids or SSRIs (GI bleeding with NSAIDs)?',
      'Any anticoagulants (bleeding)?',
      'Any azathioprine, valproate or thiazides (pancreatitis)?',
      'Any GLP-1 agonists (pancreatitis, gallstones)?'
    ],
    fhx: [
      'Any family history of IBD, CRC, pancreatic cancer or AAA?'
    ],
    shx: [
      'How much alcohol do you drink? (pancreatitis, gastritis)',
      'Do you smoke? (PUD, AAA, mesenteric ischemia)',
      'Any recent travel or suspect food?',
      'Sexual history: any new partners? (PID)'
    ],
    sr: [
      'General: any fever, weight loss or night sweats?',
      'Cardiovascular: any chest pain, palpitations or leg pain on walking?',
      'Respiratory: any cough or pleuritic chest pain?',
      'Genitourinary & reproductive: LMP? Any vaginal bleeding or discharge? Any dysuria?',
      'Endocrine: any thirst or polyuria?'
    ]
  },
  differentials: [
    { name: 'Gastric ulcer', clues: 'Epigastric burning soon after eating, weight loss, NSAIDs; classic pattern unreliable' },
    { name: 'Duodenal ulcer', clues: 'Epigastric pain 2–3 h after meals and at night, relieved by food or antacids, H. pylori' },
    { name: 'Perforated peptic ulcer', clues: 'Sudden severe epigastric pain becoming generalized, rigid abdomen' },
    { name: 'GERD / gastritis', clues: 'Burning epigastric or retrosternal pain, heartburn, alcohol or NSAIDs' },
    { name: 'Acute pancreatitis', clues: 'Severe constant epigastric pain through to the back, relieved by sitting forward, vomiting; gallstones or alcohol' },
    { name: 'Pancreatic cancer', clues: 'Older, weight loss, painless jaundice or dull epigastric pain to the back' },
    { name: 'Biliary colic', clues: 'Constant RUQ or epigastric pain after fatty meals, lasting 30 min to hours, then settles' },
    { name: 'Acute cholecystitis', clues: 'RUQ pain >6 h, fever, RUQ tenderness' },
    { name: 'Cholangitis', clues: 'Fever, jaundice, RUQ pain (Charcot triad)' },
    { name: 'Hepatitis', clues: 'Dull RUQ ache, jaundice, malaise; alcohol or viral risk factors' },
    { name: 'Splenic rupture or infarct', clues: 'LUQ pain after trauma or with left shoulder tip pain' },
    { name: 'Lower lobe pneumonia', clues: 'Upper quadrant pain with cough, fever, pleuritic pain' },
    { name: 'ACS', clues: 'Epigastric pressure with exertion, diaphoresis, dyspnea; DM, older patients' },
    { name: 'Appendicitis', clues: 'Periumbilical pain migrating to the RLQ, anorexia, fever' },
    { name: 'Bowel obstruction', clues: 'Colicky pain, distension, vomiting, no flatus; previous surgery or hernia' },
    { name: 'Mesenteric ischemia', clues: 'Severe pain out of proportion to the examination, AF or vascular disease; pain after meals if chronic' },
    { name: 'Leaking AAA', clues: 'Older, vascular risk factors, pain to the back, syncope, pulsatile mass' },
    { name: 'Peritonitis', clues: 'Constant pain worse with movement, lies still, rigid abdomen' },
    { name: 'IBD', clues: 'Chronic pain with hematochezia, diarrhea, weight loss' },
    { name: 'Diverticulitis', clues: 'Older, LLQ pain, fever, change in bowel habit' },
    { name: 'Ischemic colitis', clues: 'Older, sudden LLQ pain followed by hematochezia' },
    { name: 'IBS', clues: 'Chronic recurrent pain relieved by defecation, change in stool form' },
    { name: 'Infective gastroenteritis', clues: 'Vomiting before the pain, diarrhea, crampy diffuse pain' },
    { name: 'CRC', clues: 'Older, change in bowel habit, weight loss, iron deficiency' },
    { name: 'Ectopic pregnancy', clues: 'Missed period, vaginal bleeding, unilateral lower quadrant pain, shoulder tip pain' },
    { name: 'Ovarian torsion', clues: 'Sudden unilateral lower quadrant pain with vomiting, known ovarian cyst' },
    { name: 'PID', clues: 'Bilateral lower abdominal pain, vaginal discharge, fever, pain with intercourse' },
    { name: 'Testicular torsion', clues: 'Sudden testicular pain referred to the lower abdomen, vomiting' },
    { name: 'Cystitis', clues: 'Suprapubic pain, dysuria, frequency' },
    { name: 'Urinary retention', clues: 'Suprapubic pain, inability to void, palpable bladder' },
    { name: 'Urolithiasis', clues: 'Colicky flank-to-groin pain, restless, hematuria' },
    { name: 'Pyelonephritis', clues: 'Fever, flank pain, dysuria' },
    { name: 'DKA', clues: 'DM, diffuse pain, vomiting, thirst, polyuria' }
  ]
});
