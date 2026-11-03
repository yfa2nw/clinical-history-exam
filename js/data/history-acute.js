/*
 * Acute history skeleton.
 *
 * Section shape:
 *   { id, title, summary, ref?, core: [Block], slots: [slotName] }
 *
 * `core` holds the general questions that apply to every patient.
 * `slots` names which parts of the selected modules flow into this stage:
 *   'pc'                          full presenting-complaint card (framework, questions, associated, red flags)
 *   'pmh' | 'meds' | 'fhx' | 'shx' | 'sr'   the matching module.history list
 *
 * Block types (rendered by js/app.js):
 *   { type: 'list',      title?, items: [Item] }
 *   { type: 'groups',    title?, groups: [{ title, items: [Item] }] }
 *   { type: 'mnemonic',  title, letters: [[letter, meaning, detail?]] }
 *   { type: 'framework', id: 'socrates' }
 *   { type: 'callout',   variant: 'tip'|'redflag'|'note', title?, text }
 *
 * Content rules (American spelling, abbreviations, question form, fixed
 * order of symptom lists) are in CLAUDE.md.
 */
CHE.history.acute = {
  id: 'acute',
  title: 'Acute History',
  description: 'For a new presenting problem. Add one or more presenting complaints and the history fills in around them.',
  sections: [
    {
      id: 'presenting-complaint',
      title: 'Presenting Complaint',
      summary: 'Start with an open question and let the patient tell their story, then explore each complaint in detail.',
      slots: ['pc'],
      core: [
        {
          type: 'list',
          title: 'Approach',
          items: [
            'Introduce yourself, confirm the patient\'s identity and gain consent',
            'Let the patient talk without interrupting, then clarify'
          ]
        },
        {
          type: 'list',
          title: 'Opening questions',
          items: [
            'What brought you in today?',
            'When did it start?',
            'Has this happened before?',
            'Have you tried anything for it? Did it help?'
          ]
        }
      ]
    },
    {
      id: 'pmh-meds-allergies',
      title: 'Past Medical History, Medications & Allergies',
      summary: 'The background the presenting problem sits in.',
      slots: ['pmh', 'meds'],
      core: [
        {
          type: 'groups',
          groups: [
            {
              title: 'PMHx & PSHx',
              items: [
                'Do you have any medical conditions you see a doctor for?',
                'Have you been admitted to the hospital before?',
                'Have you had any operations? When? Any problems with the anesthetic?',
                'Have you had any blood transfusions?',
                'Any pregnancies or gynecologic problems? (where relevant)',
                'Are your immunizations up to date?'
              ]
            },
            {
              title: 'Medications',
              items: [
                'What medications do you take? Dose, frequency, route and what each is for?',
                'Any recent changes?',
                'Any OTC, herbal or complementary medicines?',
                'How often do you miss a dose?'
              ]
            },
            {
              title: 'Allergies',
              items: [
                'Any allergies to medications, foods or anything else?',
                {
                  text: 'What happened when you reacted?',
                  options: ['Anaphylaxis, angioedema, urticaria (true allergy)', 'Nausea or GI upset (intolerance or side effect)']
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'family-history',
      title: 'Family History',
      summary: 'Heritable conditions and familial risk.',
      slots: ['fhx'],
      core: [
        {
          type: 'list',
          items: [
            'Are your parents, siblings and children alive and well? If not, at what age and of what did they die?',
            'Any family history of IHD, HTN, DM, stroke, cancer or mental illness?',
            'Are your parents related by blood? (where relevant)'
          ]
        }
      ]
    },
    {
      id: 'social-history',
      title: 'Social History',
      summary: 'The patient as a person: lifestyle, exposures, function and supports.',
      slots: ['shx'],
      core: [
        {
          type: 'groups',
          groups: [
            {
              title: 'Substances',
              items: [
                'Do you smoke, or have you ever? How much and for how long? (pack-years = packs/day × years)',
                'How much alcohol do you drink in a typical week? (standard drinks)',
                'Do you use any recreational drugs? Any IV drug use?'
              ]
            },
            {
              title: 'Occupation & exposures',
              items: [
                'What work do you do now, and what have you done in the past?',
                'Any exposure to asbestos, dust or chemicals at work?',
                'Any recent travel?'
              ]
            },
            {
              title: 'Home & function',
              items: [
                'Who do you live with? What type of home? Any stairs?',
                'Do you need help with daily activities?',
                'Do you have family, caregivers or services supporting you?',
                'Do you drive?'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'systems-review',
      title: 'Systems Review',
      summary: 'A brief screen to pick up symptoms the patient hasn\'t mentioned. Spend most of your time on the systems the complaint points to.',
      slots: ['sr'],
      core: [
        {
          type: 'groups',
          groups: [
            { title: 'General', items: ['Any fever, chills or night sweats?', 'Any weight loss or change in appetite?', 'Any fatigue?', 'Any easy bruising, bleeding or swollen lymph nodes?'] },
            { title: 'Head, eyes, ears, nose & throat', items: ['Any change in vision or hearing?', 'Any sore throat, nasal symptoms or mouth ulcers?'] },
            { title: 'Cardiovascular', items: ['Any chest pain or palpitations?', 'Any dyspnea, orthopnea or PND?', 'Any ankle edema?'] },
            { title: 'Respiratory', items: ['Any cough, sputum or hemoptysis?', 'Any wheeze?'] },
            { title: 'Gastrointestinal', items: ['Any dysphagia?', 'Any N/V?', 'Any hematochezia, melena or change in bowel habit?'] },
            { title: 'Genitourinary & reproductive', items: ['Any hematuria, dysuria, frequency, urgency or nocturia?', 'LMP? Any menstrual changes?', 'Any sexual difficulties?'] },
            { title: 'Endocrine', items: ['Any heat or cold intolerance?', 'Any polyuria or polydipsia?'] },
            { title: 'Neurologic', items: ['Any headache?', 'Any weakness or numbness?', 'Any dizziness, blackouts or seizures?'] },
            { title: 'Musculoskeletal & integumentary', items: ['Any joint pain or stiffness?', 'Any rash or lumps?'] },
            { title: 'Psychiatric', items: ['Any low mood, anxiety or sleep problems?'] }
          ]
        }
      ]
    },
    {
      id: 'ice',
      title: 'Ideas, Concerns & Expectations',
      summary: 'What the patient thinks, fears and wants. Then close the history.',
      slots: [],
      core: [
        {
          type: 'mnemonic',
          title: 'ICE',
          letters: [
            ['I', 'Ideas', 'What do you think might be causing this?'],
            ['C', 'Concerns', 'Is there anything in particular that\'s worrying you?'],
            ['E', 'Expectations', 'What were you hoping we could do for you today?']
          ]
        },
        {
          type: 'list',
          title: 'Closing',
          items: [
            'Is there anything else you\'d like to tell me?',
            'Summarize the history back to the patient and check it is accurate'
          ]
        }
      ]
    }
  ]
};
