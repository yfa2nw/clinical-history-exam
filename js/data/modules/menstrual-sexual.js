/*
 * Changes in menstrual or sexual function: a multi-system complaint. Reproductive
 * symptoms often reflect the hypothalamic-pituitary-gonadal axis (prolactin, thyroid,
 * PMOS, hypogonadism); gynecologic, urologic, vascular and psychological causes
 * hand off via `see`.
 *
 * Awaiting hand-off (answers with no matching presenting complaint yet; add `see`
 * and remove the line when one is added; see CLAUDE.md, "Multi-system complaints"):
 *   - Painful periods, pelvic pain, pain with intercourse                   → pelvic pain complaint
 *   - Low mood, anxiety, relationship difficulties                          → mood complaint
 *   - Erectile dysfunction: chest pain on exertion, leg pain on walking     → chest pain / leg pain complaint
 *   - Erectile dysfunction: back pain, bladder or bowel problems             → back pain complaint
 *   - Galactorrhea, gynecomastia: breast lump                               → breast lump complaint
 *   - Gynecomastia: testicular lump or swelling                             → scrotal complaint
 */
CHE.registerModule({
  id: 'menstrual-sexual',
  title: 'Changes in menstrual or sexual function',
  subtitle: 'Periods, fertility, libido, erections, breasts',
  multiSystem: true,
  aka: ['irregular periods', 'missed periods', 'amenorrhea', 'oligomenorrhea', 'heavy periods', 'menorrhagia', 'nipple discharge', 'galactorrhea', 'infertility', 'difficulty conceiving', 'low libido', 'low sex drive', 'erectile dysfunction', 'impotence', 'breast enlargement in males', 'gynecomastia', 'PCOS', 'polycystic ovary syndrome'],
  tags: ['endocrine', 'reproductive'],
  summary: 'Reproductive symptoms often reflect hormonal problems (raised prolactin, thyroid disease, PMOS, hypogonadism), but gynecologic, urologic, vascular, medication and psychological causes are common. Ask sensitively and offer a chaperone. Switch on only the features that apply.',
  ref: '',
  related: ['weight-change', 'temperature-sweating', 'appearance-change', 'fatigue', 'skin-changes', 'polyuria-polydipsia', 'senses-change', 'headache', 'weakness-numbness', 'incontinence', 'urinary-tract-pain', 'abdominal-pain', 'spells', 'seizures', 'dizziness'],
  // Shared by all features (rendered as "All features"): the Change framework, plus extras
  pc: {
    framework: 'change'
  },
  parts: [
    {
      id: 'irregular-absent-periods',
      title: 'Irregular or absent periods',
      summary: 'Exclude pregnancy first. Then think of PMOS, hypothalamic causes (weight loss, stress, exercise), raised prolactin, thyroid disease, and premature ovarian insufficiency or menopause.',
      sharedNotes: {
        baseline: [
          { text: 'Periods have never started (age 15 or older)', dx: ['Primary amenorrhea'] }
        ],
        course: [
          { text: 'Irregular ever since they started, with acne or excess hair', dx: ['PMOS'] }
        ],
        context: [
          { text: 'Weight loss, stress or heavy exercise', dx: ['Hypothalamic amenorrhea'] },
          'Starting or stopping hormonal contraceptives'
        ]
      },
      pc: {
        prompts: [
          { text: 'Could you be pregnant?', dx: ['Pregnancy'] },
          'LMP? How long between periods?',
          { text: 'Any hot flashes, night sweats or vaginal dryness?', dx: ['Menopause', 'Premature ovarian insufficiency'], see: ['temperature-sweating'] }
        ]
      },
      associated: [
        { text: 'Any milky nipple discharge? (tick Galactorrhea)', dx: ['Hyperprolactinemia'] },
        { text: 'Any weight change?', dx: ['PMOS', 'Hypothalamic amenorrhea'], see: ['weight-change'] },
        { text: 'Any heat or cold intolerance?', dx: ['Thyroid disease'], see: ['temperature-sweating'] },
        { text: 'Any excess hair or acne?', dx: ['PMOS'], see: ['appearance-change'] },
        { text: 'Any headache or loss of side vision?', dx: ['Pituitary tumor'], see: ['headache', 'senses-change'] },
        { text: 'Any restrictive eating or concerns about your weight?', dx: ['Hypothalamic amenorrhea'] }
      ],
      redflags: [
        'Missed period with abdominal pain or vaginal bleeding: ectopic pregnancy',
        'Headache with loss of side vision: pituitary tumor',
        'Absent periods with low weight and restrictive eating: eating disorder'
      ],
      history: {
        pmh: [
          'Any PMOS, thyroid disease or pituitary problems?',
          'Any chemotherapy, pelvic radiation therapy or uterine surgery?'
        ],
        meds: [
          'Any hormonal contraceptives, recently started or stopped (irregular periods)?',
          'Any antipsychotics or metoclopramide (raised prolactin)?'
        ],
        fhx: [
          'Any family history of early menopause or PMOS?'
        ],
        shx: [
          'How much exercise do you do? Any recent stress?'
        ],
        sr: [
          'Endocrine: any heat or cold intolerance, or excess hair?',
          'Neurologic: any headache or vision change?'
        ]
      },
      differentials: [
        { name: 'Pregnancy', clues: 'Missed period, sexually active' },
        { name: 'PMOS', clues: 'Irregular since menarche, acne, excess hair, weight gain' },
        { name: 'Hypothalamic amenorrhea', clues: 'Low weight, stress, intense exercise' },
        { name: 'Hyperprolactinemia', clues: 'Galactorrhea; antipsychotics, pituitary tumor' },
        { name: 'Thyroid disease', clues: 'Heat or cold intolerance, weight change' },
        { name: 'Premature ovarian insufficiency', clues: 'Under 40, hot flashes, night sweats' },
        { name: 'Menopause', clues: 'Over 45, gradual change, hot flashes' },
        { name: 'Pituitary tumor', clues: 'Headache, loss of side vision, galactorrhea' },
        { name: 'Primary amenorrhea', clues: 'No periods by 15; chromosomal, anatomic or hypothalamic-pituitary causes' }
      ]
    },
    {
      id: 'heavy-menstrual-bleeding',
      title: 'Heavy menstrual bleeding',
      summary: 'Bleeding heavy enough to affect daily life. Ask about volume and flooding, and look for structural causes, bleeding disorders and anemia.',
      sharedNotes: {
        course: [
          { text: 'Heavy ever since periods started', dx: ['Bleeding disorder'] }
        ],
        context: [
          'Starting anticoagulants or a copper IUD (heavier periods)'
        ]
      },
      pc: {
        prompts: [
          {
            text: 'How heavy is it?',
            options: ['Changing pads or tampons every 1–2 hours', 'Flooding, or clots larger than a quarter', 'Lasting more than 7 days']
          },
          { text: 'Any bleeding between periods or after intercourse?', dx: ['Fibroids or polyps', 'Endometrial cancer'] },
          { text: 'Any pelvic pain, or pain with periods?', dx: ['Adenomyosis', 'Fibroids or polyps'] }
        ]
      },
      associated: [
        { text: 'Any fatigue, pallor or dyspnea on exertion?', dx: ['Iron deficiency anemia'], see: ['fatigue', 'skin-changes'] },
        { text: 'Any easy bruising, nosebleeds, or bleeding after dental work?', dx: ['Bleeding disorder'], see: ['skin-changes'] },
        { text: 'Any cold intolerance or weight gain?', dx: ['Hypothyroidism'], see: ['temperature-sweating'] }
      ],
      redflags: [
        'Postmenopausal bleeding: endometrial cancer until proven otherwise',
        'Bleeding after intercourse: cervical pathology',
        'Heavy bleeding with lightheadedness or syncope: significant blood loss'
      ],
      history: {
        pmh: [
          'Any fibroids, polyps or bleeding disorder?',
          'Any thyroid disease?'
        ],
        meds: [
          'Any anticoagulants or antiplatelets (heavy bleeding)?',
          'Any copper IUD (heavy periods)?'
        ],
        fhx: [
          'Any family history of bleeding disorders?'
        ],
        sr: [
          'Cardiovascular: any palpitations or dyspnea on exertion?'
        ]
      },
      differentials: [
        { name: 'Fibroids or polyps', clues: 'Heavy periods, pelvic pressure, bleeding between periods' },
        { name: 'Adenomyosis', clues: 'Heavy, painful periods, enlarged uterus' },
        { name: 'Bleeding disorder', clues: 'Heavy since menarche, bruising, nosebleeds; von Willebrand disease' },
        { name: 'Hypothyroidism', clues: 'Cold intolerance, weight gain, fatigue' },
        { name: 'Endometrial cancer', clues: 'Postmenopausal or intermenstrual bleeding; obesity, PMOS' },
        { name: 'Iron deficiency anemia', clues: 'Fatigue, pallor, dyspnea on exertion' }
      ]
    },
    {
      id: 'galactorrhea',
      title: 'Galactorrhea',
      summary: 'Milky nipple discharge outside pregnancy or breastfeeding. Usually from raised prolactin (medications, a pituitary tumor, hypothyroidism). Bloody or one-sided discharge needs a breast assessment.',
      sharedNotes: {
        context: [
          { text: 'Pregnancy or breastfeeding in the past year', dx: ['Physiologic lactation'] },
          { text: 'Starting antipsychotics, metoclopramide, domperidone, opioids or SSRIs', dx: ['Medication-related hyperprolactinemia'] }
        ]
      },
      pc: {
        prompts: [
          {
            text: 'What does the discharge look like?',
            options: [
              { text: 'Milky, from both breasts', dx: ['Prolactinoma', 'Medication-related hyperprolactinemia'] },
              { text: 'Bloody or clear, from one breast or one duct', dx: ['Breast pathology'] }
            ]
          },
          'Does it come out on its own, or only when squeezed?'
        ]
      },
      associated: [
        { text: 'Any irregular or absent periods? (tick Irregular or absent periods)', dx: ['Prolactinoma'] },
        { text: 'Any reduced libido or erectile dysfunction?', dx: ['Prolactinoma'] },
        { text: 'Any cold intolerance or fatigue?', dx: ['Hypothyroidism'], see: ['temperature-sweating', 'fatigue'] },
        { text: 'Any headache or loss of side vision?', dx: ['Prolactinoma'], see: ['headache', 'senses-change'] },
        { text: 'Any chest wall injury, surgery or shingles?', dx: ['Chest wall irritation'] }
      ],
      redflags: [
        'Bloody, one-sided or single-duct discharge, or a breast lump: breast cancer',
        'Headache with loss of side vision: pituitary macroadenoma'
      ],
      history: {
        pmh: [
          'Any pituitary, thyroid or kidney disease?'
        ],
        meds: [
          'Any antipsychotics, metoclopramide, domperidone, opioids or SSRIs (raised prolactin)?'
        ],
        sr: [
          'Genitourinary & reproductive: LMP? Any change in periods?',
          'Neurologic: any headache or vision change?'
        ]
      },
      differentials: [
        { name: 'Prolactinoma', clues: 'Galactorrhea with irregular periods or reduced libido; headache, visual loss' },
        { name: 'Medication-related hyperprolactinemia', clues: 'Antipsychotics, metoclopramide, domperidone, opioids, SSRIs' },
        { name: 'Physiologic lactation', clues: 'Pregnancy or breastfeeding in the past year' },
        { name: 'Hypothyroidism', clues: 'Fatigue, cold intolerance; raises prolactin' },
        { name: 'Breast pathology', clues: 'Bloody or one-sided discharge, lump; intraductal papilloma or cancer' },
        { name: 'Chest wall irritation', clues: 'Injury, surgery, shingles or frequent breast stimulation' }
      ]
    },
    {
      id: 'infertility',
      title: 'Infertility',
      summary: 'Not conceiving after 12 months of regular unprotected intercourse (6 months if the female partner is 35 or older). Ask about both partners: ovulation, tubes, sperm and timing.',
      pc: {
        prompts: [
          'How long have you been trying? How often do you have intercourse?',
          {
            text: 'Are your periods regular?',
            options: [{ text: 'No, irregular or absent (tick Irregular or absent periods)', dx: ['Ovulatory dysfunction'] }]
          },
          { text: 'Any previous pelvic infections, STIs, ectopic pregnancy or pelvic surgery?', dx: ['Tubal factor'] },
          { text: 'Any painful periods, or pain with intercourse?', dx: ['Endometriosis'] },
          { text: 'Has your partner fathered children before? Any testicular problems, mumps or surgery?', dx: ['Male factor'] },
          'Have either of you had a previous pregnancy?'
        ]
      },
      associated: [
        { text: 'Any milky nipple discharge? (tick Galactorrhea)', dx: ['Ovulatory dysfunction'] },
        { text: 'Any weight change?', dx: ['Ovulatory dysfunction'], see: ['weight-change'] },
        { text: 'Any heat or cold intolerance?', dx: ['Ovulatory dysfunction'], see: ['temperature-sweating'] },
        { text: 'Any excess hair or acne?', dx: ['Ovulatory dysfunction'], see: ['appearance-change'] }
      ],
      redflags: [
        'Female partner aged 35 or older: assess after 6 months rather than 12',
        'Absent periods with hot flashes under age 40: premature ovarian insufficiency'
      ],
      history: {
        pmh: [
          'Any PMOS, thyroid disease, endometriosis or pelvic infection?',
          'Any chemotherapy or pelvic radiation therapy?'
        ],
        meds: [
          'Any anabolic steroids or testosterone in the male partner (suppresses sperm production)?'
        ],
        fhx: [
          'Any family history of early menopause?'
        ],
        shx: [
          'Do you or your partner smoke? How much alcohol do you drink?',
          'Any occupational exposure to heat, chemicals or radiation?'
        ],
        sr: [
          'Genitourinary & reproductive: LMP? Any pelvic pain?'
        ]
      },
      differentials: [
        { name: 'Ovulatory dysfunction', clues: 'Irregular periods; PMOS, thyroid disease, raised prolactin, low weight' },
        { name: 'Tubal factor', clues: 'Previous PID, STI, ectopic pregnancy or pelvic surgery' },
        { name: 'Endometriosis', clues: 'Painful periods, pain with intercourse' },
        { name: 'Male factor', clues: 'Testicular problems, mumps, anabolic steroids, varicocele' }
      ]
    },
    {
      id: 'reduced-libido',
      title: 'Reduced libido',
      summary: 'Common and often multifactorial: relationship, mood, medications, fatigue and illness are frequent causes. Look for hypogonadism and raised prolactin.',
      sharedNotes: {
        context: [
          { text: 'A new medication', dx: ['Medication-related reduced libido'] },
          { text: 'Relationship stress or low mood', dx: ['Relationship difficulties', 'Depression'] }
        ]
      },
      pc: {
        prompts: [
          'How long has it been reduced? Is it a change for you?',
          {
            text: 'Is it reduced desire, or difficulty with arousal or performance?',
            options: [
              'Difficulty with erections (tick Erectile dysfunction)',
              { text: 'Pain with intercourse, vaginal dryness', dx: ['Genitourinary syndrome of menopause'] }
            ]
          },
          { text: 'How is your relationship, and how is your mood?', dx: ['Depression', 'Relationship difficulties'] }
        ]
      },
      associated: [
        { text: 'Any hot flashes or vaginal dryness?', dx: ['Menopause'], see: ['temperature-sweating'] },
        { text: 'Any breast enlargement in males? (tick Gynecomastia)', dx: ['Hypogonadism'] },
        { text: 'Any milky nipple discharge or headache?', dx: ['Hyperprolactinemia'], see: ['headache'] },
        { text: 'Any fatigue, or loss of muscle or body hair?', dx: ['Hypogonadism'], see: ['fatigue'] },
        { text: 'Any low mood, anxiety or poor sleep?', dx: ['Depression'] }
      ],
      redflags: [
        'Reduced libido with headache or loss of side vision: pituitary tumor',
        'Low mood with thoughts of self-harm: depression with suicide risk'
      ],
      history: {
        pmh: [
          'Any DM, thyroid disease, pituitary problems or chronic illness?',
          'Any depression?'
        ],
        meds: [
          'Any SSRIs, antipsychotics, opioids, beta-blockers or antiandrogens (reduced libido)?',
          'Any hormonal contraceptives (reduced libido)?'
        ],
        shx: [
          'How much alcohol do you drink? Any recreational drugs?',
          'Any stress or relationship difficulties?'
        ],
        sr: [
          'Endocrine: any hot flashes or loss of body hair?',
          'Psychiatric: any low mood?'
        ]
      },
      differentials: [
        { name: 'Depression', clues: 'Low mood, loss of interest, poor sleep' },
        { name: 'Relationship difficulties', clues: 'Conflict, stress, situational' },
        { name: 'Medication-related reduced libido', clues: 'SSRIs, antipsychotics, opioids, antiandrogens' },
        { name: 'Hypogonadism', clues: 'Fatigue, loss of body hair, gynecomastia, erectile dysfunction' },
        { name: 'Hyperprolactinemia', clues: 'Galactorrhea, headache, irregular periods' },
        { name: 'Menopause', clues: 'Hot flashes, night sweats, vaginal dryness' },
        { name: 'Genitourinary syndrome of menopause', clues: 'Vaginal dryness, pain with intercourse' }
      ]
    },
    {
      id: 'erectile-dysfunction',
      title: 'Erectile dysfunction',
      summary: 'Usually vascular, and often an early sign of cardiovascular disease. Preserved morning or night-time erections point to a psychological rather than physical cause.',
      sharedNotes: {
        tempo: [
          { text: 'Suddenly, or only in certain situations', dx: ['Psychogenic erectile dysfunction'] },
          { text: 'Gradually, in all situations', dx: ['Vascular erectile dysfunction'] }
        ],
        context: [
          { text: 'A new medication', dx: ['Medication-related erectile dysfunction'] },
          { text: 'Pelvic or prostate surgery, or radiation therapy', dx: ['Neurogenic erectile dysfunction'] }
        ]
      },
      pc: {
        prompts: [
          {
            text: 'Do you still have erections in the morning or at night?',
            options: [
              { text: 'Yes', dx: ['Psychogenic erectile dysfunction'] },
              { text: 'No', dx: ['Vascular erectile dysfunction', 'Hypogonadism'] }
            ]
          },
          'Is it difficulty getting or keeping an erection, or reduced desire? (tick Reduced libido)'
        ]
      },
      associated: [
        { text: 'Any reduced libido, fatigue or breast enlargement?', dx: ['Hypogonadism'], see: ['fatigue'] },
        { text: 'Any curvature or pain on erection?', dx: ['Peyronie disease'] },
        { text: 'Any chest pain on exertion, or leg pain on walking?', dx: ['Vascular erectile dysfunction'] },
        { text: 'Any thirst or polyuria, or known DM?', dx: ['Vascular erectile dysfunction', 'Neurogenic erectile dysfunction'], see: ['polyuria-polydipsia'] },
        { text: 'Any numbness, back pain, or bladder or bowel problems?', dx: ['Neurogenic erectile dysfunction'], see: ['incontinence', 'weakness-numbness'] },
        { text: 'Any anxiety, low mood or relationship difficulties?', dx: ['Psychogenic erectile dysfunction'] }
      ],
      redflags: [
        'Erectile dysfunction with vascular risk factors: assess cardiovascular risk (it often precedes CAD by years)',
        'An erection lasting more than 4 hours: priapism (emergency)',
        'Saddle anesthesia or new bladder or bowel dysfunction: cauda equina syndrome'
      ],
      history: {
        pmh: [
          'Any DM, HTN, dyslipidemia, heart disease or peripheral vascular disease?',
          'Any pelvic or prostate surgery, radiation therapy or spinal cord injury?'
        ],
        meds: [
          'Any antihypertensives, SSRIs, antipsychotics or antiandrogens (erectile dysfunction)?',
          'Any nitrates (unsafe with PDE5 inhibitors)?',
          'Have you tried PDE5 inhibitors? Did they help?'
        ],
        shx: [
          'Do you smoke? How much alcohol do you drink? Any recreational drugs?',
          'Any stress or relationship difficulties?'
        ],
        sr: [
          'Cardiovascular: any chest pain on exertion or leg pain on walking?',
          'Neurologic: any numbness or weakness?'
        ]
      },
      differentials: [
        { name: 'Vascular erectile dysfunction', clues: 'Gradual, in all situations; smoking, DM, HTN, dyslipidemia' },
        { name: 'Neurogenic erectile dysfunction', clues: 'DM, spinal cord injury, MS, pelvic surgery' },
        { name: 'Hypogonadism', clues: 'Reduced libido, fatigue, gynecomastia, loss of body hair' },
        { name: 'Medication-related erectile dysfunction', clues: 'Antihypertensives, SSRIs, antipsychotics, antiandrogens' },
        { name: 'Psychogenic erectile dysfunction', clues: 'Sudden, situational, morning erections preserved' },
        { name: 'Peyronie disease', clues: 'Curvature and pain on erection' }
      ]
    },
    {
      id: 'gynecomastia',
      title: 'Gynecomastia',
      summary: 'Enlarged breast gland tissue in males. Common at puberty and in older age; otherwise look for medications, liver disease, hypogonadism and, rarely, tumors. A hard, one-sided lump needs a breast assessment.',
      sharedNotes: {
        context: [
          { text: 'Starting spironolactone, antiandrogens, anabolic steroids, cimetidine or digoxin', dx: ['Medication-related gynecomastia'] }
        ]
      },
      pc: {
        prompts: [
          'Is it one side or both? Is it tender?',
          {
            text: 'Is it a firm disc under the nipple, or soft fatty tissue?',
            options: [
              'Firm, rubbery disc under the nipple (true gynecomastia)',
              { text: 'Soft fatty tissue, no disc', dx: ['Pseudogynecomastia'] }
            ]
          },
          { text: 'Is there a hard, fixed lump away from the nipple, or nipple discharge?', dx: ['Breast cancer'] }
        ]
      },
      associated: [
        { text: 'Any kidney disease?', dx: ['CKD'] },
        { text: 'Any testicular lump or swelling?', dx: ['Testicular tumor'] },
        { text: 'Any reduced libido or erectile dysfunction? (tick those features)', dx: ['Hypogonadism'] },
        { text: 'Any weight loss, heat intolerance or palpitations?', dx: ['Hyperthyroidism'], see: ['weight-change'] },
        { text: 'Any jaundice, or heavy alcohol use?', dx: ['Cirrhosis'], see: ['skin-changes'] }
      ],
      redflags: [
        'Hard, fixed or one-sided lump, nipple discharge or skin change: breast cancer',
        'Testicular lump: testicular tumor',
        'Rapid enlargement: hormone-secreting tumor'
      ],
      history: {
        pmh: [
          'Any liver, kidney or thyroid disease, or testicular problems?'
        ],
        meds: [
          'Any spironolactone, antiandrogens, anabolic steroids, cimetidine or digoxin (gynecomastia)?'
        ],
        shx: [
          'How much alcohol do you drink? Any cannabis or other recreational drugs?'
        ],
        sr: [
          'Genitourinary & reproductive: any testicular lump or swelling?',
          'Endocrine: any heat intolerance or weight loss?'
        ]
      },
      differentials: [
        { name: 'Medication-related gynecomastia', clues: 'Spironolactone, antiandrogens, anabolic steroids, cimetidine, digoxin' },
        { name: 'Hypogonadism', clues: 'Reduced libido, erectile dysfunction, small testes' },
        { name: 'Cirrhosis', clues: 'Heavy alcohol use, jaundice' },
        { name: 'CKD', clues: 'Known kidney disease' },
        { name: 'Hyperthyroidism', clues: 'Weight loss, heat intolerance, palpitations' },
        { name: 'Testicular tumor', clues: 'Testicular lump or swelling' },
        { name: 'Breast cancer', clues: 'Hard, fixed, one-sided lump, nipple discharge' },
        { name: 'Pseudogynecomastia', clues: 'Soft fatty tissue without a glandular disc; obesity' }
      ]
    }
  ]
});
