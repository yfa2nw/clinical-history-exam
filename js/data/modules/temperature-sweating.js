/*
 * Temperature intolerance and sweating: a multi-system complaint (thyroid, menopause,
 * infection, malignancy, hypoglycemia, pheochromocytoma).
 *
 * Awaiting hand-off (answers with no matching presenting complaint yet; add `see`
 * and remove the line when one is added; see CLAUDE.md, "Multi-system complaints"):
 *   - Heat intolerance / sweating: palpitations, tremor, anxiety          → palpitations / anxiety complaint
 *   - Heat intolerance: neck swelling                                     → neck lump complaint
 *   - Sweating: with chest pain or dyspnea; cough or hemoptysis           → chest pain / cough complaint
 *   - Cold intolerance: hoarse voice                                      → voice complaint
 */
CHE.registerModule({
  id: 'temperature-sweating',
  title: 'Temperature intolerance and sweating',
  subtitle: 'Feeling hot or cold, night sweats',
  multiSystem: true,
  aka: ['feeling hot', 'feeling cold', 'heat intolerance', 'cold intolerance', 'sweating', 'night sweats', 'hot flashes', 'hyperhidrosis'],
  tags: ['endocrine'],
  summary: 'Thyroid disease is the classic cause, but menopause, medications, infection and malignancy are common. Switch on only the features that apply.',
  ref: '',
  related: ['weight-change', 'fatigue', 'polyuria-polydipsia', 'spells', 'appearance-change', 'skin-changes', 'diarrhea-constipation', 'menstrual-sexual', 'memory-thinking', 'weakness-numbness', 'movement-change'],
  parts: [
    {
      id: 'heat-intolerance',
      title: 'Heat intolerance',
      summary: 'Feeling hot when others are comfortable. Hyperthyroidism is the classic cause; menopause and medications are common ones.',
      pc: {
        prompts: [
          'Do you feel hot when others are comfortable? Since when?',
          { text: 'Does it come in sudden waves, spreading over the face and chest?', dx: ['Menopause'] },
          { text: 'Is it constant, with sweating and a preference for cold rooms?', dx: ['Hyperthyroidism'] },
          { text: 'Have you started any new medications?', dx: ['Medication-related heat intolerance'] }
        ]
      },
      associated: [
        { text: 'Any neck swelling, or bulging or gritty eyes?', dx: ['Hyperthyroidism'], see: ['appearance-change'] },
        { text: 'Any weight loss despite a good appetite?', dx: ['Hyperthyroidism'], see: ['weight-change'] },
        { text: 'Any palpitations, tremor or anxiety?', dx: ['Hyperthyroidism', 'Pheochromocytoma'] },
        { text: 'Any diarrhea or more frequent bowel movements?', dx: ['Hyperthyroidism'], see: ['diarrhea-constipation'] },
        { text: 'Any irregular or stopped periods?', dx: ['Menopause', 'Hyperthyroidism'], see: ['menstrual-sexual'] },
        { text: 'Any episodes of headache, sweating and palpitations together?', dx: ['Pheochromocytoma'], see: ['headache', 'spells'] }
      ],
      redflags: [
        'Fever, confusion, tachycardia and vomiting in hyperthyroidism: thyroid storm',
        'Episodes of headache, sweating and palpitations with high BP: pheochromocytoma'
      ],
      history: {
        pmh: [
          'Any thyroid disease?',
          'LMP? Menopausal?'
        ],
        meds: [
          'Any levothyroxine (overreplacement)?',
          'Any amiodarone (thyroid dysfunction)?',
          'Any SSRIs, stimulants or decongestants (heat intolerance, sweating)?'
        ],
        fhx: [
          'Any family history of thyroid disease?'
        ],
        shx: [
          'How much caffeine and alcohol do you drink?'
        ],
        sr: [
          'Cardiovascular: any palpitations?',
          'Gastrointestinal: any diarrhea?',
          'Genitourinary & reproductive: any change in periods?',
          'Endocrine: any neck swelling or eye changes?'
        ]
      },
      differentials: [
        { name: 'Hyperthyroidism', clues: 'Weight loss, palpitations, tremor, diarrhea, neck swelling, eye changes' },
        { name: 'Menopause', clues: 'Hot flashes, irregular or absent periods, midlife' },
        { name: 'Medication-related heat intolerance', clues: 'Levothyroxine overreplacement, SSRIs, stimulants' },
        { name: 'Pheochromocytoma', clues: 'Episodes of headache, sweating and palpitations; high BP' }
      ]
    },
    {
      id: 'cold-intolerance',
      title: 'Cold intolerance',
      summary: 'Feeling cold when others are comfortable. Hypothyroidism is the classic cause; anemia, low body weight and poor circulation are others.',
      pc: {
        prompts: [
          'Do you feel cold when others are comfortable? Since when?',
          {
            text: 'Is it your whole body, or mainly your hands and feet?',
            options: [
              { text: 'Whole body', dx: ['Hypothyroidism', 'Anemia'] },
              { text: 'Hands and feet, turning white or blue', dx: ['Raynaud phenomenon'], see: ['skin-changes'] }
            ]
          }
        ]
      },
      associated: [
        { text: 'Any weight gain, fatigue, constipation or dry skin?', dx: ['Hypothyroidism'], see: ['weight-change', 'fatigue'] },
        { text: 'Any weight loss or restricted eating?', dx: ['Low body weight'] },
        { text: 'Any pallor or dyspnea on exertion?', dx: ['Anemia'], see: ['skin-changes'] },
        { text: 'Any hoarse voice, puffy face or slowed thinking?', dx: ['Hypothyroidism'], see: ['memory-thinking', 'swelling', 'appearance-change'] },
        { text: 'Any heavy periods?', dx: ['Anemia'], see: ['menstrual-sexual'] }
      ],
      redflags: [
        'Drowsiness, confusion and low body temperature in hypothyroidism: myxedema coma',
        'Cold, pale, painful limb: acute limb ischemia'
      ],
      history: {
        pmh: [
          'Any thyroid disease, thyroid surgery or radioiodine treatment?',
          'Any anemia?'
        ],
        meds: [
          'Any lithium or amiodarone (hypothyroidism)?',
          'Any beta-blockers (cold peripheries)?'
        ],
        fhx: [
          'Any family history of thyroid disease?'
        ],
        sr: [
          'Gastrointestinal: any constipation?',
          'Genitourinary & reproductive: are your periods heavy?',
          'Musculoskeletal & integumentary: any dry skin or hair loss?'
        ]
      },
      differentials: [
        { name: 'Hypothyroidism', clues: 'Weight gain, fatigue, constipation, dry skin, slowed thinking' },
        { name: 'Anemia', clues: 'Pallor, fatigue, dyspnea on exertion' },
        { name: 'Low body weight', clues: 'Restricted intake, eating disorder, malnutrition' },
        { name: 'Raynaud phenomenon', clues: 'Fingers turn white, blue, then red in the cold' }
      ]
    },
    {
      id: 'sweating',
      title: 'Sweating',
      summary: 'Ask when it happens. Night sweats that soak the bedclothes suggest infection (TB), lymphoma or menopause; sweating in episodes suggests hypoglycemia or pheochromocytoma; lifelong sweating of the hands, feet or armpits suggests primary hyperhidrosis.',
      pc: {
        prompts: [
          {
            text: 'When do you sweat?',
            options: [
              { text: 'At night, soaking the bedclothes', dx: ['TB', 'Lymphoma'] },
              { text: 'In episodes, with shakiness or palpitations', dx: ['Hypoglycemia', 'Pheochromocytoma'], see: ['spells'] },
              { text: 'Hot flashes, mainly over the face and chest', dx: ['Menopause'] },
              { text: 'Most of the time, mainly hands, feet or armpits, since youth', dx: ['Primary hyperhidrosis'] }
            ]
          },
          { text: 'Are the episodes relieved by eating?', dx: ['Hypoglycemia'], see: ['spells'] },
          { text: 'Do you sweat with chest pain or dyspnea?', dx: ['ACS'] }
        ]
      },
      associated: [
        { text: 'Any heat intolerance, palpitations or tremor? (tick Heat intolerance)', dx: ['Hyperthyroidism'] },
        { text: 'Any fever or chills?', dx: ['TB', 'Endocarditis'] },
        { text: 'Any weight loss?', dx: ['Lymphoma', 'TB'], see: ['weight-change'] },
        { text: 'Any itch or swollen lymph nodes?', dx: ['Lymphoma'], see: ['skin-changes'] },
        { text: 'Any cough or hemoptysis?', dx: ['TB'] },
        { text: 'Any irregular or stopped periods?', dx: ['Menopause'], see: ['menstrual-sexual'] },
        { text: 'Any anxiety or panic?', dx: ['Anxiety'] }
      ],
      redflags: [
        'Drenching night sweats with fever and weight loss: lymphoma or TB',
        'Sweating with chest pain or dyspnea: ACS',
        'Episodes of sweating, shakiness and confusion: hypoglycemia',
        'Episodes of sweating with headache, palpitations and high BP: pheochromocytoma'
      ],
      history: {
        pmh: [
          'Any DM treated with insulin or sulfonylureas?',
          'Any thyroid disease, HIV or cancer?',
          'Any valve disease or IV drug use (endocarditis)?'
        ],
        meds: [
          'Any insulin or sulfonylureas (hypoglycemia)?',
          'Any SSRIs or opioids (sweating)?',
          'Any recently stopped opioids or alcohol (withdrawal)?'
        ],
        shx: [
          'Any TB exposure, travel or IV drug use?',
          'How much alcohol do you drink?'
        ],
        sr: [
          'General: any fever or weight loss?',
          'Respiratory: any cough?',
          'Genitourinary & reproductive: any change in periods?',
          'Endocrine: any heat intolerance?'
        ]
      },
      differentials: [
        { name: 'TB', clues: 'Night sweats, fever, weight loss, cough; exposure or travel' },
        { name: 'Lymphoma', clues: 'Night sweats, fever, weight loss, itch, lymphadenopathy' },
        { name: 'Endocarditis', clues: 'Fever, sweats; valve disease or IV drug use' },
        { name: 'Menopause', clues: 'Hot flashes and night sweats, change in periods, midlife' },
        { name: 'Hypoglycemia', clues: 'Episodes of sweating and shakiness relieved by eating; insulin, sulfonylureas' },
        { name: 'Pheochromocytoma', clues: 'Episodes of sweating, headache and palpitations; high BP' },
        { name: 'Hyperthyroidism', clues: 'Constant sweating, heat intolerance, weight loss' },
        { name: 'Primary hyperhidrosis', clues: 'Since youth, hands, feet or armpits, otherwise well' },
        { name: 'ACS', clues: 'Sweating with chest pain or dyspnea' },
        { name: 'Anxiety', clues: 'Episodes with fear and palpitations, well between episodes' }
      ]
    }
  ]
});
