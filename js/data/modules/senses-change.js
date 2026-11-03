/*
 * Special sense symptoms (vision, hearing, smell, taste): a multi-system complaint (eye, ear, nose,
 * neurologic, vascular, endocrine, medication causes). Tempo is critical: sudden vision or
 * hearing loss is an emergency.
 *
 * Awaiting hand-off (answers with no matching presenting complaint yet; add `see`
 * and remove the line when one is added; see CLAUDE.md, "Multi-system complaints"):
 *   - Hearing loss, tinnitus: ear pain or discharge                         → ear pain complaint
 *   - Tinnitus: low mood, anxiety, poor sleep                               → mood complaint
 *   - Dysgeusia: dry mouth, sore mouth, mouth ulcers                        → mouth complaint
 */
CHE.registerModule({
  id: 'senses-change',
  title: 'Special sense symptoms',
  multiSystem: true,
  aka: ['HEENT', 'blurred vision', 'vision loss', 'double vision', 'deafness', 'hearing loss', 'ringing in the ears', 'tinnitus', 'loss of smell', 'anosmia', 'loss of taste', 'dysgeusia', 'diplopia', 'vision', 'hearing', 'smell', 'taste', 'changes in vision, hearing, smell or taste'],
  tags: ['HEENT', 'neurologic'],
  summary: 'Symptoms of vision, hearing, smell and taste. Pin down which sense, one side or both, and how fast it happened: sudden vision or hearing loss is an emergency. Switch on only the features that apply.',
  ref: '',
  related: ['spells', 'appearance-change', 'polyuria-polydipsia', 'upper-gi-symptoms', 'headache', 'weakness-numbness', 'movement-change', 'dizziness', 'memory-thinking', 'urinary-symptoms', 'nausea-vomiting', 'swelling'],
  // Shared by all features (rendered as "All features"): the symptom SOCRATES. Each
  // feature adds its answers to the rows through `sharedNotes`.
  pc: {
    framework: 'symptom'
  },
  parts: [
    {
      id: 'vision-loss',
      title: 'Vision loss',
      summary: 'Ask one eye or both, sudden or gradual, painful or painless. Sudden painless loss is vascular or retinal until proven otherwise; sudden painful loss with a red eye suggests acute angle-closure glaucoma.',
      sharedNotes: {
        site: [
          { text: 'One eye', dx: ['Retinal artery or vein occlusion', 'Retinal detachment'] },
          { text: 'The same half of vision in both eyes', dx: ['Stroke'] },
          { text: 'The outer halves of vision in both eyes', dx: ['Pituitary tumor'] },
          { text: 'Both eyes, blurred overall', dx: ['Cataract', 'Refractive error'] }
        ],
        onset: [
          { text: 'Suddenly, over seconds to minutes', dx: ['Retinal artery or vein occlusion', 'Stroke'] },
          { text: 'Over hours to days', dx: ['Retinal detachment', 'Optic neuritis'] },
          { text: 'Gradually, over months to years', dx: ['Cataract', 'Open-angle glaucoma'] },
          { text: 'Over months, with poorly controlled DM', dx: ['Diabetic retinopathy'] },
          { text: 'Over months, on long-term corticosteroids', dx: ['Cataract', 'Open-angle glaucoma'] }
        ],
        character: [
          { text: 'Flashes and new floaters, then a shadow or curtain', dx: ['Retinal detachment'] },
          { text: 'Blurred center, straight lines look wavy', dx: ['Macular degeneration'] },
          { text: 'Loss of side vision', dx: ['Open-angle glaucoma', 'Pituitary tumor'] },
          { text: 'Glare and halos around lights, dull colors', dx: ['Cataract'] },
          { text: 'A painful red eye with halos around lights, headache or vomiting', dx: ['Acute angle-closure glaucoma'], see: ['headache'] },
          { text: 'Painless', dx: ['Retinal artery or vein occlusion', 'Retinal detachment'] }
        ],
        radiation: [
          { text: 'A shadow spreading across the vision', dx: ['Retinal detachment'] }
        ],
        timing: [
          { text: 'Comes and goes, a curtain over one eye for minutes', dx: ['Amaurosis fugax'] }
        ],
        exacerbating: [
          { text: 'Pain on moving the eye', dx: ['Optic neuritis'] },
          { text: 'Better with glasses, or looking through a pinhole', dx: ['Refractive error'] }
        ],
        severity: [
          'Unable to read, drive or recognize faces'
        ]
      },
      associated: [
        { text: 'Any bulging or gritty eyes?', see: ['appearance-change'] },
        { text: 'Any irregular periods or milky nipple discharge?', dx: ['Pituitary tumor'], see: ['menstrual-sexual'] },
        { text: 'Any thirst or polyuria, or known DM?', dx: ['Diabetic retinopathy'], see: ['polyuria-polydipsia'] },
        { text: 'Any headache, scalp tenderness or jaw pain on chewing?', dx: ['GCA'], see: ['headache'] },
        { text: 'Any weakness, numbness or difficulty speaking?', dx: ['Stroke'], see: ['weakness-numbness'] },
        { text: 'Any previous episodes of numbness, weakness or vision loss?', dx: ['Optic neuritis'], see: ['weakness-numbness'] }
      ],
      redflags: [
        'Sudden vision loss: retinal artery occlusion, stroke or GCA (emergency)',
        'Age over 50 with headache, scalp tenderness or jaw pain on chewing: GCA (risk to the other eye)',
        'Painful red eye with halos and vomiting: acute angle-closure glaucoma',
        'Flashes, new floaters and a curtain: retinal detachment',
        'Brief loss of vision in one eye: amaurosis fugax (a TIA of the eye)'
      ],
      history: {
        pmh: [
          'Any DM, HTN, MS, previous stroke or eye disease?',
          'Do you wear glasses or contact lenses? Any eye surgery?'
        ],
        meds: [
          'Any corticosteroids (cataract, glaucoma)?',
          'Any hydroxychloroquine, ethambutol or amiodarone (retinal or optic nerve toxicity)?'
        ],
        fhx: [
          'Any family history of glaucoma or macular degeneration?'
        ],
        shx: [
          'Do you smoke? (macular degeneration, vascular disease)',
          'Do you drive? (vision standards)'
        ],
        sr: [
          'General: any fever or weight loss?',
          'Neurologic: any headache, weakness or numbness?',
          'Musculoskeletal & integumentary: any shoulder or hip stiffness, or jaw pain on chewing?'
        ]
      },
      differentials: [
        { name: 'Retinal artery or vein occlusion', clues: 'Sudden painless loss in one eye; vascular risk factors' },
        { name: 'Amaurosis fugax', clues: 'A curtain over one eye for minutes, then recovery; carotid disease' },
        { name: 'Stroke', clues: 'Sudden loss of the same half of vision in both eyes, other neurologic signs' },
        { name: 'GCA', clues: 'Age over 50, headache, scalp tenderness, jaw pain on chewing' },
        { name: 'Retinal detachment', clues: 'Flashes, new floaters, then a curtain' },
        { name: 'Optic neuritis', clues: 'Young, pain on eye movement, dull colors; MS' },
        { name: 'Acute angle-closure glaucoma', clues: 'Painful red eye, halos, headache, vomiting' },
        { name: 'Open-angle glaucoma', clues: 'Gradual painless loss of side vision; family history' },
        { name: 'Cataract', clues: 'Gradual blur, glare and halos; older, corticosteroids, DM' },
        { name: 'Macular degeneration', clues: 'Older, central blur, wavy lines; smoking' },
        { name: 'Diabetic retinopathy', clues: 'Long-standing or poorly controlled DM' },
        { name: 'Pituitary tumor', clues: 'Loss of the outer halves of vision, headache, hormonal symptoms' },
        { name: 'Refractive error', clues: 'Improves with glasses or a pinhole' }
      ]
    },
    {
      id: 'diplopia',
      title: 'Diplopia',
      summary: 'First ask whether it goes when either eye is covered. Double vision that persists with one eye covered (monocular) is an eye problem; double vision that goes away (binocular) is a nerve, muscle or orbit problem, which can be serious.',
      sharedNotes: {
        site: [
          { text: 'Goes away when either eye is covered (binocular)', dx: ['Cranial nerve palsy', 'Myasthenia gravis'] },
          { text: 'Stays in one eye when the other is covered (monocular)', dx: ['Cataract', 'Refractive error'] }
        ],
        onset: [
          { text: 'Suddenly', dx: ['Cranial nerve palsy', 'Stroke'] },
          { text: 'Gradually, getting worse', dx: ['Thyroid eye disease'] }
        ],
        character: [
          'Images side by side: sixth nerve or medial rectus',
          'One image above the other: third or fourth nerve, or orbital disease'
        ],
        timing: [
          { text: 'Worse later in the day, or when tired', dx: ['Myasthenia gravis'] }
        ],
        exacerbating: [
          'Worse looking in one direction (points to the weak muscle)'
        ]
      },
      associated: [
        { text: 'Any drooping eyelid?', dx: ['Cranial nerve palsy', 'Myasthenia gravis'] },
        { text: 'Any bulging or gritty eyes, or heat intolerance?', dx: ['Thyroid eye disease'], see: ['appearance-change'] },
        { text: 'Any difficulty swallowing, or weakness that gets worse with use?', dx: ['Myasthenia gravis'], see: ['weakness-numbness', 'upper-gi-symptoms'] },
        { text: 'Any known DM?', dx: ['Cranial nerve palsy'] },
        { text: 'Any headache, especially sudden and severe?', dx: ['Intracranial aneurysm'], see: ['headache'] },
        { text: 'Any weakness, numbness, slurred speech or unsteadiness?', dx: ['Stroke'], see: ['weakness-numbness'] }
      ],
      redflags: [
        'Sudden binocular diplopia with headache or a dilated pupil: posterior communicating artery aneurysm (emergency)',
        'Diplopia with vertigo, slurred speech or weakness: brainstem stroke',
        'Fatigable weakness with difficulty breathing or swallowing: myasthenic crisis'
      ],
      history: {
        pmh: [
          'Any DM, HTN, thyroid disease, MS or myasthenia gravis?'
        ],
        sr: [
          'Endocrine: any heat intolerance or weight loss?',
          'Neurologic: any weakness, numbness, slurred speech or unsteadiness?'
        ]
      },
      differentials: [
        { name: 'Cranial nerve palsy', clues: 'Sudden binocular diplopia; often microvascular in DM or HTN' },
        { name: 'Intracranial aneurysm', clues: 'Painful third nerve palsy with a dilated pupil' },
        { name: 'Stroke', clues: 'Diplopia with other brainstem signs' },
        { name: 'Myasthenia gravis', clues: 'Fluctuating, worse later in the day, drooping eyelids' },
        { name: 'Thyroid eye disease', clues: 'Graves disease, bulging eyes, gradual onset' },
        { name: 'Cataract', clues: 'Monocular double vision, glare' },
        { name: 'Refractive error', clues: 'Monocular double vision that improves with a pinhole' }
      ]
    },
    {
      id: 'hearing-loss',
      title: 'Hearing loss',
      summary: 'Separate conductive loss (wax, middle ear) from sensorineural loss (inner ear, nerve), and sudden from gradual. Sudden sensorineural hearing loss is an emergency; one-sided progressive loss needs a vestibular schwannoma excluded.',
      sharedNotes: {
        site: [
          { text: 'One ear', dx: ['Earwax', 'Vestibular schwannoma'] },
          { text: 'Both ears', dx: ['Presbycusis', 'Noise-induced hearing loss'] }
        ],
        onset: [
          { text: 'Suddenly, over hours to 3 days', dx: ['Sudden sensorineural hearing loss'] },
          { text: 'Gradually, over years', dx: ['Presbycusis', 'Noise-induced hearing loss'] },
          { text: 'After a cold, flying or swimming', dx: ['Otitis media', 'Earwax'] },
          { text: 'After loud noise exposure', dx: ['Noise-induced hearing loss'] },
          { text: 'After starting aminoglycosides, cisplatin, loop diuretics or high-dose aspirin', dx: ['Ototoxicity'] }
        ],
        character: [
          { text: 'Muffled, as if blocked', dx: ['Earwax', 'Otitis media'] },
          { text: 'Distorted, hard to follow speech in noise', dx: ['Presbycusis'] }
        ],
        timing: [
          { text: 'Fluctuating, with vertigo and ear fullness', dx: ['Meniere disease'], see: ['dizziness', 'spells'] }
        ],
        severity: [
          'Turning up the television, asking people to repeat themselves, struggling at work'
        ]
      },
      associated: [
        'Any ringing in the ears? (tick Tinnitus)',
        { text: 'Any ear pain or discharge?', dx: ['Otitis media', 'Otitis externa'] },
        { text: 'Any fever?', dx: ['Otitis media'] },
        { text: 'Any vertigo or imbalance?', dx: ['Meniere disease', 'Vestibular schwannoma'], see: ['dizziness', 'movement-change', 'spells'] },
        { text: 'Any facial numbness or weakness?', dx: ['Vestibular schwannoma'], see: ['weakness-numbness'] }
      ],
      redflags: [
        'Sudden sensorineural hearing loss: urgent ENT assessment within days',
        'One-sided progressive hearing loss or tinnitus: vestibular schwannoma',
        'Severe ear pain and discharge in an older person with DM: malignant otitis externa',
        'Hearing loss with facial weakness: vestibular schwannoma or herpes zoster oticus'
      ],
      history: {
        pmh: [
          'Any ear infections, ear surgery or head injury?'
        ],
        meds: [
          'Any aminoglycosides, cisplatin, loop diuretics or high-dose aspirin (ototoxicity)?'
        ],
        fhx: [
          'Any family history of early hearing loss?'
        ],
        shx: [
          'Any loud noise at work or from music?',
          'How is it affecting your work and conversations?'
        ],
        sr: [
          'Neurologic: any vertigo, facial weakness or numbness?'
        ]
      },
      differentials: [
        { name: 'Earwax', clues: 'Muffled hearing, blocked feeling, one ear' },
        { name: 'Otitis media', clues: 'After a cold, ear pain, fever, muffled hearing' },
        { name: 'Otitis externa', clues: 'Ear pain worse on touching the ear, discharge, after swimming' },
        { name: 'Presbycusis', clues: 'Older, gradual, both ears, speech hard to follow in noise' },
        { name: 'Noise-induced hearing loss', clues: 'Loud noise at work or from music, both ears' },
        { name: 'Sudden sensorineural hearing loss', clues: 'Loss over hours to 3 days, usually one ear' },
        { name: 'Meniere disease', clues: 'Fluctuating hearing loss, vertigo, tinnitus, ear fullness' },
        { name: 'Vestibular schwannoma', clues: 'One-sided progressive hearing loss and tinnitus, imbalance' },
        { name: 'Ototoxicity', clues: 'Aminoglycosides, cisplatin, loop diuretics, high-dose aspirin' }
      ]
    },
    {
      id: 'tinnitus',
      title: 'Tinnitus',
      summary: 'Usually accompanies hearing loss. Tinnitus that pulses in time with the heartbeat, or is in one ear only, needs investigation.',
      sharedNotes: {
        site: [
          { text: 'One ear', dx: ['Vestibular schwannoma', 'Earwax'] },
          { text: 'Both ears', dx: ['Presbycusis', 'Noise-induced hearing loss'] }
        ],
        onset: [
          { text: 'After loud noise exposure', dx: ['Noise-induced hearing loss'] },
          { text: 'After starting a new medication', dx: ['Ototoxicity'] }
        ],
        character: [
          { text: 'Pulsing in time with the heartbeat', dx: ['Pulsatile tinnitus'] },
          { text: 'Low-pitched roaring, with ear fullness', dx: ['Meniere disease'] }
        ],
        severity: [
          'Affecting sleep, concentration or mood'
        ]
      },
      associated: [
        { text: 'Any hearing loss? (tick Hearing loss)', dx: ['Presbycusis'] },
        { text: 'Any vertigo or ear fullness?', dx: ['Meniere disease'], see: ['dizziness', 'spells'] },
        { text: 'Any jaw pain or clicking?', dx: ['TMJ disorder'] },
        'Any low mood, anxiety or poor sleep? (impact)'
      ],
      redflags: [
        'Pulsatile tinnitus: vascular cause or raised intracranial pressure',
        'Tinnitus in one ear only: vestibular schwannoma',
        'Tinnitus with sudden hearing loss: sudden sensorineural hearing loss'
      ],
      history: {
        meds: [
          'Any aminoglycosides, cisplatin, loop diuretics or high-dose aspirin (ototoxicity)?'
        ],
        shx: [
          'Any loud noise at work or from music?'
        ],
        sr: [
          'Neurologic: any headache or vision change?'
        ]
      },
      differentials: [
        { name: 'Presbycusis', clues: 'Older, both ears, with gradual hearing loss' },
        { name: 'Noise-induced hearing loss', clues: 'Loud noise exposure, both ears' },
        { name: 'Earwax', clues: 'One ear, muffled hearing' },
        { name: 'Meniere disease', clues: 'Roaring tinnitus, ear fullness, vertigo, fluctuating hearing' },
        { name: 'Vestibular schwannoma', clues: 'One-sided tinnitus and hearing loss' },
        { name: 'Ototoxicity', clues: 'Aminoglycosides, cisplatin, loop diuretics, high-dose aspirin' },
        { name: 'Pulsatile tinnitus', clues: 'In time with the heartbeat; vascular causes, raised intracranial pressure' },
        { name: 'TMJ disorder', clues: 'Jaw pain or clicking' }
      ]
    },
    {
      id: 'anosmia',
      title: 'Anosmia',
      summary: 'Most loss of smell follows a viral infection or comes from nasal and sinus disease. Patients often report it as loss of taste. Ask about head injury and neurologic symptoms: it can be an early sign of PD.',
      sharedNotes: {
        onset: [
          { text: 'Suddenly, after a cold or COVID-19', dx: ['Post-viral anosmia'] },
          { text: 'Suddenly, after a head injury', dx: ['Head injury'] },
          { text: 'Gradually, over years', dx: ['Neurodegenerative disease'] }
        ],
        character: [
          'Reduced or absent (hyposmia, anosmia)',
          { text: 'Distorted or unpleasant smells (parosmia), after an infection', dx: ['Post-viral anosmia'] },
          'Sweet, salty, sour and bitter still tasted: a smell problem, not a taste problem'
        ],
        timing: [
          { text: 'Comes and goes with nasal blockage', dx: ['Chronic rhinosinusitis', 'Nasal polyps'] }
        ],
        severity: [
          'Unable to smell smoke, gas or spoiled food'
        ]
      },
      associated: [
        { text: 'Any nasal blockage, discharge or nosebleeds?', dx: ['Chronic rhinosinusitis', 'Nasal polyps'] },
        { text: 'Any recent cold or COVID-19?', dx: ['Post-viral anosmia'] },
        { text: 'Any tremor, slowness, memory problems or acting out dreams?', dx: ['Neurodegenerative disease'], see: ['memory-thinking', 'movement-change'] },
        { text: 'Any head injury?', dx: ['Head injury'] }
      ],
      redflags: [
        'One-sided nasal blockage, bloody discharge or facial swelling: sinonasal tumor',
        'Loss of smell with new neurologic symptoms: intracranial lesion or neurodegenerative disease',
        'Unable to smell smoke, gas or spoiled food: safety risk at home'
      ],
      history: {
        pmh: [
          'Any sinus problems, nasal polyps, allergies or nasal surgery?',
          'Any head injury?'
        ],
        meds: [
          'Any long-term nasal decongestant sprays (rhinitis)?'
        ],
        shx: [
          'Do you smoke?',
          'Do you have working smoke and gas alarms?'
        ],
        sr: [
          'Neurologic: any tremor, slowness or memory problems?'
        ]
      },
      differentials: [
        { name: 'Post-viral anosmia', clues: 'After a cold or COVID-19; may smell things wrongly (parosmia)' },
        { name: 'Chronic rhinosinusitis', clues: 'Nasal blockage, discharge, facial pressure' },
        { name: 'Nasal polyps', clues: 'Nasal blockage, asthma, aspirin sensitivity' },
        { name: 'Head injury', clues: 'Sudden loss after a head injury' },
        { name: 'Neurodegenerative disease', clues: 'Gradual loss; PD or Alzheimer disease, often years before other signs' },
        { name: 'Sinonasal tumor', clues: 'One-sided blockage, bloody discharge, facial swelling' }
      ]
    },
    {
      id: 'dysgeusia',
      title: 'Dysgeusia',
      summary: 'First ask whether taste itself is affected (sweet, salty, sour, bitter) or flavor, which depends on smell. True taste disturbance usually comes from medications, mouth problems, zinc deficiency or nerve damage.',
      sharedNotes: {
        onset: [
          { text: 'After starting a new medication', dx: ['Medication-related dysgeusia'] },
          'After chemotherapy or head and neck radiation therapy'
        ],
        character: [
          'Sweet, salty, sour and bitter intact, but food has lost its flavor: a smell problem (tick Anosmia)',
          { text: 'Tastes absent or altered', dx: ['Medication-related dysgeusia', 'Oral disease'] },
          { text: 'A constant metallic, bitter or sour taste', dx: ['Medication-related dysgeusia', 'GERD'] }
        ]
      },
      associated: [
        { text: 'Any dry mouth, sore mouth, white patches or dental problems?', dx: ['Oral disease'] },
        { text: 'Any heartburn or regurgitation?', dx: ['GERD'], see: ['upper-gi-symptoms'] },
        { text: 'Any poor diet, diarrhea or kidney disease?', dx: ['Zinc deficiency'] },
        { text: 'Any facial weakness?', dx: ['Bell palsy'], see: ['weakness-numbness'] }
      ],
      redflags: [
        'Altered taste with facial weakness or other neurologic signs: Bell palsy or stroke',
        'A persistent mouth ulcer or white patch: oral cancer'
      ],
      history: {
        pmh: [
          'Any CKD, liver disease, DM or Sjögren syndrome?'
        ],
        meds: [
          'Any metformin, ACE inhibitors, antibiotics, lithium or chemotherapy (taste change)?'
        ],
        shx: [
          'Do you smoke?'
        ],
        sr: [
          'Gastrointestinal: any heartburn?'
        ]
      },
      differentials: [
        { name: 'Medication-related dysgeusia', clues: 'Metformin, ACE inhibitors, antibiotics, lithium, chemotherapy' },
        { name: 'Oral disease', clues: 'Dry mouth, candida, dental infection, poor oral hygiene' },
        { name: 'GERD', clues: 'Sour or bitter taste, heartburn' },
        { name: 'Zinc deficiency', clues: 'Poor diet, malabsorption, CKD' },
        { name: 'Bell palsy', clues: 'Facial weakness with altered taste on one side of the tongue' }
      ]
    }
  ]
});
