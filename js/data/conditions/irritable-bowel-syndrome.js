/*
 * Irritable bowel syndrome: a disorder of gut–brain interaction. Abdominal pain related to
 * defecation, with a change in stool form or frequency, and no structural disease. The
 * review centers on the subtype, triggers, what has been tried, the impact on daily life,
 * and the alarm features that point to another diagnosis.
 */
CHE.registerCondition({
  id: 'irritable-bowel-syndrome',
  title: 'Irritable bowel syndrome',
  aka: ['IBS', 'IBS-C', 'IBS-D', 'spastic colon', 'functional bowel disorder', 'disorder of gut-brain interaction'],
  tags: ['gastrointestinal'],
  summary: 'Confirm the subtype (constipation, diarrhea or mixed) and how the diagnosis was made. Review triggers, diet, stress and mood, what has been tried, and the impact on daily life. Any alarm feature means another diagnosis must be excluded.',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      when: ['Were other causes ruled out before the diagnosis (e.g. celiac disease, IBD)?'],
      stage: [
        {
          text: 'Which pattern do you mostly have?',
          options: [
            'IBS with constipation',
            'IBS with diarrhea',
            'Mixed, alternating between the two'
          ]
        }
      ],
      understanding: ['Do you understand that IBS is a problem with how the gut and brain communicate, not damage to the bowel?']
    },
    'risk-factors': {
      family: ['Any family history of IBS, IBD, celiac disease or bowel cancer?'],
      lifestyle: ['Do any foods trigger your symptoms (e.g. high-FODMAP foods, caffeine, alcohol, fatty or spicy food)?'],
      exposures: ['Did it start after a gut infection? (post-infectious IBS)'],
      related: ['Any anxiety, depression, fibromyalgia or chronic fatigue?']
    },
    presentation: {
      first: ['Did abdominal pain come with a change in how often you open your bowels, or what the stool looks like?']
    },
    investigations: {
      blood: ['Have you had blood tests for celiac disease and anemia?'],
      monitoring: ['Have you had a stool calprotectin test to exclude IBD?'],
      biopsy: ['Have you had a colonoscopy? Why, and what did it show?']
    },
    management: {
      lifestyle: ['Have you tried regular meals, adjusting fiber, or a low-FODMAP diet with a dietitian?'],
      education: ['Have you been given a clear explanation and a self-management plan?'],
      allied: ['Have you had psychological therapy, such as CBT or gut-directed hypnotherapy?'],
      medications: ['Do you use antispasmodics, laxatives, loperamide or a low-dose tricyclic antidepressant? Do they help?'],
      sideEffects: ['Any constipation, dry mouth or drowsiness from your medications?']
    },
    complications: {
      disease: ['Has it affected your weight or what you are able to eat?'],
      admissions: ['Any ED visits or admissions for abdominal pain?']
    },
    'ongoing-symptoms': {
      current: [
        {
          text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
          options: [
            'Abdominal pain relieved by defecation',
            'Bloating',
            'Stool form and frequency in your usual pattern',
            'Urgency',
            'A feeling of incomplete emptying'
          ]
        }
      ],
      flares: ['What triggers a bad spell: food, stress, periods?']
    },
    'social-impact': {
      toileting: ['Do you worry about reaching a toilet in time?'],
      food: ['Does your diet limit eating out or with others?'],
      transport: ['Do you plan journeys around toilet access?'],
      work: ['How often do symptoms affect your work or study?'],
      mood: ['Any anxiety or low mood? Does stress make your symptoms worse?']
    }
  },
  // Stands apart from the rows: alarm features that point to another diagnosis.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'Hematochezia: IBD, CRC or another cause', see: ['fecal-symptoms'] },
          { text: 'Unintentional weight loss: organic disease', see: ['weight-change'] },
          { text: 'A new change in bowel habit after age 50: CRC', see: ['diarrhea-constipation'] },
          { text: 'Symptoms that wake you at night: organic disease', see: ['diarrhea-constipation'] },
          { text: 'Pallor, fatigue or dyspnea (anemia): GI blood loss or malabsorption', see: ['skin-changes', 'fatigue'] },
          { text: 'Fever or persistent vomiting: infection or obstruction', see: ['nausea-vomiting'] },
          { text: 'A new abdominal lump or swelling: mass', see: ['swelling'] }
        ]
      }
    ]
  }
});
