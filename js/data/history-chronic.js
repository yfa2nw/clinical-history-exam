/*
 * Chronic history skeleton. Same shape as history-acute.js.
 * Presenting-complaint modules flow into "Ongoing Symptoms".
 */
CHE.history.chronic = {
  id: 'chronic',
  title: 'Chronic History',
  description: 'For a known long-term condition. Follow the disease from diagnosis to its current effect on the patient\'s life. Add any current symptoms as modules.',
  sections: [
    {
      id: 'diagnosis',
      title: 'Diagnosis',
      summary: 'What the condition is, and how well the patient understands it.',
      slots: [],
      core: [
        {
          type: 'list',
          items: [
            'What condition(s) have you been diagnosed with?',
            'When, where and by whom was it diagnosed?',
            'Do you know the type, stage or severity?',
            'What do you understand about the condition?'
          ]
        }
      ]
    },
    {
      id: 'risk-factors',
      title: 'Risk Factors',
      summary: 'What predisposed the patient to the condition, and what is still driving it.',
      slots: [],
      core: [
        {
          type: 'groups',
          groups: [
            {
              title: 'Non-modifiable',
              items: ['Age, sex, ethnicity (from demographics)', 'Any family history of the condition?', 'Any known genetic or congenital conditions?']
            },
            {
              title: 'Modifiable',
              items: [
                'Do you smoke or drink alcohol?',
                'What are your diet, weight and physical activity like?',
                'Any relevant occupational or environmental exposures?',
                'Any related conditions, e.g. HTN, DM, dyslipidemia?'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'presentation',
      title: 'Presentation at Diagnosis',
      summary: 'How the condition first came to attention.',
      slots: [],
      core: [
        {
          type: 'list',
          items: [
            'What were the first symptoms, and how long did you have them before diagnosis?',
            {
              text: 'How was it picked up?',
              options: ['Symptoms', 'Screening', 'Incidental finding', 'Emergency presentation']
            },
            'Were you admitted to the hospital when it was first diagnosed?'
          ]
        }
      ]
    },
    {
      id: 'investigations',
      title: 'Investigations',
      summary: 'Tests done at diagnosis, and how the condition has been monitored since.',
      slots: [],
      core: [
        {
          type: 'groups',
          groups: [
            {
              title: 'At diagnosis',
              items: ['Which blood tests were done?', 'Any imaging?', 'Any biopsy?', 'Any functional tests (e.g. spirometry, echo, stress test)?']
            },
            {
              title: 'Ongoing monitoring',
              items: [
                'What is monitored, how often, and by whom?',
                'What were the most recent results? Are they improving or worsening?',
                'Do you monitor anything at home (e.g. BG, BP, peak flow, weight)?'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'management',
      title: 'Management & Adherence',
      summary: 'Current and past treatment, who provides it, and how well the patient sticks to it.',
      slots: [],
      core: [
        {
          type: 'groups',
          groups: [
            {
              title: 'Non-pharmacologic',
              items: [
                'Have you made any lifestyle changes (diet, exercise, smoking cessation)?',
                'Have you had education or a self-management plan?',
                'Do you see any allied health professionals?'
              ]
            },
            {
              title: 'Pharmacologic',
              items: [
                'What medications do you take for it, and at what doses?',
                'Which medications have you tried before? Why were they stopped?',
                'Any side effects?'
              ]
            },
            {
              title: 'Procedural / surgical',
              items: ['Have you had any procedures or operations for it?']
            },
            {
              title: 'Adherence',
              items: [
                'How often do you miss a dose?',
                'What makes it hard to take them (cost, side effects, complexity, beliefs)?',
                'Do you use a pill organizer, blister pack or reminders?',
                'Do you attend your follow-up appointments?'
              ]
            }
          ]
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Ask about adherence without judgment: "Many people find it hard to take medications every day. How often would you say you miss a dose?"'
        }
      ]
    },
    {
      id: 'complications',
      title: 'Complications',
      summary: 'Effects of the disease and its treatment, including recent admissions and surgery.',
      slots: [],
      core: [
        {
          type: 'list',
          items: [
            'Has the condition caused any complications (e.g. end-organ damage)?',
            'Any complications from treatment?',
            'Any recent hospital admissions? When, why, how long, any ICU stay?',
            'Any recent surgery or procedures?',
            'Any flares or ED visits in the past 12 months?'
          ]
        }
      ]
    },
    {
      id: 'ongoing-symptoms',
      title: 'Ongoing Symptoms',
      summary: 'How well controlled the condition is now. Explore each current symptom as you would an acute complaint.',
      slots: ['pc'],
      core: [
        {
          type: 'list',
          items: [
            'What symptoms do you have now, compared with your usual?',
            'Are things improving, stable or worsening?',
            'How often do you have flares?',
            'Any new symptoms?'
          ]
        }
      ]
    },
    {
      id: 'social-impact',
      title: 'Social Impact',
      summary: 'How the condition affects the patient\'s function, roles and wellbeing.',
      slots: [],
      core: [
        {
          type: 'mnemonic',
          title: 'ADLs (DEATH)',
          letters: [['D', 'Dressing'], ['E', 'Eating'], ['A', 'Ambulating / transfers'], ['T', 'Toileting / continence'], ['H', 'Hygiene / bathing']]
        },
        {
          type: 'mnemonic',
          title: 'IADLs (SHAFT)',
          letters: [['S', 'Shopping'], ['H', 'Housekeeping'], ['A', 'Accounting / finances'], ['F', 'Food preparation'], ['T', 'Transportation / driving']]
        },
        {
          type: 'list',
          title: 'Wider impact',
          items: [
            'How has it affected your work or study?',
            'How has it affected your relationships and role in the family?',
            'How is your mood? How are you coping?',
            'Has it affected you financially?',
            'Do you have caregivers, services, home modifications or aids?',
            'Have you thought about advance care planning? (where appropriate)',
            'What do you think about the condition, and what worries you? (ICE)'
          ]
        }
      ]
    }
  ]
};
