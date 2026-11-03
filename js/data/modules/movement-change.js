/*
 * Movement symptoms: a multi-system complaint (basal ganglia, cerebellum, sensory and
 * vestibular systems, plus endocrine, metabolic, drug and alcohol causes). Describe the
 * movement first; the pattern names the disorder.
 *
 * Awaiting hand-off (answers with no matching presenting complaint yet; add `see`
 * and remove the line when one is added; see CLAUDE.md, "Multi-system complaints"):
 *   - Slowness or stiffness: aching shoulders and hips; joint pain         → joint pain complaint
 *   - Unsteadiness or falls: joint pain or foot problems                   → joint pain complaint
 *   - Tremor, slowness or stiffness, abnormal movements: anxiety, low mood → mood / anxiety complaint
 */
CHE.registerModule({
  id: 'movement-change',
  title: 'Movement symptoms',
  multiSystem: true,
  aka: ['shaking', 'tremor', 'Parkinson', 'parkinsonism', 'slowness', 'stiffness', 'rigidity', 'bradykinesia', 'balance problems', 'unsteady', 'ataxia', 'falls', 'gait', 'twitching', 'jerks', 'myoclonus', 'chorea', 'dystonia', 'tics', 'restless legs', 'involuntary movements', 'changes in movement', 'movement disorder'],
  tags: ['neurologic'],
  summary: 'Ask the patient (and anyone with them) to describe or show the movement, or film it. Then decide which kind it is: too much movement (tremor, jerks, twisting), too little (slowness, stiffness), or poorly coordinated (unsteadiness). Switch on only the features that apply.',
  ref: '',
  related: ['weakness-numbness', 'spells', 'senses-change', 'headache', 'temperature-sweating', 'fatigue', 'upper-gi-symptoms', 'diarrhea-constipation', 'urinary-symptoms', 'skin-changes', 'weight-change', 'seizures', 'incontinence', 'dizziness', 'memory-thinking'],
  // Shared by all features (rendered as "All features"): the symptom SOCRATES. Each
  // feature adds its answers to the rows through `sharedNotes`.
  pc: {
    framework: 'symptom',
    notes: {
      character: ['Ask the patient to show you, or watch a video someone has filmed'],
      severity: ['Any falls? Could you get up afterward?']
    }
  },
  parts: [
    {
      id: 'tremor',
      title: 'Tremor',
      summary: 'Classify by when it appears: at rest (parkinsonian), holding a posture (essential, enhanced physiologic), or reaching for a target (cerebellar).',
      sharedNotes: {
        site: [
          { text: 'One hand', dx: ['Parkinson disease'] },
          { text: 'Both hands, the head or the voice', dx: ['Essential tremor'] },
          { text: 'A fine tremor of both hands', dx: ['Enhanced physiologic tremor', 'Hyperthyroidism'] }
        ],
        onset: [
          { text: 'Slowly, over years', dx: ['Essential tremor', 'Parkinson disease'] },
          { text: 'Over days to weeks', dx: ['Enhanced physiologic tremor', 'Hyperthyroidism'] },
          { text: 'Suddenly, with unsteadiness', dx: ['Cerebellar disease'] },
          { text: 'After new medications (salbutamol, lithium, valproate)', dx: ['Enhanced physiologic tremor'] },
          { text: 'After new antipsychotics or metoclopramide', dx: ['Drug-induced parkinsonism'] },
          { text: 'After stopping or cutting down alcohol', dx: ['Alcohol withdrawal'] }
        ],
        character: [
          { text: 'At rest, e.g. hands in the lap; eases when moving', dx: ['Parkinson disease'] },
          { text: 'Holding the arms out, or holding a cup', dx: ['Essential tremor', 'Enhanced physiologic tremor'] },
          { text: 'Reaching for something, worse near the target', dx: ['Cerebellar disease'] },
          { text: 'Handwriting large and shaky', dx: ['Essential tremor'] },
          { text: 'Handwriting small and cramped', dx: ['Parkinson disease'] }
        ],
        radiation: [
          { text: 'From one hand to the leg on the same side, later the other side', dx: ['Parkinson disease'] }
        ],
        exacerbating: [
          { text: 'Eases after a small amount of alcohol', dx: ['Essential tremor'] },
          { text: 'Worse with anxiety, caffeine or tiredness', dx: ['Enhanced physiologic tremor'] }
        ],
        severity: [
          'Spilling drinks, difficulty writing or eating'
        ]
      },
      associated: [
        { text: 'Any slowness or stiffness? (tick Slowness or stiffness)', dx: ['Parkinson disease'] },
        { text: 'Do you act out your dreams, or have you lost your sense of smell?', dx: ['Parkinson disease'], see: ['senses-change'] },
        { text: 'Any unsteadiness, slurred speech or double vision?', dx: ['Cerebellar disease'], see: ['senses-change'] },
        { text: 'Any heat intolerance, palpitations or weight loss?', dx: ['Hyperthyroidism'], see: ['temperature-sweating', 'weight-change'] },
        { text: 'Any sweating, hunger or confusion with the shaking?', dx: ['Hypoglycemia'], see: ['spells'] },
        { text: 'Any anxiety?', dx: ['Enhanced physiologic tremor'] }
      ],
      redflags: [
        'Tremor with sweating, agitation or confusion after stopping alcohol: alcohol withdrawal (seizure risk)',
        'Sudden tremor with unsteadiness, slurred speech or double vision: cerebellar stroke',
        'Tremor with fever, rigidity and confusion after a new drug: serotonin syndrome or neuroleptic malignant syndrome'
      ],
      history: {
        pmh: [
          'Any thyroid disease, liver disease or DM?',
          'Any anxiety?'
        ],
        meds: [
          'Any salbutamol, lithium, valproate or amiodarone (tremor)?',
          'Any antipsychotics or metoclopramide (drug-induced parkinsonism)?',
          'Any insulin or sulfonylureas (hypoglycemia)?'
        ],
        fhx: [
          'Any family history of tremor or Parkinson disease?'
        ],
        shx: [
          'How much alcohol and caffeine do you have? When was your last drink?',
          'Does it affect writing, eating or drinking, or your work?'
        ],
        sr: [
          'General: any weight loss?',
          'Endocrine: any heat intolerance?',
          'Psychiatric: any anxiety?'
        ]
      },
      differentials: [
        { name: 'Essential tremor', clues: 'Both hands, head or voice when holding a posture; family history; eased by alcohol' },
        { name: 'Parkinson disease', clues: 'Rest tremor starting in one hand, slowness, stiffness, small handwriting' },
        { name: 'Enhanced physiologic tremor', clues: 'Fine tremor of both hands; anxiety, caffeine, salbutamol, lithium, valproate' },
        { name: 'Hyperthyroidism', clues: 'Fine tremor, heat intolerance, palpitations, weight loss' },
        { name: 'Hypoglycemia', clues: 'Shaking with sweating, hunger, confusion; insulin or sulfonylureas' },
        { name: 'Alcohol withdrawal', clues: 'Tremor, sweating and agitation 6–24 h after the last drink' },
        { name: 'Cerebellar disease', clues: 'Tremor reaching for a target, unsteadiness, slurred speech; alcohol, stroke, MS, drugs' },
        { name: 'Drug-induced parkinsonism', clues: 'Rest tremor and slowness on both sides after antipsychotics or metoclopramide' }
      ]
    },
    {
      id: 'slowness-stiffness',
      title: 'Slowness or stiffness',
      summary: 'Parkinsonism: slowness of movement with stiffness, rest tremor or unsteadiness. Most is Parkinson disease, but look for drug causes and for features of atypical parkinsonism.',
      sharedNotes: {
        site: [
          { text: 'One side worse than the other', dx: ['Parkinson disease'] },
          { text: 'Both sides equally from the start', dx: ['Drug-induced parkinsonism', 'Atypical parkinsonism'] },
          { text: 'Legs mainly; arms swing normally', dx: ['Vascular parkinsonism', 'Normal pressure hydrocephalus'] },
          { text: 'Aching shoulders and hips, worse in the morning', dx: ['Polymyalgia rheumatica'] }
        ],
        onset: [
          { text: 'Over months to years, starting on one side', dx: ['Parkinson disease'] },
          { text: 'Over weeks, after antipsychotics, metoclopramide or prochlorperazine', dx: ['Drug-induced parkinsonism'] },
          { text: 'In steps', dx: ['Vascular parkinsonism'] }
        ],
        character: [
          { text: 'Slow dressing, doing up buttons, writing, turning over in bed', dx: ['Parkinson disease'] },
          { text: 'Small shuffling steps; difficulty starting, turning or getting through doorways', dx: ['Parkinson disease'] },
          { text: 'Less facial expression, a quieter voice, smaller handwriting', dx: ['Parkinson disease'] },
          'Joint pain and swelling, rather than stiff muscles'
        ],
        radiation: [
          { text: 'Spreading to the other side over years', dx: ['Parkinson disease'] }
        ],
        timing: [
          { text: 'Progressing quickly, with falls in the first few years', dx: ['Atypical parkinsonism'] },
          { text: 'Wearing off before the next dose of levodopa', dx: ['Parkinson disease'] }
        ],
        exacerbating: [
          { text: 'Clearly better with levodopa', dx: ['Parkinson disease'] },
          { text: 'Little response to levodopa', dx: ['Atypical parkinsonism', 'Vascular parkinsonism'] }
        ],
        severity: [
          'Needing help with dressing, washing or eating'
        ]
      },
      associated: [
        { text: 'Any tremor? (tick Tremor)', dx: ['Parkinson disease'] },
        { text: 'Do you act out your dreams, or have you lost your sense of smell?', dx: ['Parkinson disease'], see: ['senses-change'] },
        { text: 'Any memory problems, or seeing things that are not there?', dx: ['Atypical parkinsonism'], see: ['memory-thinking'] },
        { text: 'Any early falls, or difficulty looking down?', dx: ['Atypical parkinsonism'] },
        { text: 'Any dizziness on standing?', dx: ['Atypical parkinsonism', 'Parkinson disease'], see: ['dizziness'] },
        { text: 'Any difficulty swallowing or drooling?', dx: ['Parkinson disease'], see: ['upper-gi-symptoms'] },
        { text: 'Any constipation?', dx: ['Parkinson disease'], see: ['diarrhea-constipation'] },
        { text: 'Any urgency or incontinence?', dx: ['Normal pressure hydrocephalus', 'Atypical parkinsonism'], see: ['incontinence', 'urinary-symptoms'] },
        { text: 'Any cold intolerance, weight gain or fatigue?', dx: ['Hypothyroidism'], see: ['temperature-sweating'] },
        { text: 'Any low mood or loss of interest?', dx: ['Depression', 'Parkinson disease'] }
      ],
      redflags: [
        'Fever, rigidity and confusion after starting an antipsychotic or stopping Parkinson medications: neuroleptic malignant syndrome',
        'Change in walking with urinary incontinence and memory problems: normal pressure hydrocephalus (treatable)',
        'Coughing or choking on food or drink: aspiration risk',
        'Rapid progression over weeks: drug cause or a structural lesion'
      ],
      history: {
        pmh: [
          'Any stroke, HTN or DM (vascular parkinsonism)?',
          'Any thyroid disease?',
          'Any head injury or meningitis (normal pressure hydrocephalus)?'
        ],
        meds: [
          'Any antipsychotics, metoclopramide or prochlorperazine (drug-induced parkinsonism)?',
          'Any levodopa or other Parkinson medications (wearing off)? Any recent changes or missed doses?'
        ],
        fhx: [
          'Any family history of Parkinson disease?'
        ],
        shx: [
          'Who helps you at home? Any walking aid?'
        ],
        sr: [
          'Cardiovascular: any dizziness on standing?',
          'Gastrointestinal: any dysphagia or constipation?',
          'Genitourinary & reproductive: any urgency or incontinence?',
          'Endocrine: any cold intolerance?',
          'Psychiatric: any low mood?'
        ]
      },
      differentials: [
        { name: 'Parkinson disease', clues: 'Slowness, stiffness and rest tremor starting on one side; loss of smell, acting out dreams, constipation' },
        { name: 'Drug-induced parkinsonism', clues: 'Both sides from the start, after antipsychotics, metoclopramide or prochlorperazine' },
        { name: 'Vascular parkinsonism', clues: 'Legs mainly, small steps, stepwise course; stroke, HTN, DM' },
        { name: 'Atypical parkinsonism', clues: 'Rapid progression, early falls, poor response to levodopa; early dementia and hallucinations, early dizziness on standing, or difficulty looking down' },
        { name: 'Normal pressure hydrocephalus', clues: 'Small-stepped walk, urinary incontinence, memory problems' },
        { name: 'Hypothyroidism', clues: 'Slowed movement and thinking, cold intolerance, weight gain, fatigue' },
        { name: 'Depression', clues: 'Slowed movement and speech with low mood and loss of interest' },
        { name: 'Polymyalgia rheumatica', clues: 'Over 50, aching and morning stiffness of the shoulders and hips; associated with GCA' }
      ]
    },
    {
      id: 'unsteadiness-falls',
      title: 'Unsteadiness or falls',
      summary: 'First separate true imbalance from vertigo, faintness and blackouts. Then: cerebellar (wide-based, unsteady even with the lights on), sensory (worse in the dark), vestibular (with vertigo), weakness, parkinsonian, or multifactorial falls in older people.',
      sharedNotes: {
        onset: [
          { text: 'Suddenly', dx: ['Cerebellar disease'] },
          { text: 'Over weeks to months', dx: ['Sensory ataxia', 'Normal pressure hydrocephalus'] }
        ],
        character: [
          'Unsteady on my feet, head clear (true imbalance)',
          { text: 'The room spins', dx: ['Vestibular disorder'], see: ['dizziness', 'spells'] },
          { text: 'Faint or lightheaded', dx: ['Orthostatic hypotension'], see: ['dizziness', 'spells'] },
          { text: 'Walking with the feet wide apart, or veering to one side', dx: ['Cerebellar disease'] }
        ],
        exacerbating: [
          { text: 'Worse in the dark or with the eyes closed', dx: ['Sensory ataxia'] },
          { text: 'Soon after standing up, or with dizziness', dx: ['Orthostatic hypotension'], see: ['dizziness', 'spells'] },
          { text: 'After alcohol, or new sedatives, antihypertensives or antiseizure drugs', dx: ['Medication-related falls', 'Cerebellar disease'] }
        ],
        severity: [
          { text: 'Falls from tripping or slipping', dx: ['Multifactorial falls'] },
          { text: 'Falls from blacking out', see: ['spells'] },
          { text: 'Falls because the legs gave way', see: ['weakness-numbness'] },
          'How many falls in the past year?'
        ]
      },
      associated: [
        { text: 'Any numbness or tingling in the feet?', dx: ['Sensory ataxia'], see: ['weakness-numbness'] },
        { text: 'Any weakness in the legs?', see: ['weakness-numbness'] },
        { text: 'Any slurred speech, double vision or clumsy hands?', dx: ['Cerebellar disease'], see: ['senses-change'] },
        { text: 'Any tremor or slowness? (tick Tremor, Slowness or stiffness)', dx: ['Parkinson disease'] },
        { text: 'Any problems with vision?', dx: ['Multifactorial falls'], see: ['senses-change'] },
        { text: 'Any vertigo, hearing loss or tinnitus?', dx: ['Vestibular disorder'], see: ['dizziness', 'spells', 'senses-change'] },
        { text: 'Any dizziness on standing or palpitations?', dx: ['Orthostatic hypotension'], see: ['dizziness', 'spells'] },
        { text: 'Any urinary incontinence or memory problems?', dx: ['Normal pressure hydrocephalus'], see: ['memory-thinking', 'incontinence'] },
        { text: 'Any joint pain or foot problems?', dx: ['Multifactorial falls'] }
      ],
      redflags: [
        'Sudden unsteadiness with headache, vomiting or inability to walk: cerebellar stroke or hemorrhage',
        'Fall with head injury on anticoagulants: subdural hematoma',
        'Unable to get up after a fall (long lie): rhabdomyolysis, pressure injury, hypothermia',
        'Recurrent falls with osteoporosis: fracture risk'
      ],
      history: {
        pmh: [
          'Any stroke, DM, B12 deficiency or MS?',
          'Any previous falls or fractures? Any osteoporosis?'
        ],
        meds: [
          'Any sedatives, antidepressants or antihypertensives (falls)?',
          'Any phenytoin or other antiseizure drugs (cerebellar disease)?',
          'Any anticoagulants (bleeding after a fall)?'
        ],
        fhx: [
          'Any family history of unsteadiness or ataxia?'
        ],
        shx: [
          'How much alcohol do you drink? (cerebellar disease, neuropathy)',
          'Any hazards at home: stairs, rugs, poor lighting? Do you use a walking aid?'
        ],
        sr: [
          'Head, eyes, ears, nose & throat: any vision or hearing problems?',
          'Cardiovascular: any dizziness on standing or palpitations?',
          'Genitourinary & reproductive: any incontinence?',
          'Musculoskeletal & integumentary: any joint pain or foot problems?'
        ]
      },
      differentials: [
        { name: 'Cerebellar disease', clues: 'Wide-based gait, unsteady with eyes open, slurred speech; alcohol, stroke, MS, phenytoin' },
        { name: 'Sensory ataxia', clues: 'Worse in the dark or with eyes closed, numb feet; neuropathy, B12 deficiency' },
        { name: 'Vestibular disorder', clues: 'Unsteadiness with vertigo, hearing loss or tinnitus' },
        { name: 'Orthostatic hypotension', clues: 'Lightheaded on standing; antihypertensives, dehydration, Parkinson disease' },
        { name: 'Parkinson disease', clues: 'Shuffling, freezing, falls with slowness and tremor' },
        { name: 'Normal pressure hydrocephalus', clues: 'Small-stepped walk, urinary incontinence, memory problems' },
        { name: 'Medication-related falls', clues: 'Sedatives, antidepressants, antihypertensives, alcohol' },
        { name: 'Multifactorial falls', clues: 'Older, poor vision, joint or foot problems, home hazards, several medications' }
      ]
    },
    {
      id: 'abnormal-movements',
      title: 'Abnormal movements',
      summary: 'Name the movement from its description: brief shock-like jerks (myoclonus), flowing dance-like movements (chorea), sustained twisting postures (dystonia), repeated movements or sounds that can be held back (tics), or an urge to move the legs at rest (restless legs).',
      sharedNotes: {
        site: [
          { text: 'Face and mouth: lip smacking, chewing or tongue movements', dx: ['Drug-induced movement disorder'] },
          { text: 'The neck turning to one side, or one hand when writing', dx: ['Dystonia'] },
          { text: 'The legs, at rest in the evening', dx: ['Restless legs syndrome'] }
        ],
        onset: [
          { text: 'Over hours to days, after a new drug', dx: ['Drug-induced movement disorder'] },
          { text: 'Slowly, over years', dx: ['Huntington disease', 'Tics'] },
          { text: 'After starting antipsychotics, metoclopramide or levodopa', dx: ['Drug-induced movement disorder'] },
          { text: 'During pregnancy', dx: ['Restless legs syndrome'] }
        ],
        character: [
          { text: 'Sudden, brief jerks', dx: ['Myoclonus'] },
          { text: 'Flowing, restless, dance-like', dx: ['Huntington disease', 'Drug-induced movement disorder'] },
          { text: 'Twisting, or a fixed posture', dx: ['Dystonia'] },
          { text: 'Repeated blinks, sniffs or sounds', dx: ['Tics'] },
          { text: 'Rhythmic jerking with loss of awareness', dx: ['Seizure'], see: ['seizures'] }
        ],
        timing: [
          { text: 'Only when falling asleep: single jerks', dx: ['Myoclonus'] },
          { text: 'In the evening or at rest, with kicking in sleep', dx: ['Restless legs syndrome'] }
        ],
        exacerbating: [
          { text: 'An urge before them; can be held back for a while', dx: ['Tics'] },
          { text: 'Relieved by moving the legs', dx: ['Restless legs syndrome'] },
          { text: 'Change with attention or distraction', dx: ['Functional movement disorder'] }
        ],
        severity: [
          'Affecting sleep, work or driving'
        ]
      },
      associated: [
        { text: 'Any confusion or change in memory or personality?', dx: ['Huntington disease', 'Myoclonus'], see: ['memory-thinking'] },
        { text: 'Any seizures?', dx: ['Seizure'], see: ['seizures'] },
        { text: 'Any tremor, slowness or stiffness? (tick Tremor, Slowness or stiffness)', dx: ['Drug-induced movement disorder'] },
        { text: 'Any fatigue or pallor?', dx: ['Restless legs syndrome'], see: ['fatigue', 'skin-changes'] },
        { text: 'Any jaundice?', dx: ['Myoclonus'], see: ['skin-changes'] },
        { text: 'Any low mood, irritability or obsessive thoughts?', dx: ['Huntington disease', 'Tics'] }
      ],
      redflags: [
        'Sudden twisting of the neck or eyes rolling up after an antipsychotic or metoclopramide: acute dystonic reaction',
        'Jerks with confusion: metabolic (kidney or liver failure) or drug toxicity',
        'Rapidly progressive dementia with jerks: prion disease'
      ],
      history: {
        pmh: [
          'Any kidney or liver disease (myoclonus)?',
          'Any iron deficiency or pregnancy (restless legs)?',
          'Any psychiatric illness?'
        ],
        meds: [
          'Any antipsychotics or metoclopramide (dystonia, tardive dyskinesia)?',
          'Any levodopa (dyskinesia)?',
          'Any antidepressants or antihistamines (restless legs)?'
        ],
        fhx: [
          'Any family history of movement disorders, Huntington disease or early dementia?'
        ],
        shx: [
          'How much caffeine and alcohol do you have? (restless legs)',
          'How do the movements affect sleep, work or driving?'
        ],
        sr: [
          'General: any fatigue?',
          'Gastrointestinal: any jaundice?',
          'Psychiatric: any low mood or anxiety?'
        ]
      },
      differentials: [
        { name: 'Restless legs syndrome', clues: 'Urge to move the legs at rest in the evening, relieved by moving; iron deficiency, pregnancy, CKD' },
        { name: 'Myoclonus', clues: 'Brief shock-like jerks; normal when falling asleep, otherwise kidney or liver failure, drugs, epilepsy' },
        { name: 'Tics', clues: 'Repeated movements or sounds, an urge before, can be held back; starts in childhood' },
        { name: 'Dystonia', clues: 'Sustained twisting or fixed postures, e.g. neck turning, writer\'s cramp' },
        { name: 'Huntington disease', clues: 'Chorea, personality change, dementia; family history' },
        { name: 'Drug-induced movement disorder', clues: 'Acute dystonia, tardive dyskinesia or chorea after antipsychotics, metoclopramide or levodopa' },
        { name: 'Seizure', clues: 'Rhythmic jerking with loss of awareness, confusion afterward' },
        { name: 'Functional movement disorder', clues: 'Variable, distractible movements, often after a trigger' }
      ]
    }
  ]
});
