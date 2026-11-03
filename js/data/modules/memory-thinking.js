/*
 * Changes in memory or thinking: a multi-system complaint. Acute confusion (delirium) has
 * causes in every system (infection, drugs, metabolic, hypoxia, retention, withdrawal,
 * intracranial); gradual decline is usually neurodegenerative, but depression and
 * reversible causes must be screened for. Tempo separates the two.
 *
 * Awaiting hand-off (answers with no matching presenting complaint yet; add `see`
 * and remove the line when one is added; see CLAUDE.md, "Multi-system complaints"):
 *   - Confusion: fever, chills                                              → fever complaint
 *   - Confusion: cough or dyspnea                                           → cough / dyspnea complaint
 *   - Confusion: hearing voices                                             → psychiatric complaint
 *   - Memory problems: snoring or daytime sleepiness                        → sleep complaint
 *   - Memory problems: low mood, loss of interest or anxiety                → mood complaint
 */
CHE.registerModule({
  id: 'memory-thinking',
  title: 'Changes in memory or thinking',
  multiSystem: true,
  aka: ['confusion', 'confused', 'delirium', 'forgetful', 'memory loss', 'dementia', 'cognitive decline', 'cognitive impairment', 'Alzheimer', 'drowsy', 'agitated', 'muddled', 'brain fog'],
  tags: ['neurologic'],
  summary: 'Tempo is the key branch point: confusion over hours to days is delirium (a medical emergency with a cause to find); decline over months to years suggests dementia. Always take a history from someone who knows the patient well. Switch on only the features that apply.',
  ref: '',
  related: ['headache', 'weakness-numbness', 'seizures', 'movement-change', 'incontinence', 'senses-change', 'skin-changes', 'swelling', 'polyuria-polydipsia', 'temperature-sweating', 'diarrhea-constipation', 'urinary-symptoms', 'nausea-vomiting', 'fatigue'],
  // Shared by all features (rendered as "All features"): the Change framework
  pc: {
    framework: 'change',
    notes: {
      evidence: ['Speak with someone who knows the patient well (collateral history)'],
      impact: ['What can\'t you do now that you could do before?']
    }
  },
  parts: [
    {
      id: 'confusion',
      title: 'Confusion',
      summary: 'Sudden or fluctuating confusion, drowsiness or agitation over hours to days is delirium until proven otherwise. Hypoactive (quiet, drowsy) delirium is easily missed. Look for the cause: infection, drugs, metabolic, hypoxia, retention or constipation, withdrawal, or an intracranial cause. Underlying dementia is the biggest risk factor.',
      sharedNotes: {
        tempo: [
          { text: 'Over hours to days', dx: ['Infection', 'Medication-induced delirium'] },
          { text: 'Suddenly, with weakness or speech change', dx: ['Stroke'] }
        ],
        course: [
          { text: 'Fluctuating, worse at night', dx: ['Infection', 'Medication-induced delirium'] }
        ],
        context: [
          { text: 'A new or changed medication', dx: ['Medication-induced delirium'] },
          { text: 'Stopping alcohol or benzodiazepines in the past few days', dx: ['Alcohol withdrawal'] },
          { text: 'A recent fall or head injury', dx: ['Subdural hematoma'] },
          { text: 'Recent surgery or admission to hospital', dx: ['Infection', 'Medication-induced delirium'] }
        ]
      },
      pc: {
        prompts: [
          {
            text: 'Is the person drowsy and withdrawn, or agitated and restless?',
            options: [
              { text: 'Drowsy and withdrawn (hypoactive)', dx: ['Hypoxia or hypercapnia', 'Hepatic encephalopathy'] },
              { text: 'Agitated, restless, pulling at lines (hyperactive)', dx: ['Alcohol withdrawal', 'Medication-induced delirium'] }
            ]
          },
          { text: 'Is it worse at some times of day? Any muddled nights or sleeping in the day?', dx: ['Infection', 'Hepatic encephalopathy'] },
          {
            text: 'Seeing or hearing things that aren\'t there?',
            options: [
              { text: 'Seeing things (insects, people, animals)', dx: ['Alcohol withdrawal', 'Medication-induced delirium'] },
              { text: 'Hearing voices, with a clear level of alertness', dx: ['Primary psychiatric illness'] }
            ]
          },
          { text: 'What were memory and thinking like before this? Any existing dementia?', dx: ['Underlying dementia'] },
          { text: 'Any seizure, or a period of unresponsiveness?', dx: ['Seizure'], see: ['seizures'] }
        ]
      },
      associated: [
        { text: 'Any headache or neck stiffness?', dx: ['Meningitis or encephalitis', 'Subdural hematoma'], see: ['headache'] },
        { text: 'Any weakness, numbness or slurred speech?', dx: ['Stroke'], see: ['weakness-numbness'] },
        { text: 'Any unsteadiness or double vision?', dx: ['Wernicke encephalopathy', 'Stroke'], see: ['movement-change'] },
        { text: 'Any fever or chills?', dx: ['Infection', 'Meningitis or encephalitis'] },
        { text: 'Any cough or dyspnea?', dx: ['Infection', 'Hypoxia or hypercapnia'] },
        { text: 'Any vomiting or diarrhea?', dx: ['Electrolyte disturbance'], see: ['nausea-vomiting', 'diarrhea-constipation'] },
        { text: 'Any jaundice, abdominal swelling or hematemesis?', dx: ['Hepatic encephalopathy'], see: ['skin-changes', 'swelling'] },
        { text: 'Any constipation?', dx: ['Urinary retention or constipation'], see: ['diarrhea-constipation'] },
        { text: 'Any dysuria, frequency or difficulty voiding?', dx: ['Infection', 'Urinary retention or constipation'], see: ['urinary-symptoms'] },
        { text: 'Any thirst or polyuria, or known DM?', dx: ['Hypoglycemia or hyperglycemia'], see: ['polyuria-polydipsia'] },
        { text: 'Any cold intolerance or weight gain?', dx: ['Hypothyroidism'], see: ['temperature-sweating'] }
      ],
      redflags: [
        'Sudden confusion: delirium (a medical emergency) until proven otherwise',
        'Confusion with fever, headache, neck stiffness or rash: meningitis or encephalitis',
        'Confusion with new weakness or speech change: stroke',
        'Confusion after a fall, or on anticoagulants: subdural hematoma',
        'Confusion with a low BG: hypoglycemia',
        'Confusion, unsteadiness and double vision in heavy drinking or malnutrition: Wernicke encephalopathy (give thiamine)',
        'Agitation, tremor, sweating and hallucinations 2–3 days after stopping alcohol: delirium tremens'
      ],
      history: {
        pmh: [
          'Any dementia, previous delirium, stroke or epilepsy?',
          'Any DM, CKD, liver disease, lung disease or HF?',
          'Any recent surgery or admission to hospital?'
        ],
        meds: [
          'Any new or changed medications, especially sedatives, opioids, anticholinergics or corticosteroids (delirium)?',
          'Any insulin or sulfonylureas (hypoglycemia)?',
          'Any diuretics or SSRIs (hyponatremia)?',
          'Any lithium, digoxin or antiseizure drugs (toxicity)?',
          'Any anticoagulants (subdural hematoma)?'
        ],
        shx: [
          'How much alcohol do you drink? When was your last drink? (withdrawal, Wernicke encephalopathy)',
          'Any recreational drugs?',
          'Who lives with you? Who can give a history?'
        ],
        sr: [
          'General: any fever?',
          'Respiratory: any cough or dyspnea?',
          'Gastrointestinal: any constipation?',
          'Genitourinary & reproductive: any dysuria or difficulty voiding?',
          'Endocrine: any thirst or polyuria?'
        ]
      },
      differentials: [
        { name: 'Infection', clues: 'UTI, pneumonia, cellulitis; fever, or none in older people' },
        { name: 'Medication-induced delirium', clues: 'New sedatives, opioids, anticholinergics or corticosteroids; several medications' },
        { name: 'Alcohol withdrawal', clues: 'Agitation, tremor, sweating, visual hallucinations 2–3 days after the last drink' },
        { name: 'Wernicke encephalopathy', clues: 'Confusion, unsteadiness, double vision; alcohol or malnutrition' },
        { name: 'Hypoglycemia or hyperglycemia', clues: 'Insulin or sulfonylureas; thirst and polyuria in hyperosmolar states' },
        { name: 'Electrolyte disturbance', clues: 'Hyponatremia (diuretics, SSRIs, vomiting) or hypercalcemia (thirst, constipation)' },
        { name: 'Hypoxia or hypercapnia', clues: 'Drowsy, dyspnea, cyanosis; COPD, pneumonia' },
        { name: 'Hepatic encephalopathy', clues: 'Known cirrhosis, jaundice, abdominal swelling, GI bleeding, day-night reversal' },
        { name: 'Urinary retention or constipation', clues: 'Older, unable to void, abdominal discomfort, agitation' },
        { name: 'Stroke', clues: 'Sudden onset with weakness, numbness or speech change' },
        { name: 'Subdural hematoma', clues: 'Falls, anticoagulants, alcohol; fluctuating drowsiness, headache' },
        { name: 'Meningitis or encephalitis', clues: 'Fever, headache, neck stiffness, rash, seizures' },
        { name: 'Seizure', clues: 'Confusion after a seizure, or ongoing nonconvulsive seizures' },
        { name: 'Hypothyroidism', clues: 'Slowed thinking, cold intolerance, weight gain; drowsiness in myxedema coma' },
        { name: 'Underlying dementia', clues: 'Previous memory decline; the main risk factor for delirium' },
        { name: 'Primary psychiatric illness', clues: 'Hearing voices with normal alertness and attention; psychiatric history' }
      ]
    },
    {
      id: 'memory-problems',
      title: 'Memory problems',
      summary: 'Gradual decline over months to years. Find out which abilities are affected (memory, language, finding the way, planning, behavior) and the effect on daily life: this separates mild cognitive impairment from dementia and suggests its type. Always screen for depression and reversible causes.',
      sharedNotes: {
        tempo: [
          { text: 'Gradually, over years', dx: ['Alzheimer disease', 'Frontotemporal dementia'] },
          { text: 'In steps', dx: ['Vascular dementia'] },
          { text: 'Over weeks to months', dx: ['Rapidly progressive dementia', 'Subdural hematoma'] }
        ],
        course: [
          { text: 'Fluctuating from day to day', dx: ['Dementia with Lewy bodies'] }
        ],
        context: [
          { text: 'Low mood, bereavement or stress', dx: ['Depression'] },
          { text: 'A fall or head injury', dx: ['Subdural hematoma'] }
        ]
      },
      pc: {
        prompts: [
          {
            text: 'What kind of things do you forget?',
            options: [
              { text: 'Recent conversations and appointments; asking the same questions', dx: ['Alzheimer disease'] },
              { text: 'Getting lost in familiar places', dx: ['Alzheimer disease'] },
              { text: 'Words and names; speech has become halting', dx: ['Frontotemporal dementia', 'Alzheimer disease'] },
              { text: 'Planning and organizing; thinking feels slow', dx: ['Vascular dementia'] },
              { text: 'Losing track mid-task, but can recall details when asked', dx: ['Depression', 'Functional cognitive disorder'] }
            ]
          },
          {
            text: 'Who noticed it first?',
            options: [
              { text: 'The patient, who is worried about it', dx: ['Depression', 'Functional cognitive disorder'] },
              { text: 'Family, and the patient is unaware', dx: ['Alzheimer disease', 'Frontotemporal dementia'] }
            ]
          },
          { text: 'Any change in personality or behavior: tactless, disinhibited, less caring, new eating habits?', dx: ['Frontotemporal dementia'] },
          {
            text: 'Do you need help with IADLs (money, medications, cooking, shopping, driving)?',
            options: [
              { text: 'No, still managing independently', dx: ['Mild cognitive impairment'] },
              'Yes (dementia rather than mild cognitive impairment)'
            ]
          },
          'Any safety concerns: leaving the stove on, wandering, getting lost, driving incidents, scams?'
        ]
      },
      associated: [
        { text: 'Any change in walking, or urinary incontinence?', dx: ['Normal pressure hydrocephalus'], see: ['movement-change', 'incontinence'] },
        { text: 'Any tremor, slowness, or acting out dreams?', dx: ['Dementia with Lewy bodies'], see: ['movement-change'] },
        { text: 'Seeing things that are not there?', dx: ['Dementia with Lewy bodies'] },
        { text: 'Any weakness, numbness or previous strokes?', dx: ['Vascular dementia'], see: ['weakness-numbness'] },
        { text: 'Any jerks or seizures?', dx: ['Rapidly progressive dementia'], see: ['movement-change', 'seizures'] },
        { text: 'Any fatigue or pallor?', dx: ['B12 deficiency'], see: ['fatigue', 'skin-changes'] },
        { text: 'Any hearing or vision loss?', dx: ['Sensory impairment'], see: ['senses-change'] },
        { text: 'Any snoring or daytime sleepiness?', dx: ['OSA'] },
        { text: 'Any cold intolerance or weight gain?', dx: ['Hypothyroidism'], see: ['temperature-sweating'] },
        { text: 'Any low mood, loss of interest or anxiety?', dx: ['Depression'] }
      ],
      redflags: [
        'Rapid decline over weeks to months: rapidly progressive dementia (prion disease, autoimmune encephalitis, tumor)',
        'Onset under 65: early-onset dementia; look for genetic and treatable causes',
        'Change in walking with urinary incontinence: normal pressure hydrocephalus (treatable)',
        'Falls, head injury or anticoagulants: subdural hematoma',
        'Unsafe driving, cooking or medication use, wandering, or financial exploitation: safety and safeguarding'
      ],
      history: {
        pmh: [
          'Any stroke, TIA, AF, HTN, DM or high cholesterol (vascular dementia)?',
          'Any head injury, depression, thyroid disease or B12 deficiency?',
          'Any HIV or syphilis risk?'
        ],
        meds: [
          'Any anticholinergics, benzodiazepines, opioids or sedating antihistamines (cognitive side effects)?',
          'Who manages your medications?'
        ],
        fhx: [
          'Any family history of dementia, especially before 65?'
        ],
        shx: [
          'How much alcohol do you drink? (alcohol-related brain damage)',
          'What was your education and work?',
          'Who lives with you? What help do you have? Do you drive?'
        ],
        sr: [
          'General: any fatigue or weight loss?',
          'Head, eyes, ears, nose & throat: any hearing or vision loss?',
          'Respiratory: any snoring?',
          'Genitourinary & reproductive: any incontinence?',
          'Endocrine: any cold intolerance?',
          'Psychiatric: any low mood?'
        ]
      },
      differentials: [
        { name: 'Alzheimer disease', clues: 'Gradual loss of recent memory, repeating questions, getting lost; patient often unaware' },
        { name: 'Vascular dementia', clues: 'Stepwise decline, slowed thinking, vascular risk factors, previous strokes' },
        { name: 'Dementia with Lewy bodies', clues: 'Fluctuations, visual hallucinations, parkinsonism, acting out dreams' },
        { name: 'Frontotemporal dementia', clues: 'Under 65, personality and behavior change or language loss; memory relatively spared' },
        { name: 'Mild cognitive impairment', clues: 'Memory decline noticed by others, but still independent in IADLs' },
        { name: 'Depression', clues: 'Low mood, poor concentration, the patient is worried about memory' },
        { name: 'Functional cognitive disorder', clues: 'Worried, lapses of attention, detailed account of the lapses' },
        { name: 'Normal pressure hydrocephalus', clues: 'Slowed thinking with a small-stepped walk and urinary incontinence' },
        { name: 'Subdural hematoma', clues: 'Falls, anticoagulants, alcohol; decline over weeks, headache' },
        { name: 'Hypothyroidism', clues: 'Slowed thinking, cold intolerance, weight gain, fatigue' },
        { name: 'B12 deficiency', clues: 'Fatigue, pallor, numb feet; vegan diet, metformin, PPIs' },
        { name: 'OSA', clues: 'Snoring, daytime sleepiness, morning headache' },
        { name: 'Alcohol-related brain damage', clues: 'Long-term heavy drinking; memory and planning affected' },
        { name: 'Rapidly progressive dementia', clues: 'Decline over weeks to months, jerks, unsteadiness; prion disease, autoimmune encephalitis' },
        { name: 'Sensory impairment', clues: 'Hearing or vision loss mimicking or worsening cognitive decline' }
      ]
    }
  ]
});
