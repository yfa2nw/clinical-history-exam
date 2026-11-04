/*
 * Chronic history skeleton. Same shape as history-acute.js.
 * Each section's general questions are a framework (defined below, keyed by section id).
 * Chronic conditions (js/data/conditions) add their own questions under its rows through
 * `frameworkNotes`, the way features add answers to a shared SOCRATES. New or unexpected
 * symptoms are taken as an acute history instead.
 */

// One framework per chronic section. Rows with a `group` render under that heading.
Object.assign(CHE.frameworks, {
  diagnosis: {
    id: 'diagnosis',
    rows: [
      { key: 'condition',     letter: '1', label: 'Condition',      prompt: 'What condition(s) have you been diagnosed with?' },
      { key: 'when',          letter: '2', label: 'When and where', prompt: 'When, where and by whom was it diagnosed?' },
      { key: 'cause',         letter: '3', label: 'Cause',          prompt: 'Do you know what caused it?' },
      { key: 'stage',         letter: '4', label: 'Type and stage', prompt: 'Do you know the type, stage or severity?' },
      { key: 'understanding', letter: '5', label: 'Understanding',  prompt: 'What do you understand about the condition?' }
    ]
  },

  'risk-factors': {
    id: 'risk-factors',
    rows: [
      { key: 'demographics', letter: '1', label: 'Demographics',       group: 'Non-modifiable', prompt: 'Age, sex, ethnicity (from demographics)' },
      { key: 'family',       letter: '2', label: 'Family history',     group: 'Non-modifiable', prompt: 'Any family history of the condition?' },
      { key: 'genetic',      letter: '3', label: 'Genetic',            group: 'Non-modifiable', prompt: 'Any known genetic or congenital conditions?' },
      { key: 'substances',   letter: '4', label: 'Smoking and alcohol', group: 'Modifiable',    prompt: 'Do you smoke or drink alcohol?' },
      { key: 'lifestyle',    letter: '5', label: 'Lifestyle',          group: 'Modifiable',     prompt: 'What are your diet, weight and physical activity like?' },
      { key: 'exposures',    letter: '6', label: 'Exposures',          group: 'Modifiable',     prompt: 'Any relevant occupational, environmental or medication exposures?' },
      { key: 'related',      letter: '7', label: 'Related conditions', group: 'Modifiable',     prompt: 'Any related conditions, e.g. HTN, DM, dyslipidemia?' }
    ]
  },

  presentation: {
    id: 'presentation',
    rows: [
      { key: 'first',    letter: '1', label: 'First symptoms', prompt: 'What were the first symptoms, and how long did you have them before diagnosis?' },
      { key: 'how',      letter: '2', label: 'How found',      prompt: 'How was it picked up: symptoms, screening, an incidental finding or an emergency?' },
      { key: 'admitted', letter: '3', label: 'Admission',      prompt: 'Were you admitted to the hospital when it was first diagnosed?' }
    ]
  },

  investigations: {
    id: 'investigations',
    rows: [
      { key: 'blood',      letter: '1', label: 'Blood tests',       group: 'At diagnosis',       prompt: 'Which blood tests were done?' },
      { key: 'imaging',    letter: '2', label: 'Imaging',           group: 'At diagnosis',       prompt: 'Any imaging?' },
      { key: 'biopsy',     letter: '3', label: 'Biopsy',            group: 'At diagnosis',       prompt: 'Any biopsy?' },
      { key: 'functional', letter: '4', label: 'Functional tests',  group: 'At diagnosis',       prompt: 'Any functional tests (e.g. spirometry, echo, stress test)?' },
      { key: 'monitoring', letter: '5', label: 'What is monitored', group: 'Ongoing monitoring', prompt: 'What is monitored, how often, and by whom?' },
      { key: 'results',    letter: '6', label: 'Recent results',    group: 'Ongoing monitoring', prompt: 'What were the most recent results? Are they improving or worsening?' },
      { key: 'home',       letter: '7', label: 'Home monitoring',   group: 'Ongoing monitoring', prompt: 'Do you monitor anything at home (e.g. BG, BP, peak flow, weight)?' }
    ]
  },

  management: {
    id: 'management',
    rows: [
      { key: 'lifestyle',    letter: '1',  label: 'Lifestyle changes',   group: 'Non-pharmacologic',     prompt: 'Have you made any lifestyle changes (diet, exercise, smoking cessation)?' },
      { key: 'education',    letter: '2',  label: 'Education',           group: 'Non-pharmacologic',     prompt: 'Have you had education or a self-management plan?' },
      { key: 'allied',       letter: '3',  label: 'Allied health',       group: 'Non-pharmacologic',     prompt: 'Do you see any allied health professionals?' },
      { key: 'medications',  letter: '4',  label: 'Current medications', group: 'Pharmacologic',         prompt: 'What medications do you take for it, and at what doses?' },
      { key: 'previous',     letter: '5',  label: 'Previous medications', group: 'Pharmacologic',        prompt: 'Which medications have you tried before? Why were they stopped?' },
      { key: 'sideEffects',  letter: '6',  label: 'Side effects',        group: 'Pharmacologic',         prompt: 'Any side effects?' },
      { key: 'sickDay',      letter: '7',  label: 'Sick day rules',      group: 'Pharmacologic',         prompt: 'Do you know which medications to pause or adjust when you are unwell with vomiting, diarrhea or fever?' },
      { key: 'procedures',   letter: '8',  label: 'Procedures',          group: 'Procedural / surgical', prompt: 'Have you had any procedures or operations for it?' },
      { key: 'missed',       letter: '9',  label: 'Missed doses',        group: 'Adherence',             prompt: 'How often do you miss a dose?' },
      { key: 'barriers',     letter: '10', label: 'Barriers',            group: 'Adherence',             prompt: 'What makes it hard to take them (cost, side effects, complexity, beliefs)?' },
      { key: 'aids',         letter: '11', label: 'Aids',                group: 'Adherence',             prompt: 'Do you use a pill organizer, blister pack or reminders?' },
      { key: 'followUp',     letter: '12', label: 'Follow-up',           group: 'Adherence',             prompt: 'Do you attend your follow-up appointments?' }
    ]
  },

  complications: {
    id: 'complications',
    rows: [
      { key: 'disease',    letter: '1', label: 'Of the condition', prompt: 'Has the condition caused any complications (e.g. end-organ damage)?' },
      { key: 'treatment',  letter: '2', label: 'Of treatment',     prompt: 'Any complications from treatment?' },
      { key: 'admissions', letter: '3', label: 'Admissions',       prompt: 'Any recent hospital admissions? When, why, how long, any ICU stay?' },
      { key: 'procedures', letter: '4', label: 'Procedures',       prompt: 'Any recent surgery or procedures?' },
      { key: 'flares',     letter: '5', label: 'Flares',           prompt: 'Any flares or ED visits in the past 12 months?' }
    ]
  },

  'ongoing-symptoms': {
    id: 'ongoing-symptoms',
    rows: [
      { key: 'current', letter: '1', label: 'Current symptoms', prompt: 'What symptoms do you have now, compared with your usual?' },
      { key: 'trend',   letter: '2', label: 'Trend',            prompt: 'Are things improving, stable or worsening?' },
      { key: 'flares',  letter: '3', label: 'Flares',           prompt: 'How often do you have flares?' },
      { key: 'new',     letter: '4', label: 'New symptoms',     prompt: 'Any new symptoms?' }
    ]
  },

  'social-impact': {
    id: 'social-impact',
    rows: [
      { key: 'dressing',      letter: 'D', label: 'Dressing',                 group: 'ADLs (DEATH)',  prompt: 'Do you need help getting dressed?' },
      { key: 'eating',        letter: 'E', label: 'Eating',                   group: 'ADLs (DEATH)',  prompt: 'Do you need help eating?' },
      { key: 'ambulating',    letter: 'A', label: 'Ambulating / transfers',   group: 'ADLs (DEATH)',  prompt: 'Can you walk, and get in and out of bed or a chair, on your own? Any walking aid or falls?' },
      { key: 'toileting',     letter: 'T', label: 'Toileting / continence',   group: 'ADLs (DEATH)',  prompt: 'Can you manage the toilet on your own? Any incontinence?' },
      { key: 'hygiene',       letter: 'H', label: 'Hygiene / bathing',        group: 'ADLs (DEATH)',  prompt: 'Can you wash and bathe yourself?' },
      { key: 'shopping',      letter: 'S', label: 'Shopping',                 group: 'IADLs (SHAFT)', prompt: 'Can you do your own shopping?' },
      { key: 'housekeeping',  letter: 'H', label: 'Housekeeping',             group: 'IADLs (SHAFT)', prompt: 'Can you manage the housework?' },
      { key: 'accounting',    letter: 'A', label: 'Accounting / finances',    group: 'IADLs (SHAFT)', prompt: 'Can you manage your money and bills?' },
      { key: 'food',          letter: 'F', label: 'Food preparation',         group: 'IADLs (SHAFT)', prompt: 'Can you prepare your own meals?' },
      { key: 'transport',     letter: 'T', label: 'Transportation / driving', group: 'IADLs (SHAFT)', prompt: 'How do you get around? Do you drive?' },
      { key: 'work',          letter: '1', label: 'Work or study',            group: 'Wider impact',  prompt: 'How has it affected your work or study?' },
      { key: 'relationships', letter: '2', label: 'Relationships',            group: 'Wider impact',  prompt: 'How has it affected your relationships and your role in the family?' },
      { key: 'mood',          letter: '3', label: 'Mood and coping',          group: 'Wider impact',  prompt: 'How is your mood? How are you coping?' },
      { key: 'finances',      letter: '4', label: 'Finances',                 group: 'Wider impact',  prompt: 'Has it affected you financially?' },
      { key: 'supports',      letter: '5', label: 'Supports',                 group: 'Wider impact',  prompt: 'Do you have caregivers, services, home modifications or aids?' },
      { key: 'planning',      letter: '6', label: 'Advance care planning',    group: 'Wider impact',  prompt: 'Have you thought about advance care planning? (where appropriate)' },
      { key: 'ice',           letter: '7', label: 'Ideas and concerns',       group: 'Wider impact',  prompt: 'What do you think about the condition, and what worries you? (ICE)' }
    ]
  }
});

CHE.history.chronic = {
  id: 'chronic',
  title: 'Chronic History',
  description: 'For a regular review of a known long-term condition. The diagnosis is clear, so follow the condition from diagnosis to its effect on the patient\'s life today. Choose the condition to review from the library.',
  sections: [
    {
      id: 'diagnosis',
      title: 'Diagnosis',
      summary: 'What the condition is, and how well the patient understands it.',
      slots: ['condition'],
      core: [
        { type: 'framework', id: 'diagnosis' }
      ]
    },
    {
      id: 'risk-factors',
      title: 'Risk Factors',
      summary: 'What predisposed the patient to the condition, and what is still driving it.',
      slots: ['condition'],
      core: [
        { type: 'framework', id: 'risk-factors' }
      ]
    },
    {
      id: 'presentation',
      title: 'Presentation at Diagnosis',
      summary: 'How the condition first came to attention.',
      slots: ['condition'],
      core: [
        { type: 'framework', id: 'presentation' }
      ]
    },
    {
      id: 'investigations',
      title: 'Investigations',
      summary: 'Tests done at diagnosis, and how the condition has been monitored since.',
      slots: ['condition'],
      core: [
        { type: 'framework', id: 'investigations' }
      ]
    },
    {
      id: 'management',
      title: 'Management & Adherence',
      summary: 'Current and past treatment, who provides it, and how well the patient sticks to it.',
      slots: ['condition'],
      core: [
        { type: 'framework', id: 'management' },
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
      slots: ['condition'],
      core: [
        { type: 'framework', id: 'complications' }
      ]
    },
    {
      id: 'ongoing-symptoms',
      title: 'Ongoing Symptoms',
      summary: 'How well controlled the condition is now. Compare current symptoms with what is expected for the condition and for this patient.',
      slots: ['condition'],
      core: [
        { type: 'framework', id: 'ongoing-symptoms' },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Outside expectations? Take an acute history',
          text: 'If a symptom is new, clearly worse than usual, or a red flag, it falls outside what is expected for the patient\'s chronic condition. Take an acute history for it: the links under each condition open the matching presenting complaint in Acute History.'
        }
      ]
    },
    {
      id: 'social-impact',
      title: 'Social Impact',
      summary: 'How the condition affects the patient\'s function, roles and wellbeing.',
      slots: ['condition'],
      core: [
        { type: 'framework', id: 'social-impact' }
      ]
    }
  ]
};
