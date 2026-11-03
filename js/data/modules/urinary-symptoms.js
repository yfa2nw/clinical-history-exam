/*
 * One presenting complaint made of several features (parts). Each part has the
 * same shape as a module's own content (pc, associated, redflags, history,
 * differentials) and can be toggled on or off in the card.
 */
CHE.registerModule({
  id: 'urinary-symptoms',
  title: 'Urinary symptoms',
  aka: ['blood in urine', 'hematuria', 'frothy urine', 'foamy urine', 'proteinuria', 'painful urination', 'dysuria', 'frequency', 'urgency', 'nocturia', 'LUTS'],
  tags: ['renal'],
  summary: 'Pin down exactly what the patient has noticed, then explore each feature. Most patients have more than one, so switch on only the ones that apply.',
  ref: '',
  related: ['urinary-tract-pain', 'skin-changes', 'swelling', 'senses-change', 'weakness-numbness', 'movement-change', 'incontinence', 'nausea-vomiting', 'abdominal-pain'],
  parts: [
    {
      id: 'hematuria',
      title: 'Hematuria',
      summary: 'Confirm it is blood, then localize it with timing in the stream and whether it is painful. Painless gross hematuria needs malignancy excluded.',
      pc: {
        framework: 'bleeding',
        notes: {
          confirm: [
            'Visible in the urine (gross hematuria), or found on a urine test only (microscopic hematuria)',
            'Menses, beets or rifampin (red urine without RBCs)',
            { text: 'Dark urine after muscle injury or heavy exertion', dx: ['Rhabdomyolysis'] }
          ],
          color: [
            { text: 'Cola-colored, no clots (glomerular)', dx: ['Post-streptococcal GN', 'IgA nephropathy'] },
            { text: 'Red, with clots (non-glomerular)', dx: ['Urothelial cancer', 'Prostatic bleeding'] }
          ],
          amount: [
            'Pink tinge only',
            { text: 'Heavy, with clots or difficulty voiding', dx: ['Urothelial cancer', 'Prostatic bleeding'] }
          ],
          timing: [
            'At the start of the stream: urethral source',
            'At the end of the stream: bladder neck or prostate source',
            'Throughout the stream: bladder or upper tract source'
          ],
          pattern: [
            'First episode',
            { text: 'Recurrent episodes', dx: ['IgA nephropathy', 'Urolithiasis'] }
          ],
          pain: [
            { text: 'Painless', dx: ['Urothelial cancer', 'RCC'] },
            { text: 'With colicky flank pain', dx: ['Urolithiasis'], see: ['urinary-tract-pain'] },
            { text: 'With dysuria (tick Dysuria)', dx: ['UTI'] }
          ],
          trigger: [
            { text: '1–2 days after a sore throat or URTI', dx: ['IgA nephropathy'] },
            { text: '1–3 weeks after a sore throat', dx: ['Post-streptococcal GN'] },
            { text: 'After strenuous exercise', dx: ['Rhabdomyolysis'] },
            { text: 'On anticoagulants, or with bruising or bleeding elsewhere (still investigate)', dx: ['Bleeding disorder'], see: ['skin-changes'] }
          ],
          impact: [
            'Lightheadedness or syncope (significant blood loss)',
            'Fatigue or dyspnea (anemia)',
            'Unable to void (clot retention)'
          ]
        }
      },
      associated: [
        { text: 'Any frothy urine, edema or reduced urine output? (tick Frothy urine)', dx: ['Post-streptococcal GN', 'IgA nephropathy'], see: ['swelling'] },
        { text: 'Any dysuria or frequency?', dx: ['UTI'] },
        { text: 'Any hesitancy, weak stream, straining, terminal dribbling or incomplete emptying?', dx: ['Prostatic bleeding'] },
        { text: 'Any dull flank pain or a mass?', dx: ['RCC', 'PKD'] },
        { text: 'Any weight loss or fatigue?', dx: ['Urothelial cancer', 'RCC'], see: ['weight-change', 'fatigue'] },
        { text: 'Any hearing loss?', dx: ['Alport syndrome'], see: ['senses-change'] },
        { text: 'Any hemoptysis?', dx: ['Anti-GBM disease', 'ANCA vasculitis'] },
        { text: 'Any rash or joint pain?', dx: ['IgA vasculitis', 'SLE'], see: ['skin-changes'] }
      ],
      redflags: [
        'Painless gross hematuria, especially in older patients or smokers: urothelial cancer',
        'Clots with inability to void: clot retention',
        'Edema, HTN, oliguria: nephritic syndrome',
        'Hemoptysis with hematuria: pulmonary-renal syndrome',
        'Symptomatic anemia or hemodynamic instability: significant blood loss'
      ],
      history: {
        pmh: [
          'Any kidney stones or UTIs?',
          'Any known kidney disease?',
          'Any bleeding disorders?',
          'Any prostate problems, pelvic surgery or pelvic radiation therapy?'
        ],
        meds: [
          'Any anticoagulants or antiplatelets (hematuria on these still needs investigation)?',
          'Any cyclophosphamide (hemorrhagic cystitis)?',
          'Any rifampin (red-orange urine)?',
          'Any NSAIDs (papillary necrosis)?'
        ],
        fhx: [
          'Any family history of PKD, Alport syndrome (with deafness), urologic cancer or sickle cell disease?'
        ],
        shx: [
          'Do you smoke? (bladder cancer)',
          'Have you worked with dyes, rubber or leather (aromatic amines)?',
          'Any travel to areas where schistosomiasis is endemic?',
          'Any strenuous exercise recently?'
        ],
        sr: [
          'General: any weight loss or night sweats?',
          'Respiratory: any hemoptysis?',
          'Musculoskeletal & integumentary: any rash or joint pain?'
        ]
      },
      differentials: [
        { name: 'Urothelial cancer', clues: 'Painless gross hematuria, smoker, older' },
        { name: 'RCC', clues: 'Hematuria, flank pain, mass' },
        { name: 'Urolithiasis', clues: 'Colicky flank pain with hematuria' },
        { name: 'UTI', clues: 'Dysuria, frequency' },
        { name: 'IgA nephropathy', clues: 'Gross hematuria 1–2 days after a URTI' },
        { name: 'Post-streptococcal GN', clues: 'Cola-colored urine 1–3 weeks after a sore throat, edema, HTN' },
        { name: 'Prostatic bleeding (BPH, prostate cancer)', clues: 'Older male, voiding symptoms' },
        { name: 'PKD', clues: 'Family history, HTN, flank pain' },
        { name: 'Rhabdomyolysis', clues: 'Dark urine after muscle injury; dipstick positive for blood but no RBCs' },
        { name: 'Bleeding disorder or anticoagulant', clues: 'Anticoagulants or antiplatelets, bruising or bleeding elsewhere' },
        { name: 'Alport syndrome', clues: 'Hematuria with hearing loss; family history' },
        { name: 'Anti-GBM disease', clues: 'Hematuria with hemoptysis' },
        { name: 'ANCA vasculitis', clues: 'Hematuria with hemoptysis, sinus symptoms or rash' },
        { name: 'IgA vasculitis', clues: 'Purpuric rash on the legs, joint and abdominal pain; often a child' },
        { name: 'SLE', clues: 'Rash, joint pain, mouth ulcers, young female' }
      ]
    },
    {
      id: 'frothy-urine',
      title: 'Frothy urine',
      summary: 'Frothy urine that persists suggests proteinuria, which is often found only on a dipstick. Decide whether it is transient or persistent, then look for nephrotic or nephritic features and the systemic diseases that damage the kidneys.',
      pc: {
        prompts: [
          {
            text: 'Did you notice frothy urine, or was protein found on a urine test?',
            options: ['Frothy urine that persists after flushing', 'Found on a dipstick or lab test only']
          },
          {
            text: 'Does the froth settle quickly, or persist?',
            options: ['Settles within seconds (usually not protein)', 'Persists for minutes (proteinuria likely)']
          },
          { text: 'Is it only after exercise, fever or illness?', dx: ['Transient proteinuria'] },
          { text: 'Is it only during the day, after standing, in a young person?', dx: ['Orthostatic proteinuria'] },
          { text: 'Have you noticed swelling around the eyes or in the legs?', dx: ['Nephrotic syndrome'], see: ['swelling'] },
          'When was it first noticed? Any previous urine or kidney tests?'
        ]
      },
      associated: [
        { text: 'Any hematuria? (tick Hematuria)', dx: ['Nephritic syndrome'] },
        { text: 'Any reduced urine output?', dx: ['Nephritic syndrome', 'AKI or CKD'] },
        { text: 'Could you be pregnant? Any headache or vision change?', dx: ['Preeclampsia'], see: ['headache', 'senses-change'] },
        { text: 'Any fatigue, weight loss or bone pain?', dx: ['Multiple myeloma'], see: ['weight-change', 'fatigue'] },
        { text: 'Any thirst or polyuria, or known DM?', dx: ['Diabetic nephropathy'], see: ['polyuria-polydipsia'] },
        { text: 'Any headaches, or known HTN?', dx: ['Hypertensive nephropathy'], see: ['headache'] },
        { text: 'Any rash, joint pain or mouth ulcers?', dx: ['SLE', 'Vasculitis'], see: ['skin-changes'] }
      ],
      redflags: [
        'Swelling, frothy urine and weight gain: nephrotic syndrome',
        'Hematuria, HTN and reduced urine output: nephritic syndrome or rapidly progressive GN',
        'Bone pain, anemia or hypercalcemia: multiple myeloma',
        'Pregnancy over 20 weeks with HTN: preeclampsia',
        'Swollen, painful leg in nephrotic syndrome: DVT (hypercoagulable state)'
      ],
      history: {
        pmh: [
          'Any DM or HTN? How well controlled?',
          'Any known kidney disease or previous abnormal urine tests?',
          'Any SLE, vasculitis, HIV, or hepatitis B or C?',
          'Any cancer, including myeloma or lymphoma?'
        ],
        meds: [
          'Any NSAIDs or lithium (kidney injury)?',
          'Any ACE inhibitors or ARBs (already treating proteinuria)?'
        ],
        fhx: [
          'Any family history of kidney disease, PKD or Alport syndrome?'
        ],
        shx: [
          'Any IV drug use or unprotected sex (HIV, hepatitis B or C)?',
          'How much exercise do you do? (transient proteinuria)'
        ],
        sr: [
          'General: any fatigue or weight loss?',
          'Cardiovascular: any leg swelling or dyspnea?',
          'Musculoskeletal & integumentary: any rash, joint pain or bone pain?'
        ]
      },
      differentials: [
        { name: 'Nephrotic syndrome', clues: 'Heavy proteinuria, swelling around the eyes and legs, frothy urine' },
        { name: 'Nephritic syndrome', clues: 'Hematuria, HTN, reduced urine output, swelling' },
        { name: 'Diabetic nephropathy', clues: 'Long-standing DM, often with retinopathy' },
        { name: 'Hypertensive nephropathy', clues: 'Long-standing HTN' },
        { name: 'AKI or CKD', clues: 'Reduced urine output, fatigue, known kidney disease' },
        { name: 'SLE', clues: 'Rash, joint pain, mouth ulcers, young female' },
        { name: 'Vasculitis', clues: 'Rash, joint pain, hemoptysis, sinus symptoms' },
        { name: 'Multiple myeloma', clues: 'Older, bone pain, anemia, hypercalcemia, recurrent infections' },
        { name: 'Preeclampsia', clues: 'Pregnancy over 20 weeks, HTN, headache, vision change' },
        { name: 'Transient proteinuria', clues: 'After exercise, fever or illness; clears on repeat testing' },
        { name: 'Orthostatic proteinuria', clues: 'Young, only when upright; benign' }
      ]
    },
    {
      id: 'dysuria',
      title: 'Dysuria',
      summary: 'Usually infective. Ask questions that place it in the urethra or genitals, lower tract or upper tract, and that identify a complicated UTI.',
      pc: {
        framework: 'socrates',
        notes: {
          site: [
            { text: 'Urethral', dx: ['Urethritis (STI)'] },
            { text: 'Suprapubic', dx: ['Cystitis'] },
            { text: 'Perineal or rectal', dx: ['Prostatitis'] }
          ],
          onset: [
            { text: 'Sudden', dx: ['Cystitis', 'Urethritis (STI)'] },
            { text: 'After intercourse or a new sexual partner', dx: ['Urethritis (STI)', 'Cystitis'] }
          ],
          character: [
            'Burning or stinging',
            { text: 'At the start of voiding', dx: ['Urethritis (STI)'] },
            { text: 'At the end of voiding, or a painful urge to keep voiding (strangury)', dx: ['Cystitis', 'Bladder stone'] }
          ],
          radiation: [
            { text: 'To the flank', dx: ['Pyelonephritis'] },
            { text: 'To the perineum or tip of the penis', dx: ['Prostatitis', 'Bladder stone'] }
          ],
          associated: [
            { text: 'Hematuria', dx: ['Cystitis', 'Bladder tumor'] },
            { text: 'Frequency, urgency', dx: ['Cystitis'] },
            { text: 'Cloudy or foul-smelling urine', dx: ['Cystitis'] },
            { text: 'Flank pain', dx: ['Pyelonephritis'], see: ['urinary-tract-pain'] },
            { text: 'Urethral discharge', dx: ['Urethritis (STI)'] },
            { text: 'Vaginal discharge or itch', dx: ['Vulvovaginitis', 'Urethritis (STI)'] },
            { text: 'Genital ulcers', dx: ['Genital herpes', 'Syphilis'] },
            { text: 'Fever, chills', dx: ['Pyelonephritis', 'Prostatitis'] },
            { text: 'Joint pain, red eyes', dx: ['Reactive arthritis'] }
          ],
          timing: [
            'First episode',
            'Recurrent (≥2 in 6 months or ≥3 in 12 months)',
            { text: 'Long-standing, with repeatedly negative cultures', dx: ['Bladder pain syndrome'] }
          ],
          exacerbating: ['Worse while voiding'],
          severity: []
        }
      },
      redflags: [
        'Fever, chills or flank pain: pyelonephritis or urosepsis',
        'Male: complicated UTI; consider prostatitis',
        'Pregnancy: complicated UTI',
        'Immunosuppression, catheter or recent instrumentation: complicated UTI',
        'Hematuria persisting after treatment: bladder cancer'
      ],
      history: {
        pmh: [
          'Any previous UTIs? How often, which organisms, and how did they respond to treatment?',
          'Any kidney stones or urinary tract abnormalities?',
          'Any DM or immunosuppression?',
          'Any prostate problems? Postmenopausal?',
          'Any previous STIs?'
        ],
        meds: [
          'Any recent antibiotics (resistance)?',
          'Any SGLT2 inhibitors (GU infections)?',
          'Any cyclophosphamide (hemorrhagic cystitis)?',
          'Any spermicide or diaphragm use (UTI)?'
        ],
        shx: [
          'Sexual history: how many partners, any new partner, condom use, any partner symptoms?',
          'How much fluid do you drink a day?'
        ],
        sr: [
          'Genitourinary & reproductive: any vaginal discharge? LMP? Could you be pregnant?',
          'Genitourinary & reproductive: any hesitancy, weak stream, straining, terminal dribbling or incomplete emptying?'
        ]
      },
      differentials: [
        { name: 'Cystitis (lower UTI)', clues: 'Suprapubic pain, frequency, urgency, no fever' },
        { name: 'Pyelonephritis', clues: 'Fever, chills, flank pain, systemically unwell' },
        { name: 'Urethritis (STI)', clues: 'Urethral discharge, new partner, pain at the start of voiding' },
        { name: 'Prostatitis', clues: 'Perineal pain, fever, voiding symptoms' },
        { name: 'Vulvovaginitis', clues: 'Vaginal discharge or itch; external dysuria' },
        { name: 'Bladder pain syndrome', clues: 'Chronic pain on bladder filling, repeatedly negative cultures' },
        { name: 'Bladder stone', clues: 'Pain at the end of voiding or at the tip of the penis, hematuria' },
        { name: 'Bladder tumor', clues: 'Hematuria with persistent irritative symptoms; smoker, older' },
        { name: 'Genital herpes', clues: 'Painful genital ulcers, external dysuria' },
        { name: 'Syphilis', clues: 'Painless genital ulcer; later a rash' },
        { name: 'Reactive arthritis', clues: 'Joint pain and red eyes after urethritis or a gut infection' }
      ]
    },
    {
      id: 'frequency-urgency',
      title: 'Frequency and urgency',
      summary: 'Walk through the IPSS items to separate storage symptoms (frequency, urgency, nocturia) from voiding symptoms (incomplete emptying, intermittency, weak stream, straining). Then separate frequency (small volumes, often) from polyuria (a large total volume), and ask directly about incontinence.',
      pc: {
        framework: 'ipss',
        notes: {
          incomplete: [
            { text: 'Often', dx: ['BPH', 'Neurogenic bladder'] }
          ],
          frequency: [
            { text: 'Small volumes each time', dx: ['OAB', 'UTI'] },
            { text: 'Large volumes each time (polyuria)', dx: ['DM', 'DI'], see: ['polyuria-polydipsia'] }
          ],
          intermittency: [
            { text: 'Often', dx: ['BPH'] }
          ],
          urgency: [
            { text: 'With leakage before reaching the toilet (urge incontinence)', dx: ['OAB'], see: ['incontinence'] },
            { text: 'Triggered by running water or arriving home', dx: ['OAB'] },
            { text: 'Sudden onset, with dysuria (tick Dysuria)', dx: ['UTI'] }
          ],
          weakStream: [
            { text: 'Gradually weaker over years', dx: ['BPH'] },
            { text: 'After instrumentation, a catheter or an STI', dx: ['Urethral stricture'] }
          ],
          straining: [
            { text: 'Often', dx: ['BPH', 'Urethral stricture'] }
          ],
          nocturia: [
            { text: 'With ankle swelling or orthopnea', dx: ['HF'], see: ['swelling'] },
            { text: 'With large volumes and thirst', dx: ['DM', 'DI'], see: ['polyuria-polydipsia'] },
            { text: 'With evening fluids, caffeine or alcohol', dx: ['High fluid or caffeine intake'] }
          ]
        },
        prompts: [
          'If your urinary symptoms stayed as they are now for the rest of your life, how would you feel about that? (IPSS quality of life)',
          {
            text: 'Do you leak when you cough, sneeze, laugh or exercise?',
            options: [{ text: 'Yes (stress incontinence; mixed with urge is common)', dx: ['Stress incontinence'] }]
          },
          {
            text: 'How much do you drink a day? Any caffeine, alcohol or evening fluids?',
            options: [{ text: 'High intake that matches output', dx: ['High fluid or caffeine intake'] }]
          },
          'When did it start?',
          'Could you keep a bladder diary (frequency–volume chart) for 3 days?'
        ]
      },
      callouts: [
        {
          variant: 'note',
          title: 'Scoring the IPSS',
          text: 'Each item is scored 0–5 (not at all to almost always; nocturia 0 to 5 or more times), giving a total of 0–35: mild 0–7, moderate 8–19, severe 20–35. It was designed for men with BPH, but its items are a useful structure for LUTS in anyone. Hesitancy and terminal dribbling are not scored, so ask about them separately.'
        }
      ],
      associated: [
        { text: 'Any hematuria?', dx: ['UTI', 'Bladder stone or tumor'] },
        { text: 'Any dysuria?', dx: ['UTI'] },
        { text: 'Any hesitancy or terminal dribbling?', dx: ['BPH'] },
        { text: 'Could you be pregnant?', dx: ['Pregnancy'] },
        { text: 'Any vaginal dryness after menopause?', dx: ['Atrophic vaginitis'] },
        { text: 'Any ankle edema or orthopnea?', dx: ['HF'], see: ['swelling'] },
        { text: 'Any constipation, confusion or abdominal pain?', dx: ['Hypercalcemia'], see: ['memory-thinking'] },
        { text: 'Are the volumes large and pale, with constant thirst?', dx: ['DI'], see: ['polyuria-polydipsia'] },
        { text: 'Any thirst or weight loss?', dx: ['DM'], see: ['weight-change', 'polyuria-polydipsia'] },
        { text: 'Any weakness, numbness or change in gait?', dx: ['Neurogenic bladder'], see: ['movement-change', 'weakness-numbness'] }
      ],
      redflags: [
        'Hematuria: bladder cancer (CIS can present with irritative symptoms)',
        'Polyuria with thirst and weight loss: new DM or hyperglycemia',
        'Back pain, leg weakness or saddle anesthesia: cauda equina syndrome or cord compression',
        'Palpable bladder, overflow incontinence or inability to void: urinary retention',
        'Recurrent UTIs: structural abnormality or incomplete emptying',
        'Pelvic mass or pain: pelvic malignancy'
      ],
      history: {
        pmh: [
          'Any DM or DI?',
          'Any hypercalcemia?',
          'Any CKD?',
          'Any HF?',
          'Any prostate problems, pelvic surgery or pelvic radiation therapy?',
          'Any neurologic disease (MS, stroke, PD, spinal cord injury)?',
          'How many pregnancies and vaginal deliveries? Any instrumental deliveries?',
          'Postmenopausal?'
        ],
        meds: [
          'Any diuretics (frequency, nocturia)? What time do you take them?',
          'Any lithium (nephrogenic DI)?',
          'Any SGLT2 inhibitors (glycosuria)?',
          'Any antihistamines, decongestants or anticholinergics (urinary retention)?',
          'Which bladder medications have you tried (antimuscarinics, beta-3 agonists, alpha-blockers)? Did they help?'
        ],
        shx: [
          'How much caffeine and alcohol do you drink?',
          'How does it affect your sleep, work and social life? Do you plan outings around toilets?'
        ],
        sr: [
          'Cardiovascular: any ankle edema or orthopnea?',
          'Gastrointestinal: any change in bowel habit or fecal incontinence?',
          'Endocrine: any polydipsia or weight loss?',
          'Neurologic: any weakness, numbness, back pain or change in gait?'
        ]
      },
      differentials: [
        { name: 'UTI', clues: 'Acute onset, dysuria, small volumes' },
        { name: 'OAB', clues: 'Urgency, frequency and nocturia, with no infection' },
        { name: 'BPH (bladder outlet obstruction)', clues: 'Older male, voiding symptoms, nocturia' },
        { name: 'Urethral stricture', clues: 'Weak stream after instrumentation, a catheter or an STI' },
        { name: 'Stress incontinence', clues: 'Leakage with cough, sneeze or exercise' },
        { name: 'Bladder stone or tumor', clues: 'Hematuria, persistent irritative symptoms' },
        { name: 'Neurogenic bladder', clues: 'Known neurologic disease, incomplete emptying' },
        { name: 'DM', clues: 'Polyuria, polydipsia, weight loss' },
        { name: 'DI', clues: 'Large volumes of dilute urine, thirst, lithium use' },
        { name: 'Hypercalcemia', clues: 'Polyuria, constipation, confusion, abdominal pain' },
        { name: 'High fluid or caffeine intake', clues: 'Large volumes that match intake' },
        { name: 'HF', clues: 'Nocturia, ankle edema, orthopnea' },
        { name: 'Pregnancy', clues: 'Missed period' },
        { name: 'Atrophic vaginitis', clues: 'Postmenopausal, vaginal dryness' }
      ]
    }
  ]
});
