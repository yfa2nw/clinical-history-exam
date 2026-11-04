/*
 * Inflammatory bowel disease: Crohn disease and UC. A relapsing-remitting condition, so the
 * review centers on the type and extent, flare pattern and current activity, treatment
 * (and its monitoring and side effects), surgery, complications inside and outside the gut,
 * and bowel cancer surveillance.
 */
CHE.registerCondition({
  id: 'inflammatory-bowel-disease',
  title: 'Inflammatory bowel disease',
  aka: ['IBD', 'Crohn disease', 'Crohn\'s disease', 'ulcerative colitis', 'UC', 'colitis', 'stoma', 'ileostomy'],
  tags: ['gastrointestinal'],
  summary: 'Pin down the type (Crohn disease or UC), the extent, and the usual flare pattern, then current activity compared with remission. Review treatment and its monitoring, steroid use, surgery and stomas, complications in and outside the gut, and colonoscopy surveillance for bowel cancer.',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      stage: [
        {
          text: 'Which type do you have, and which part of the bowel is affected?',
          options: [
            'Crohn disease: anywhere in the gut, often the end of the small bowel or around the anus',
            'UC: the colon, starting at the rectum',
            'IBD-unclassified'
          ]
        },
        'How severe is it usually? When was your last flare?'
      ],
      understanding: ['Do you know what a flare feels like for you, and what to do when one starts?']
    },
    'risk-factors': {
      family: ['Any family history of IBD, celiac disease or bowel cancer?'],
      substances: ['Do you smoke? (worsens Crohn disease)'],
      exposures: ['Do you take NSAIDs, or have you had antibiotics recently? (can trigger flares)'],
      related: ['Any joint, skin, eye or liver problems (primary sclerosing cholangitis)?']
    },
    presentation: {
      how: [
        {
          text: 'How was it first found?',
          options: [
            'Bloody diarrhea',
            'Chronic diarrhea, abdominal pain and weight loss',
            'A perianal abscess or fistula',
            'Anemia, or poor growth in childhood',
            'An emergency admission with severe colitis or obstruction'
          ]
        }
      ]
    },
    investigations: {
      blood: ['Any anemia, low iron or raised inflammatory markers?'],
      imaging: ['Have you had an MRI of the small bowel?'],
      biopsy: ['Have you had a colonoscopy with biopsies?'],
      monitoring: [
        'How often do you have stool calprotectin, blood tests or a colonoscopy?',
        'Are you having regular colonoscopies to screen for bowel cancer?'
      ],
      results: ['Did your last colonoscopy show the bowel lining had healed?'],
      home: ['Do you keep a symptom diary? How many stools a day, and any blood?']
    },
    management: {
      lifestyle: ['Have you stopped smoking? Have you made any changes to your diet?'],
      education: ['Do you have a written flare plan, and an IBD nurse or helpline to contact?'],
      allied: ['Do you see an IBD nurse or a dietitian?'],
      medications: [
        'Are you on 5-ASA (mesalamine)?',
        'Are you on azathioprine, methotrexate or a biologic (e.g. infliximab, adalimumab, vedolizumab)?',
        'How many courses of corticosteroids have you needed in the past year?'
      ],
      sideEffects: [
        'Any infections, liver problems or low blood counts on immunosuppressants?',
        'Are your blood tests being monitored?'
      ],
      sickDay: ['If you have a fever or an infection, do you know to seek advice before your next immunosuppressant or biologic dose?'],
      procedures: [
        'Have you had bowel surgery (a resection or colectomy)? Do you have a stoma or a pouch?',
        'Any surgery for a perianal abscess or fistula?'
      ],
      missed: ['Do you keep taking your medications when you feel well?']
    },
    complications: {
      disease: [
        'Any strictures or bowel obstruction?',
        'Any fistulas or abscesses?',
        'Any anemia, or low iron or B12?',
        'Any joint pain, red eyes, skin rashes or mouth ulcers?',
        'Have you been told you have primary sclerosing cholangitis?',
        'Any blood clots?',
        'Any bowel cancer or precancerous changes found?'
      ],
      treatment: [
        'Any serious infections, skin cancers or osteoporosis from treatment?',
        'Any problems with your stoma or pouch?'
      ],
      admissions: ['Any hospital admissions for flares in the past year? Did you need IV steroids?']
    },
    'ongoing-symptoms': {
      current: [
        {
          text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
          options: [
            'Stool frequency and form at your usual baseline',
            'Mild, occasional abdominal discomfort',
            'Fatigue'
          ]
        }
      ],
      flares: ['How many flares have you had in the past year? What triggered them?']
    },
    'social-impact': {
      toileting: ['Any urgency or incontinence? Do you carry a toilet access card?'],
      food: ['Are there foods you avoid?'],
      transport: ['Do you plan journeys around toilet access?'],
      work: ['How much time have you taken off work or study for flares or appointments?'],
      relationships: [
        'Has it affected intimacy or body image, for example with a stoma?',
        'Are you planning a pregnancy? (some medications, such as methotrexate, must be stopped first)'
      ],
      mood: ['Any low mood or anxiety about flares?']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'Bloody diarrhea 6 or more times a day, with fever or a fast heart rate: acute severe colitis', see: ['diarrhea-constipation', 'fecal-symptoms'] },
          { text: 'Severe abdominal pain, distension or vomiting, or no gas passed: obstruction, perforation or toxic megacolon', see: ['abdominal-pain', 'nausea-vomiting'] },
          { text: 'Perianal pain, swelling or discharge: perianal abscess or fistula', see: ['fecal-symptoms'] },
          { text: 'Diarrhea after antibiotics or a hospital stay: C. difficile infection', see: ['diarrhea-constipation'] },
          { text: 'Fever while on immunosuppressants: serious infection' },
          { text: 'Unintentional weight loss: active disease or malnutrition', see: ['weight-change'] },
          { text: 'Jaundice or itch: primary sclerosing cholangitis', see: ['skin-changes'] },
          { text: 'A swollen, painful calf: DVT', see: ['swelling'] }
        ]
      }
    ]
  }
});
