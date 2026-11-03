/*
 * Changes in appearance: a multi-system complaint. Gradual changes that point to
 * endocrine disease (Cushing syndrome, acromegaly, thyroid disease, Addison disease,
 * androgen excess); skin, eye and other causes hand off via `see`.
 *
 * Awaiting hand-off (answers with no matching presenting complaint yet; add `see`
 * and remove the line when one is added; see CLAUDE.md, "Multi-system complaints"):
 *   - Facial changes, enlarging hands and feet: snoring, daytime sleepiness  → sleep complaint
 *   - Eye changes: neck swelling                                            → neck lump complaint
 *   - Enlarging hands and feet, alopecia: joint pain                        → joint pain complaint
 *   - Striae and thin skin: low mood, poor sleep                            → mood complaint
 */
CHE.registerModule({
  id: 'appearance-change',
  title: 'Changes in appearance',
  subtitle: 'Face, eyes, hair, skin, hands and feet',
  multiSystem: true,
  aka: ['looking different', 'moon face', 'coarse features', 'bulging eyes', 'hair loss', 'alopecia', 'excess hair', 'hirsutism', 'skin darkening', 'hyperpigmentation', 'stretch marks', 'striae', 'rings too tight', 'shoes too small', 'acromegaly', 'Cushing', 'PCOS', 'polycystic ovary syndrome'],
  tags: ['endocrine', 'skin'],
  summary: 'Gradual changes that the patient, family or old photos reveal. They point to Cushing syndrome, acromegaly, thyroid disease, Addison disease or androgen excess. Switch on only the features that apply.',
  ref: '',
  related: ['skin-changes', 'weight-change', 'temperature-sweating', 'fatigue', 'swelling', 'menstrual-sexual', 'senses-change', 'headache', 'weakness-numbness', 'dizziness'],
  // Shared by all features (rendered as "All features"): the Change framework, plus extras
  pc: {
    framework: 'change',
    prompts: [
      'Do you have old photos to compare (e.g. a driver\'s license or passport photo)?'
    ]
  },
  parts: [
    {
      id: 'facial-changes',
      title: 'Facial changes',
      summary: 'Ask what has changed and how fast. A rounder, redder face suggests Cushing syndrome; coarser features with a bigger jaw suggest acromegaly; a puffy, pale face suggests hypothyroidism.',
      sharedNotes: {
        context: [
          { text: 'Started corticosteroids (tablets, inhalers, creams or joint injections)', dx: ['Cushing syndrome'] }
        ]
      },
      pc: {
        prompts: [
          {
            text: 'How has your face changed?',
            options: [
              { text: 'Rounder and redder', dx: ['Cushing syndrome'] },
              { text: 'Coarser, with a bigger nose, lips, jaw or brow', dx: ['Acromegaly'] },
              { text: 'Puffy and pale, with thinning eyebrows', dx: ['Hypothyroidism'], see: ['swelling'] },
              { text: 'Swelling that comes on over minutes to hours', see: ['swelling'] }
            ]
          },
          { text: 'Have your teeth spread apart, or has your bite changed?', dx: ['Acromegaly'] }
        ]
      },
      associated: [
        { text: 'Any cold intolerance or fatigue?', dx: ['Hypothyroidism'], see: ['temperature-sweating', 'fatigue'] },
        { text: 'Any weight gain, especially around the trunk?', dx: ['Cushing syndrome', 'Hypothyroidism'], see: ['weight-change'] },
        { text: 'Any easy bruising or muscle weakness? (tick Striae and thin skin)', dx: ['Cushing syndrome'], see: ['weakness-numbness', 'skin-changes'] },
        { text: 'Any snoring or daytime sleepiness?', dx: ['Acromegaly'] },
        { text: 'Any headache or loss of side vision?', dx: ['Pituitary tumor'], see: ['headache', 'senses-change'] }
      ],
      redflags: [
        'Headache with loss of side vision: pituitary tumor compressing the optic chiasm',
        'Rapidly progressive Cushing features with HTN and weakness: ectopic ACTH (malignancy)'
      ],
      history: {
        pmh: [
          'Any HTN, DM or sleep apnea?',
          'Any thyroid disease?'
        ],
        meds: [
          'Any corticosteroids, including inhalers, creams or joint injections (Cushing syndrome)?'
        ],
        sr: [
          'Endocrine: any cold intolerance or weight change?',
          'Neurologic: any headache or vision change?',
          'Musculoskeletal & integumentary: any joint pain, excess sweating or skin tags?'
        ]
      },
      differentials: [
        { name: 'Cushing syndrome', clues: 'Round red face, central weight gain, purple striae, bruising, proximal weakness; usually from corticosteroids' },
        { name: 'Acromegaly', clues: 'Coarse features, bigger hands and feet, spaced teeth, sweating, sleep apnea' },
        { name: 'Hypothyroidism', clues: 'Puffy pale face, thin outer eyebrows, cold intolerance, weight gain' },
        { name: 'Pituitary tumor', clues: 'Headache, loss of side vision; may cause acromegaly or Cushing disease' }
      ]
    },
    {
      id: 'eye-changes',
      title: 'Eye changes',
      summary: 'Bulging, gritty or red eyes with double vision point to thyroid eye disease (Graves disease). Always ask about vision: optic nerve compression is an emergency.',
      pc: {
        prompts: [
          {
            text: 'What have you noticed?',
            options: [
              { text: 'Eyes bulging, or a staring look', dx: ['Thyroid eye disease'] },
              { text: 'Gritty, watery or red eyes', dx: ['Thyroid eye disease'] },
              { text: 'Double vision', dx: ['Thyroid eye disease'], see: ['senses-change'] },
              { text: 'Puffy eyelids, worse in the morning', dx: ['Thyroid eye disease', 'Nephrotic syndrome'], see: ['swelling'] }
            ]
          },
          {
            text: 'Is it one eye, or both?',
            options: [
              { text: 'Both', dx: ['Thyroid eye disease'] },
              { text: 'One eye only', dx: ['Thyroid eye disease', 'Orbital mass'] }
            ]
          },
          { text: 'Any change in your vision, or in how bright colors look?', dx: ['Optic nerve compression'], see: ['senses-change'] }
        ]
      },
      associated: [
        { text: 'Any weight loss, heat intolerance or palpitations?', dx: ['Hyperthyroidism'], see: ['weight-change', 'temperature-sweating'] },
        { text: 'Any neck swelling?', dx: ['Hyperthyroidism'] },
        { text: 'Any firm, thickened skin on the shins?', dx: ['Hyperthyroidism'] }
      ],
      redflags: [
        'Reduced vision or dull colors: optic nerve compression (emergency)',
        'Painful red eye with reduced vision, or eyes that cannot close: corneal exposure',
        'Bulging of one eye only: orbital mass'
      ],
      history: {
        pmh: [
          'Any thyroid disease or radioiodine treatment?'
        ],
        meds: [
          'Any antithyroid drugs or radioiodine (radioiodine can worsen eye disease)?'
        ],
        fhx: [
          'Any family history of thyroid disease?'
        ],
        shx: [
          'Do you smoke? (worsens thyroid eye disease)'
        ],
        sr: [
          'Endocrine: any heat intolerance or weight loss?'
        ]
      },
      differentials: [
        { name: 'Thyroid eye disease', clues: 'Graves disease; bulging, gritty, red eyes, lid retraction, double vision; worse in smokers' },
        { name: 'Hyperthyroidism', clues: 'Weight loss, heat intolerance, palpitations, neck swelling' },
        { name: 'Nephrotic syndrome', clues: 'Puffy eyelids in the morning, frothy urine, leg swelling' },
        { name: 'Orbital mass', clues: 'Progressive bulging of one eye' },
        { name: 'Optic nerve compression', clues: 'Reduced vision or dull colors in thyroid eye disease' }
      ]
    },
    {
      id: 'alopecia',
      title: 'Alopecia',
      summary: 'Ask about the pattern. Patchy loss suggests alopecia areata or a scalp problem; diffuse shedding suggests telogen effluvium, thyroid disease or iron deficiency; thinning at the crown or temples suggests androgenetic alopecia or androgen excess.',
      sharedNotes: {
        context: [
          { text: '2–3 months after an illness, surgery, childbirth or major stress', dx: ['Telogen effluvium'] }
        ]
      },
      pc: {
        prompts: [
          {
            text: 'What pattern is the hair loss?',
            options: [
              { text: 'Round patches of smooth, bare skin', dx: ['Alopecia areata'] },
              { text: 'Diffuse shedding all over', dx: ['Telogen effluvium', 'Thyroid disease'] },
              { text: 'Thinning at the crown or temples', dx: ['Androgenetic alopecia', 'Androgen excess'] },
              { text: 'Patches with scaling, itch or broken hairs', dx: ['Tinea capitis'] }
            ]
          },
          {
            text: 'Have you lost hair elsewhere: eyebrows, eyelashes or body?',
            options: [{ text: 'The outer third of the eyebrows', dx: ['Thyroid disease'] }]
          },
          'Is the hair breaking, or coming out from the root?'
        ]
      },
      associated: [
        { text: 'Any joint pain, rash or mouth ulcers?', dx: ['SLE'], see: ['skin-changes'] },
        { text: 'Any fatigue, heavy periods or pallor?', dx: ['Iron deficiency'], see: ['fatigue', 'menstrual-sexual'] },
        { text: 'Any irregular periods, acne or excess body hair? (tick Hirsutism)', dx: ['Androgen excess'], see: ['menstrual-sexual'] },
        { text: 'Any heat or cold intolerance, or weight change?', dx: ['Thyroid disease'], see: ['temperature-sweating'] }
      ],
      redflags: [
        'Shiny scalp with loss of hair follicles: scarring alopecia (needs biopsy)',
        'Rapid hair loss with a deepening voice or clitoral enlargement: androgen-secreting tumor'
      ],
      history: {
        pmh: [
          'Any thyroid disease, iron deficiency, SLE or other autoimmune disease?',
          'Any recent illness, surgery, childbirth or major stress?'
        ],
        meds: [
          'Any chemotherapy, anticoagulants or retinoids (hair loss)?',
          'Any hormonal contraceptives recently stopped (hair loss)?'
        ],
        fhx: [
          'Any family history of hair loss or autoimmune disease?'
        ],
        shx: [
          'Any tight hairstyles, hair treatments or crash dieting?'
        ],
        sr: [
          'Genitourinary & reproductive: any heavy or irregular periods?',
          'Endocrine: any heat or cold intolerance?'
        ]
      },
      differentials: [
        { name: 'Androgenetic alopecia', clues: 'Gradual thinning at the crown or temples; family history' },
        { name: 'Telogen effluvium', clues: 'Diffuse shedding 2–3 months after illness, childbirth, surgery or stress' },
        { name: 'Alopecia areata', clues: 'Round smooth bare patches; autoimmune' },
        { name: 'Thyroid disease', clues: 'Diffuse thinning, loss of the outer eyebrows' },
        { name: 'Iron deficiency', clues: 'Diffuse thinning, fatigue, heavy periods' },
        { name: 'Androgen excess', clues: 'Crown thinning with hirsutism, acne, irregular periods; PMOS or a tumor' },
        { name: 'Tinea capitis', clues: 'Scaly patches, broken hairs, itch; mostly children' },
        { name: 'SLE', clues: 'Patchy or diffuse loss with rash, joint pain, mouth ulcers' }
      ]
    },
    {
      id: 'hirsutism',
      title: 'Hirsutism',
      summary: 'Excess coarse hair in a male pattern in a female. Usually PMOS or idiopathic; rapid onset with virilization suggests an androgen-secreting tumor.',
      sharedNotes: {
        tempo: [
          { text: 'Gradually, since puberty', dx: ['PMOS', 'Idiopathic hirsutism'] },
          { text: 'Rapidly, over months', dx: ['Androgen-secreting tumor'] }
        ]
      },
      pc: {
        prompts: [
          'Where is the excess hair: face, chest, abdomen or back?',
          { text: 'Any deepening of the voice, increased muscle bulk or clitoral enlargement?', dx: ['Androgen-secreting tumor'] },
          {
            text: 'Is it fine, soft hair all over, rather than coarse male-pattern hair?',
            options: ['Yes: hypertrichosis, often medication-related, not androgen excess']
          }
        ]
      },
      associated: [
        { text: 'Any acne or scalp hair thinning? (tick Alopecia)', dx: ['PMOS'] },
        { text: 'Any weight gain?', dx: ['PMOS', 'Cushing syndrome'], see: ['weight-change'] },
        { text: 'Any irregular or absent periods, or difficulty conceiving?', dx: ['PMOS', 'CAH'], see: ['menstrual-sexual'] },
        { text: 'Any purple stretch marks or easy bruising? (tick Striae and thin skin)', dx: ['Cushing syndrome'] }
      ],
      redflags: [
        'Rapid onset or virilization: androgen-secreting ovarian or adrenal tumor'
      ],
      history: {
        pmh: [
          'Any PMOS or other hormonal problem?'
        ],
        meds: [
          'Any anabolic steroids, testosterone, danazol, minoxidil or phenytoin (excess hair)?'
        ],
        fhx: [
          'Any family history of PMOS, excess hair or CAH?'
        ],
        sr: [
          'Genitourinary & reproductive: LMP? Are your periods regular?'
        ]
      },
      differentials: [
        { name: 'PMOS', clues: 'Irregular periods, acne, weight gain, onset around puberty' },
        { name: 'Idiopathic hirsutism', clues: 'Regular periods, normal hormones; family or ethnic pattern' },
        { name: 'CAH', clues: 'Onset in childhood or adolescence, family history' },
        { name: 'Cushing syndrome', clues: 'Central weight gain, purple striae, bruising' },
        { name: 'Androgen-secreting tumor', clues: 'Rapid onset, virilization' }
      ]
    },
    {
      id: 'hyperpigmentation',
      title: 'Hyperpigmentation',
      summary: 'Generalized darkening, especially of skin creases, scars and the inside of the mouth, suggests Addison disease. Velvety dark patches in skin folds suggest insulin resistance.',
      sharedNotes: {
        context: [
          { text: 'A new medication (amiodarone, minocycline, chemotherapy)', dx: ['Medication-related hyperpigmentation'] },
          { text: 'Pregnancy or hormonal contraceptives', dx: ['Melasma'] }
        ]
      },
      pc: {
        prompts: [
          {
            text: 'Where is the darkening?',
            options: [
              { text: 'All over, especially skin creases, scars, knuckles and inside the mouth', dx: ['Addison disease'] },
              { text: 'Velvety dark patches in the neck or armpits', dx: ['Acanthosis nigricans'] },
              { text: 'Bronze-gray all over, with joint pain', dx: ['Hemochromatosis'] },
              { text: 'Patches on the face, worse with sun or pregnancy', dx: ['Melasma'] }
            ]
          }
        ]
      },
      associated: [
        { text: 'Any joint pain or liver disease?', dx: ['Hemochromatosis'] },
        { text: 'Any fatigue, weight loss, salt craving or dizziness on standing?', dx: ['Addison disease'], see: ['dizziness', 'fatigue', 'weight-change'] },
        { text: 'Any N/V or abdominal pain?', dx: ['Addison disease'], see: ['nausea-vomiting', 'abdominal-pain'] },
        { text: 'Any thirst or polyuria?', dx: ['Acanthosis nigricans', 'Hemochromatosis'], see: ['polyuria-polydipsia'] }
      ],
      redflags: [
        'Darkening with vomiting, abdominal pain, dizziness or confusion: adrenal crisis',
        'Rapidly spreading acanthosis nigricans in an older adult without obesity: internal malignancy'
      ],
      history: {
        pmh: [
          'Any autoimmune disease (thyroid disease, type 1 DM, vitiligo)?',
          'Any DM or liver disease?'
        ],
        meds: [
          'Any amiodarone, minocycline or chemotherapy (hyperpigmentation)?',
          'Any long-term corticosteroids recently stopped (adrenal insufficiency)?'
        ],
        fhx: [
          'Any family history of hemochromatosis or autoimmune disease?'
        ],
        sr: [
          'Gastrointestinal: any N/V or abdominal pain?',
          'Endocrine: any thirst or polyuria?'
        ]
      },
      differentials: [
        { name: 'Addison disease', clues: 'Darkening of creases, scars and mouth; fatigue, weight loss, salt craving, dizziness on standing' },
        { name: 'Acanthosis nigricans', clues: 'Velvety dark skin folds; insulin resistance, obesity; rarely malignancy' },
        { name: 'Hemochromatosis', clues: 'Bronze skin, DM, joint pain, liver disease, family history' },
        { name: 'Melasma', clues: 'Facial patches, sun or pregnancy, hormonal contraceptives' },
        { name: 'Medication-related hyperpigmentation', clues: 'Amiodarone, minocycline, chemotherapy' }
      ]
    },
    {
      id: 'striae-thin-skin',
      title: 'Striae and thin skin',
      summary: 'Wide purple stretch marks with thin, easily bruised skin suggest Cushing syndrome; thin, pale or silvery stretch marks are common after growth, pregnancy or weight change.',
      sharedNotes: {
        tempo: [
          { text: 'Rapidly, over weeks to months, with weakness', dx: ['Cushing syndrome'] }
        ],
        context: [
          { text: 'Puberty, pregnancy or rapid weight change', dx: ['Physiologic striae'] },
          { text: 'No clear reason, alongside other changes', dx: ['Cushing syndrome'] }
        ]
      },
      pc: {
        prompts: [
          {
            text: 'What do the stretch marks look like?',
            options: [
              { text: 'Wide (over 1 cm) and purple', dx: ['Cushing syndrome'] },
              { text: 'Thin, pale or silvery', dx: ['Physiologic striae'] }
            ]
          },
          { text: 'Does your skin bruise or tear easily?', dx: ['Cushing syndrome', 'Age-related skin thinning'], see: ['skin-changes'] }
        ]
      },
      associated: [
        { text: 'Any difficulty climbing stairs or rising from a chair?', dx: ['Cushing syndrome'] },
        { text: 'Any fractures or back pain?', dx: ['Cushing syndrome'] },
        { text: 'Any weight gain, especially around the trunk?', dx: ['Cushing syndrome'], see: ['weight-change'] },
        { text: 'Any thirst or polyuria?', dx: ['Cushing syndrome'], see: ['polyuria-polydipsia'] },
        { text: 'Any low mood or poor sleep?', dx: ['Cushing syndrome'] }
      ],
      redflags: [
        'Rapid onset with HTN and weakness: ectopic ACTH (malignancy)'
      ],
      history: {
        pmh: [
          'Any DM, HTN, osteoporosis or fractures?'
        ],
        meds: [
          'Any corticosteroids, including inhalers, creams or joint injections (Cushing syndrome)?'
        ],
        sr: [
          'Musculoskeletal & integumentary: any fractures, back pain or weakness?',
          'Psychiatric: any low mood?'
        ]
      },
      differentials: [
        { name: 'Cushing syndrome', clues: 'Wide purple striae, thin skin, bruising, central weight gain, proximal weakness' },
        { name: 'Physiologic striae', clues: 'Thin pale stretch marks after puberty, pregnancy or weight change' },
        { name: 'Age-related skin thinning', clues: 'Older, sun-damaged skin that bruises easily' }
      ]
    },
    {
      id: 'enlarging-hands-feet',
      title: 'Enlarging hands and feet',
      summary: 'Rings and shoes that no longer fit, with coarsening features, suggest acromegaly (growth hormone excess). It develops over years, so old photos help.',
      sharedNotes: {
        evidence: [
          'Rings, gloves or shoes that no longer fit'
        ],
        tempo: [
          { text: 'Gradually, over years, with coarser features', dx: ['Acromegaly'] },
          { text: 'Over days to weeks, with swelling that dents', dx: ['Fluid retention'], see: ['swelling'] }
        ]
      },
      pc: {
        prompts: [
          { text: 'Any tingling or numbness in the hands, especially at night?', dx: ['Acromegaly', 'Carpal tunnel syndrome'], see: ['weakness-numbness'] },
          { text: 'Do you sweat more than before?', dx: ['Acromegaly'], see: ['temperature-sweating'] }
        ]
      },
      associated: [
        { text: 'Any thirst or polyuria?', dx: ['Acromegaly'], see: ['polyuria-polydipsia'] },
        { text: 'Any snoring or daytime sleepiness?', dx: ['Acromegaly'] },
        { text: 'Any reduced libido or irregular periods?', dx: ['Pituitary tumor'], see: ['menstrual-sexual'] },
        { text: 'Any headache or loss of side vision?', dx: ['Pituitary tumor'], see: ['headache', 'senses-change'] },
        { text: 'Any joint pain?', dx: ['Acromegaly'] }
      ],
      redflags: [
        'Headache with loss of side vision: pituitary tumor compressing the optic chiasm',
        'Sudden severe headache with a known pituitary tumor: pituitary apoplexy'
      ],
      history: {
        pmh: [
          'Any DM, HTN, sleep apnea or carpal tunnel syndrome?'
        ],
        sr: [
          'Neurologic: any headache or vision change?',
          'Musculoskeletal & integumentary: any joint pain or skin tags?'
        ]
      },
      differentials: [
        { name: 'Acromegaly', clues: 'Gradual enlargement of hands, feet and jaw; coarse features, sweating, sleep apnea' },
        { name: 'Pituitary tumor', clues: 'Headache, loss of side vision, reduced libido or irregular periods' },
        { name: 'Fluid retention', clues: 'Rapid swelling that dents; HF, CKD, cirrhosis' },
        { name: 'Carpal tunnel syndrome', clues: 'Tingling in the thumb and fingers at night; also seen in acromegaly and hypothyroidism' }
      ]
    }
  ]
});
