CHE.registerModule({
  id: 'fecal-symptoms',
  title: 'Fecal symptoms',
  aka: ['blood in stool', 'bloody stool', 'rectal bleeding', 'black stool', 'hematochezia', 'melena', 'tenesmus'],
  tags: ['gastrointestinal'],
  summary: 'Pin down exactly what the patient has noticed, then explore each feature. Switch on only the ones that apply.',
  ref: '',
  related: ['diarrhea-constipation', 'upper-gi-symptoms', 'abdominal-pain', 'skin-changes', 'swelling', 'weakness-numbness', 'incontinence', 'dizziness'],
  parts: [
    {
      id: 'hematochezia',
      title: 'Hematochezia',
      summary: 'Bright red or maroon blood per rectum. Where the blood sits relative to the stool helps localize the source; a brisk upper GI bleed can also present this way.',
      pc: {
        framework: 'bleeding',
        notes: {
          confirm: [
            'Red stool after beets or red food coloring',
            'Black and tarry instead (tick Melena)',
            'Menstrual or urinary blood mistaken for rectal blood'
          ],
          color: [
            { text: 'Bright red', dx: ['Hemorrhoids', 'Anal fissure'] },
            { text: 'Dark red or maroon', dx: ['Diverticular bleeding', 'CRC'] },
            { text: 'Large-volume maroon, with lightheadedness', dx: ['Brisk upper GI bleed'] }
          ],
          amount: [
            'Streaks on the toilet paper',
            { text: 'Dripping into the bowl', dx: ['Hemorrhoids'] },
            { text: 'A cupful or more, or clots', dx: ['Diverticular bleeding', 'Angiodysplasia'] }
          ],
          timing: [
            { text: 'On the paper or dripping after the stool', dx: ['Hemorrhoids', 'Anal fissure'] },
            { text: 'Mixed in with the stool', dx: ['CRC', 'IBD'] },
            { text: 'With diarrhea and mucus', dx: ['IBD', 'Infective colitis'], see: ['diarrhea-constipation'] }
          ],
          pattern: [
            { text: 'Recurrent painless episodes', dx: ['Hemorrhoids', 'Angiodysplasia'] },
            { text: 'Recent, with a change in bowel habit', dx: ['CRC'] }
          ],
          pain: [
            { text: 'Sharp, tearing pain on passing stool', dx: ['Anal fissure'] },
            { text: 'Painless', dx: ['Hemorrhoids', 'Diverticular bleeding'] },
            { text: 'Abdominal pain before the bleeding', dx: ['Ischemic colitis', 'IBD'], see: ['abdominal-pain'] }
          ],
          trigger: [
            { text: 'Straining or constipation', dx: ['Hemorrhoids', 'Anal fissure'], see: ['diarrhea-constipation'] },
            { text: 'On anticoagulants or NSAIDs, or with bruising or bleeding elsewhere', dx: ['Bleeding disorder'], see: ['skin-changes'] },
            'Receptive anal intercourse (proctitis, STI)'
          ],
          impact: [
            'Lightheadedness or syncope (significant blood loss)',
            { text: 'Fatigue or dyspnea (iron deficiency anemia)', dx: ['CRC', 'Angiodysplasia'], see: ['fatigue'] }
          ]
        }
      },
      associated: [
        { text: 'Any change in bowel habit?', dx: ['CRC'] },
        { text: 'Any lump or itch around the anus?', dx: ['Hemorrhoids'] },
        { text: 'Any weight loss or fatigue?', dx: ['CRC'], see: ['weight-change', 'fatigue'] }
      ],
      redflags: [
        'Lightheadedness, syncope, tachycardia: significant blood loss',
        'Large-volume maroon blood with hemodynamic instability: brisk upper GI bleed',
        'Older age, change in bowel habit or weight loss: CRC',
        'Iron deficiency anemia: CRC'
      ],
      history: {
        pmh: [
          'Any hemorrhoids, diverticular disease or IBD?',
          'Any previous colonoscopy? When, and what was found?',
          'Any bleeding disorders?',
          'Any pelvic radiation therapy (radiation proctitis)?'
        ],
        meds: [
          'Any anticoagulants or antiplatelets (bleeding)?',
          'Any NSAIDs (GI bleeding)?'
        ],
        fhx: [
          'Any family history of CRC, polyps or IBD?'
        ],
        shx: [
          'Sexual history: any receptive anal intercourse? (proctitis, STI)',
          'How much fiber and fluid do you have a day?'
        ],
        sr: [
          'General: any weight loss or night sweats?',
          'Cardiovascular: any lightheadedness or palpitations?'
        ]
      },
      differentials: [
        { name: 'Hemorrhoids', clues: 'Painless bright red blood on the paper or dripping, itch or lump' },
        { name: 'Anal fissure', clues: 'Sharp pain on defecation, streak of bright red blood' },
        { name: 'CRC', clues: 'Older, blood mixed with stool, change in bowel habit, weight loss' },
        { name: 'Diverticular bleeding', clues: 'Older, painless, sudden large-volume dark red blood' },
        { name: 'IBD', clues: 'Bloody diarrhea with mucus, urgency, tenesmus' },
        { name: 'Infective colitis', clues: 'Acute bloody diarrhea, fever, food or travel exposure' },
        { name: 'Ischemic colitis', clues: 'Older, vascular risk factors, sudden abdominal pain then bloody stool' },
        { name: 'Angiodysplasia', clues: 'Older, painless recurrent bleeding, iron deficiency' },
        { name: 'Brisk upper GI bleed', clues: 'Large-volume maroon blood with hemodynamic instability' },
        { name: 'Bleeding disorder or anticoagulant', clues: 'Anticoagulants or antiplatelets, bruising or bleeding elsewhere' }
      ]
    },
    {
      id: 'melena',
      title: 'Melena',
      summary: 'Black, tarry, sticky, foul-smelling stool usually means an upper GI source. Confirm it is melena and not black stool from iron or bismuth.',
      pc: {
        framework: 'bleeding',
        notes: {
          confirm: [
            { text: 'Black, tarry, sticky and foul-smelling (true melena)', dx: ['PUD', 'Variceal bleeding'] },
            'Black but formed, while taking iron or bismuth (not melena)'
          ],
          color: [
            'Jet black and tarry (upper GI source most likely)',
            'Dark red or maroon instead (tick Hematochezia)'
          ],
          amount: [
            'One small stool',
            { text: 'Repeated large tarry stools', dx: ['Variceal bleeding', 'PUD'] }
          ],
          timing: [
            { text: 'After vomiting blood or coffee grounds', dx: ['PUD', 'Variceal bleeding'], see: ['upper-gi-symptoms', 'nausea-vomiting'] },
            { text: 'After forceful retching', dx: ['Mallory-Weiss tear'] }
          ],
          pattern: [
            'First episode',
            { text: 'Previous GI bleeding or known varices', dx: ['Variceal bleeding', 'PUD'] }
          ],
          pain: [
            { text: 'Epigastric pain, worse or better with food', dx: ['PUD'], see: ['upper-gi-symptoms'] },
            { text: 'Heartburn or pain on swallowing', dx: ['Esophagitis'] },
            { text: 'Painless', dx: ['Variceal bleeding'] }
          ],
          trigger: [
            { text: 'NSAIDs, aspirin, SSRIs or corticosteroids', dx: ['PUD'] },
            { text: 'Heavy alcohol use or known liver disease', dx: ['Variceal bleeding'] },
            { text: 'On anticoagulants, or with bruising or bleeding elsewhere', dx: ['Bleeding disorder'], see: ['skin-changes'] }
          ],
          impact: [
            'Lightheadedness, syncope or dyspnea (significant blood loss)',
            'Fatigue (anemia)'
          ]
        }
      },
      associated: [
        { text: 'Any dysphagia or heartburn?', dx: ['Esophagitis', 'Esophageal cancer'], see: ['upper-gi-symptoms'] },
        { text: 'Any early satiety or weight loss?', dx: ['Gastric cancer'], see: ['weight-change'] },
        { text: 'Any jaundice, abdominal swelling or easy bruising?', dx: ['Variceal bleeding'], see: ['skin-changes', 'swelling'] }
      ],
      redflags: [
        'Melena or hematemesis with lightheadedness, syncope or tachycardia: significant upper GI bleed',
        'Known liver disease or heavy alcohol use: variceal bleeding',
        'Weight loss, early satiety or dysphagia: upper GI malignancy'
      ],
      history: {
        pmh: [
          'Any PUD or previous GI bleeding?',
          'Any liver disease or cirrhosis?',
          'Any H. pylori infection?',
          'Any previous endoscopy? When, and what was found?'
        ],
        meds: [
          'Any NSAIDs or aspirin (PUD)?',
          'Any anticoagulants or antiplatelets (bleeding)?',
          'Any SSRIs or corticosteroids (GI bleeding with NSAIDs)?',
          'Any iron or bismuth (black stool)?'
        ],
        fhx: [
          'Any family history of gastric cancer?'
        ],
        shx: [
          'How much alcohol do you drink? (varices, gastritis)',
          'Do you smoke? (PUD)'
        ],
        sr: [
          'Cardiovascular: any lightheadedness, palpitations or dyspnea?',
          'Gastrointestinal: any jaundice or abdominal swelling?'
        ]
      },
      differentials: [
        { name: 'PUD', clues: 'Epigastric pain, NSAID use, H. pylori' },
        { name: 'Variceal bleeding', clues: 'Liver disease, alcohol, large-volume hematemesis' },
        { name: 'Mallory-Weiss tear', clues: 'Hematemesis after forceful vomiting or retching' },
        { name: 'Esophagitis', clues: 'Heartburn, pain on swallowing' },
        { name: 'Gastric cancer', clues: 'Older, weight loss, early satiety' },
        { name: 'Esophageal cancer', clues: 'Progressive dysphagia, weight loss' },
        { name: 'Bleeding disorder or anticoagulant', clues: 'Anticoagulants or antiplatelets, bruising or bleeding elsewhere' }
      ]
    },
    {
      id: 'tenesmus',
      title: 'Tenesmus',
      summary: 'A persistent feeling of needing to pass stool despite an empty rectum. It points to rectal inflammation or a rectal mass.',
      pc: {
        prompts: [
          'Do you feel you need to open your bowels even when there is nothing to pass?',
          'How often do you go, and how much do you pass each time?',
          'Is there rectal pain when you strain?',
          {
            text: 'How long has it been going on?',
            options: [
              { text: 'Days, with diarrhea', dx: ['Infective proctitis', 'IBD'] },
              { text: 'Weeks to months, getting worse', dx: ['Rectal cancer'] }
            ]
          }
        ]
      },
      associated: [
        { text: 'Any hematochezia or mucus?', dx: ['IBD', 'Rectal cancer'] },
        { text: 'Any diarrhea?', dx: ['IBD', 'Infective proctitis'], see: ['diarrhea-constipation'] },
        { text: 'Any narrowing of the stool?', dx: ['Rectal cancer'] },
        { text: 'Any anal discharge or ulcers?', dx: ['Infective proctitis'] },
        { text: 'Any fever with throbbing perianal pain or swelling?', dx: ['Perianal abscess'] },
        { text: 'Any weight loss or fatigue?', dx: ['Rectal cancer'], see: ['weight-change', 'fatigue'] },
        { text: 'Any pelvic radiation therapy in the past?', dx: ['Radiation proctitis'] }
      ],
      redflags: [
        'Progressive tenesmus with weight loss or narrowing of the stool: rectal cancer',
        'Fever with perianal pain: perianal abscess',
        'Bloody diarrhea with fever and tachycardia: severe colitis'
      ],
      history: {
        pmh: [
          'Any IBD?',
          'Any pelvic radiation therapy (radiation proctitis)?',
          'Any previous STIs?'
        ],
        meds: [
          'Any recent antibiotics (C. difficile)?'
        ],
        fhx: [
          'Any family history of CRC or IBD?'
        ],
        shx: [
          'Sexual history: any receptive anal intercourse? Any partner symptoms? (infective proctitis)'
        ],
        sr: [
          'Musculoskeletal & integumentary: any joint pain, rash or mouth ulcers?'
        ]
      },
      differentials: [
        { name: 'IBD', clues: 'Bloody diarrhea, mucus, urgency, joint, skin or eye involvement' },
        { name: 'Infective proctitis', clues: 'Receptive anal intercourse, discharge, ulcers (gonorrhea, chlamydia, HSV)' },
        { name: 'Rectal cancer', clues: 'Older, progressive, hematochezia, narrow stool, weight loss' },
        { name: 'Radiation proctitis', clues: 'Previous pelvic radiation therapy' },
        { name: 'Perianal abscess', clues: 'Throbbing perianal pain, fever, swelling' }
      ]
    }
  ]
});
