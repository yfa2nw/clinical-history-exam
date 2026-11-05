/*
 * Parkinson disease: a progressive disorder of movement (bradykinesia with rest tremor,
 * rigidity or postural instability) with many nonmotor features. The review centers on
 * motor control through the day (on and off periods, wearing off, dyskinesia), the dose
 * timing, side effects (impulse control, hallucinations), nonmotor symptoms, falls and
 * swallowing, and care planning as it progresses.
 */
CHE.registerCondition({
  id: 'parkinson-disease',
  title: 'Parkinson disease',
  aka: ['Parkinson\'s disease', 'PD', 'parkinsonism', 'idiopathic Parkinson disease', 'levodopa', 'deep brain stimulation', 'tremor'],
  tags: ['neurologic'],
  summary: 'Review motor control through the day (on and off periods, wearing off, dyskinesia) and dose timing, medication side effects (impulse control, hallucinations, sleepiness), nonmotor symptoms (mood, memory, constipation, dizziness on standing, sleep), falls and swallowing, and support and future care.',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      when: ['How old were you when it was diagnosed? Was it a neurologist or movement disorder specialist?'],
      cause: [
        {
          text: 'Have you been told it is typical Parkinson disease, or another form of parkinsonism?',
          options: [
            'Idiopathic Parkinson disease',
            'Genetic Parkinson disease (a known gene change)',
            'Drug-induced parkinsonism (e.g. antipsychotics, metoclopramide)',
            'Atypical parkinsonism (multiple system atrophy, progressive supranuclear palsy, dementia with Lewy bodies)',
            'Vascular parkinsonism'
          ]
        }
      ],
      stage: [
        'Which side did it start on?',
        'Do you have "on" and "off" periods? How long does each dose last before it wears off?'
      ],
      understanding: ['Do you know that it slowly progresses, and that taking doses on time matters?']
    },
    'risk-factors': {
      family: ['Any family history of Parkinson disease or tremor?'],
      genetic: ['Have you had genetic testing? (onset before 50, or a strong family history)'],
      exposures: [
        'Any long-term exposure to pesticides or herbicides, or repeated head injuries?',
        'Have you taken antipsychotics, metoclopramide or prochlorperazine? (cause or worsen parkinsonism)'
      ],
      related: [
        'Before the movement symptoms, did you notice loss of smell, constipation, acting out dreams in your sleep, or low mood? (early features)',
        'Any stroke, HTN or DM? (vascular parkinsonism)'
      ]
    },
    presentation: {
      first: ['What did you notice first: a tremor, slowness, stiffness, smaller handwriting or a change in walking? On which side?'],
      how: [
        {
          text: 'How was it first picked up?',
          options: [
            'A tremor at rest in one hand',
            'Slowness or stiffness, often first put down to arthritis or a frozen shoulder',
            'A change in walking, or falls',
            'Family noticed a quieter voice or less facial expression'
          ]
        }
      ]
    },
    investigations: {
      imaging: ['Have you had an MRI of the brain, or a dopamine transporter scan?'],
      functional: ['Did a trial of levodopa clearly help? (supports the diagnosis)'],
      monitoring: ['How often do you see your neurologist or Parkinson nurse?'],
      home: ['Do you keep a diary of your on and off times, or wear a movement monitor?']
    },
    management: {
      lifestyle: ['Do you exercise regularly (e.g. walking, cycling, tai chi, boxing classes)?'],
      education: ['Do you know that doses must be taken on time and never stopped suddenly?'],
      allied: ['Do you see a physiotherapist, occupational therapist, speech therapist, dietitian or Parkinson nurse?'],
      ongoing: ['Do you have deep brain stimulation, or a pump (apomorphine, levodopa gel)? Any problems with it?'],
      medications: [
        'Which medications do you take, and at what times: levodopa (with carbidopa or benserazide), dopamine agonists (e.g. pramipexole, ropinirole, rotigotine patch), rasagiline, entacapone, amantadine?',
        'Do you take levodopa away from high-protein meals? (protein reduces absorption)'
      ],
      sideEffects: [
        'Any nausea, dizziness on standing, sleepiness or sudden sleep attacks?',
        'Any writhing or jerky movements when your medication is working best (dyskinesia)?',
        'On dopamine agonists: any compulsive gambling, shopping, eating or sexual behavior?',
        'Any hallucinations or confusion?'
      ],
      sickDay: [
        'If you cannot swallow, are vomiting or are admitted to the hospital, do you know your medications must not be stopped, and to ask about a patch or another route?',
        'Do you know to avoid metoclopramide, prochlorperazine and haloperidol?'
      ],
      missed: ['Do you take every dose on time? What happens when a dose is late?'],
      aids: ['Do you use alarms, a watch or a pill organizer to time your doses?']
    },
    complications: {
      disease: [
        'Any falls or fractures? Any freezing when walking?',
        'Any choking, coughing with meals or chest infections?',
        'Any constipation, urinary urgency or dizziness on standing?',
        'Any memory problems, hallucinations or confusion?',
        'Any low mood, anxiety or loss of motivation?',
        'Any drooling, poor sleep or acting out your dreams?',
        'Any pain, cramps or painful twisting of the feet?'
      ],
      flares: ['Have your symptoms suddenly worsened, for example with an infection or a missed dose?'],
      hospitalizations: [
        'Any admissions for falls, infection, confusion or medication problems? Were your doses given on time in the hospital?',
        'Have you had deep brain stimulation surgery? When?'
      ]
    },
    'ongoing-symptoms': {
      trend: [
        {
          text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
          options: [
            'Tremor, slowness and stiffness mostly controlled on medication',
            'Predictable wearing off before the next dose',
            'Mild dyskinesia when the medication peaks',
            'Constipation',
            'Reduced sense of smell',
            'Fatigue'
          ]
        }
      ]
    },
    'social-impact': {
      dressing: ['Do you need help with buttons or getting dressed?'],
      eating: ['Any difficulty cutting food or swallowing?'],
      ambulating: ['Any falls or freezing? Any difficulty getting out of bed or a chair? Do you use a walking aid?'],
      hygiene: ['Can you get in and out of the shower safely?'],
      transport: ['Do you still drive? Have you told the licensing authority?'],
      work: ['How has it affected your work?'],
      relationships: ['How has it affected your relationships and family? Do you have a caregiver, and how are they coping?'],
      mood: ['Any low mood or anxiety? How are you coping?'],
      supports: ['Do you have help at home, or contact with a Parkinson support group?'],
      planning: ['Have you thought about your future care, and made an advance care plan?']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'Sudden worsening of movement, or unable to swallow medication: missed doses or an intercurrent illness', see: ['movement-change'] },
          { text: 'Rigidity, fever and confusion after stopping or missing medication: parkinsonism-hyperpyrexia syndrome', see: ['movement-change', 'memory-thinking'] },
          { text: 'Acute confusion or new hallucinations: infection, medication toxicity or dementia', see: ['memory-thinking'] },
          { text: 'New or more frequent falls, or a fracture: postural instability or orthostatic hypotension', see: ['movement-change', 'dizziness'] },
          { text: 'Lightheadedness or fainting on standing: orthostatic hypotension', see: ['dizziness'] },
          { text: 'Choking or coughing with meals, or fever with a cough: aspiration pneumonia', see: ['upper-gi-symptoms'] },
          { text: 'Urinary retention or severe constipation: autonomic dysfunction or a medication side effect', see: ['urinary-symptoms', 'diarrhea-constipation'] },
          { text: 'Rapid progression, early falls or a poor response to levodopa: atypical parkinsonism', see: ['movement-change'] }
        ]
      }
    ]
  }
});
