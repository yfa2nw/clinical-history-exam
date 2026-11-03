/*
 * Changes in weight: a multi-system complaint. Appetite and speed of change are the key
 * branch points; other systems hand off via `see`.
 *
 * Awaiting hand-off (answers with no matching presenting complaint yet; add `see`
 * and remove the line when one is added; see CLAUDE.md, "Multi-system complaints"):
 *   - Weight loss: cough, hemoptysis or dyspnea                         → cough / dyspnea complaint
 *   - Weight loss / gain: low mood, poor sleep, eating concerns           → mood / eating complaint
 *   - Weight gain: snoring or daytime sleepiness                          → sleep complaint
 */
CHE.registerModule({
  id: 'weight-change',
  title: 'Changes in weight',
  subtitle: 'Unintended loss or gain',
  multiSystem: true,
  aka: ['weight loss', 'losing weight', 'weight gain', 'putting on weight', 'cachexia', 'obesity', 'PCOS', 'polycystic ovary syndrome'],
  tags: ['endocrine'],
  summary: 'Confirm the change is real and unintended, then use appetite and speed to branch. Switch on only the features that apply.',
  ref: '',
  related: ['fatigue', 'temperature-sweating', 'polyuria-polydipsia', 'spells', 'appearance-change', 'swelling', 'diarrhea-constipation', 'upper-gi-symptoms', 'menstrual-sexual', 'headache', 'weakness-numbness', 'dizziness', 'urinary-symptoms', 'fecal-symptoms', 'incontinence', 'seizures', 'movement-change'],
  // Shared by all features (rendered as "All features"): the Change framework, plus extras
  pc: {
    framework: 'change',
    prompts: [
      'How much weight have you lost or gained?',
      'Do you have earlier weights to compare? Have your clothes become looser or tighter?',
      'Was it intentional?'
    ]
  },
  parts: [
    {
      id: 'weight-loss',
      title: 'Weight loss',
      summary: 'Unintentional loss of more than 5% of body weight over 6–12 months needs explaining. Appetite is the key branch point: weight loss despite a good appetite points to increased metabolism or malabsorption; with a poor appetite, to malignancy, chronic disease or depression.',
      sharedNotes: {
        context: [
          'Diet, activity, finances or access to food'
        ]
      },
      pc: {
        prompts: [
          {
            text: 'How is your appetite?',
            options: [
              { text: 'Normal or increased', dx: ['Hyperthyroidism', 'DM'] },
              { text: 'Reduced', dx: ['Malignancy', 'Depression'] }
            ]
          },
          { text: 'Is it difficult to eat (swallowing, pain or nausea)?', see: ['upper-gi-symptoms', 'nausea-vomiting'] },
          { text: 'Any change in bowel habit, or greasy stool?', dx: ['Malabsorption', 'CRC'], see: ['diarrhea-constipation'] }
        ]
      },
      associated: [
        { text: 'Any fever or night sweats?', dx: ['TB', 'Lymphoma'], see: ['temperature-sweating'] },
        { text: 'Any fatigue?', dx: ['Malignancy'], see: ['fatigue'] },
        { text: 'Any cough, hemoptysis or dyspnea?', dx: ['Lung cancer', 'TB'] },
        { text: 'Any dysphagia, abdominal pain or hematochezia?', dx: ['Gastric cancer', 'CRC'], see: ['upper-gi-symptoms', 'abdominal-pain'] },
        { text: 'Any thirst or polyuria?', dx: ['DM'], see: ['polyuria-polydipsia'] },
        { text: 'Any heat intolerance, palpitations or tremor?', dx: ['Hyperthyroidism'], see: ['temperature-sweating'] },
        { text: 'Any dizziness on standing, salt craving or darker skin?', dx: ['Addison disease'], see: ['dizziness', 'appearance-change'] },
        { text: 'Any low mood, poor sleep or loss of interest?', dx: ['Depression'] },
        { text: 'Any concern about your weight or shape, or self-induced vomiting?', dx: ['Eating disorder'] }
      ],
      redflags: [
        'Unintentional loss of more than 5% in 6–12 months: malignancy until proven otherwise',
        'Fever, night sweats and weight loss: lymphoma or TB',
        'Dysphagia, hematemesis or hematochezia with weight loss: GI malignancy',
        'Weight loss with polyuria, thirst and N/V: DKA',
        'Dizziness, hypotension, vomiting and abdominal pain: adrenal crisis'
      ],
      history: {
        pmh: [
          'Any DM, thyroid disease, IBD, celiac disease or cancer?',
          'Any HIV, TB or other chronic infection?',
          'Any HF, COPD or CKD?'
        ],
        meds: [
          'Any metformin, GLP-1 agonists or SGLT2 inhibitors (weight loss)?',
          'Any levothyroxine (overreplacement)?',
          'Any stimulants or laxatives (weight loss)?'
        ],
        fhx: [
          'Any family history of cancer, thyroid disease or celiac disease?'
        ],
        shx: [
          'Do you smoke? How much alcohol do you drink?',
          'Any IV drug use or travel (TB, HIV)?',
          'Has your access to food or your finances changed?'
        ],
        sr: [
          'General: any fever or night sweats?',
          'Respiratory: any cough or hemoptysis?',
          'Gastrointestinal: any dysphagia, hematochezia or change in bowel habit?',
          'Endocrine: any heat intolerance, thirst or polyuria?',
          'Psychiatric: any low mood or concerns about eating?'
        ]
      },
      differentials: [
        { name: 'Malignancy', clues: 'Older, poor appetite, fatigue; site-specific symptoms' },
        { name: 'Hyperthyroidism', clues: 'Good appetite, heat intolerance, palpitations, tremor, diarrhea' },
        { name: 'DM', clues: 'Thirst, polyuria, fatigue' },
        { name: 'Malabsorption', clues: 'Diarrhea, greasy stool; celiac disease, pancreatic insufficiency' },
        { name: 'CRC', clues: 'Older, change in bowel habit, hematochezia, iron deficiency' },
        { name: 'Gastric cancer', clues: 'Older, early satiety, dyspepsia, dysphagia' },
        { name: 'Lung cancer', clues: 'Smoker, cough, hemoptysis' },
        { name: 'TB', clues: 'Fever, night sweats, cough, exposure or travel' },
        { name: 'Lymphoma', clues: 'Fever, night sweats, lymphadenopathy, itch' },
        { name: 'Addison disease', clues: 'Fatigue, dizziness on standing, salt craving, darker skin' },
        { name: 'Depression', clues: 'Low mood, loss of interest, poor sleep and appetite' },
        { name: 'Eating disorder', clues: 'Concern about weight or shape, restriction or purging' }
      ]
    },
    {
      id: 'weight-gain',
      title: 'Weight gain',
      summary: 'Most weight gain comes from intake, activity and medications. Look for fluid (rapid gain with swelling), and for the endocrine causes, which usually bring other clues.',
      sharedNotes: {
        tempo: [
          { text: 'Rapidly, over days to weeks, with swelling (fluid)', dx: ['Fluid retention'], see: ['swelling'] },
          { text: 'Gradually, over months', dx: ['Lifestyle-related weight gain', 'Hypothyroidism'] }
        ],
        context: [
          { text: 'Diet, activity or sleep', dx: ['Lifestyle-related weight gain'] },
          { text: 'A new medication', dx: ['Medication-related weight gain'] },
          { text: 'Stopping smoking', dx: ['Lifestyle-related weight gain'] }
        ]
      },
      pc: {
        prompts: [
          {
            text: 'Where has the weight gone?',
            options: [
              { text: 'Mainly the trunk and face, with thin arms and legs', dx: ['Cushing syndrome'] },
              { text: 'All over', dx: ['Lifestyle-related weight gain', 'Hypothyroidism'] }
            ]
          }
        ]
      },
      associated: [
        { text: 'Any fatigue?', dx: ['Hypothyroidism', 'Depression'], see: ['fatigue'] },
        { text: 'Any leg or abdominal swelling, or dyspnea?', dx: ['Fluid retention'], see: ['swelling'] },
        { text: 'Any snoring or daytime sleepiness?', dx: ['OSA'] },
        { text: 'Any irregular periods, excess hair or acne?', dx: ['PMOS'], see: ['appearance-change', 'menstrual-sexual'] },
        { text: 'Any cold intolerance, constipation or dry skin?', dx: ['Hypothyroidism'], see: ['temperature-sweating'] },
        { text: 'Any episodes of shakiness or sweating, relieved by eating?', dx: ['Insulinoma'], see: ['spells'] },
        { text: 'Any purple stretch marks, easy bruising or muscle weakness?', dx: ['Cushing syndrome'], see: ['weakness-numbness', 'appearance-change', 'skin-changes'] },
        { text: 'Any low mood, or episodes of eating large amounts with loss of control?', dx: ['Depression', 'Binge eating disorder'] }
      ],
      redflags: [
        'Rapid weight gain with swelling or dyspnea: HF, nephrotic syndrome or cirrhosis',
        'Central weight gain with purple stretch marks, proximal weakness and HTN: Cushing syndrome',
        'Snoring, witnessed apneas and daytime sleepiness: OSA'
      ],
      history: {
        pmh: [
          'Any thyroid disease, PMOS, HF, CKD or liver disease?',
          'Any depression?'
        ],
        meds: [
          'Any corticosteroids, insulin, sulfonylureas, antipsychotics or antidepressants (weight gain)?',
          'Any beta-blockers or hormonal contraceptives (weight gain)?'
        ],
        fhx: [
          'Any family history of obesity, DM or thyroid disease?'
        ],
        shx: [
          'What is your typical daily diet? Has it changed?',
          'How active are you? Any change in work or sleep?',
          'How much alcohol do you drink?',
          'Have you recently stopped smoking?'
        ],
        sr: [
          'Cardiovascular: any leg swelling or dyspnea?',
          'Genitourinary & reproductive: any irregular periods?',
          'Endocrine: any cold intolerance, excess hair or acne?',
          'Psychiatric: any low mood?'
        ]
      },
      differentials: [
        { name: 'Lifestyle-related weight gain', clues: 'Gradual; more intake, less activity, stopping smoking' },
        { name: 'Medication-related weight gain', clues: 'Corticosteroids, insulin, sulfonylureas, antipsychotics, some antidepressants' },
        { name: 'Fluid retention', clues: 'Rapid gain with swelling; HF, CKD, nephrotic syndrome, cirrhosis' },
        { name: 'Hypothyroidism', clues: 'Fatigue, cold intolerance, constipation, dry skin' },
        { name: 'Cushing syndrome', clues: 'Central weight, round face, purple stretch marks, bruising, proximal weakness' },
        { name: 'PMOS', clues: 'Irregular periods, excess hair, acne' },
        { name: 'Insulinoma', clues: 'Recurrent hypoglycemia relieved by eating' },
        { name: 'Depression', clues: 'Low mood, comfort eating, poor sleep' },
        { name: 'Binge eating disorder', clues: 'Episodes of eating large amounts with loss of control' },
        { name: 'OSA', clues: 'Snoring, daytime sleepiness, morning headache' }
      ]
    }
  ]
});
