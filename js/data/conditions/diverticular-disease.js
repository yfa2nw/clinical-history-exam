/*
 * Diverticular disease: diverticulosis, symptomatic diverticular disease and recurrent
 * diverticulitis. The review centers on how many episodes there have been and how severe,
 * whether a colonoscopy has excluded cancer, fiber and bowel habit, surgery, and the
 * complications (abscess, perforation, fistula, stricture, bleeding).
 */
CHE.registerCondition({
  id: 'diverticular-disease',
  title: 'Diverticular disease',
  aka: ['diverticulosis', 'diverticulitis', 'diverticula', 'recurrent diverticulitis', 'diverticular bleeding'],
  tags: ['gastrointestinal'],
  summary: 'Establish whether it is diverticulosis, symptomatic diverticular disease or recurrent diverticulitis, and how many episodes there have been and how severe. Check that a colonoscopy has excluded cancer, review fiber and bowel habit, and ask about complications (abscess, perforation, fistula, stricture, bleeding) and surgery.',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      when: ['How many episodes of diverticulitis have you had, and when was the last one?'],
      stage: [
        {
          text: 'Which best describes your condition?',
          options: [
            'Diverticulosis found on a scan or colonoscopy, with no symptoms',
            'Symptomatic diverticular disease: ongoing pain or change in bowel habit without infection',
            'Recurrent diverticulitis',
            'Complicated diverticulitis: abscess, perforation, fistula or stricture',
            'Diverticular bleeding'
          ]
        }
      ],
      understanding: ['Do you know the symptoms of diverticulitis, and when to seek urgent care?']
    },
    'risk-factors': {
      family: ['Any family history of diverticular disease or bowel cancer?'],
      substances: ['Do you smoke? (raises the risk of complications)'],
      lifestyle: [
        'How much fiber do you eat? How active are you?',
        'Has your weight changed? (obesity raises the risk)'
      ],
      exposures: ['Do you take NSAIDs, aspirin, corticosteroids or opioids? (raise the risk of bleeding and perforation)'],
      related: [
        'Any constipation?',
        'Any immunosuppression? (more severe episodes)',
        'Any connective tissue disease (e.g. Ehlers-Danlos syndrome)?'
      ]
    },
    presentation: {
      how: [
        {
          text: 'How was it first found?',
          options: [
            'LLQ pain with fever (diverticulitis)',
            'Hematochezia',
            'A screening colonoscopy',
            'A CT done for another reason',
            'An emergency admission with an abscess or perforation'
          ]
        }
      ],
      admitted: ['Were you admitted? Did you need IV antibiotics, a drain or surgery?']
    },
    investigations: {
      blood: ['During episodes, were your inflammatory markers and blood count checked?'],
      imaging: ['Was diverticulitis confirmed with a CT?'],
      biopsy: ['Have you had a colonoscopy after an episode to exclude cancer? What did it show?'],
      monitoring: ['When is your next colonoscopy due?'],
      results: ['Were any polyps or a narrowing found?'],
      home: ['Do you keep a diary of your bowel habit or flares?']
    },
    management: {
      lifestyle: ['Do you eat a high-fiber diet and drink enough fluid? Have you stopped smoking?'],
      education: ['Do you know what to do if an episode starts, and when you need antibiotics?'],
      allied: ['Have you seen a dietitian?'],
      medications: [
        'Do you take fiber supplements or laxatives?',
        'Do you have medication for pain during flares? Do you avoid NSAIDs and opioids?'
      ],
      previous: ['How many courses of antibiotics have you needed for diverticulitis?'],
      sideEffects: ['Any diarrhea or C. difficile infection after antibiotics?'],
      procedures: [
        'Have you had a drain for an abscess?',
        'Have you had bowel surgery (a resection)? Do you have a stoma, or has one been reversed?'
      ],
      followUp: ['Have you had a surgical opinion about recurrent episodes?']
    },
    complications: {
      disease: [
        'Any abscess or perforation?',
        'Any fistula, such as gas or stool in the urine (colovesical) or from the vagina?',
        'Any narrowing of the bowel (stricture) or obstruction?',
        'Any diverticular bleeding needing a transfusion?'
      ],
      treatment: ['Any problems after surgery or with a stoma?'],
      admissions: ['Any admissions for diverticulitis or bleeding in the past year?']
    },
    'ongoing-symptoms': {
      current: [
        {
          text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
          options: [
            'No symptoms between episodes',
            'Mild LLQ discomfort, relieved by defecation',
            'Bloating',
            'Constipation or variable bowel habit'
          ]
        }
      ],
      flares: ['How often do you have flares? Have they become more frequent or more severe?']
    },
    'social-impact': {
      toileting: ['Any urgency, or problems managing a stoma?'],
      food: ['Has the high-fiber diet been easy to follow?'],
      work: ['How much work or study have you missed for flares?'],
      relationships: ['Has a stoma affected intimacy or body image?'],
      mood: ['Do you worry about the next episode, or about surgery?']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'LLQ pain with fever or chills: acute diverticulitis', see: ['abdominal-pain'] },
          { text: 'Severe, spreading abdominal pain, worse on moving: perforation and peritonitis', see: ['abdominal-pain'] },
          { text: 'Abdominal distension, vomiting or no gas passed: obstruction from a stricture', see: ['abdominal-pain', 'nausea-vomiting'] },
          { text: 'Large-volume hematochezia, or lightheadedness with bleeding: diverticular bleeding', see: ['fecal-symptoms', 'dizziness'] },
          { text: 'Gas or stool in the urine, or recurrent UTIs: colovesical fistula', see: ['urinary-symptoms'] },
          { text: 'A new change in bowel habit, weight loss or anemia: CRC', see: ['diarrhea-constipation', 'weight-change'] }
        ]
      }
    ]
  }
});
