CHE.registerModule({
  id: 'upper-gi-symptoms',
  title: 'Upper gastrointestinal symptoms',
  aka: ['vomiting blood', 'coffee-ground vomit', 'hematemesis', 'difficulty swallowing', 'food sticking', 'painful swallowing', 'indigestion', 'heartburn', 'reflux', 'dysphagia', 'odynophagia', 'dyspepsia'],
  tags: ['gastrointestinal'],
  summary: 'Pin down exactly what the patient has noticed, then explore each feature. Switch on only the ones that apply.',
  ref: '',
  related: ['nausea-vomiting', 'fecal-symptoms', 'abdominal-pain', 'skin-changes', 'swelling', 'senses-change', 'weakness-numbness', 'dizziness', 'movement-change'],
  parts: [
    {
      id: 'hematemesis',
      title: 'Hematemesis',
      summary: 'Vomiting blood. Confirm it came from the upper GI tract (not swallowed blood from the nose or mouth, and not hemoptysis), judge how much has been lost, then look for the source.',
      pc: {
        framework: 'bleeding',
        notes: {
          confirm: [
            'Nosebleed or bleeding gums (swallowed blood)',
            'Coughed up, frothy and bright red (hemoptysis: a respiratory source)'
          ],
          color: [
            { text: 'Fresh red blood or clots', dx: ['Variceal bleeding', 'PUD'] },
            { text: 'Dark brown "coffee grounds"', dx: ['PUD', 'Gastritis'] }
          ],
          amount: [
            'Streaks only',
            { text: 'A cupful or more, or repeated', dx: ['Variceal bleeding', 'PUD'] }
          ],
          timing: [
            { text: 'Only after repeated forceful vomiting or retching', dx: ['Mallory-Weiss tear'], see: ['nausea-vomiting'] },
            { text: 'From the first vomit', dx: ['PUD', 'Variceal bleeding'] }
          ],
          pattern: [
            'First episode',
            { text: 'Previous GI bleeding or known varices', dx: ['Variceal bleeding', 'PUD'] }
          ],
          pain: [
            { text: 'Epigastric pain, worse or better with food', dx: ['PUD'], see: ['abdominal-pain'] },
            { text: 'Pain on swallowing or heartburn (tick Odynophagia or Dyspepsia)', dx: ['Esophagitis'] },
            { text: 'Painless', dx: ['Variceal bleeding'] }
          ],
          trigger: [
            { text: 'NSAIDs, aspirin or heavy alcohol use', dx: ['PUD', 'Gastritis'] },
            { text: 'Forceful vomiting or retching', dx: ['Mallory-Weiss tear'] },
            { text: 'On anticoagulants, or with bruising or bleeding elsewhere', dx: ['Bleeding disorder'], see: ['skin-changes'] }
          ],
          impact: [
            'Lightheadedness, syncope or tachycardia (significant blood loss)',
            'Fatigue or dyspnea (anemia)'
          ]
        }
      },
      associated: [
        { text: 'Have you passed black, tarry stool since?', dx: ['PUD', 'Variceal bleeding'], see: ['fecal-symptoms'] },
        { text: 'Any dysphagia? (tick Dysphagia)', dx: ['Esophageal cancer'] },
        { text: 'Any jaundice, abdominal swelling or easy bruising?', dx: ['Variceal bleeding'], see: ['skin-changes', 'swelling'] },
        { text: 'Any early satiety or weight loss?', dx: ['Gastric cancer', 'Esophageal cancer'], see: ['weight-change'] }
      ],
      redflags: [
        'Lightheadedness, syncope, tachycardia or hypotension: significant upper GI bleed',
        'Large-volume fresh blood or clots: brisk bleed (variceal or arterial)',
        'Known liver disease or heavy alcohol use: variceal bleeding',
        'Chest pain after forceful vomiting: esophageal perforation',
        'Weight loss, early satiety or progressive dysphagia: upper GI malignancy'
      ],
      history: {
        pmh: [
          'Any PUD or previous GI bleeding?',
          'Any liver disease or cirrhosis?',
          'Any H. pylori infection?',
          'Any previous endoscopy? When, and what was found?',
          'Any bleeding disorders?'
        ],
        meds: [
          'Any NSAIDs or aspirin (PUD)?',
          'Any anticoagulants or antiplatelets (bleeding)?',
          'Any SSRIs or corticosteroids (GI bleeding with NSAIDs)?'
        ],
        fhx: [
          'Any family history of gastric cancer?'
        ],
        shx: [
          'How much alcohol do you drink? (varices, gastritis)',
          'Do you smoke? (PUD)'
        ],
        sr: [
          'Cardiovascular: any lightheadedness, palpitations or chest pain?',
          'Respiratory: any cough or hemoptysis?',
          'Gastrointestinal: any jaundice or abdominal swelling?'
        ]
      },
      differentials: [
        { name: 'PUD', clues: 'Coffee-ground vomit or melena, epigastric pain, NSAIDs, H. pylori' },
        { name: 'Gastritis', clues: 'Coffee-ground vomit, alcohol or NSAIDs' },
        { name: 'Mallory-Weiss tear', clues: 'Streaks of blood after forceful vomiting or retching' },
        { name: 'Variceal bleeding', clues: 'Large-volume fresh blood; liver disease or alcohol' },
        { name: 'Esophagitis', clues: 'Heartburn, odynophagia, small-volume bleeding' },
        { name: 'Gastric cancer', clues: 'Older, weight loss, early satiety, iron deficiency' },
        { name: 'Esophageal cancer', clues: 'Progressive dysphagia, weight loss' },
        { name: 'Bleeding disorder or anticoagulant', clues: 'Anticoagulants or antiplatelets, bruising or bleeding elsewhere' }
      ]
    },
    {
      id: 'dysphagia',
      title: 'Dysphagia',
      summary: 'Difficulty swallowing. First decide whether it is oropharyngeal (trouble starting a swallow) or esophageal (food sticking after swallowing), then whether it is mechanical or a motility problem.',
      pc: {
        prompts: [
          {
            text: 'Do you have trouble starting a swallow, or does food stick after you swallow?',
            options: [
              { text: 'Trouble starting; coughing, choking or food coming out of the nose (oropharyngeal)', dx: ['Stroke', 'Myasthenia gravis'] },
              { text: 'Food sticks in the throat or chest after swallowing (esophageal)', dx: ['Esophageal cancer', 'Peptic stricture'] }
            ]
          },
          {
            text: 'Is it solids, liquids or both?',
            options: [
              { text: 'Solids only, getting worse', dx: ['Esophageal cancer', 'Peptic stricture'] },
              { text: 'Solids and liquids from the start', dx: ['Achalasia'] }
            ]
          },
          {
            text: 'Is it getting steadily worse, or does it come and go?',
            options: [
              { text: 'Progressive over weeks to months', dx: ['Esophageal cancer'] },
              { text: 'Intermittent, with food occasionally getting stuck', dx: ['Eosinophilic esophagitis', 'Esophageal ring or web'] }
            ]
          },
          'Can you point to where it sticks?'
        ]
      },
      associated: [
        { text: 'Any odynophagia?', dx: ['Esophagitis'] },
        { text: 'Any heartburn or acid regurgitation?', dx: ['Peptic stricture'] },
        { text: 'Any regurgitation of undigested food or bad breath?', dx: ['Achalasia', 'Zenker diverticulum'] },
        { text: 'Any hematemesis (tick Hematemesis) or melena?', dx: ['Esophageal cancer'], see: ['fecal-symptoms'] },
        { text: 'Any weight loss?', dx: ['Esophageal cancer', 'Achalasia'], see: ['weight-change'] },
        'Any cough or chest infections after eating? (aspiration)',
        { text: 'Any asthma, eczema or food allergies?', dx: ['Eosinophilic esophagitis'] },
        { text: 'Any weakness, slurred speech or drooping eyelids?', dx: ['Stroke', 'Myasthenia gravis'], see: ['weakness-numbness'] },
        { text: 'Any tight skin or color change in the fingers in the cold?', dx: ['Systemic sclerosis'], see: ['skin-changes'] }
      ],
      redflags: [
        'Progressive dysphagia with weight loss: esophageal cancer',
        'Unable to swallow saliva: food bolus obstruction (emergency)',
        'Hematemesis or melena: upper GI malignancy or bleed',
        'Coughing or choking with meals, recurrent chest infections: aspiration',
        'New neurologic symptoms: stroke'
      ],
      history: {
        pmh: [
          'Any GERD or Barrett esophagus?',
          'Any stroke, PD, MS or myasthenia gravis?',
          'Any systemic sclerosis?',
          'Any previous esophageal dilation or surgery?',
          'Any head and neck radiation therapy?'
        ],
        meds: [
          'Any bisphosphonates, doxycycline, potassium or NSAIDs (pill esophagitis)?',
          'Any PPIs (a response suggests reflux)?'
        ],
        fhx: [
          'Any family history of esophageal or gastric cancer?'
        ],
        shx: [
          'Do you smoke? How much alcohol do you drink? (esophageal cancer)'
        ],
        sr: [
          'Respiratory: any cough or chest infections after eating?',
          'Neurologic: any weakness, slurred speech or double vision?'
        ]
      },
      differentials: [
        { name: 'Esophageal cancer', clues: 'Older, progressive solid dysphagia, weight loss, smoking, alcohol, Barrett esophagus' },
        { name: 'Peptic stricture', clues: 'Long-standing heartburn, slowly progressive solid dysphagia' },
        { name: 'Achalasia', clues: 'Solids and liquids from the start, regurgitation of undigested food' },
        { name: 'Eosinophilic esophagitis', clues: 'Young, atopic, intermittent food bolus impaction' },
        { name: 'Esophageal ring or web', clues: 'Intermittent solid dysphagia, not progressive' },
        { name: 'Zenker diverticulum', clues: 'Older, regurgitation of undigested food, bad breath, gurgling' },
        { name: 'Esophagitis', clues: 'Odynophagia, reflux or pills' },
        { name: 'Systemic sclerosis', clues: 'Tight skin, Raynaud phenomenon, severe reflux' },
        { name: 'Stroke', clues: 'Sudden oropharyngeal dysphagia with other neurologic signs' },
        { name: 'Myasthenia gravis', clues: 'Fatigable weakness, ptosis, worse later in the meal' }
      ]
    },
    {
      id: 'odynophagia',
      title: 'Odynophagia',
      summary: 'Pain on swallowing usually means mucosal injury: infection, a pill lodged in the esophagus, or severe reflux.',
      pc: {
        framework: 'socrates',
        notes: {
          site: [
            { text: 'High in the throat', dx: ['Pharyngitis'] },
            { text: 'Behind the breastbone', dx: ['Reflux esophagitis', 'Pill esophagitis'] }
          ],
          onset: [
            { text: 'Sudden, after taking a tablet with little water or before lying down', dx: ['Pill esophagitis'] },
            { text: 'After swallowing something very hot, caustic or sharp', dx: ['Caustic or foreign body injury'] },
            { text: 'Gradual, in someone who is immunosuppressed', dx: ['Candida esophagitis', 'Viral esophagitis'] }
          ],
          character: [
            { text: 'Sharp or burning with each swallow', dx: ['Reflux esophagitis', 'Pill esophagitis'] }
          ],
          radiation: [
            { text: 'To the ear', dx: ['Pharyngitis'] }
          ],
          associated: [
            { text: 'Dysphagia (tick Dysphagia)', dx: ['Reflux esophagitis', 'Esophageal cancer'] },
            { text: 'Heartburn', dx: ['Reflux esophagitis'] },
            { text: 'Weight loss', dx: ['Esophageal cancer'], see: ['weight-change'] },
            { text: 'Mouth ulcers or white patches in the mouth', dx: ['Candida esophagitis', 'Viral esophagitis'] },
            { text: 'Sore throat, fever', dx: ['Pharyngitis'] }
          ],
          timing: [
            { text: 'Only with solids, getting worse', dx: ['Esophageal cancer', 'Reflux esophagitis'] },
            { text: 'With every swallow, even liquids and saliva', dx: ['Candida esophagitis', 'Viral esophagitis'] }
          ],
          exacerbating: [
            { text: 'Worse with hot, acidic or spicy food', dx: ['Reflux esophagitis'] },
            { text: 'Worse lying down', dx: ['Reflux esophagitis'] }
          ],
          severity: [
            'Unable to swallow saliva (see red flags)'
          ]
        },
        prompts: [
          {
            text: 'Do you have any condition or take any medication that weakens your immune system?',
            options: [{ text: 'HIV, chemotherapy, transplant or corticosteroids', dx: ['Candida esophagitis', 'Viral esophagitis'] }]
          }
        ]
      },
      redflags: [
        'Unable to swallow saliva or drooling: obstruction or deep neck infection',
        'Fever, neck swelling or trismus: deep neck infection',
        'Chest pain after vomiting or instrumentation: esophageal perforation',
        'Weight loss: esophageal cancer'
      ],
      history: {
        pmh: [
          'Any HIV, cancer, transplant or other immunosuppression?',
          'Any GERD?'
        ],
        meds: [
          'Any bisphosphonates, doxycycline, potassium, iron or NSAIDs (pill esophagitis)?',
          'Any inhaled or oral corticosteroids (candida)?',
          'Any recent chemotherapy or radiation therapy (mucositis)?'
        ],
        shx: [
          'Sexual history: any new partners? (HSV, HIV)',
          'Do you smoke? How much alcohol do you drink?'
        ],
        sr: [
          'General: any fever or weight loss?'
        ]
      },
      differentials: [
        { name: 'Reflux esophagitis', clues: 'Heartburn, worse lying down or after meals' },
        { name: 'Pill esophagitis', clues: 'Sudden pain after a tablet taken with little water' },
        { name: 'Candida esophagitis', clues: 'Immunosuppression, inhaled corticosteroids, oral thrush' },
        { name: 'Viral esophagitis (HSV, CMV)', clues: 'Immunosuppression, mouth ulcers' },
        { name: 'Pharyngitis', clues: 'Sore throat, fever, pain high in the throat' },
        { name: 'Caustic or foreign body injury', clues: 'Known ingestion' },
        { name: 'Esophageal cancer', clues: 'Progressive dysphagia, weight loss' }
      ]
    },
    {
      id: 'dyspepsia',
      title: 'Dyspepsia',
      summary: 'Upper abdominal discomfort, burning, fullness or early satiety. Most is functional or reflux-related; the task is to find alarm features that need endoscopy.',
      pc: {
        framework: 'socrates',
        notes: {
          site: [
            { text: 'Behind the breastbone, rising into the throat (heartburn)', dx: ['GERD'] },
            { text: 'Upper abdomen (epigastric)', dx: ['PUD', 'Gastritis'], see: ['abdominal-pain'] }
          ],
          onset: [
            { text: 'After meals, alcohol or NSAIDs', dx: ['Gastritis', 'PUD'] },
            { text: 'New onset at older age', dx: ['Gastric cancer'] }
          ],
          character: [
            { text: 'Burning', dx: ['GERD', 'PUD'] },
            { text: 'Gnawing or hunger-like', dx: ['PUD'] },
            { text: 'Fullness after meals or early satiety', dx: ['Functional dyspepsia', 'Gastric cancer'] },
            { text: 'Pressure or tightness', dx: ['ACS'] }
          ],
          radiation: [
            { text: 'Up into the throat, with a sour taste', dx: ['GERD'] },
            { text: 'Through to the back', dx: ['PUD'], see: ['abdominal-pain'] },
            { text: 'To the arm, neck or jaw', dx: ['ACS'] }
          ],
          associated: [
            { text: 'Hematemesis (tick Hematemesis) or melena', dx: ['PUD'], see: ['fecal-symptoms'] },
            { text: 'Dysphagia (tick Dysphagia)', dx: ['GERD', 'Gastric cancer'] },
            { text: 'Acid or food regurgitation', dx: ['GERD'] },
            { text: 'N/V', dx: ['Gastric outlet obstruction', 'Gastroparesis'], see: ['nausea-vomiting'] },
            { text: 'RUQ pain after fatty meals', dx: ['Biliary colic'], see: ['abdominal-pain'] },
            { text: 'Weight loss', dx: ['Gastric cancer'], see: ['weight-change'] },
            { text: 'Dyspnea or diaphoresis', dx: ['ACS'] }
          ],
          timing: [
            { text: 'Soon after eating (gastric ulcer)', dx: ['PUD'] },
            { text: '2–3 hours after meals and at night (duodenal ulcer)', dx: ['PUD'] },
            { text: 'Episodes over weeks, with symptom-free gaps', dx: ['PUD'] },
            { text: 'Most days for months', dx: ['Functional dyspepsia', 'GERD'] }
          ],
          exacerbating: [
            { text: 'Worse lying down or bending over', dx: ['GERD'] },
            { text: 'Better with food or antacids', dx: ['PUD'] },
            { text: 'Brought on by fatty meals', dx: ['Biliary colic'] },
            { text: 'Brought on by exertion, relieved by rest', dx: ['ACS'] },
            'Have you tried antacids or PPIs? Did they help?'
          ],
          severity: [
            { text: 'Wakes you at night', dx: ['PUD'] },
            { text: 'Sudden, severe, then constant', dx: ['PUD'], see: ['abdominal-pain'] }
          ]
        }
      },
      redflags: [
        'Weight loss, dysphagia, persistent vomiting or onset at older age: upper GI malignancy',
        'Hematemesis, melena or iron deficiency anemia: upper GI bleed',
        'Exertional chest discomfort: ACS'
      ],
      history: {
        pmh: [
          'Any PUD, GERD or H. pylori infection?',
          'Any gallstones?',
          'Any previous endoscopy? When, and what was found?'
        ],
        meds: [
          'Any NSAIDs or aspirin (PUD)?',
          'Any bisphosphonates, iron or potassium (dyspepsia)?',
          'Any calcium channel blockers or nitrates (reflux)?'
        ],
        fhx: [
          'Any family history of gastric cancer?'
        ],
        shx: [
          'Do you smoke? How much alcohol and caffeine do you drink?',
          'Do you eat large meals or eat late at night?'
        ],
        sr: [
          'General: any weight loss or fatigue?',
          'Cardiovascular: any chest discomfort on exertion or dyspnea?'
        ]
      },
      differentials: [
        { name: 'GERD', clues: 'Heartburn, regurgitation, worse lying down or after meals' },
        { name: 'PUD', clues: 'Epigastric pain related to meals, NSAIDs, H. pylori' },
        { name: 'Gastritis', clues: 'Epigastric burning, alcohol or NSAIDs' },
        { name: 'Functional dyspepsia', clues: 'Chronic symptoms, no alarm features, normal endoscopy' },
        { name: 'Gastric cancer', clues: 'Older, weight loss, early satiety, iron deficiency' },
        { name: 'Gastric outlet obstruction', clues: 'Vomiting undigested food, early satiety' },
        { name: 'Gastroparesis', clues: 'DM, nausea, fullness, vomiting after meals' },
        { name: 'Biliary colic', clues: 'RUQ pain after fatty meals' },
        { name: 'ACS', clues: 'Exertional or atypical chest or epigastric discomfort' }
      ]
    }
  ]
});
