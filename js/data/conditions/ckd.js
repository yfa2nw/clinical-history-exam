/*
 * Chronic kidney disease. Staged by cause, GFR category (G1–G5) and albuminuria category
 * (A1–A3). Usually silent until G4–G5, so the review centers on the trend in kidney
 * function, the drivers (BP, DM), complications, and plans for kidney replacement therapy.
 */
CHE.registerCondition({
  id: 'ckd',
  title: 'Chronic kidney disease',
  aka: ['CKD', 'kidney failure', 'renal failure', 'chronic renal failure', 'dialysis', 'hemodialysis', 'peritoneal dialysis', 'kidney transplant', 'eGFR'],
  tags: ['renal'],
  summary: 'Classify by cause, GFR category (G1–G5) and albuminuria category (A1–A3). Follow the trend in eGFR and urine ACR, control of BP and DM, the complications (anemia, bone mineral disease, acidosis, high potassium, fluid overload, cardiovascular disease) and the plan for kidney replacement therapy.',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      when: ['Were you referred to a kidney specialist? When?'],
      cause: [
        {
          text: 'Do you know what caused your kidney disease?',
          options: [
            'DM (diabetic kidney disease)',
            'HTN',
            'GN (e.g. IgA nephropathy)',
            'PKD or another inherited condition',
            'Obstruction, reflux or recurrent infections',
            'Unknown'
          ]
        }
      ],
      stage: [
        'Do you know your stage, or your latest eGFR and urine ACR?',
        'Has anyone told you how fast it is changing?'
      ]
    },
    'risk-factors': {
      family: ['Any family history of kidney disease, PKD or dialysis?'],
      exposures: [
        'Do you take NSAIDs, lithium or herbal remedies?',
        'Any recent scans with contrast dye?',
        'Any episodes of dehydration or AKI?'
      ],
      related: [
        'Any DM? What was your last HbA1c?',
        'Any HTN? What are your usual BP readings?',
        'Any heart disease, stroke or peripheral vascular disease?',
        'Any recurrent UTIs, kidney stones or prostate problems?',
        'Any SLE or vasculitis?'
      ]
    },
    presentation: {
      how: [
        {
          text: 'How was it first found?',
          options: [
            'Routine blood or urine test (screening in DM or HTN)',
            'Symptoms: swelling, frothy urine, fatigue',
            'During an AKI or a hospital admission',
            'Already advanced at diagnosis (late referral)'
          ]
        }
      ]
    },
    investigations: {
      blood: ['Any blood tests for GN (antibodies, complement)?'],
      imaging: ['Did you have a kidney ultrasound? What did it show (size, obstruction, cysts)?'],
      biopsy: ['Did you have a kidney biopsy? What did it show?'],
      monitoring: ['How often are your eGFR and urine ACR checked?'],
      results: [
        'What is the trend in your eGFR and urine ACR?',
        'Have your potassium, bicarbonate, hemoglobin, calcium, phosphate or PTH been abnormal?'
      ],
      home: ['Do you check your BP or weight at home?']
    },
    management: {
      lifestyle: ['Do you limit salt, potassium, phosphate or fluid? How much fluid are you allowed a day?'],
      education: ['Do you check with a pharmacist before starting new medications, and avoid NSAIDs?'],
      allied: ['Have you seen a dietitian?'],
      ongoing: [
        {
          text: 'Are you on dialysis, or have you had a transplant?',
          options: [
            'Not yet needed: has anyone discussed future options?',
            'Hemodialysis: where, how often, through a fistula or a catheter?',
            'Peritoneal dialysis: how many exchanges, any problems with the catheter?',
            'Kidney transplant: when, and from whom? Which immunosuppressants?',
            'Conservative care (no dialysis), by choice'
          ]
        }
      ],
      medications: [
        'Are you on an ACE inhibitor or ARB? An SGLT2 inhibitor?',
        'What is your BP target, and are you reaching it? How well controlled is your DM?',
        'Do you have iron or erythropoietin injections for anemia?',
        'Do you take phosphate binders, vitamin D or calcium?',
        'Do you take sodium bicarbonate, potassium binders or diuretics?',
        'Have your medication doses been adjusted for your kidney function?'
      ],
      sickDay: ['When unwell and unable to keep fluids down, do you know to pause ACE inhibitors or ARBs, SGLT2 inhibitors, diuretics and metformin, and avoid NSAIDs?'],
      missed: ['How many dialysis sessions have you missed or shortened recently?']
    },
    complications: {
      disease: [
        'Have you been told you have anemia?',
        'Any bone pain or fractures (bone mineral disease)?',
        'Any high potassium needing treatment or a hospital visit?',
        'Any fluid overload needing diuretics or a hospital stay?',
        'Any heart attack, stroke or HF?',
        'Any gout?'
      ],
      hospitalizations: [
        'Any clotted or infected fistula or dialysis catheter?',
        'Any peritonitis on peritoneal dialysis?',
        'After a transplant: any rejection episodes, serious infections or skin cancers?',
        'Any AKI episodes or hospital admissions in the past year?'
      ]
    },
    'ongoing-symptoms': {
      trend: [
        {
          text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
          options: [
            'Fatigue',
            'Itch',
            'Nocturia',
            'Ankle swelling',
            'Poor appetite or nausea',
            'Muscle cramps or restless legs',
            'Poor sleep'
          ]
        }
      ]
    },
    'social-impact': {
      ambulating: ['Any bone pain, cramps or weakness limiting walking?'],
      food: ['How do the salt, potassium, phosphate and fluid limits affect your meals?'],
      transport: ['How do you get to dialysis?'],
      work: ['How do dialysis sessions fit around your work or study?'],
      relationships: ['Any sexual difficulties? Are you planning a pregnancy? (higher risk in chronic kidney disease)'],
      mood: ['Any low mood? (depression is common, especially on dialysis)'],
      finances: ['Any costs from travel, treatment or time off work?'],
      planning: ['Have you thought about what you would want if your kidneys fail, including conservative care?']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'Rapid weight gain, worsening swelling or dyspnea lying flat: fluid overload', see: ['swelling'] },
          { text: 'Much less urine than usual: AKI on chronic kidney disease', see: ['urinary-symptoms'] },
          { text: 'New hematuria or frothy urine: a new or active glomerular disease', see: ['urinary-symptoms'] },
          { text: 'Fever, chills, flank pain or dysuria: infection', see: ['urinary-tract-pain'] },
          { text: 'Vomiting, confusion or drowsiness: uremia', see: ['nausea-vomiting', 'memory-thinking'] },
          { text: 'Weakness or palpitations: high potassium', see: ['weakness-numbness'] },
          { text: 'Redness, pain or discharge at a fistula, catheter or exit site: access infection', see: ['skin-changes'] },
          { text: 'Cloudy peritoneal dialysis fluid or abdominal pain: peritonitis', see: ['abdominal-pain'] },
          { text: 'After a transplant: fever, pain over the transplant or less urine: rejection or infection', see: ['urinary-tract-pain'] }
        ]
      }
    ]
  }
});
