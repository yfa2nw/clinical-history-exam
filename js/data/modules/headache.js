/*
 * Headache: a multi-system complaint (primary headache, intracranial, eye, sinus, vascular,
 * endocrine, pregnancy and medication causes). The history's main job is to separate a
 * primary headache from a secondary cause.
 *
 * Awaiting hand-off (answers with no matching presenting complaint yet; add `see`
 * and remove the line when one is added; see CLAUDE.md, "Multi-system complaints"):
 *   - Fever, chills                                                       → fever complaint
 *   - Snoring, waking with the headache                                   → sleep complaint
 *   - Could you be pregnant or have you recently given birth?             → pregnancy complaint
 *   - Neck pain; jaw pain or clicking                                     → neck pain / jaw pain complaint
 *   - Low mood, anxiety or poor sleep                                     → mood complaint
 */
CHE.registerModule({
  id: 'headache',
  title: 'Headache',
  multiSystem: true,
  aka: ['head pain', 'migraine', 'cephalgia', 'thunderclap headache', 'cluster headache', 'tension headache', 'facial pain'],
  tags: ['neurologic', 'pain'],
  summary: 'First decide whether this is the patient\'s usual headache or something new or different. Onset and tempo separate the emergencies (sudden: SAH; over hours with fever: meningitis; over weeks: a mass) from primary headaches, which recur in a recognizable pattern.',
  ref: '',
  related: ['nausea-vomiting', 'senses-change', 'spells', 'appearance-change', 'menstrual-sexual', 'swelling', 'weight-change', 'polyuria-polydipsia', 'weakness-numbness', 'seizures', 'memory-thinking', 'urinary-symptoms', 'temperature-sweating', 'dizziness'],
  pc: {
    framework: 'socrates',
    notes: {
      site: [
        { text: 'One side, may switch sides between attacks', dx: ['Migraine'] },
        { text: 'Around or behind one eye, always the same side', dx: ['Cluster headache'] },
        { text: 'Behind one eye, with a red painful eye', dx: ['Acute angle-closure glaucoma'], see: ['senses-change'] },
        { text: 'A band around both sides of the head', dx: ['Tension-type headache'] },
        { text: 'Temples, in someone over 50', dx: ['GCA'] },
        { text: 'Forehead or cheeks, worse bending forward', dx: ['Sinusitis'] },
        { text: 'Back of the head and neck', dx: ['SAH', 'Cervicogenic headache'] },
        { text: 'Face, in brief electric shocks', dx: ['Trigeminal neuralgia'] }
      ],
      onset: [
        { text: 'Sudden, peaking within a minute (thunderclap)', dx: ['SAH', 'Cerebral venous sinus thrombosis'] },
        { text: 'During exertion, sex, coughing or straining', dx: ['SAH', 'Brain tumor'] },
        { text: 'After a head injury, even a minor one', dx: ['Subdural hematoma'] },
        { text: 'Over hours to days, with fever', dx: ['Meningitis'] },
        { text: 'Gradually worsening over weeks to months', dx: ['Brain tumor', 'IIH'] },
        { text: 'Recurrent attacks over years, each similar', dx: ['Migraine', 'Tension-type headache'] }
      ],
      character: [
        { text: 'Throbbing or pulsating', dx: ['Migraine'] },
        { text: 'Pressing or tight, like a band', dx: ['Tension-type headache'] },
        { text: 'Boring or stabbing, excruciating', dx: ['Cluster headache'] },
        { text: 'Explosive, "like being hit on the head"', dx: ['SAH'] },
        { text: 'Electric shock-like jabs lasting seconds', dx: ['Trigeminal neuralgia'] }
      ],
      radiation: [
        { text: 'Down the neck, with neck stiffness', dx: ['SAH', 'Meningitis'] },
        { text: 'One side of the neck, with face or neck pain after neck strain', dx: ['Cervical artery dissection'] },
        { text: 'From the neck to the forehead', dx: ['Cervicogenic headache'] },
        { text: 'To the jaw or in front of the ear', dx: ['TMJ disorder', 'GCA'] }
      ],
      associated: [
        { text: 'Any visual zigzags, flashing lights or tingling spreading over minutes before the headache?', dx: ['Migraine'] },
        { text: 'Any discomfort with light or noise?', dx: ['Migraine', 'Meningitis'] },
        { text: 'Any neck stiffness?', dx: ['Meningitis', 'SAH'] },
        { text: 'Any weakness, numbness or slurred speech?', dx: ['Stroke', 'Brain tumor'], see: ['weakness-numbness'] },
        { text: 'Any confusion or drowsiness?', dx: ['Meningitis', 'Subdural hematoma'], see: ['memory-thinking'] },
        { text: 'Any seizures?', dx: ['Brain tumor', 'Cerebral venous sinus thrombosis'], see: ['seizures'] },
        { text: 'Any fever or chills?', dx: ['Meningitis', 'Sinusitis'] },
        { text: 'Any weight loss, fatigue or aching shoulders?', dx: ['GCA', 'Brain tumor'], see: ['weight-change'] },
        { text: 'Any vision change or double vision?', dx: ['IIH', 'GCA'], see: ['senses-change'] },
        { text: 'A red, watering eye or runny nose on the same side?', dx: ['Cluster headache'] },
        { text: 'A painful red eye with halos around lights?', dx: ['Acute angle-closure glaucoma'], see: ['senses-change'] },
        { text: 'Any blocked nose or facial pain?', dx: ['Sinusitis'] },
        { text: 'Any palpitations or sweating with the headache?', dx: ['Pheochromocytoma'], see: ['spells'] },
        { text: 'Do you snore, or wake with the headache?', dx: ['OSA'] },
        { text: 'Any N/V?', dx: ['Migraine', 'Brain tumor'], see: ['nausea-vomiting'] },
        { text: 'Could you be pregnant or have you recently given birth?', dx: ['Preeclampsia', 'Cerebral venous sinus thrombosis'] },
        { text: 'Any change in your face, hands or feet, or milky nipple discharge?', dx: ['Pituitary tumor'], see: ['appearance-change', 'menstrual-sexual'] },
        { text: 'Any neck pain?', dx: ['Cervicogenic headache'] },
        { text: 'Any scalp tenderness or jaw pain on chewing?', dx: ['GCA'] },
        { text: 'Any jaw pain or clicking?', dx: ['TMJ disorder'] },
        { text: 'Any rash?', dx: ['Meningitis'] },
        { text: 'Any low mood, anxiety or poor sleep?', dx: ['Tension-type headache'] }
      ],
      timing: [
        { text: 'The same as my usual headache', dx: ['Migraine', 'Tension-type headache'] },
        { text: 'New, or a change in a long-standing pattern', dx: ['Brain tumor', 'GCA'] },
        { text: 'Attacks of 4–72 hours, a few times a month, free in between', dx: ['Migraine'] },
        { text: 'Attacks of 15–180 minutes, daily for weeks, often at the same time at night, then months free', dx: ['Cluster headache'] },
        { text: 'On 15 or more days a month', dx: ['Medication-overuse headache', 'Tension-type headache'] },
        { text: 'Worst on waking', dx: ['Brain tumor', 'OSA'] },
        { text: 'Constant and steadily worsening', dx: ['Brain tumor', 'Subdural hematoma'] },
        { text: 'Around periods', dx: ['Migraine'], see: ['menstrual-sexual'] }
      ],
      exacerbating: [
        { text: 'Worse lying down, coughing or straining', dx: ['Brain tumor', 'IIH'] },
        { text: 'Worse upright, better lying flat; after a lumbar puncture or epidural', dx: ['Low CSF pressure headache'] },
        { text: 'Better lying in a dark, quiet room or after sleep', dx: ['Migraine'] },
        { text: 'Restless and pacing during attacks', dx: ['Cluster headache'] },
        { text: 'Missed meals, poor sleep, stress, certain foods', dx: ['Migraine'] },
        { text: 'Alcohol, during a cluster period', dx: ['Cluster headache'] },
        { text: 'Worse bending forward', dx: ['Sinusitis'] },
        { text: 'Set off by chewing, talking or touching the face', dx: ['Trigeminal neuralgia'] },
        { text: 'Worse with neck movement', dx: ['Cervicogenic headache'] }
      ],
      severity: [
        { text: 'The worst headache ever', dx: ['SAH'] },
        { text: 'Disabling; has to stop activities', dx: ['Migraine', 'Cluster headache'] },
        { text: 'Mild to moderate; can carry on', dx: ['Tension-type headache'] }
      ]
    },
    prompts: [
      { text: 'How many days a month do you have a headache, and on how many do you take painkillers?', dx: ['Medication-overuse headache'] },
      { text: 'Does anyone you live with have headaches too? Do you use a gas heater or fire?', dx: ['Carbon monoxide poisoning'] }
    ]
  },
  callouts: [
    {
      variant: 'note',
      title: 'Primary or secondary?',
      text: 'Most headaches are primary (migraine, tension-type, cluster) and recur in the same pattern. Suspect a secondary cause with a new or changed headache, sudden onset, systemic symptoms (fever, weight loss), neurologic symptoms, age over 50, a positional pattern, pregnancy, cancer or immunosuppression.'
    },
    {
      variant: 'tip',
      title: 'Ask about painkillers',
      text: 'Simple analgesics on 15 or more days a month, or triptans, opioids or combination analgesics on 10 or more days, for over 3 months can sustain a daily headache (medication-overuse headache). Patients rarely volunteer this; ask for numbers.'
    }
  ],
  redflags: [
    'Sudden headache peaking within a minute: SAH',
    'Fever, neck stiffness, rash or confusion: meningitis',
    'Age over 50 with a new headache, scalp tenderness or jaw pain on chewing: GCA (risk of vision loss)',
    'Weakness, numbness, slurred speech or seizure: stroke or intracranial mass',
    'Worse lying down or with coughing, with vomiting or vision change: raised ICP',
    'Head injury, especially on anticoagulants: subdural hematoma',
    'Painful red eye with halos and vomiting: acute angle-closure glaucoma',
    'Pregnancy or postpartum: preeclampsia or cerebral venous sinus thrombosis',
    'New headache with cancer, HIV or immunosuppression: metastases or infection',
    'Sudden severe headache with a known pituitary tumor: pituitary apoplexy'
  ],
  history: {
    pmh: [
      'Any previous headaches or migraine? What were they diagnosed as?',
      'Any HTN?',
      'Any cancer, HIV or immunosuppression?',
      'Any recent lumbar puncture or epidural?'
    ],
    meds: [
      'Any painkillers or triptans on most days (medication-overuse headache)?',
      'Any anticoagulants (intracranial bleeding)?',
      'Any nitrates, calcium channel blockers or PDE5 inhibitors (vasodilator headache)?',
      'Any combined oral contraceptive pill (stroke risk in migraine with aura, venous thrombosis)?'
    ],
    fhx: [
      'Any family history of migraine?',
      'Any family history of SAH, brain aneurysm or PKD?'
    ],
    shx: [
      'How much caffeine and alcohol do you have? (withdrawal, cluster headache)',
      'Do you smoke? (cluster headache, stroke)',
      'How are your sleep and stress levels?',
      'What is your work? Long hours at a screen, or exposure to fumes?'
    ],
    sr: [
      'General: any fever, weight loss or night sweats?',
      'Head, eyes, ears, nose & throat: any vision change, red eye or blocked nose?',
      'Gastrointestinal: any N/V?',
      'Genitourinary & reproductive: LMP? Could you be pregnant?',
      'Endocrine: any milky nipple discharge, or change in the face, hands or feet?',
      'Musculoskeletal & integumentary: any neck pain, jaw pain or rash?',
      'Psychiatric: any low mood, anxiety or poor sleep?'
    ]
  },
  differentials: [
    { name: 'Migraine', clues: 'Recurrent one-sided throbbing attacks of 4–72 h, N/V, light and noise sensitivity, aura in some' },
    { name: 'Tension-type headache', clues: 'Pressing band around both sides, mild to moderate, no N/V' },
    { name: 'Cluster headache', clues: 'Excruciating pain around one eye for 15–180 min, red watering eye, restless; daily for weeks' },
    { name: 'Medication-overuse headache', clues: 'Headache on 15+ days a month with frequent painkiller or triptan use' },
    { name: 'SAH', clues: 'Sudden thunderclap headache, worst ever, neck stiffness, may collapse' },
    { name: 'Meningitis', clues: 'Fever, headache, neck stiffness, light sensitivity, rash, confusion' },
    { name: 'Stroke', clues: 'Headache with sudden weakness, numbness or slurred speech' },
    { name: 'Subdural hematoma', clues: 'Head injury (may be minor), older, anticoagulants, fluctuating confusion' },
    { name: 'Brain tumor', clues: 'Progressive headache over weeks, worse lying down or on waking, vomiting, seizures, focal deficits' },
    { name: 'IIH', clues: 'Young female with obesity, daily headache, transient visual blurring, pulsatile tinnitus' },
    { name: 'Cerebral venous sinus thrombosis', clues: 'Pregnancy, postpartum or contraceptive pill; headache, seizures' },
    { name: 'Cervical artery dissection', clues: 'One-sided neck or face pain after neck strain, then stroke symptoms' },
    { name: 'Low CSF pressure headache', clues: 'Worse upright, relieved lying flat; after lumbar puncture or epidural' },
    { name: 'GCA', clues: 'Age over 50, temporal headache, scalp tenderness, jaw pain on chewing, vision change' },
    { name: 'Acute angle-closure glaucoma', clues: 'Painful red eye, halos around lights, vomiting' },
    { name: 'Sinusitis', clues: 'Facial pain, blocked nose, worse bending forward, after an URTI' },
    { name: 'Cervicogenic headache', clues: 'Neck pain spreading to the head, worse with neck movement' },
    { name: 'TMJ disorder', clues: 'Pain in front of the ear, jaw clicking, worse chewing, teeth grinding' },
    { name: 'Trigeminal neuralgia', clues: 'Electric shock-like facial pain for seconds, set off by touch or chewing' },
    { name: 'Pituitary tumor', clues: 'Headache, loss of side vision, hormonal symptoms; sudden severe headache in apoplexy' },
    { name: 'Pheochromocytoma', clues: 'Episodes of headache, sweating and palpitations; high BP' },
    { name: 'Preeclampsia', clues: 'Pregnancy over 20 weeks, HTN, headache, vision change' },
    { name: 'OSA', clues: 'Snoring, morning headache, daytime sleepiness' },
    { name: 'Carbon monoxide poisoning', clues: 'Household members affected, gas heater or fire, better away from home' }
  ]
});
