/*
 * Multiple sclerosis: immune-mediated demyelination, relapsing-remitting or progressive. The
 * review centers on the type and activity (relapses, new MRI lesions), relapse vs
 * pseudo-relapse (infection, heat), disease-modifying therapy and its monitoring, the symptom
 * burden (fatigue, bladder and bowel, spasticity, pain, cognition, mood), and pregnancy.
 */
CHE.registerCondition({
  id: 'multiple-sclerosis',
  title: 'Multiple sclerosis',
  aka: ['MS', 'relapsing-remitting MS', 'progressive MS', 'demyelination', 'disease-modifying therapy', 'relapse', 'optic neuritis'],
  tags: ['neurologic'],
  summary: 'Establish the type (relapsing-remitting or progressive) and activity (relapses, new MRI lesions), then review relapses vs pseudo-relapses, disease-modifying therapy and its monitoring, the symptom burden (fatigue, bladder and bowel, spasticity, pain, cognition, mood), mobility, and pregnancy plans.',
  ref: '',
  // Added under the rows of each chronic section's framework.
  frameworkNotes: {
    diagnosis: {
      when: ['How old were you when it was diagnosed, and how long after your first symptoms?'],
      stage: [
        {
          text: 'Which type of MS do you have?',
          options: [
            'Clinically isolated syndrome (a single episode so far)',
            'Relapsing-remitting',
            'Secondary progressive (gradual worsening after a relapsing phase)',
            'Primary progressive (gradual worsening from the start)'
          ]
        },
        'How many relapses have you had in the past 2 years? How far can you walk now?'
      ],
      understanding: ['Do you know the difference between a relapse and a temporary worsening with infection or heat (pseudo-relapse)?']
    },
    'risk-factors': {
      family: ['Any family history of MS or other autoimmune disease?'],
      smoking: ['Do you smoke? (speeds up disability)'],
      exposures: ['Have you had glandular fever in the past? How much time do you spend in the sun? (low vitamin D)'],
      diet: ['Do you take vitamin D?'],
      related: ['Any other autoimmune disease (e.g. thyroid disease, IBD)?']
    },
    presentation: {
      first: [
        {
          text: 'What was your first episode?',
          options: [
            'Painful blurred vision in one eye (optic neuritis)',
            'Numbness or tingling spreading over days',
            'Weakness of a limb',
            'Double vision or unsteadiness',
            'Bladder problems or an electric shock down the spine on bending the neck'
          ]
        }
      ],
      admitted: ['Were you admitted at the first episode? Did you have IV steroids?']
    },
    investigations: {
      blood: [
        'Were blood tests done to rule out other causes (e.g. B12, thyroid, autoimmune tests)?',
        'Before starting treatment, were you tested for hepatitis, HIV and other infections, and for virus antibodies needed for some treatments (e.g. natalizumab)?'
      ],
      imaging: ['Have you had MRI scans of the brain and spine? When was the last one?'],
      functional: ['Did you have a lumbar puncture or tests of the visual pathways?'],
      monitoring: ['How often do you have an MRI and blood tests for your treatment (blood count, liver tests)?'],
      results: ['Did your last MRI show any new or active lesions?']
    },
    management: {
      lifestyle: ['Do you exercise regularly? Have you stopped smoking? Do you take vitamin D?'],
      education: ['Do you have a plan for what to do in a relapse, and an MS nurse or helpline to call?'],
      allied: ['Do you see a physiotherapist, occupational therapist, continence nurse, speech therapist or psychologist?'],
      ongoing: ['Do you self-catheterize or have a catheter? Do you have a baclofen pump?'],
      medications: [
        'Which disease-modifying therapy are you on (e.g. interferon beta, glatiramer, dimethyl fumarate, teriflunomide, fingolimod, natalizumab, ocrelizumab, cladribine)? Since when?',
        'Do you take medications for symptoms: spasticity (baclofen, tizanidine), nerve pain (gabapentin, pregabalin), bladder urgency, or fatigue?',
        'How many courses of corticosteroids have you had for relapses?'
      ],
      previous: ['Which disease-modifying therapies have you tried before? Why were they stopped (relapses, side effects)?'],
      sideEffects: [
        'Any injection site reactions or flu-like symptoms (interferon)?',
        'Any flushing or GI upset (dimethyl fumarate)?',
        'Any frequent or serious infections on your treatment?'
      ],
      sickDay: ['When you have a fever or an infection, do you know to seek advice, especially on immunosuppressive treatment? Do you know to avoid live vaccines?'],
      missed: ['Do you take or attend every dose or infusion?'],
      followUp: ['When did you last see your neurologist or MS nurse?']
    },
    complications: {
      disease: [
        'Any bladder urgency, incontinence, difficulty emptying or recurrent UTIs?',
        'Any constipation or bowel incontinence?',
        'Any sexual difficulties?',
        'Any stiffness, spasms or pain?',
        'Any fatigue that limits your day?',
        'Any problems with memory, concentration or thinking?',
        'Any low mood or anxiety?',
        'Any falls, pressure sores or swallowing problems?'
      ],
      flares: ['How many relapses have you had in the past year? How were they treated, and did you fully recover?'],
      hospitalizations: ['Any admissions for relapses or infections (e.g. UTIs, chest infections)? Did you need IV steroids or plasma exchange?']
    },
    'ongoing-symptoms': {
      trend: [
        {
          text: 'Which of these expected symptoms do you have, and how do they compare with usual?',
          options: [
            'Fatigue',
            'Stable symptoms left over from past relapses',
            'Old symptoms that worsen briefly with heat, exercise or infection, then settle',
            'Mild bladder urgency',
            'Mild stiffness or tingling'
          ]
        }
      ]
    },
    'social-impact': {
      dressing: ['Do you need help getting dressed?'],
      ambulating: ['How far can you walk? Do you use a stick, walker or wheelchair? Any falls?'],
      toileting: ['Can you reach the toilet in time? Do you manage a catheter yourself?'],
      transport: ['Do you drive? Have you told the licensing authority?'],
      work: ['Has fatigue or disability affected your work? Have adjustments been made?'],
      relationships: [
        'Has MS affected your relationships or sexual life?',
        'Are you planning a pregnancy? (relapses are less common in pregnancy and more common after delivery; some treatments must be stopped first)'
      ],
      mood: ['Any low mood or anxiety? How are you coping?'],
      finances: ['Has MS affected you financially?'],
      supports: ['Do you have help at home, home adaptations or contact with an MS society?'],
      planning: ['Have you thought about your future care, and made an advance care plan? (where appropriate)']
    }
  },
  // Stands apart from the rows: findings outside expectations, linked to Acute History.
  sections: {
    'ongoing-symptoms': [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'New or clearly worse neurologic symptoms lasting over 24 hours, without fever or infection: relapse', see: ['weakness-numbness', 'senses-change'] },
          { text: 'Old symptoms worse with a fever or infection (often a UTI): pseudo-relapse', see: ['urinary-tract-pain'] },
          { text: 'Painful vision loss in one eye: optic neuritis', see: ['senses-change'] },
          { text: 'Urinary retention or new incontinence: bladder dysfunction or a cord relapse', see: ['urinary-symptoms', 'incontinence'] },
          { text: 'New confusion, personality change or weakness on natalizumab: progressive multifocal leukoencephalopathy', see: ['memory-thinking'] },
          { text: 'Fever on immunosuppressive treatment: serious infection' },
          { text: 'Choking or coughing with meals: unsafe swallow', see: ['upper-gi-symptoms'] }
        ]
      }
    ]
  }
});
