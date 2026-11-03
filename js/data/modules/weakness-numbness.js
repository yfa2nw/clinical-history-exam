/*
 * Weakness, numbness or tingling: a multi-system complaint (brain, cord, nerve root, nerve,
 * neuromuscular junction, muscle, plus metabolic, endocrine and nutritional causes).
 * The distribution localizes the lesion; the tempo suggests the cause.
 *
 * Awaiting hand-off (answers with no matching presenting complaint yet; add `see`
 * and remove the line when one is added; see CLAUDE.md, "Multi-system complaints"):
 *   - Weakness, numbness: back or neck pain                                → back pain / neck pain complaint
 *   - Weakness: fever or a recent infection                                 → fever complaint
 *   - Weakness: difficulty breathing                                        → dyspnea complaint
 *   - Weakness: muscle pain, rash on the eyelids or knuckles                → muscle pain / rash complaint
 *   - Numbness or tingling: sore, smooth tongue                             → mouth complaint
 *   - Numbness or tingling: anxiety or panic attacks                        → mood / anxiety complaint
 */
CHE.registerModule({
  id: 'weakness-numbness',
  title: 'Weakness, numbness or tingling',
  subtitle: 'Brain, cord, nerve root, nerve, junction or muscle',
  multiSystem: true,
  aka: ['weak', 'paralysis', 'stroke', 'pins and needles', 'paresthesia', 'loss of sensation', 'numb', 'neuropathy', 'paresis', 'hemiparesis', 'facial droop'],
  tags: ['neurologic'],
  summary: 'Where it is tells you where the lesion is: one side of the body (brain), below a level (cord), a strip (root), one nerve\'s area, gloves and stockings (neuropathy), or proximal muscles. How fast it came on tells you what the lesion is. Switch on only the features that apply.',
  ref: '',
  related: ['headache', 'spells', 'senses-change', 'fatigue', 'upper-gi-symptoms', 'urinary-symptoms', 'fecal-symptoms', 'skin-changes', 'polyuria-polydipsia', 'temperature-sweating', 'appearance-change', 'weight-change', 'menstrual-sexual', 'movement-change', 'seizures', 'incontinence', 'dizziness', 'memory-thinking'],
  // Shared by all features (rendered as "All features"): the symptom SOCRATES. Each
  // feature adds its answers to the rows through `sharedNotes`.
  pc: {
    framework: 'symptom'
  },
  parts: [
    {
      id: 'weakness',
      title: 'Weakness',
      summary: 'First confirm true weakness (loss of power) rather than tiredness or pain-limited movement. Then map the pattern: one side, both legs, one limb, distal or proximal, or fatigable.',
      sharedNotes: {
        site: [
          { text: 'Face, arm and leg on one side', dx: ['Stroke', 'Brain tumor'] },
          { text: 'One side of the face, including the forehead', dx: ['Bell palsy'] },
          { text: 'Both legs, with numbness below a level on the trunk', dx: ['Spinal cord compression', 'MS'] },
          { text: 'Both legs, with back pain and saddle numbness', dx: ['Cauda equina syndrome'] },
          { text: 'One limb, or part of one (e.g. foot drop, wrist drop)', dx: ['Radiculopathy', 'Mononeuropathy'] },
          { text: 'Feet and hands on both sides', dx: ['Guillain-Barré syndrome', 'Peripheral neuropathy'] },
          { text: 'Shoulders and hips: rising from a chair, climbing stairs, lifting the arms', dx: ['Myopathy'] },
          { text: 'Eyelids, eye movements, chewing or swallowing', dx: ['Myasthenia gravis'] }
        ],
        onset: [
          { text: 'Seconds to minutes', dx: ['Stroke', 'TIA'] },
          { text: 'Hours to days', dx: ['Guillain-Barré syndrome', 'Spinal cord compression'] },
          { text: 'Weeks to months', dx: ['Brain tumor', 'MND'] }
        ],
        character: [
          { text: 'Tired all over, strength normal', see: ['fatigue'] },
          'Loss of strength: can\'t grip, lift or climb (true weakness)',
          { text: 'With muscle twitching, cramps or wasting', dx: ['MND'] },
          { text: 'Varies, or suddenly gives way', dx: ['Functional weakness'] }
        ],
        radiation: [
          { text: 'Spreading upward from the feet over days', dx: ['Guillain-Barré syndrome'] },
          { text: 'Spreading from one limb to others over months', dx: ['MND'] }
        ],
        timing: [
          { text: 'Attacks that resolve completely', dx: ['TIA', 'Hypokalemia'] },
          { text: 'Episodes over days, recovering in between', dx: ['MS'] }
        ],
        exacerbating: [
          { text: 'Worse with use, better with rest', dx: ['Myasthenia gravis'] },
          { text: 'Worse with heat (hot bath, exercise)', dx: ['MS'] }
        ],
        severity: [
          { text: 'Falls, or can\'t stand or walk', dx: ['Spinal cord compression', 'Guillain-Barré syndrome'] }
        ]
      },
      associated: [
        { text: 'Any numbness or tingling? (tick Numbness or tingling)' },
        { text: 'Any slurred speech, facial droop or vision loss?', dx: ['Stroke'], see: ['senses-change'] },
        { text: 'Any headache?', dx: ['Brain tumor', 'Stroke'], see: ['headache'] },
        { text: 'Any drooping eyelids or double vision?', dx: ['Myasthenia gravis'], see: ['senses-change'] },
        { text: 'Any back or neck pain?', dx: ['Spinal cord compression', 'Radiculopathy'] },
        { text: 'Any fever, or a recent infection or diarrhea?', dx: ['Guillain-Barré syndrome'] },
        { text: 'Any weight loss?', dx: ['MND', 'Spinal cord compression'], see: ['weight-change'] },
        { text: 'Any difficulty breathing?', dx: ['Guillain-Barré syndrome', 'Myasthenia gravis'] },
        { text: 'Any difficulty swallowing?', dx: ['Myasthenia gravis', 'MND'], see: ['upper-gi-symptoms'] },
        { text: 'Any vomiting or diarrhea?', dx: ['Hypokalemia'], see: ['nausea-vomiting', 'diarrhea-constipation'] },
        { text: 'Any problems with bladder or bowel control?', dx: ['Spinal cord compression', 'Cauda equina syndrome'], see: ['incontinence'] },
        { text: 'Any heat or cold intolerance?', dx: ['Myopathy'], see: ['temperature-sweating'] },
        { text: 'Any rounder face, purple stretch marks or weight gain?', dx: ['Myopathy'], see: ['appearance-change'] },
        { text: 'Any muscle pain, or a rash on the eyelids or knuckles?', dx: ['Myopathy'] }
      ],
      redflags: [
        'Sudden weakness of one side: stroke (time-critical)',
        'Weakness spreading upward over days, with difficulty breathing: Guillain-Barré syndrome (respiratory failure)',
        'Weakness of both legs with back pain, bladder or bowel problems or saddle numbness: spinal cord compression or cauda equina syndrome',
        'Known cancer with back pain and new leg weakness: metastatic cord compression',
        'Fatigable weakness with difficulty breathing or swallowing: myasthenic crisis'
      ],
      history: {
        pmh: [
          'Any previous stroke or TIA, AF, HTN or DM?',
          'Any cancer?',
          'Any thyroid disease?'
        ],
        meds: [
          'Any statins or corticosteroids (myopathy)?',
          'Any diuretics (hypokalemia)?',
          'Any anticoagulants (intracranial bleeding)?'
        ],
        fhx: [
          'Any family history of muscle or nerve disease?'
        ],
        shx: [
          'Do you smoke? (stroke)',
          'How much alcohol do you drink? (neuropathy, myopathy)',
          'How are you managing at home and at work?'
        ],
        sr: [
          'General: any fever, weight loss or night sweats?',
          'Head, eyes, ears, nose & throat: any vision change?',
          'Respiratory: any dyspnea?',
          'Gastrointestinal: any dysphagia?',
          'Genitourinary & reproductive: any problems with bladder control?',
          'Endocrine: any heat or cold intolerance?',
          'Musculoskeletal & integumentary: any muscle pain or rash?'
        ]
      },
      differentials: [
        { name: 'Stroke', clues: 'Sudden weakness of the face, arm and leg on one side, slurred speech; vascular risk factors' },
        { name: 'TIA', clues: 'Sudden focal weakness resolving within 24 h; AF, carotid disease' },
        { name: 'Brain tumor', clues: 'Weakness progressing over weeks, headache, seizures' },
        { name: 'MS', clues: 'Young adult, episodes over days, previous vision loss or numbness' },
        { name: 'Spinal cord compression', clues: 'Both legs, numbness below a level, bladder or bowel problems; cancer, back pain' },
        { name: 'Cauda equina syndrome', clues: 'Back pain, both legs, saddle numbness, urinary retention or incontinence' },
        { name: 'Radiculopathy', clues: 'Neck or back pain shooting down one limb, weakness in one root\'s muscles' },
        { name: 'Mononeuropathy', clues: 'Weakness in one nerve\'s territory: foot drop (common peroneal), wrist drop (radial)' },
        { name: 'Peripheral neuropathy', clues: 'Distal weakness on both sides with glove and stocking numbness; DM, alcohol' },
        { name: 'Guillain-Barré syndrome', clues: 'Weakness ascending over days after an infection or diarrhea; may affect breathing' },
        { name: 'MND', clues: 'Progressive painless weakness, wasting, twitching, cramps, no numbness' },
        { name: 'Myasthenia gravis', clues: 'Fatigable weakness, drooping eyelids, double vision, difficulty swallowing' },
        { name: 'Myopathy', clues: 'Proximal weakness; corticosteroids, statins, thyroid disease, Cushing syndrome, dermatomyositis' },
        { name: 'Bell palsy', clues: 'Sudden weakness of one side of the face including the forehead' },
        { name: 'Hypokalemia', clues: 'Generalized weakness; diuretics, vomiting or diarrhea' },
        { name: 'Functional weakness', clues: 'Variable weakness inconsistent with a lesion pattern; often after a trigger' }
      ]
    },
    {
      id: 'numbness-tingling',
      title: 'Numbness or tingling',
      summary: 'Map the distribution: gloves and stockings (neuropathy), one hand or part of it (nerve entrapment), a strip down a limb (root), one side (brain), below a level (cord), the saddle (cauda equina), or around the mouth and both hands (low calcium, hyperventilation).',
      sharedNotes: {
        site: [
          { text: 'Both feet first, later the hands (gloves and stockings)', dx: ['Peripheral neuropathy', 'B12 deficiency'] },
          { text: 'Thumb, index and middle fingers', dx: ['Carpal tunnel syndrome'] },
          { text: 'Ring and little fingers', dx: ['Ulnar neuropathy'] },
          { text: 'A strip down one arm or leg, with neck or back pain', dx: ['Radiculopathy'] },
          { text: 'One side of the face and body', dx: ['Stroke', 'MS'] },
          { text: 'Below a level on the trunk', dx: ['Spinal cord compression', 'MS'] },
          { text: 'Around the anus and genitals (saddle)', dx: ['Cauda equina syndrome'] },
          { text: 'Around the mouth and in both hands', dx: ['Hypocalcemia', 'Hyperventilation'] }
        ],
        onset: [
          { text: 'Suddenly', dx: ['Stroke', 'TIA'] },
          { text: 'Over hours to days', dx: ['MS', 'Guillain-Barré syndrome'] },
          { text: 'Gradually, over months', dx: ['Peripheral neuropathy', 'Carpal tunnel syndrome'] }
        ],
        character: [
          { text: 'Burning feet, worse at night', dx: ['Peripheral neuropathy'] },
          { text: 'An electric shock down the spine when bending the neck', dx: ['MS'] }
        ],
        radiation: [
          { text: 'Creeping up from the feet over months', dx: ['Peripheral neuropathy'] },
          { text: 'Ascending over days, with weakness', dx: ['Guillain-Barré syndrome'] }
        ],
        timing: [
          { text: 'Episodes over days, recovering in between', dx: ['MS'] },
          { text: 'Wakes you at night', dx: ['Carpal tunnel syndrome'] },
          { text: 'Brief attacks', dx: ['TIA', 'Hyperventilation'] }
        ],
        exacerbating: [
          { text: 'Better shaking the hand', dx: ['Carpal tunnel syndrome'] },
          { text: 'Leaning on the elbow', dx: ['Ulnar neuropathy'] },
          { text: 'Fast breathing or panic', dx: ['Hyperventilation'], see: ['spells'] },
          { text: 'Cold, with fingers turning white then blue', dx: ['Raynaud phenomenon'], see: ['skin-changes'] }
        ],
        severity: [
          { text: 'Unsteady, especially in the dark or with eyes closed', dx: ['B12 deficiency', 'Peripheral neuropathy'], see: ['movement-change'] },
          { text: 'Dropping things, or burns and cuts not felt', dx: ['Peripheral neuropathy', 'Carpal tunnel syndrome'] }
        ]
      },
      associated: [
        { text: 'Any weakness? (tick Weakness)' },
        { text: 'Any back or neck pain?', dx: ['Radiculopathy', 'Spinal cord compression'] },
        { text: 'Any fatigue or pallor?', dx: ['B12 deficiency'], see: ['fatigue', 'skin-changes'] },
        { text: 'Any vision loss or pain moving the eye, now or in the past?', dx: ['MS'], see: ['senses-change'] },
        { text: 'Any sore, smooth tongue?', dx: ['B12 deficiency'] },
        { text: 'Any palpitations or dyspnea with the tingling?', dx: ['Hyperventilation'], see: ['spells'] },
        { text: 'Any problems with bladder or bowel control?', dx: ['Cauda equina syndrome', 'Spinal cord compression'], see: ['incontinence'] },
        { text: 'Any thirst or polyuria, or known DM?', dx: ['Peripheral neuropathy'], see: ['polyuria-polydipsia'] },
        { text: 'Any cold intolerance or weight gain?', dx: ['Carpal tunnel syndrome', 'Peripheral neuropathy'], see: ['temperature-sweating'] },
        { text: 'Any change in your face, hands or feet?', dx: ['Carpal tunnel syndrome'], see: ['appearance-change'] },
        { text: 'Any anxiety or panic attacks?', dx: ['Hyperventilation'] }
      ],
      redflags: [
        'Sudden numbness of one side: stroke or TIA',
        'Saddle numbness with bladder or bowel problems: cauda equina syndrome',
        'Numbness below a level on the trunk: spinal cord compression',
        'Numbness and weakness ascending over days: Guillain-Barré syndrome',
        'Numbness with unsteadiness and anemia: B12 deficiency (subacute combined degeneration)'
      ],
      history: {
        pmh: [
          'Any DM, thyroid disease, CKD, HIV or cancer?',
          'Any recent neck surgery (hypocalcemia)?'
        ],
        meds: [
          'Any metformin or PPIs (B12 deficiency)?',
          'Any chemotherapy, isoniazid or amiodarone (neuropathy)?'
        ],
        fhx: [
          'Any family history of neuropathy or MS?'
        ],
        shx: [
          'How much alcohol do you drink? (neuropathy)',
          'What do you eat? Any vegan diet? (B12 deficiency)',
          'What is your work? Repetitive hand use or vibrating tools?'
        ],
        sr: [
          'General: any fatigue or weight loss?',
          'Head, eyes, ears, nose & throat: any vision change?',
          'Genitourinary & reproductive: any problems with bladder control?',
          'Endocrine: any thirst or cold intolerance?',
          'Musculoskeletal & integumentary: any joint pain or rash?',
          'Psychiatric: any anxiety?'
        ]
      },
      differentials: [
        { name: 'Peripheral neuropathy', clues: 'Glove and stocking numbness, burning feet; DM, alcohol, B12 deficiency, CKD, drugs' },
        { name: 'Carpal tunnel syndrome', clues: 'Thumb, index and middle fingers, worse at night; pregnancy, hypothyroidism, acromegaly' },
        { name: 'Ulnar neuropathy', clues: 'Ring and little fingers, leaning on the elbow' },
        { name: 'Radiculopathy', clues: 'Strip of numbness down one limb with neck or back pain' },
        { name: 'Stroke', clues: 'Sudden numbness of one side, often with weakness or slurred speech' },
        { name: 'TIA', clues: 'Sudden one-sided numbness resolving within 24 h' },
        { name: 'MS', clues: 'Young adult, episodes over days, previous vision loss, electric shock on bending the neck' },
        { name: 'Spinal cord compression', clues: 'Numbness below a level, leg weakness, bladder problems' },
        { name: 'Cauda equina syndrome', clues: 'Saddle numbness, back pain, urinary retention or incontinence' },
        { name: 'B12 deficiency', clues: 'Numbness in the feet, unsteadiness, fatigue, pallor; vegan diet, metformin, PPIs' },
        { name: 'Guillain-Barré syndrome', clues: 'Tingling and weakness ascending over days after an infection' },
        { name: 'Hypocalcemia', clues: 'Tingling around the mouth and fingers, cramps; after neck surgery' },
        { name: 'Hyperventilation', clues: 'Tingling around the mouth and both hands with anxiety or panic' },
        { name: 'Raynaud phenomenon', clues: 'Fingers white then blue in the cold, with numbness' }
      ]
    }
  ]
});
