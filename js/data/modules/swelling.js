/*
 * Swelling: a multi-system complaint, framed as the patient reports it. Examination
 * findings (pitting, ascites, JVP) appear as answers and differentials, not features.
 *
 * Awaiting hand-off (answers with no matching presenting complaint yet; add `see`
 * and remove the line when one is added; see CLAUDE.md, "Multi-system complaints"):
 *   - Leg swelling: dyspnea, orthopnea or PND                              → dyspnea complaint
 *   - Leg, abdominal swelling: could you be pregnant?                      → pregnancy complaint
 *   - Facial swelling: difficulty breathing or swallowing, voice change     → dyspnea complaint
 *   - Facial swelling: cough, smoking (SVC obstruction)                    → cough complaint
 *   - Abdominal swelling: dyspnea or orthopnea                             → dyspnea complaint
 *   - Abdominal swelling: fever                                            → fever complaint
 */
CHE.registerModule({
  id: 'swelling',
  title: 'Swelling',
  multiSystem: true,
  aka: ['fluid overload', 'edema', 'pitting edema', 'lymphedema', 'ascites', 'swollen legs', 'swollen ankles', 'puffy face', 'abdominal swelling', 'bloating', 'distension', 'weight gain'],
  tags: ['cardiovascular', 'renal', 'gastrointestinal'],
  summary: 'Swelling comes from the heart, kidneys, liver, gut, veins or lymphatics, or from something other than fluid. Pin down where it is, then use the answers and associated symptoms to find the system. Switch on only the features that apply.',
  ref: '',
  related: ['upper-gi-symptoms', 'skin-changes', 'abdominal-pain', 'urinary-symptoms', 'fecal-symptoms', 'diarrhea-constipation', 'fatigue', 'weight-change', 'temperature-sweating', 'appearance-change', 'headache', 'memory-thinking'],
  // Shared by all features (rendered as "All features"): the symptom SOCRATES, plus extras.
  // Each feature adds its answers to the rows through `sharedNotes`.
  pc: {
    framework: 'symptom',
    prompts: [
      {
        text: 'Have you gained weight recently? How much, and over how long?',
        options: [
          'Rapid: more than 2 kg (4–5 lb) over a few days (fluid)',
          'Gradual, over months (fluid or fat)'
        ]
      },
      'Have your clothes, belt, rings or shoes become tighter?',
      'Has the amount of urine you pass changed?'
    ]
  },
  parts: [
    {
      id: 'leg-swelling',
      title: 'Leg swelling',
      summary: 'Ask whether it is one leg or both, whether it leaves a dent, and how fast it came on. Swelling of both legs that dents is usually systemic (heart, kidneys, liver, low albumin, drugs); one leg is usually local (DVT, venous disease, cellulitis); swelling that does not dent suggests lymph, mucin or fat.',
      sharedNotes: {
        site: [
          { text: 'One leg', dx: ['DVT', 'Cellulitis'], see: ['skin-changes'] },
          { text: 'Both legs', dx: ['HF', 'Nephrotic syndrome'] },
          { text: 'Both legs equally, sparing the feet', dx: ['Lipedema'] }
        ],
        onset: [
          { text: 'Over hours to days, in one leg', dx: ['DVT', 'Cellulitis'] },
          { text: 'After surgery, radiation therapy or lymph node removal on that side', dx: ['Lymphedema'] },
          { text: 'After starting a new medication', dx: ['Medication-related edema'] }
        ],
        character: [
          { text: 'Leaves a dent when pressed (pitting: excess water)', dx: ['HF', 'Medication-related edema'] },
          { text: 'Firm, no dent (non-pitting)', dx: ['Lymphedema', 'Hypothyroidism'] },
          { text: 'Red, warm and tender', dx: ['Cellulitis'], see: ['skin-changes'] }
        ],
        radiation: [
          { text: 'Rising to the thighs or abdomen', dx: ['HF', 'Nephrotic syndrome'] }
        ],
        timing: [
          { text: 'Worse at the end of the day, better overnight', dx: ['Chronic venous insufficiency', 'Medication-related edema'] },
          { text: 'For years, slowly increasing', dx: ['Lipedema', 'Lymphedema'] }
        ],
        exacerbating: [
          { text: 'Better with the legs raised', dx: ['Chronic venous insufficiency'] },
          { text: 'Worse after salty food or missed diuretics', dx: ['HF'] }
        ],
        severity: [
          { text: 'Tight, weeping or ulcerated skin', dx: ['Chronic venous insufficiency', 'Lymphedema'] }
        ]
      },
      associated: [
        { text: 'Any calf pain, or recent immobility, surgery or long travel?', dx: ['DVT'] },
        { text: 'Any dyspnea, orthopnea or PND?', dx: ['HF'] },
        { text: 'Any jaundice or abdominal swelling? (tick Abdominal swelling)', dx: ['Cirrhosis'], see: ['skin-changes'] },
        { text: 'Any chronic diarrhea or greasy stool?', dx: ['Protein-losing enteropathy'], see: ['diarrhea-constipation'] },
        { text: 'Any frothy urine or reduced urine output?', dx: ['Nephrotic syndrome', 'AKI or CKD'], see: ['urinary-symptoms'] },
        { text: 'Could you be pregnant? Any headache or vision change?', dx: ['Preeclampsia'], see: ['headache', 'senses-change'] },
        { text: 'Any cold intolerance, weight gain or dry skin?', dx: ['Hypothyroidism'], see: ['weight-change', 'temperature-sweating'] },
        { text: 'Any redness, warmth or skin discoloration on the legs?', dx: ['Cellulitis', 'Chronic venous insufficiency'], see: ['skin-changes'] },
        { text: 'Any recurrent skin infections in the swollen leg?', dx: ['Lymphedema'], see: ['skin-changes'] }
      ],
      redflags: [
        'Dyspnea at rest, orthopnea or PND: decompensated HF',
        'One swollen, painful leg: DVT',
        'Leg swelling with pleuritic chest pain or hemoptysis: PE',
        'Reduced urine output or rapid weight gain: AKI or nephrotic syndrome',
        'Pregnancy with swelling, headache or vision change: preeclampsia',
        'New one-sided swelling that does not dent, with no clear cause: pelvic or lymph node malignancy'
      ],
      history: {
        pmh: [
          'Any HF, IHD or valve disease?',
          'Any CKD or liver disease?',
          'Any DVT, varicose veins or leg surgery?',
          'Any cancer, lymph node surgery or radiation therapy?',
          'Any thyroid disease?'
        ],
        meds: [
          'Any calcium channel blockers, NSAIDs, corticosteroids or pioglitazone (fluid retention)?',
          'Any diuretics (missed doses)?'
        ],
        shx: [
          'How much salt and fluid do you have a day?',
          'How much alcohol do you drink? (cirrhosis, cardiomyopathy)',
          'How far can you walk before stopping?',
          'Any travel to tropical areas? (filariasis)'
        ],
        sr: [
          'Cardiovascular: any chest pain, palpitations or orthopnea?',
          'Gastrointestinal: any jaundice or abdominal swelling?',
          'Genitourinary & reproductive: any frothy urine or reduced urine output?',
          'Endocrine: any cold intolerance or weight gain?'
        ]
      },
      differentials: [
        { name: 'HF', clues: 'Both legs, pitting, dyspnea, orthopnea, PND, raised JVP' },
        { name: 'Nephrotic syndrome', clues: 'Both legs and around the eyes, frothy urine' },
        { name: 'AKI or CKD', clues: 'Reduced urine output, fatigue, known kidney disease' },
        { name: 'Cirrhosis', clues: 'Abdominal swelling, jaundice; alcohol or viral hepatitis' },
        { name: 'Protein-losing enteropathy', clues: 'Chronic diarrhea, low albumin' },
        { name: 'Medication-related edema', clues: 'Calcium channel blockers, NSAIDs, corticosteroids, pioglitazone' },
        { name: 'Chronic venous insufficiency', clues: 'Worse at the end of the day, varicose veins, brown skin staining' },
        { name: 'DVT', clues: 'One swollen, painful leg; recent immobility, surgery or travel' },
        { name: 'Cellulitis', clues: 'One red, warm, tender leg, fever' },
        { name: 'Preeclampsia', clues: 'Pregnancy over 20 weeks, HTN, headache, vision change' },
        { name: 'Lymphedema', clues: 'Non-pitting; after surgery, radiation therapy or lymph node removal, since childhood, or after tropical travel (filariasis)' },
        { name: 'Lipedema', clues: 'Both legs equally, sparing the feet, mostly in females' },
        { name: 'Hypothyroidism', clues: 'Non-pitting swelling (myxedema), cold intolerance, weight gain' }
      ]
    },
    {
      id: 'facial-swelling',
      title: 'Facial swelling',
      summary: 'Sudden swelling of the face, lips or tongue is angioedema until proven otherwise. Puffiness around the eyes in the morning suggests the kidneys; gradual puffiness with coarse features suggests hypothyroidism.',
      sharedNotes: {
        site: [
          { text: 'Lips, tongue, face or throat', dx: ['Angioedema'] },
          { text: 'Around the eyes', dx: ['Nephrotic syndrome', 'AKI or CKD'] },
          { text: 'Face, neck and arms, with prominent neck veins', dx: ['SVC obstruction'] },
          { text: 'One side of the face', dx: ['Facial infection'] }
        ],
        onset: [
          { text: 'Suddenly, over minutes to hours', dx: ['Angioedema'] },
          { text: 'Gradually, with features becoming coarser or rounder', dx: ['Hypothyroidism', 'Cushing syndrome'], see: ['appearance-change'] }
        ],
        character: [
          { text: 'Painful, red or hot', dx: ['Facial infection'], see: ['skin-changes'] }
        ],
        timing: [
          { text: 'Worse in the morning', dx: ['Nephrotic syndrome', 'AKI or CKD'] },
          { text: 'Recurrent episodes lasting 1–3 days', dx: ['Angioedema'] }
        ],
        exacerbating: [
          { text: 'After a new food, medication, sting or ACE inhibitor', dx: ['Angioedema'] },
          { text: 'Worse lying down or bending forward', dx: ['SVC obstruction'] }
        ],
        severity: [
          { text: 'Unable to open the mouth (trismus)', dx: ['Facial infection'] }
        ]
      },
      associated: [
        { text: 'Any cough, weight loss or smoking history?', dx: ['SVC obstruction'], see: ['weight-change'] },
        { text: 'Any difficulty breathing or swallowing, or voice change?', dx: ['Angioedema'] },
        { text: 'Any frothy urine or reduced urine output?', dx: ['Nephrotic syndrome'], see: ['urinary-symptoms'] },
        { text: 'Any cold intolerance, weight gain or fatigue?', dx: ['Hypothyroidism'], see: ['weight-change', 'fatigue', 'temperature-sweating'] },
        { text: 'Any itch or hives?', dx: ['Angioedema'], see: ['skin-changes'] }
      ],
      redflags: [
        'Swelling of the lips, tongue or throat, stridor or voice change: angioedema (airway risk)',
        'Face and arm swelling with prominent neck veins: SVC obstruction',
        'Painful facial swelling with fever or trismus: deep facial or dental infection'
      ],
      history: {
        pmh: [
          'Any previous episodes of face or lip swelling?',
          'Any kidney or thyroid disease?',
          'Any lung cancer or lymphoma?'
        ],
        meds: [
          'Any ACE inhibitors (angioedema)?',
          'Any corticosteroids (Cushing syndrome)?'
        ],
        fhx: [
          'Any family history of angioedema?'
        ],
        shx: [
          'Any new foods, medications or stings before it started?',
          'Do you smoke? (SVC obstruction from lung cancer)'
        ],
        sr: [
          'Respiratory: any dyspnea, wheeze or cough?',
          'Genitourinary & reproductive: any frothy urine?',
          'Endocrine: any cold intolerance or weight gain?'
        ]
      },
      differentials: [
        { name: 'Angioedema', clues: 'Sudden lip, tongue or face swelling; ACE inhibitors, allergy, hereditary' },
        { name: 'Nephrotic syndrome', clues: 'Puffiness around the eyes in the morning, frothy urine, leg swelling' },
        { name: 'AKI or CKD', clues: 'Puffiness around the eyes, reduced urine output' },
        { name: 'Hypothyroidism', clues: 'Gradual puffiness, coarse features, cold intolerance, weight gain' },
        { name: 'Cushing syndrome', clues: 'Round face from fat, corticosteroid use, weight gain' },
        { name: 'SVC obstruction', clues: 'Face, neck and arm swelling, prominent neck veins; lung cancer, lymphoma' },
        { name: 'Facial infection', clues: 'One-sided, painful, red, fever, dental pain' }
      ]
    },
    {
      id: 'abdominal-swelling',
      title: 'Abdominal swelling',
      summary: 'Think of the five Fs: fluid (ascites), fat, flatus, feces and fetus, plus a mass. If it is fluid, cirrhosis is the commonest cause, so ask about liver disease and its complications.',
      sharedNotes: {
        site: [
          { text: 'All over', dx: ['Ascites'] },
          { text: 'In one area, with a lump', dx: ['Abdominal mass'] }
        ],
        onset: [
          { text: 'Over weeks, with heavy alcohol use or known liver disease', dx: ['Cirrhosis'] },
          { text: 'Over weeks, with weight loss elsewhere', dx: ['Malignant ascites', 'Abdominal mass'], see: ['weight-change'] },
          { text: 'Over hours, with vomiting and no gas or stool passed', dx: ['Bowel obstruction'], see: ['diarrhea-constipation'] }
        ],
        character: [
          { text: 'Tight and full', dx: ['Ascites'] },
          { text: 'Bloated and gassy', dx: ['IBS'] },
          { text: 'Painful, with fever', dx: ['Spontaneous bacterial peritonitis'], see: ['abdominal-pain'] }
        ],
        timing: [
          { text: 'Comes and goes, worse through the day', dx: ['IBS'] },
          { text: 'Constant and steadily increasing', dx: ['Ascites', 'Malignant ascites'] }
        ],
        exacerbating: [
          { text: 'Relieved by passing gas or stool', dx: ['IBS'] },
          { text: 'Worse when constipated; when did you last open your bowels?', dx: ['Fecal loading'], see: ['diarrhea-constipation'] }
        ],
        severity: [
          { text: 'Dyspnea or early satiety from the size of it', dx: ['Ascites'] }
        ]
      },
      associated: [
        { text: 'Any hematemesis or melena?', dx: ['Variceal bleeding'], see: ['upper-gi-symptoms', 'fecal-symptoms'] },
        { text: 'Any epigastric pain through to the back?', dx: ['Pancreatic ascites'], see: ['abdominal-pain'] },
        { text: 'Any jaundice, itch or easy bruising?', dx: ['Cirrhosis'], see: ['skin-changes'] },
        { text: 'Any weight loss, night sweats or fever?', dx: ['Malignant ascites', 'TB peritonitis'], see: ['weight-change', 'temperature-sweating'] },
        { text: 'Any dyspnea, orthopnea or leg swelling? (tick Leg swelling)', dx: ['HF'] },
        { text: 'Any frothy urine or puffiness around the eyes?', dx: ['Nephrotic syndrome'], see: ['urinary-symptoms'] },
        { text: 'Could you be pregnant?', dx: ['Pregnancy'] },
        { text: 'Any confusion, drowsiness or day-night reversal?', dx: ['Hepatic encephalopathy'], see: ['memory-thinking'] }
      ],
      redflags: [
        'Fever or abdominal pain with ascites: spontaneous bacterial peritonitis',
        'Hematemesis or melena: variceal bleeding',
        'Confusion or drowsiness: hepatic encephalopathy',
        'Reduced urine output in cirrhosis: hepatorenal syndrome',
        'Vomiting, distension and no flatus: bowel obstruction',
        'New abdominal swelling with weight loss: malignancy'
      ],
      history: {
        pmh: [
          'Any liver disease, hepatitis or previous ascites?',
          'Any HF, CKD or nephrotic syndrome?',
          'Any cancer, especially ovarian, GI or liver?',
          'Any previous abdominal surgery (adhesions)?'
        ],
        meds: [
          'Any diuretics (missed doses)?',
          'Any NSAIDs (worsen ascites and kidney function)?',
          'Any opioids (constipation)?'
        ],
        fhx: [
          'Any family history of liver disease?'
        ],
        shx: [
          'How much alcohol do you drink?',
          'Any IV drug use, tattoos or transfusions (viral hepatitis)?',
          'Any TB exposure, or travel to areas where TB is common?'
        ],
        sr: [
          'Respiratory: any dyspnea?',
          'Gastrointestinal: any jaundice, hematemesis, melena or change in bowel habit?',
          'Genitourinary & reproductive: LMP? Could you be pregnant?',
          'Neurologic: any confusion or drowsiness?'
        ]
      },
      differentials: [
        { name: 'Ascites', clues: 'Generalized, steadily increasing swelling; confirm on examination (shifting dullness), then find the cause' },
        { name: 'Cirrhosis', clues: 'Alcohol or viral hepatitis; jaundice, varices, encephalopathy' },
        { name: 'Malignant ascites', clues: 'Weight loss, known cancer, especially ovarian or GI' },
        { name: 'HF', clues: 'Dyspnea, orthopnea, leg swelling, raised JVP' },
        { name: 'Nephrotic syndrome', clues: 'Frothy urine, puffiness around the eyes' },
        { name: 'TB peritonitis', clues: 'Fever, night sweats, weight loss, TB exposure' },
        { name: 'Pancreatic ascites', clues: 'History of pancreatitis, epigastric pain' },
        { name: 'Spontaneous bacterial peritonitis', clues: 'Known ascites with fever, abdominal pain or confusion' },
        { name: 'Variceal bleeding', clues: 'Hematemesis or melena in cirrhosis' },
        { name: 'Hepatic encephalopathy', clues: 'Confusion, drowsiness or day-night reversal in liver disease' },
        { name: 'Abdominal mass', clues: 'Localized swelling; ovarian, liver, kidney or bowel tumor, or organ enlargement' },
        { name: 'IBS', clues: 'Bloating that comes and goes, relieved by defecation' },
        { name: 'Bowel obstruction', clues: 'Constant distension, vomiting, no flatus' },
        { name: 'Fecal loading', clues: 'Constipation, older or immobile, opioids' },
        { name: 'Pregnancy', clues: 'Missed period, gradual central swelling' }
      ]
    }
  ]
});
