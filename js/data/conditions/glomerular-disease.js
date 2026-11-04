/*
 * Glomerular disease: nephrotic and nephritic presentations, including IgA nephropathy,
 * membranous nephropathy, FSGS, minimal change disease, lupus nephritis and ANCA vasculitis.
 * The review centers on the type and biopsy result, remission vs relapse (proteinuria,
 * hematuria, eGFR), immunosuppression and its side effects, and the clot and infection risk.
 */
CHE.registerCondition({
  id: 'glomerular-disease',
  title: 'Glomerular disease',
  aka: ['glomerulonephritis', 'GN', 'nephrotic syndrome', 'nephritic syndrome', 'IgA nephropathy', 'membranous nephropathy', 'FSGS', 'minimal change disease', 'lupus nephritis', 'ANCA vasculitis', 'proteinuria'],
  tags: ['renal'],
  summary: 'Establish the type (from the biopsy), whether it is nephrotic or nephritic, and whether it is in remission or relapse (urine protein, hematuria, eGFR). Review immunosuppression and its side effects, BP and antiproteinuric treatment, clot and infection risk, and the trend in kidney function.',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      when: ['Were you diagnosed by a kidney specialist? When?'],
      cause: [
        {
          text: 'Do you know which type of glomerular disease you have?',
          options: [
            'IgA nephropathy',
            'Membranous nephropathy',
            'FSGS',
            'Minimal change disease',
            'Lupus nephritis',
            'ANCA vasculitis or anti-GBM disease',
            'Secondary to DM, an infection or a medication'
          ]
        }
      ],
      stage: [
        'Are you in remission now, or partial remission? When was your last relapse?',
        'Do you know your latest eGFR and urine protein or ACR?'
      ],
      understanding: ['Do you know the signs of a relapse, and who to contact?']
    },
    'risk-factors': {
      family: ['Any family history of kidney disease or dialysis?'],
      genetic: ['Have you had any genetic testing? (some FSGS)'],
      substances: ['Do you smoke? (worsens kidney function and vasculitis)'],
      lifestyle: ['How much salt and protein do you eat?'],
      exposures: [
        'Any NSAIDs, lithium or bisphosphonates?',
        'Any recent infections, such as a sore throat or hepatitis B or C?'
      ],
      related: [
        'Any SLE or vasculitis?',
        'Any DM or HTN?',
        'Any cancer? (membranous nephropathy)'
      ]
    },
    presentation: {
      how: [
        {
          text: 'How was it first found?',
          options: [
            'Swelling and frothy urine (nephrotic)',
            'Hematuria, often after a sore throat (IgA nephropathy)',
            'HTN, reduced urine and swelling (nephritic)',
            'A routine urine or blood test',
            'Rapidly falling kidney function, sometimes with a rash, joint pain or hemoptysis'
          ]
        }
      ],
      admitted: ['Were you admitted at diagnosis? Did you need dialysis?']
    },
    investigations: {
      blood: ['Any blood tests for antibodies (ANA, ANCA, anti-GBM, anti-PLA2R), complement, or hepatitis B, C and HIV?'],
      imaging: ['Did you have a kidney ultrasound?'],
      biopsy: ['Did you have a kidney biopsy? What did it show, including scarring?'],
      monitoring: ['How often are your eGFR, urine protein, albumin and drug levels checked?'],
      results: ['What is the trend in your urine protein, hematuria and eGFR? Is your albumin back to normal?'],
      home: ['Do you check your weight, BP or urine with dipsticks at home?']
    },
    management: {
      lifestyle: ['Do you limit salt and fluid? Have you stopped smoking?'],
      education: ['Do you have a plan for what to do if your swelling or frothy urine comes back?'],
      allied: ['Have you seen a dietitian?'],
      medications: [
        'Are you on an ACE inhibitor or ARB, or an SGLT2 inhibitor, to reduce protein loss?',
        'Are you on corticosteroids? What dose, and what is the tapering plan?',
        'Are you on other immunosuppressants (e.g. mycophenolate, tacrolimus, cyclophosphamide, rituximab)?',
        'Are you on diuretics, a statin or anticoagulation?',
        'Are you on bone protection, stomach protection or antibiotics to prevent infection while on corticosteroids?'
      ],
      previous: ['Which treatments have you had before, and did they bring remission?'],
      sideEffects: [
        'On corticosteroids: any weight gain, high BG, mood or sleep changes?',
        'Any infections, low blood counts, hair loss or tremor on other immunosuppressants?'
      ],
      sickDay: ['When unwell and unable to keep fluids down, do you know to pause ACE inhibitors or ARBs, SGLT2 inhibitors and diuretics, and never to stop corticosteroids suddenly?'],
      procedures: ['Have you had plasma exchange, dialysis or a kidney transplant?'],
      missed: ['Do you take your immunosuppressants on time every day, even when well?'],
      followUp: ['Do you have your blood tests done before each clinic visit?']
    },
    complications: {
      disease: [
        'Any blood clots (DVT, PE or renal vein thrombosis)?',
        'Any serious infections, such as cellulitis or peritonitis?',
        'Any high cholesterol or HTN since diagnosis?',
        'Has your kidney function fallen? (chronic kidney disease)'
      ],
      treatment: [
        'Any osteoporosis, cataracts or DM from corticosteroids?',
        'Any cancers (e.g. skin) or fertility problems from immunosuppressants?'
      ],
      admissions: ['Any admissions for relapse, infection or clots in the past year?']
    },
    'ongoing-symptoms': {
      current: [
        {
          text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
          options: [
            'No symptoms in remission',
            'Mild ankle swelling, controlled on diuretics',
            'Mild frothy urine',
            'Fatigue'
          ]
        }
      ],
      flares: ['How many relapses have you had? What triggered them (infection, tapering corticosteroids)?']
    },
    'social-impact': {
      food: ['How do the salt and fluid limits affect your meals?'],
      work: ['How much work or study have you missed for relapses, infusions or appointments?'],
      relationships: [
        'Has corticosteroid weight gain affected your body image?',
        'Are you planning a pregnancy? (some medications, such as mycophenolate and cyclophosphamide, must be stopped first)'
      ],
      mood: ['Any low mood, anxiety or irritability, especially on corticosteroids?'],
      finances: ['Any costs from medications, infusions or time off work?']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'Swelling or frothy urine coming back: relapse', see: ['swelling', 'urinary-symptoms'] },
          { text: 'Much less urine than usual, or new gross hematuria: rapidly progressive GN or AKI', see: ['urinary-symptoms'] },
          { text: 'Rapid weight gain, worsening swelling or dyspnea lying flat: fluid overload', see: ['swelling'] },
          { text: 'A swollen, painful calf, sudden dyspnea or flank pain: DVT, PE or renal vein thrombosis', see: ['swelling', 'urinary-tract-pain'] },
          { text: 'Fever on immunosuppressants, or a hot, red area of skin: serious infection or cellulitis', see: ['skin-changes'] },
          { text: 'Abdominal pain with swelling: peritonitis', see: ['abdominal-pain'] },
          { text: 'A new rash, joint pain or hemoptysis: active SLE or vasculitis', see: ['skin-changes'] }
        ]
      }
    ]
  }
});
