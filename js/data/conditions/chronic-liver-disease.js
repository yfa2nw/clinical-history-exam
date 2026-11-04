/*
 * Chronic liver disease, from fatty liver and chronic hepatitis to cirrhosis. The review
 * centers on the cause (and whether it is still active, e.g. alcohol), compensated vs
 * decompensated cirrhosis, the complications (ascites, varices, encephalopathy, infection,
 * kidney injury, liver cancer) and surveillance.
 */
CHE.registerCondition({
  id: 'chronic-liver-disease',
  title: 'Chronic liver disease',
  aka: ['cirrhosis', 'liver cirrhosis', 'CLD', 'fatty liver', 'MASLD', 'NAFLD', 'alcohol-related liver disease', 'hepatitis B', 'hepatitis C', 'portal hypertension', 'varices', 'ascites'],
  tags: ['gastrointestinal'],
  summary: 'Establish the cause and whether it is still active, then whether cirrhosis is compensated or decompensated (ascites, variceal bleeding, encephalopathy, jaundice). Review alcohol, the treatments for each complication, surveillance for varices and liver cancer, and transplant plans.',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      cause: [
        {
          text: 'Do you know what caused your liver disease?',
          options: [
            'Alcohol-related liver disease',
            'MASLD (fatty liver from metabolic causes; formerly NAFLD)',
            'Hepatitis B or C',
            'Autoimmune hepatitis, PBC or primary sclerosing cholangitis',
            'Hemochromatosis, Wilson disease or alpha-1 antitrypsin deficiency',
            'Unknown'
          ]
        }
      ],
      stage: [
        'Have you been told you have cirrhosis?',
        'Has it ever caused ascites, bleeding, confusion or jaundice (decompensated)?',
        'Do you know your Child-Pugh class or MELD score?'
      ],
      understanding: ['Do you know what can make it worse, such as alcohol and some medications?']
    },
    'risk-factors': {
      family: ['Any family history of liver disease, hemochromatosis or Wilson disease?'],
      alcohol: [
        'How much alcohol do you drink now, and how much in the past? When was your last drink?',
        'Have you ever had withdrawal symptoms when you stopped drinking?'
      ],
      drugs: ['Have you ever injected drugs? (viral hepatitis)'],
      exposures: [
        'Any tattoos, blood transfusions or unprotected sex? (viral hepatitis)',
        'Any herbal remedies or OTC medications, including acetaminophen?'
      ],
      diet: ['Has your weight changed recently? (MASLD, or muscle loss in cirrhosis)'],
      related: [
        'Any DM, obesity, high cholesterol or HTN? (MASLD)',
        'Any IBD? (primary sclerosing cholangitis)',
        'Any other autoimmune disease?',
        'Any HIV?'
      ]
    },
    presentation: {
      how: [
        {
          text: 'How was it first found?',
          options: [
            'Abnormal liver blood tests',
            'An ultrasound done for another reason',
            'Jaundice',
            'Already decompensated: ascites, bleeding or confusion',
            'Screening (e.g. hepatitis B or C, a family history)'
          ]
        }
      ]
    },
    investigations: {
      blood: ['Any blood tests for viral hepatitis, autoimmune markers or iron overload?'],
      imaging: ['Have you had an ultrasound, or a liver stiffness scan (elastography)?'],
      biopsy: ['Did you have a liver biopsy? What did it show?'],
      monitoring: [
        'Do you have an ultrasound every 6 months to screen for liver cancer (HCC)?',
        'Have you had an endoscopy to look for varices? When was the last one?'
      ],
      results: ['Are your liver blood tests, clotting, albumin and sodium stable?'],
      home: ['Do you weigh yourself regularly, or check your waist size (ascites)?']
    },
    management: {
      lifestyle: [
        'Have you stopped drinking alcohol? What support are you getting?',
        'Do you follow a low-salt diet? Do you eat enough protein, with a late-evening snack?'
      ],
      education: ['Have you been vaccinated against hepatitis A and B, influenza and pneumococcus?'],
      allied: ['Do you see a dietitian, or an alcohol and drug service?'],
      medications: [
        'Are you on diuretics (spironolactone, furosemide) for ascites?',
        'Are you on a beta-blocker (propranolol, carvedilol) to prevent variceal bleeding?',
        'Are you on lactulose or rifaximin? How many soft stools a day do you have?',
        'Are you on antiviral treatment for hepatitis B or C?',
        'Are you on antibiotics to prevent peritonitis?',
        'Do you avoid NSAIDs and sedatives, and limit acetaminophen?'
      ],
      sideEffects: [
        'Any dizziness on standing, cramps or confusion on diuretics or beta-blockers?',
        'Any low sodium, high potassium or kidney injury from diuretics?'
      ],
      sickDay: ['When unwell with vomiting or diarrhea, do you know to pause diuretics and seek advice, while keeping up lactulose?'],
      missed: ['Do you take your lactulose every day as prescribed?']
    },
    complications: {
      disease: [
        'Any ascites needing drainage?',
        'Any hematemesis or melena from varices?',
        'Any episodes of confusion or drowsiness (hepatic encephalopathy)?',
        'Any peritonitis or other serious infections?',
        'Any kidney problems?',
        'Have you been told you have liver cancer?'
      ],
      hospitalizations: [
        'Have you had variceal banding, ascitic drains or a shunt (TIPS)?',
        'Have you been assessed for a liver transplant, or had one?',
        'Any hospital admissions for bleeding, confusion, infection or fluid?'
      ]
    },
    'ongoing-symptoms': {
      trend: [
        {
          text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
          options: [
            'Fatigue',
            'Itch',
            'Poor appetite',
            'Muscle cramps',
            'Ankle or abdominal swelling, controlled on diuretics',
            'Easy bruising'
          ]
        }
      ]
    },
    'social-impact': {
      food: ['How does the low-salt diet affect your meals?'],
      transport: ['Has confusion or drowsiness affected your driving?'],
      work: ['Have alcohol or tiredness affected your work?'],
      relationships: ['Has drinking affected your relationships or family?'],
      mood: ['Any low mood or anxiety? Do you feel judged because of your liver disease?'],
      supports: ['Who supports you to stay off alcohol?'],
      planning: ['Have you discussed a transplant, or what you would want if your liver fails?']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'Hematemesis or melena: variceal bleeding', see: ['upper-gi-symptoms', 'fecal-symptoms'] },
          { text: 'Confusion, drowsiness or day-night reversal: hepatic encephalopathy', see: ['memory-thinking'] },
          { text: 'Fever or abdominal pain with ascites: spontaneous bacterial peritonitis', see: ['abdominal-pain'] },
          { text: 'Rapidly increasing abdominal swelling or dyspnea: worsening ascites', see: ['swelling'] },
          { text: 'New or deepening jaundice: decompensation, alcohol-related hepatitis or liver cancer', see: ['skin-changes'] },
          { text: 'Much less urine than usual: hepatorenal syndrome', see: ['urinary-symptoms'] },
          { text: 'Weight loss or RUQ pain: liver cancer', see: ['weight-change', 'abdominal-pain'] },
          { text: 'Tremor, sweating or agitation after stopping alcohol: alcohol withdrawal', see: ['movement-change'] }
        ]
      }
    ]
  }
});
