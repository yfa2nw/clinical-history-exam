/*
 * Epilepsy: recurrent unprovoked seizures. The review centers on the seizure types and
 * syndrome, seizure frequency and the last seizure, triggers and adherence, antiseizure
 * medication side effects and interactions (contraception, pregnancy, valproate), rescue
 * medication, safety (driving, bathing, work), and SUDEP.
 */
CHE.registerCondition({
  id: 'epilepsy',
  title: 'Epilepsy',
  aka: ['seizure disorder', 'seizures', 'fits', 'convulsions', 'antiseizure medication', 'status epilepticus', 'absence seizures'],
  tags: ['neurologic'],
  summary: 'Confirm the seizure types and cause, then review seizure frequency and the last seizure, triggers and adherence, medication side effects and interactions (contraception, pregnancy, valproate), rescue medication, safety (driving, bathing, work), and SUDEP.',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      when: ['How old were you at your first seizure, and when was epilepsy diagnosed?'],
      cause: [
        {
          text: 'Do you know what causes your epilepsy?',
          options: [
            'Genetic (e.g. a generalized epilepsy syndrome)',
            'Structural: stroke, tumor, head injury or scarring of the temporal lobe',
            'A past brain infection (meningitis, encephalitis)',
            'Autoimmune or metabolic',
            'Unknown'
          ]
        }
      ],
      stage: [
        {
          text: 'Which types of seizure do you have?',
          options: [
            'Focal, staying aware',
            'Focal, with impaired awareness',
            'Focal, spreading to a convulsion on both sides',
            'Generalized tonic-clonic (convulsive)',
            'Absence',
            'Myoclonic jerks'
          ]
        },
        'Have you been told you have a named epilepsy syndrome (e.g. juvenile myoclonic epilepsy)?'
      ],
      understanding: ['Do you know your triggers, and what the people around you should do during a seizure?']
    },
    'risk-factors': {
      family: ['Any family history of epilepsy or febrile seizures?'],
      genetic: ['Any known genetic condition, or developmental delay?'],
      alcohol: ['How much alcohol do you drink? (heavy drinking and withdrawal trigger seizures)'],
      drugs: ['Do you use recreational drugs (e.g. cocaine, amphetamines)?'],
      exposures: [
        'Do you take medications that lower the seizure threshold (e.g. tramadol, bupropion, some antibiotics)?',
        'How are you sleeping? (lack of sleep is a common trigger)'
      ],
      related: ['Any febrile seizures as a child, head injury, stroke, brain infection or brain tumor?']
    },
    presentation: {
      first: ['What happened at your first seizure? Did anyone see it, or record it on a phone?'],
      how: [
        {
          text: 'How was it first found?',
          options: [
            'A convulsive seizure seen by others',
            'Episodes of staring or lost time',
            'Morning jerks, dropping things',
            'Unusual sensations, smells or feelings of déjà vu',
            'Found after a head injury, stroke or brain infection'
          ]
        }
      ],
      admitted: ['Were you admitted after your first seizure?']
    },
    investigations: {
      blood: ['Were your sodium, glucose and calcium checked after the first seizure?'],
      imaging: ['Have you had an MRI of the brain? What did it show?'],
      functional: [
        'Have you had an EEG (routine, sleep-deprived, or video monitoring over several days)?',
        'Did you have an ECG to rule out a heart cause of blackouts?'
      ],
      monitoring: ['Are your medication levels, blood count, liver tests or bone health checked?'],
      home: ['Do you keep a seizure diary? Has anyone recorded a seizure on video?']
    },
    management: {
      lifestyle: ['Do you keep a regular sleep pattern and limit alcohol? Do you avoid known triggers?'],
      education: [
        'Do your family or friends know seizure first aid, and when to call an ambulance (over 5 minutes, or repeated seizures)?',
        'Has anyone talked with you about SUDEP, and how to lower the risk?'
      ],
      allied: ['Do you see an epilepsy nurse?'],
      ongoing: ['Do you have a vagus nerve stimulator, or follow a ketogenic diet?'],
      medications: [
        'Which antiseizure medications do you take (e.g. levetiracetam, lamotrigine, valproate, carbamazepine), at what doses and times?',
        'Do you have rescue medication (e.g. buccal midazolam)? Does someone know how to give it?'
      ],
      previous: ['Which medications have you tried before? Did they stop the seizures, or cause side effects?'],
      sideEffects: [
        'Any drowsiness, dizziness, unsteadiness or memory problems?',
        'Any low mood, irritability or anger (e.g. on levetiracetam)?',
        'Any rash, especially in the first weeks of a new medication (e.g. lamotrigine, carbamazepine)?',
        'On valproate: any weight gain, tremor or hair loss?'
      ],
      sickDay: ['If you are vomiting and cannot keep your tablets down, or have a fever, do you know to seek advice the same day? (missed doses and illness both trigger seizures)'],
      missed: ['Do you ever miss doses? Have missed doses led to seizures?'],
      aids: ['Do you use a pill organizer, alarms or a phone reminder?'],
      followUp: ['When did you last see your neurologist or epilepsy team?']
    },
    complications: {
      disease: [
        'Any injuries during seizures: tongue biting, burns, fractures, head injuries?',
        'Have you ever had a seizure lasting more than 5 minutes, or a cluster without recovering in between (status epilepticus)?',
        'Any memory problems, low mood or anxiety?',
        'Do you have convulsive seizures at night, or live alone? (raise the risk of SUDEP)'
      ],
      flares: [
        'How many seizures have you had in the past year, and when was the last one?',
        'Do they come in clusters? What triggers them?'
      ],
      hospitalizations: [
        'Any ED visits or admissions for seizures in the past year? Any ICU stays?',
        'Have you been assessed for epilepsy surgery, or had it?'
      ]
    },
    'ongoing-symptoms': {
      trend: [
        {
          text: 'Which of these expected findings do you have, and how do they compare with usual?',
          options: [
            'Seizure-free on medication',
            'Seizures at your usual frequency, of your usual type',
            'Your usual warning (aura) before a seizure',
            'Tiredness or headache after a seizure that settles within a day',
            'Mild medication side effects, such as tiredness'
          ]
        }
      ]
    },
    'social-impact': {
      hygiene: ['Do you shower rather than bathe, and leave the bathroom door unlocked?'],
      food: ['Do you take precautions when cooking (e.g. using the back burners or a microwave)?'],
      transport: ['Do you drive? Do you know the seizure-free period required, and have you told the licensing authority?'],
      work: ['Has epilepsy affected your work? Do you work at heights, with machinery or on night shifts?'],
      relationships: [
        'What contraception do you use? (some antiseizure medications make the pill less effective, and estrogen lowers lamotrigine levels)',
        'Are you planning a pregnancy? (folic acid first; valproate must not be used in pregnancy)'
      ],
      mood: ['Any low mood, anxiety or worry about having a seizure in public? Any thoughts of self-harm?'],
      supports: ['Who around you knows what to do during a seizure? Do you wear a medical alert bracelet?']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'A seizure lasting over 5 minutes, or repeated seizures without recovery: status epilepticus', see: ['seizures'] },
          { text: 'A clear rise in seizure frequency, or a new seizure type: missed doses, illness, interactions or a new lesion', see: ['seizures'] },
          { text: 'A seizure with fever, headache or confusion: infection or a new structural lesion', see: ['seizures', 'headache'] },
          { text: 'A seizure after a head injury: intracranial bleeding', see: ['seizures', 'headache'] },
          { text: 'Weakness or confusion lasting hours after a seizure: postictal (Todd) paresis or stroke', see: ['weakness-numbness', 'memory-thinking'] },
          { text: 'Rash, fever or mouth ulcers after starting a new medication: severe drug reaction', see: ['skin-changes'] },
          { text: 'Pregnancy or a missed period on valproate: risk to the fetus', see: ['menstrual-sexual'] }
        ]
      }
    ]
  }
});
