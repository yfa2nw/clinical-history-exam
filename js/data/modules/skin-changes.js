/*
 * Skin symptoms: a multi-system complaint. The skin is often a window onto another
 * system, so each feature characterizes the change briefly and hands off via `see`.
 *
 * Awaiting hand-off (answers with no matching presenting complaint yet; add `see`
 * and remove the line when one is added; see CLAUDE.md, "Multi-system complaints"):
 *   - Redness: lip, tongue or throat swelling, difficulty breathing      → dyspnea complaint
 *   - Pallor: dyspnea on exertion or palpitations                        → dyspnea / palpitations complaint
 *   - Cyanosis: dyspnea, cough or wheeze; sudden onset with chest pain    → dyspnea / chest pain complaint
 *   - Cyanosis: orthopnea; leg pain on walking                            → dyspnea / leg pain complaint
 *   - Easy bruising, pruritus: fever                                     → fever complaint
 */
CHE.registerModule({
  id: 'skin-changes',
  title: 'Skin symptoms',
  multiSystem: true,
  aka: ['redness', 'rash', 'pale', 'pallor', 'blue skin', 'cyanosis', 'yellow skin', 'jaundice', 'bruising', 'bleeding', 'itch', 'itching', 'pruritus', 'skin changes', 'changes in skin'],
  tags: ['skin'],
  summary: 'The skin is often a window onto another system. Pin down what the patient has noticed, characterize it briefly, then follow it to its source. Switch on only the features that apply.',
  ref: '',
  related: ['abdominal-pain', 'nausea-vomiting', 'fecal-symptoms', 'urinary-symptoms', 'diarrhea-constipation', 'upper-gi-symptoms', 'swelling', 'fatigue', 'weight-change', 'temperature-sweating', 'appearance-change', 'menstrual-sexual', 'weakness-numbness', 'movement-change', 'memory-thinking'],
  // Shared by all features (rendered as "All features"): the skin SOCRATES. Each feature
  // adds its answers to the rows through `sharedNotes`.
  pc: {
    framework: 'skin'
  },
  parts: [
    {
      id: 'redness',
      title: 'Redness',
      summary: 'Decide whether the redness is localized or widespread, what triggered it, and whether the patient is systemically unwell.',
      sharedNotes: {
        site: [
          { text: 'One area, warm and tender', dx: ['Cellulitis', 'Necrotizing fasciitis'] },
          { text: 'One leg, red, swollen and painful', dx: ['Cellulitis', 'DVT'], see: ['swelling'] },
          { text: 'Where something touched the skin', dx: ['Contact dermatitis'] },
          { text: 'Widespread', dx: ['Allergic reaction', 'Drug reaction'] },
          { text: 'The face', dx: ['SLE', 'Rosacea'] },
          { text: 'Tender red lumps on the shins', dx: ['IBD'] }
        ],
        onset: [
          { text: 'Minutes after a food, drug or sting', dx: ['Allergic reaction'] },
          { text: 'Days to weeks after a new medication', dx: ['Drug reaction'] }
        ],
        character: [
          { text: 'Raised, itchy wheals', dx: ['Allergic reaction'] },
          { text: 'Blistering or peeling', dx: ['Stevens-Johnson syndrome'] }
        ],
        radiation: [
          { text: 'Spreading over hours, with pain out of proportion', dx: ['Necrotizing fasciitis'] },
          { text: 'Spreading from one area, with fever', dx: ['Cellulitis'] }
        ],
        timing: [
          { text: 'Flushing that comes and goes', dx: ['Rosacea'] }
        ],
        exacerbating: [
          { text: 'Worse in sunlight', dx: ['SLE', 'Rosacea'] },
          { text: 'Heat, alcohol or spicy food', dx: ['Rosacea'] },
          { text: 'A new soap, cosmetic or plant contact', dx: ['Contact dermatitis'] },
          { text: 'A new medication, food or sting', dx: ['Allergic reaction', 'Drug reaction'] }
        ],
        severity: [
          { text: 'Fever and feeling unwell', dx: ['Drug reaction', 'Sepsis'] }
        ]
      },
      associated: [
        { text: 'Any blistering, peeling skin, or sores in the mouth or eyes?', dx: ['Stevens-Johnson syndrome'] },
        { text: 'Any joint pain or mouth ulcers?', dx: ['SLE', 'IBD'] },
        { text: 'Any fever or chills?', dx: ['Cellulitis', 'Sepsis'] },
        { text: 'Any swelling of the lips, tongue or throat, or difficulty breathing?', dx: ['Anaphylaxis'] },
        { text: 'Any diarrhea or abdominal pain?', dx: ['IBD'], see: ['diarrhea-constipation', 'abdominal-pain'] }
      ],
      redflags: [
        'Lip, tongue or throat swelling, wheeze or hypotension: anaphylaxis',
        'Blistering, skin peeling or mucosal sores: Stevens-Johnson syndrome',
        'Rapidly spreading redness with pain out of proportion: necrotizing fasciitis',
        'Fever with a widespread rash and feeling unwell: sepsis or severe drug reaction'
      ],
      history: {
        pmh: [
          'Any eczema, psoriasis or known allergies?',
          'Any DM or peripheral vascular disease (cellulitis)?'
        ],
        meds: [
          'Any new medications in the past 8 weeks (drug reaction)?'
        ],
        shx: [
          'Any new soaps, cosmetics, plants or occupational exposures (contact dermatitis)?'
        ],
        sr: [
          'Respiratory: any wheeze or difficulty breathing?',
          'Musculoskeletal & integumentary: any joint pain or mouth ulcers?'
        ]
      },
      differentials: [
        { name: 'Cellulitis', clues: 'Warm, tender, spreading redness in one area, fever' },
        { name: 'Necrotizing fasciitis', clues: 'Rapidly spreading, pain out of proportion, systemically unwell' },
        { name: 'DVT', clues: 'Swollen, painful leg; recent immobility or surgery' },
        { name: 'Contact dermatitis', clues: 'Itchy rash where a substance touched the skin' },
        { name: 'Allergic reaction', clues: 'Widespread itch or hives after a food, drug or sting' },
        { name: 'Anaphylaxis', clues: 'Lip, tongue or throat swelling, wheeze, hypotension' },
        { name: 'Drug reaction', clues: 'Widespread rash days to weeks after a new drug, fever' },
        { name: 'Stevens-Johnson syndrome', clues: 'Blistering, skin peeling and mucosal sores after a new drug' },
        { name: 'Sepsis', clues: 'Fever, widespread rash, systemically unwell' },
        { name: 'SLE', clues: 'Facial rash worse in sunlight, joint pain, mouth ulcers' },
        { name: 'Rosacea', clues: 'Facial flushing and redness, triggered by heat, alcohol or spicy food' },
        { name: 'IBD', clues: 'Tender red nodules on the shins (erythema nodosum) with bowel symptoms' }
      ]
    },
    {
      id: 'pallor',
      title: 'Pallor',
      summary: 'Usually anemia. Find out how fast it developed, and look for a source of blood loss.',
      sharedNotes: {
        onset: [
          { text: 'Suddenly, over hours to days', dx: ['Acute blood loss', 'Hemolysis'] },
          { text: 'Gradually, over weeks to months', dx: ['Iron deficiency anemia', 'Anemia of chronic disease'] },
          { text: 'Over months, with a vegan diet or after weight-loss surgery', dx: ['Iron deficiency anemia', 'B12 or folate deficiency'] }
        ],
        severity: [
          { text: 'Fatigue, dyspnea on exertion or palpitations', see: ['fatigue'] },
          { text: 'Lightheaded, or fainting', dx: ['Acute blood loss'], see: ['dizziness'] }
        ]
      },
      associated: [
        { text: 'Any easy bruising, bleeding or recurrent infections?', dx: ['Bone marrow failure'] },
        { text: 'Any weight loss or night sweats?', dx: ['Malignancy'], see: ['weight-change', 'temperature-sweating'] },
        { text: 'Any hematochezia or melena?', dx: ['GI blood loss'], see: ['fecal-symptoms'] },
        { text: 'Any jaundice or dark urine?', dx: ['Hemolysis'] },
        { text: 'Any heavy periods?', dx: ['Iron deficiency anemia'], see: ['menstrual-sexual'] },
        { text: 'Any hematuria?', see: ['urinary-symptoms'] },
        { text: 'Any numbness, tingling or unsteadiness?', dx: ['B12 or folate deficiency'], see: ['movement-change', 'weakness-numbness'] }
      ],
      redflags: [
        'Pallor with syncope, chest pain or dyspnea at rest: severe anemia or acute blood loss',
        'Pallor with bruising, bleeding or infections: bone marrow failure',
        'Hematemesis, hematochezia or melena: GI bleed'
      ],
      history: {
        pmh: [
          'Any CKD, IBD, celiac disease or known anemia?',
          'Any bleeding disorders?'
        ],
        meds: [
          'Any NSAIDs, aspirin or anticoagulants (blood loss)?',
          'Any metformin or PPIs (B12 deficiency)?',
          'Any methotrexate or anticonvulsants (folate deficiency)?'
        ],
        fhx: [
          'Any family history of anemia, thalassemia or sickle cell disease?'
        ],
        shx: [
          'What is your diet like? How much alcohol do you drink?'
        ],
        sr: [
          'Cardiovascular: any palpitations or dyspnea on exertion?',
          'Gastrointestinal: any hematochezia, melena or change in bowel habit?',
          'Genitourinary & reproductive: are your periods heavy?'
        ]
      },
      differentials: [
        { name: 'Acute blood loss', clues: 'Sudden pallor, lightheadedness, visible bleeding' },
        { name: 'Iron deficiency anemia', clues: 'Gradual, heavy periods, poor diet, GI blood loss' },
        { name: 'GI blood loss', clues: 'Hematochezia, melena, NSAIDs; iron deficiency' },
        { name: 'Anemia of chronic disease', clues: 'CKD, chronic inflammation or infection' },
        { name: 'B12 or folate deficiency', clues: 'Vegan diet, alcohol, metformin; numbness, unsteadiness' },
        { name: 'Hemolysis', clues: 'Rapid onset, jaundice, dark urine' },
        { name: 'Bone marrow failure', clues: 'Pallor with bruising, bleeding and infections' },
        { name: 'Malignancy', clues: 'Weight loss, night sweats' }
      ]
    },
    {
      id: 'cyanosis',
      title: 'Cyanosis',
      summary: 'Separate central cyanosis (lips and tongue; low oxygen saturation) from peripheral cyanosis (fingers and toes only; poor circulation or cold).',
      sharedNotes: {
        site: [
          { text: 'Lips and tongue (central)', dx: ['Respiratory disease', 'Cyanotic heart disease'] },
          { text: 'Fingers and toes only (peripheral)', dx: ['Raynaud phenomenon', 'Peripheral vascular disease'] }
        ],
        onset: [
          { text: 'Suddenly, with dyspnea or chest pain', dx: ['PE', 'Pneumothorax'] },
          { text: 'Present since birth or childhood', dx: ['Cyanotic heart disease'] }
        ],
        exacerbating: [
          { text: 'Cold: fingers turn white, then blue, then red', dx: ['Raynaud phenomenon'] },
          { text: 'Worse with exertion', dx: ['Respiratory disease', 'Cyanotic heart disease'] }
        ]
      },
      associated: [
        { text: 'Any chest pain or calf swelling?', dx: ['PE'] },
        { text: 'Any ankle edema or orthopnea?', dx: ['HF'], see: ['swelling'] },
        { text: 'Any leg pain on walking?', dx: ['Peripheral vascular disease'] },
        { text: 'Any dyspnea, cough or wheeze?', dx: ['Respiratory disease'] },
        { text: 'Any tight skin, or heartburn and dysphagia?', dx: ['Systemic sclerosis'], see: ['upper-gi-symptoms'] }
      ],
      redflags: [
        'Sudden central cyanosis with dyspnea: respiratory failure, PE or pneumothorax',
        'Cyanosis with confusion or drowsiness: hypoxia or hypercapnia',
        'Cold, pale, pulseless limb: acute limb ischemia'
      ],
      history: {
        pmh: [
          'Any COPD, asthma or HF?',
          'Any congenital heart disease?',
          'Any DVT or PE?'
        ],
        meds: [
          'Any beta-blockers (cold peripheries)?'
        ],
        shx: [
          'Do you smoke? (COPD, peripheral vascular disease)',
          'Any exposure to cold or vibrating tools (Raynaud phenomenon)?'
        ],
        sr: [
          'Cardiovascular: any chest pain, ankle edema or leg pain on walking?',
          'Respiratory: any dyspnea, cough or wheeze?'
        ]
      },
      differentials: [
        { name: 'Respiratory disease', clues: 'Central cyanosis with dyspnea; COPD, pneumonia, asthma' },
        { name: 'PE', clues: 'Sudden dyspnea, pleuritic chest pain, calf swelling' },
        { name: 'Pneumothorax', clues: 'Sudden dyspnea and one-sided chest pain' },
        { name: 'HF', clues: 'Orthopnea, ankle edema' },
        { name: 'Cyanotic heart disease', clues: 'Present since birth or childhood' },
        { name: 'Raynaud phenomenon', clues: 'Fingers turn white, blue, then red in the cold' },
        { name: 'Peripheral vascular disease', clues: 'Smoker, leg pain on walking, cold feet' },
        { name: 'Systemic sclerosis', clues: 'Tight skin, Raynaud phenomenon, reflux' }
      ]
    },
    {
      id: 'jaundice',
      title: 'Jaundice',
      summary: 'Classify by mechanism: prehepatic (hemolysis), hepatic (liver disease) or posthepatic (biliary obstruction). Urine and stool color, pain and itch help separate them.',
      sharedNotes: {
        onset: [
          { text: 'After a new medication or herbal remedy, or an acetaminophen overdose', dx: ['Hepatitis'] }
        ],
        character: [
          { text: 'Normal urine and stool color (prehepatic)', dx: ['Hemolysis', 'Gilbert syndrome'] },
          { text: 'Dark urine and pale stool (obstructive)', dx: ['Choledocholithiasis', 'Pancreatic cancer'] },
          { text: 'With RUQ pain and fever', dx: ['Cholangitis'], see: ['abdominal-pain'] },
          { text: 'With a dull RUQ ache and malaise', dx: ['Hepatitis'], see: ['abdominal-pain'] },
          { text: 'Painless, with weight loss', dx: ['Pancreatic cancer'], see: ['weight-change'] }
        ],
        timing: [
          { text: 'Comes and goes with fasting or illness, settling on its own', dx: ['Gilbert syndrome'] }
        ]
      },
      associated: [
        { text: 'Any N/V or anorexia?', dx: ['Hepatitis'], see: ['nausea-vomiting'] },
        { text: 'Any abdominal swelling, hematemesis or confusion?', dx: ['Cirrhosis'], see: ['memory-thinking', 'swelling'] },
        { text: 'Any fever or chills?', dx: ['Cholangitis', 'Hepatitis'] },
        { text: 'Any weight loss?', dx: ['Pancreatic cancer'], see: ['weight-change'] },
        { text: 'Any itch?', dx: ['Choledocholithiasis', 'PBC'] }
      ],
      redflags: [
        'Fever, jaundice and RUQ pain: cholangitis',
        'Painless jaundice with weight loss: pancreatic or biliary cancer',
        'Confusion, bleeding or bruising: acute liver failure',
        'Jaundice after an acetaminophen overdose: acute liver failure'
      ],
      history: {
        pmh: [
          'Any gallstones, liver disease or hepatitis?',
          'Any blood disorders or previous hemolysis?'
        ],
        meds: [
          'Any acetaminophen, especially in large amounts (hepatotoxicity)?',
          'Any new medications or herbal remedies (drug-induced liver injury)?'
        ],
        fhx: [
          'Any family history of liver disease or Gilbert syndrome?'
        ],
        shx: [
          'How much alcohol do you drink?',
          'Any IV drug use, tattoos, transfusions or unprotected sex (viral hepatitis)?',
          'Any recent travel (hepatitis A or E)?'
        ],
        sr: [
          'Gastrointestinal: any abdominal swelling, hematemesis or melena?',
          'Neurologic: any confusion or drowsiness?'
        ]
      },
      differentials: [
        { name: 'Hemolysis', clues: 'Normal urine and stool color, pallor, rapid onset' },
        { name: 'Gilbert syndrome', clues: 'Mild jaundice with fasting or illness, otherwise well' },
        { name: 'Hepatitis', clues: 'Viral, alcohol or drug-induced; malaise, anorexia, RUQ ache' },
        { name: 'Cirrhosis', clues: 'Alcohol or viral hepatitis; ascites, confusion, bleeding' },
        { name: 'Choledocholithiasis', clues: 'RUQ pain, dark urine, pale stool, itch' },
        { name: 'Cholangitis', clues: 'Fever, jaundice, RUQ pain (Charcot triad)' },
        { name: 'Pancreatic cancer', clues: 'Older, painless jaundice, weight loss' },
        { name: 'PBC', clues: 'Middle-aged female, itch, fatigue' }
      ]
    },
    {
      id: 'easy-bruising',
      title: 'Easy bruising',
      summary: 'Decide whether this looks like a platelet problem (petechiae, mucosal bleeding) or a clotting factor problem (deep bruises, joint bleeds), and whether medications explain it.',
      sharedNotes: {
        site: [
          { text: 'Pinpoint spots, often on the legs (petechiae)', dx: ['Thrombocytopenia'] },
          { text: 'Gums or nose', dx: ['von Willebrand disease', 'Thrombocytopenia'] },
          { text: 'Into joints or muscles', dx: ['Hemophilia'] },
          { text: 'Unusual places (back, ears, face) or in a pattern', dx: ['Non-accidental injury'] }
        ],
        onset: [
          { text: 'Lifelong', dx: ['von Willebrand disease', 'Hemophilia'] },
          { text: 'After a recent viral illness', dx: ['ITP'] },
          { text: 'After a new medication (anticoagulants, antiplatelets, SSRIs, corticosteroids)', dx: ['Anticoagulant effect'] }
        ],
        character: [
          { text: 'Pinpoint spots, gum or nose bleeds, heavy periods (platelet type)', dx: ['Thrombocytopenia', 'von Willebrand disease'], see: ['menstrual-sexual'] },
          { text: 'Large deep bruises or bleeding into joints (clotting factor type)', dx: ['Hemophilia', 'Anticoagulant effect'] }
        ],
        exacerbating: [
          { text: 'Bleeding more than expected after minor injuries, dental work or surgery', dx: ['von Willebrand disease', 'Hemophilia'] }
        ]
      },
      associated: [
        { text: 'Any pallor or fatigue?', dx: ['Bone marrow failure'], see: ['fatigue'] },
        { text: 'Any fever, night sweats, weight loss or recurrent infections?', dx: ['Leukemia', 'Bone marrow failure'], see: ['weight-change', 'temperature-sweating'] },
        { text: 'Any jaundice or abdominal swelling?', dx: ['Liver disease'] },
        { text: 'Any hematochezia, melena or hematuria?', dx: ['Anticoagulant effect'], see: ['fecal-symptoms', 'urinary-symptoms'] }
      ],
      redflags: [
        'Bruising with fever, pallor or infections: leukemia or bone marrow failure',
        'Petechiae with fever: meningococcal sepsis',
        'Bleeding on anticoagulants, or after a head injury: significant bleed',
        'Unexplained bruises in a child or vulnerable adult: non-accidental injury'
      ],
      history: {
        pmh: [
          'Any liver disease, CKD or known bleeding disorder?'
        ],
        meds: [
          'Any anticoagulants or antiplatelets (bleeding)?',
          'Any SSRIs or NSAIDs (platelet dysfunction)?',
          'Any corticosteroids (skin fragility)?'
        ],
        fhx: [
          'Any family history of bleeding disorders?'
        ],
        shx: [
          'How much alcohol do you drink?',
          'Do you feel safe at home?'
        ],
        sr: [
          'Gastrointestinal: any hematochezia or melena?',
          'Genitourinary & reproductive: any hematuria or heavy periods?'
        ]
      },
      differentials: [
        { name: 'Anticoagulant effect', clues: 'On warfarin, a DOAC or antiplatelets' },
        { name: 'Thrombocytopenia', clues: 'Petechiae, mucosal bleeding' },
        { name: 'ITP', clues: 'Isolated low platelets, often after a viral illness' },
        { name: 'von Willebrand disease', clues: 'Lifelong mucosal bleeding, heavy periods, family history' },
        { name: 'Hemophilia', clues: 'Male, joint bleeds, family history' },
        { name: 'Liver disease', clues: 'Jaundice, alcohol, abdominal swelling' },
        { name: 'Leukemia', clues: 'Fever, pallor, infections, bruising' },
        { name: 'Bone marrow failure', clues: 'Pallor, bruising, infections' },
        { name: 'Non-accidental injury', clues: 'Unexplained or patterned bruises' }
      ]
    },
    {
      id: 'pruritus',
      title: 'Pruritus',
      summary: 'Ask whether there is a rash. Itch with a rash is usually skin disease; itch without a rash points to a systemic cause.',
      sharedNotes: {
        site: [
          { text: 'Finger webs, wrists or genitals', dx: ['Scabies'] },
          { text: 'Skin creases', dx: ['Eczema'] },
          { text: 'All over, with no rash (systemic cause likely)', dx: ['Cholestasis', 'CKD'] }
        ],
        onset: [
          { text: 'After new soaps, detergents or pets', dx: ['Contact dermatitis'] },
          'After a new medication (opioids, ACE inhibitors): drug-induced itch'
        ],
        character: [
          { text: 'Red, scaly or weeping patches', dx: ['Eczema', 'Contact dermatitis'] },
          { text: 'Raised itchy wheals that come and go', dx: ['Urticaria'] }
        ],
        timing: [
          { text: 'Worse at night', dx: ['Scabies'] },
          { text: 'Each wheal lasts less than 24 hours', dx: ['Urticaria'] }
        ],
        exacerbating: [
          { text: 'After a hot bath or shower', dx: ['Polycythemia vera'] }
        ],
        severity: [
          'Keeping you awake, or breaking the skin from scratching'
        ]
      },
      associated: [
        { text: 'Does anyone you live with have an itch?', dx: ['Scabies'] },
        { text: 'Any weight loss, night sweats or fever?', dx: ['Lymphoma'], see: ['weight-change', 'temperature-sweating'] },
        { text: 'Any fatigue, swelling or reduced urine output?', dx: ['CKD'], see: ['swelling', 'fatigue'] },
        { text: 'Any heavy periods or fatigue?', dx: ['Iron deficiency anemia'], see: ['fatigue', 'menstrual-sexual'] },
        { text: 'Any jaundice, dark urine or pale stool?', dx: ['Cholestasis'] },
        { text: 'Any heat or cold intolerance, or weight change?', dx: ['Thyroid disease'], see: ['weight-change', 'temperature-sweating'] }
      ],
      redflags: [
        'Itch with weight loss, night sweats or fever: lymphoma',
        'Itch with jaundice: cholestasis or biliary obstruction',
        'Widespread itch with no rash at older age: underlying systemic disease'
      ],
      history: {
        pmh: [
          'Any liver disease, CKD, thyroid disease or blood disorders?',
          'Any eczema or allergies?'
        ],
        meds: [
          'Any opioids, ACE inhibitors or new medications (drug-induced itch)?'
        ],
        shx: [
          'Any new soaps, detergents or pets?',
          'Does anyone you live with have an itch?'
        ],
        sr: [
          'General: any weight loss, night sweats or fever?',
          'Endocrine: any heat or cold intolerance?'
        ]
      },
      differentials: [
        { name: 'Eczema', clues: 'Dry, red, scaly patches, often in skin creases; atopy' },
        { name: 'Contact dermatitis', clues: 'Rash where a substance touched the skin' },
        { name: 'Urticaria', clues: 'Raised itchy wheals lasting less than 24 hours each' },
        { name: 'Scabies', clues: 'Worse at night, household contacts itch, finger web burrows' },
        { name: 'Cholestasis', clues: 'No rash, jaundice, dark urine, pale stool' },
        { name: 'CKD', clues: 'No rash, advanced kidney disease, fatigue, edema' },
        { name: 'Lymphoma', clues: 'Night sweats, weight loss, fever, lymphadenopathy' },
        { name: 'Polycythemia vera', clues: 'Itch after hot water, plethora' },
        { name: 'Thyroid disease', clues: 'Heat or cold intolerance, weight change' },
        { name: 'Iron deficiency anemia', clues: 'Fatigue, pallor, heavy periods' }
      ]
    }
  ]
});
