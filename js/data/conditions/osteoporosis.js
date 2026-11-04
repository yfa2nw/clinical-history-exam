/*
 * Osteoporosis: low bone density with raised fracture risk. The review centers on fractures
 * and falls, the DEXA trend and fracture risk, secondary causes (corticosteroids, early
 * menopause, low testosterone, malabsorption), treatment and its duration, and dental care
 * before and during antiresorptive treatment.
 */
CHE.registerCondition({
  id: 'osteoporosis',
  title: 'Osteoporosis',
  aka: ['osteopenia', 'low bone density', 'fragility fracture', 'bisphosphonates', 'alendronate', 'denosumab', 'DEXA'],
  tags: ['endocrine', 'musculoskeletal'],
  summary: 'Review fractures and falls, the DEXA trend and fracture risk, secondary causes (corticosteroids, early menopause, low testosterone, malabsorption, hyperparathyroidism), calcium and vitamin D, the treatment and how long it has been taken, and dental health.',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      when: ['When were you diagnosed, and was it after a fracture?'],
      cause: [
        {
          text: 'Has a cause been found?',
          options: [
            'Age and menopause (primary)',
            'Long-term corticosteroids',
            'Early menopause or low testosterone',
            'Celiac disease, IBD or bowel surgery',
            'Hyperthyroidism or hyperparathyroidism',
            'Medications (e.g. aromatase inhibitors, androgen deprivation, anti-epileptics)'
          ]
        }
      ],
      stage: ['Do you know your latest DEXA T-score, or your fracture risk score?'],
      understanding: ['Do you know that osteoporosis causes no symptoms until a bone breaks?']
    },
    'risk-factors': {
      family: ['Did either parent have a hip fracture?'],
      smoking: ['Do you smoke?'],
      alcohol: ['How much alcohol do you drink?'],
      activity: ['How active are you? Do you do weight-bearing or balance exercise?'],
      exposures: ['Do you take corticosteroids, PPIs, anti-epileptics, aromatase inhibitors or androgen deprivation therapy?'],
      diet: [
        'How much calcium do you get in your diet? How much time do you spend outdoors?',
        'Has your weight dropped, or have you had an eating disorder?'
      ],
      related: [
        'When did you go through menopause? Any early menopause or periods stopping for a long time?',
        'Any RA, celiac disease, IBD, chronic kidney disease or chronic liver disease?',
        'Any thyroid or parathyroid problems?'
      ]
    },
    presentation: {
      how: [
        {
          text: 'How was it first found?',
          options: [
            'A fracture from a minor fall (wrist, hip, spine)',
            'Height loss or back pain from a spinal fracture',
            'Screening DEXA',
            'A spinal fracture seen on an X-ray done for another reason'
          ]
        }
      ]
    },
    investigations: {
      blood: ['Have you had blood tests for calcium, vitamin D, PTH, thyroid and kidney function?'],
      imaging: [
        'When was your last DEXA? How did it compare with the one before?',
        'Have you had spine X-rays to look for fractures?'
      ],
      monitoring: ['How often is your DEXA repeated?'],
      results: ['Is your bone density stable or improving on treatment?']
    },
    management: {
      lifestyle: ['Have you stopped smoking and cut down alcohol? Do you do weight-bearing and balance exercise?'],
      education: ['Do you know how to take your bisphosphonate (empty stomach, upright for 30 minutes, with water)?'],
      allied: ['Have you seen a physiotherapist or had a falls assessment?'],
      medications: [
        'Do you take calcium and vitamin D?',
        'Which treatment are you on: a bisphosphonate (tablet or yearly infusion), denosumab, teriparatide or romosozumab?',
        'How long have you been on it? Has a treatment break been discussed?',
        'Are you on menopause hormone therapy or testosterone?'
      ],
      sideEffects: [
        'Any heartburn or pain on swallowing with bisphosphonate tablets?',
        'Any flu-like illness after an infusion?',
        'Any thigh or groin pain? (atypical femoral fracture)',
        'Any jaw pain, loose teeth or exposed bone in the mouth? (osteonecrosis of the jaw)'
      ],
      missed: [
        'Do you take your weekly tablet every week?',
        'On denosumab: is your next injection on time? (missing doses can cause spinal fractures)'
      ],
      followUp: ['Did you see a dentist before starting treatment? Do you have regular dental checks?']
    },
    complications: {
      disease: [
        'How many fractures have you had, and where?',
        'Any height loss or a curved back?',
        'Any chronic back pain?'
      ],
      hospitalizations: [
        'Any surgery for fractures, or a procedure for a spinal fracture?',
        'Any admissions for falls or fractures in the past year?'
      ]
    },
    'ongoing-symptoms': {
      new: ['Any falls since your last review?'],
      trend: [
        {
          text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
          options: [
            'No symptoms',
            'Chronic back pain from past spinal fractures',
            'Height loss'
          ]
        }
      ]
    },
    'social-impact': {
      ambulating: ['Do you use a walking aid? How many falls have you had in the past year?'],
      hygiene: ['Do you have grab rails or a shower chair?'],
      housekeeping: ['Have you had a home safety check for trip hazards?'],
      mood: ['Are you afraid of falling? Has that stopped you going out?'],
      supports: ['Do you have a personal alarm in case you fall?']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'Sudden new back pain or height loss: spinal fracture' },
          { text: 'A fall, or unsteadiness: fracture or a new cause of falls', see: ['movement-change', 'dizziness', 'spells'] },
          { text: 'New thigh or groin pain on treatment: atypical femoral fracture' },
          { text: 'Jaw pain, loose teeth or exposed bone in the mouth: osteonecrosis of the jaw' },
          { text: 'Heartburn, dysphagia or odynophagia on bisphosphonate tablets: esophagitis', see: ['upper-gi-symptoms'] },
          { text: 'Tingling or muscle cramps after an infusion or injection: low calcium', see: ['weakness-numbness'] },
          { text: 'Unintentional weight loss or constant bone pain: malignancy or myeloma', see: ['weight-change'] }
        ]
      }
    ]
  }
});
