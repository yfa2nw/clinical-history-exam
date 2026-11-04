/*
 * Chronic pancreatitis: progressive inflammation and scarring of the pancreas. The review
 * centers on the cause (and whether it is still active, e.g. alcohol and smoking), chronic
 * pain and analgesia, exocrine insufficiency (steatorrhea, enzyme replacement), endocrine
 * insufficiency (type 3c DM), nutrition and bone health, and pancreatic cancer red flags.
 */
CHE.registerCondition({
  id: 'chronic-pancreatitis',
  title: 'Chronic pancreatitis',
  aka: ['pancreatitis', 'pancreatic insufficiency', 'exocrine pancreatic insufficiency', 'pancreatic enzymes', 'type 3c diabetes'],
  tags: ['gastrointestinal'],
  summary: 'Establish the cause and whether it is still active (alcohol, smoking), then review chronic pain and analgesia, exocrine insufficiency (steatorrhea, weight, enzyme replacement), DM, nutrition and bone health, and procedures. New jaundice or weight loss raises concern for pancreatic cancer.',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      when: ['How many episodes of acute pancreatitis did you have before the diagnosis?'],
      cause: [
        {
          text: 'Do you know what caused your pancreatitis?',
          options: [
            'Alcohol',
            'Smoking',
            'Gallstones or a blocked pancreatic duct',
            'Genetic (e.g. hereditary pancreatitis, cystic fibrosis)',
            'Autoimmune pancreatitis',
            'High triglycerides or calcium',
            'Unknown'
          ]
        }
      ],
      stage: ['Have you been told your pancreas no longer makes enough enzymes or insulin?'],
      understanding: ['Do you know that alcohol and smoking speed up the damage?']
    },
    'risk-factors': {
      family: ['Any family history of pancreatitis or pancreatic cancer?'],
      genetic: ['Have you had genetic testing for hereditary pancreatitis or cystic fibrosis?'],
      smoking: ['Do you smoke? How much?'],
      alcohol: ['How much alcohol do you drink now, and how much in the past? When was your last drink?'],
      diet: ['What do you eat in a typical day? Has your weight changed?'],
      related: [
        'Any gallstones?',
        'Any high triglycerides or high calcium (hyperparathyroidism)?',
        'Any autoimmune disease?'
      ]
    },
    presentation: {
      how: [
        {
          text: 'How was it first found?',
          options: [
            'Recurrent attacks of acute pancreatitis',
            'Chronic epigastric pain going through to the back',
            'Steatorrhea and weight loss',
            'New DM',
            'Calcification seen on a scan done for another reason'
          ]
        }
      ]
    },
    investigations: {
      blood: ['Any blood tests for lipase, triglycerides, calcium, IgG4, BG or HbA1c?'],
      imaging: ['Have you had a CT, MRI or endoscopic ultrasound? What did they show (calcification, duct stones, cysts)?'],
      functional: ['Have you had a stool elastase test?'],
      monitoring: [
        'How often are your HbA1c, vitamins (A, D, E, K), and bone density checked?',
        'Are you having scans to watch for cysts or cancer?'
      ],
      results: ['Is your weight and nutrition stable?'],
      home: ['Do you check your BG at home?']
    },
    management: {
      lifestyle: [
        'Have you stopped drinking alcohol and smoking? What support are you getting?',
        'Do you eat small, regular meals?'
      ],
      education: ['Do you know how to adjust your enzyme dose for meals and snacks?'],
      allied: ['Do you see a dietitian, a pain service, or an alcohol and drug service?'],
      medications: [
        'Do you take pancreatic enzyme replacement with every meal and snack? What dose?',
        'Are you on a PPI with your enzymes?',
        'Which pain medications do you take: acetaminophen, NSAIDs, neuropathic agents, opioids?',
        'Do you take vitamin D, calcium or fat-soluble vitamin supplements?',
        'If you have DM: are you on insulin or tablets?'
      ],
      sideEffects: [
        'Any constipation, drowsiness or dependence on opioids?',
        'Any hypoglycemia? (more common in pancreatic DM)'
      ],
      missed: ['Do you ever skip your enzymes, for example when eating out?']
    },
    complications: {
      disease: [
        'Any steatorrhea or weight loss (exocrine insufficiency)?',
        'Any DM (type 3c)?',
        'Any pseudocysts?',
        'Any jaundice from a narrowed bile duct?',
        'Any osteoporosis or fractures?',
        'Any blood clots in the abdominal veins?'
      ],
      flares: ['How often do you have pain flares? What triggers them (alcohol, fatty meals)?'],
      hospitalizations: [
        'Have you had an ERCP with stents or stone removal, or a nerve block for pain?',
        'Have you had pancreatic surgery?',
        'Any problems from ERCP, such as acute pancreatitis or infection?',
        'Any admissions for pain flares or acute pancreatitis in the past year?'
      ]
    },
    'ongoing-symptoms': {
      trend: [
        {
          text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
          options: [
            'Chronic epigastric pain, controlled with your usual analgesia',
            'Loose, pale or oily stools when enzymes are missed',
            'Bloating',
            'Fatigue'
          ]
        }
      ]
    },
    'social-impact': {
      food: ['How does taking enzymes and eating small meals affect your eating?'],
      work: ['How has pain affected your work or study?'],
      relationships: ['Has drinking or pain affected your relationships or family?'],
      mood: ['Any low mood or anxiety? How are you coping with chronic pain?'],
      finances: ['Can you afford your enzymes and other medications?'],
      supports: ['Who supports you to stay off alcohol and smoking?']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'Severe epigastric pain with vomiting: acute flare, pseudocyst or obstruction', see: ['abdominal-pain', 'nausea-vomiting'] },
          { text: 'New jaundice, dark urine or pale stools: bile duct narrowing or pancreatic cancer', see: ['skin-changes'] },
          { text: 'Unintentional weight loss despite enzymes: malabsorption or pancreatic cancer', see: ['weight-change'] },
          { text: 'Hematemesis or melena: bleeding pseudoaneurysm or varices from splenic vein thrombosis', see: ['upper-gi-symptoms', 'fecal-symptoms'] },
          { text: 'Thirst, polyuria or very high BG: new or worsening DM', see: ['polyuria-polydipsia'] },
          { text: 'Vomiting soon after eating, or early fullness: duodenal obstruction', see: ['nausea-vomiting'] },
          { text: 'Tremor, sweating or agitation after stopping alcohol: alcohol withdrawal', see: ['movement-change'] }
        ]
      }
    ]
  }
});
