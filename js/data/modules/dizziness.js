/*
 * Dizziness: a multi-system complaint (inner ear, brainstem and cerebellum, heart and
 * circulation, blood and fluid loss, endocrine, medications, anxiety). Find out what the
 * patient means, then use timing and triggers. Unsteadiness hands off to movement-change;
 * blackouts to spells.
 *
 * Awaiting hand-off (answers with no matching presenting complaint yet; add `see`
 * and remove the line when one is added; see CLAUDE.md, "Multi-system complaints"):
 *   - Vertigo: ear pain or discharge                                        → ear pain complaint
 *   - Vertigo: sudden severe neck pain                                      → neck pain complaint
 *   - Lightheadedness: palpitations                                         → palpitations complaint
 *   - Lightheadedness: chest pain or dyspnea on exertion                    → chest pain / dyspnea complaint
 *   - Vertigo, lightheadedness: anxiety or panic                            → mood / anxiety complaint
 */
CHE.registerModule({
  id: 'dizziness',
  title: 'Dizziness',
  multiSystem: true,
  aka: ['vertigo', 'room spinning', 'spinning', 'lightheaded', 'lightheadedness', 'presyncope', 'near-fainting', 'giddy', 'woozy', 'off balance', 'BPPV'],
  tags: ['neurologic', 'cardiovascular'],
  summary: 'Dizziness means different things to different patients. First find out what they mean: spinning (vertigo), about to faint (lightheadedness), or unsteady on their feet. Then use timing (continuous or episodic) and triggers. Switch on only the features that apply.',
  ref: '',
  related: ['spells', 'movement-change', 'senses-change', 'headache', 'nausea-vomiting', 'weakness-numbness', 'fatigue', 'weight-change', 'appearance-change', 'upper-gi-symptoms', 'fecal-symptoms', 'polyuria-polydipsia', 'menstrual-sexual'],
  // Shared by all features (rendered as "All features"): the symptom SOCRATES. The shared
  // notes sort out what the patient means; each feature adds its answers through `sharedNotes`.
  pc: {
    framework: 'symptom',
    skip: ['site', 'radiation'],
    notes: {
      character: [
        'The room or I am spinning (tick Vertigo)',
        'About to faint, or lightheaded (tick Lightheadedness)',
        { text: 'Unsteady on my feet, but my head is clear', see: ['movement-change'] },
        'Vague, "muzzy" or detached'
      ],
      severity: [
        { text: 'Blacked out or fallen', see: ['spells', 'movement-change'] }
      ]
    }
  },
  parts: [
    {
      id: 'vertigo',
      title: 'Vertigo',
      summary: 'Timing and triggers separate the causes: brief episodes set off by head position (BPPV); spontaneous episodes lasting minutes to hours (vestibular migraine, Meniere disease, TIA); continuous vertigo for days (vestibular neuritis, or a posterior circulation stroke, which must not be missed).',
      sharedNotes: {
        onset: [
          { text: 'Suddenly', dx: ['Vestibular neuritis', 'Posterior circulation stroke'] },
          { text: 'After a cold or flu in the past few weeks', dx: ['Vestibular neuritis', 'Labyrinthitis'] }
        ],
        character: [
          { text: 'Constant rocking or swaying, worse in busy places, for months', dx: ['Persistent postural-perceptual dizziness'] }
        ],
        timing: [
          { text: 'Seconds, with each change in head position', dx: ['BPPV'] },
          { text: 'Minutes to hours, coming on by itself', dx: ['Vestibular migraine', 'Meniere disease'] },
          { text: 'Minutes, with double vision, slurred speech or weakness', dx: ['Posterior circulation stroke'] },
          { text: 'Continuous for days', dx: ['Vestibular neuritis', 'Posterior circulation stroke'] }
        ],
        exacerbating: [
          { text: 'Rolling over in bed, looking up or bending down', dx: ['BPPV'] },
          { text: 'Nothing; it comes out of the blue', dx: ['Meniere disease', 'Vestibular migraine'] },
          { text: 'There all the time; moving the head makes it worse', dx: ['Vestibular neuritis'] }
        ],
        severity: [
          { text: 'Can\'t stand or walk', dx: ['Posterior circulation stroke'] },
          { text: 'Can walk, but veers to one side', dx: ['Vestibular neuritis'] }
        ]
      },
      associated: [
        { text: 'Any hearing loss, tinnitus or ear fullness?', dx: ['Meniere disease', 'Labyrinthitis'], see: ['senses-change'] },
        { text: 'Any ear pain or discharge?', dx: ['Labyrinthitis'] },
        { text: 'Any double vision, slurred speech, numbness, weakness or clumsiness?', dx: ['Posterior circulation stroke'], see: ['weakness-numbness', 'senses-change'] },
        { text: 'Any headache, or discomfort with light or noise?', dx: ['Vestibular migraine', 'Posterior circulation stroke'], see: ['headache'] },
        { text: 'Any sudden severe neck pain?', dx: ['Posterior circulation stroke'] },
        { text: 'Any N/V?', dx: ['Vestibular neuritis', 'Meniere disease'], see: ['nausea-vomiting'] },
        { text: 'Any anxiety, or avoiding busy places because of it?', dx: ['Persistent postural-perceptual dizziness'] }
      ],
      redflags: [
        'Sudden continuous vertigo with headache, neck pain, double vision, slurred speech, weakness or inability to walk: posterior circulation stroke',
        'Continuous vertigo in an older patient with vascular risk factors, even without other signs: posterior circulation stroke until proven otherwise',
        'Sudden hearing loss with vertigo: labyrinthine infarct or sudden sensorineural hearing loss',
        'Vertigo with ear discharge and fever: complicated otitis media'
      ],
      history: {
        pmh: [
          'Any migraine?',
          'Any stroke, TIA, AF, HTN, DM or high cholesterol?',
          'Any recent ear infection, head injury or ear surgery?'
        ],
        meds: [
          'Any gentamicin or other aminoglycosides (vestibular toxicity)?',
          'Any antiseizure drugs or sedatives (unsteadiness)?'
        ],
        fhx: [
          'Any family history of migraine?'
        ],
        shx: [
          'Do you smoke? (stroke)',
          'Do you drive or work at heights?'
        ],
        sr: [
          'General: any fever?',
          'Head, eyes, ears, nose & throat: any hearing loss, tinnitus or ear pain?',
          'Gastrointestinal: any N/V?',
          'Neurologic: any headache, weakness or numbness?',
          'Psychiatric: any anxiety?'
        ]
      },
      differentials: [
        { name: 'BPPV', clues: 'Seconds of spinning with head movement, rolling over in bed or looking up' },
        { name: 'Vestibular neuritis', clues: 'Sudden continuous vertigo for days with N/V, no hearing loss; often after a viral illness' },
        { name: 'Labyrinthitis', clues: 'As vestibular neuritis, but with hearing loss; ear infection' },
        { name: 'Meniere disease', clues: 'Vertigo for 20 minutes to hours, ear fullness, tinnitus, fluctuating hearing loss' },
        { name: 'Vestibular migraine', clues: 'Episodes of minutes to hours, migraine history, light and noise sensitivity' },
        { name: 'Posterior circulation stroke or TIA', clues: 'Sudden vertigo with double vision, slurred speech, numbness, weakness or inability to walk; neck pain (dissection); vascular risk factors' },
        { name: 'Vestibular schwannoma', clues: 'Progressive one-sided hearing loss and tinnitus; imbalance more than vertigo' },
        { name: 'Persistent postural-perceptual dizziness', clues: 'Daily dizziness for months after a vestibular illness, worse in busy places and on moving' }
      ]
    },
    {
      id: 'lightheadedness',
      title: 'Lightheadedness',
      summary: 'Feeling about to faint (presyncope) means reduced blood flow to the brain. Separate orthostatic causes (on standing), reflex causes (triggers and warning), cardiac causes (with exertion or palpitations), and blood or fluid loss. Lightheadedness with tingling or fear suggests hyperventilation.',
      sharedNotes: {
        onset: [
          { text: 'After blood loss, vomiting, diarrhea or not drinking much', dx: ['Blood or fluid loss'] },
          { text: 'After starting or increasing BP medication', dx: ['Orthostatic hypotension'] }
        ],
        character: [
          { text: 'Warm, sweaty, nauseated, vision graying', dx: ['Vasovagal syncope'] },
          { text: 'Shaky, sweaty and hungry', dx: ['Hypoglycemia'] }
        ],
        timing: [
          { text: 'With palpitations that start and stop abruptly', dx: ['Arrhythmia'] },
          { text: 'Without any warning', dx: ['Arrhythmia'] }
        ],
        exacerbating: [
          { text: 'Within a few minutes of standing up', dx: ['Orthostatic hypotension', 'POTS'] },
          { text: 'Standing for a long time, in the heat, or with pain or the sight of blood', dx: ['Vasovagal syncope'] },
          { text: 'During exertion', dx: ['Structural heart disease'] },
          { text: 'When fasting or a few hours after a meal, on insulin or sulfonylureas', dx: ['Hypoglycemia'] },
          { text: 'With fast breathing, tingling or fear', dx: ['Hyperventilation'] },
          { text: 'Better lying down', dx: ['Orthostatic hypotension', 'Vasovagal syncope'] }
        ],
        severity: [
          { text: 'Blacked out', dx: ['Vasovagal syncope', 'Arrhythmia'], see: ['spells'] }
        ]
      },
      pc: {
        prompts: [
          'Have you checked your BP or BG during an episode?'
        ]
      },
      associated: [
        { text: 'Any palpitations?', dx: ['Arrhythmia'] },
        { text: 'Any chest pain or dyspnea on exertion?', dx: ['Structural heart disease', 'Arrhythmia'] },
        { text: 'Any fatigue or pallor?', dx: ['Anemia'], see: ['fatigue', 'skin-changes'] },
        { text: 'Any weight loss, salt craving or darker skin?', dx: ['Addison disease'], see: ['weight-change', 'appearance-change'] },
        { text: 'Any hematemesis, melena or hematochezia?', dx: ['Blood or fluid loss', 'Anemia'], see: ['upper-gi-symptoms', 'fecal-symptoms'] },
        { text: 'Any vomiting or diarrhea?', dx: ['Blood or fluid loss'], see: ['nausea-vomiting', 'diarrhea-constipation'] },
        { text: 'Any heavy periods?', dx: ['Anemia'], see: ['menstrual-sexual'] },
        { text: 'Any thirst or polyuria, or known DM?', dx: ['Hypoglycemia', 'Orthostatic hypotension'], see: ['polyuria-polydipsia'] },
        { text: 'Any tremor, slowness, or numbness in the feet?', dx: ['Orthostatic hypotension'], see: ['movement-change', 'weakness-numbness'] },
        { text: 'Any anxiety or panic attacks?', dx: ['Hyperventilation'] }
      ],
      redflags: [
        'Lightheadedness or syncope during exertion: aortic stenosis or hypertrophic cardiomyopathy',
        'With chest pain, palpitations or dyspnea: arrhythmia, ACS or PE',
        'Family history of sudden death under 40: inherited arrhythmia',
        'With hematemesis, melena or heavy bleeding: significant blood loss',
        'Dizziness on standing with vomiting, abdominal pain or darker skin: adrenal crisis'
      ],
      history: {
        pmh: [
          'Any heart disease, arrhythmia or valve problems?',
          'Any DM or Parkinson disease (autonomic failure)?',
          'Any anemia?'
        ],
        meds: [
          'Any antihypertensives, diuretics, alpha-blockers, nitrates or PDE5 inhibitors (orthostatic hypotension)?',
          'Any beta-blockers, digoxin or antiarrhythmics (bradycardia)?',
          'Any insulin or sulfonylureas (hypoglycemia)?',
          'Any corticosteroids recently stopped (adrenal insufficiency)?'
        ],
        fhx: [
          'Any family history of sudden death under 40?'
        ],
        shx: [
          'How much fluid and alcohol do you drink?',
          'Do you drive?'
        ],
        sr: [
          'General: any fatigue or weight loss?',
          'Cardiovascular: any palpitations or chest pain?',
          'Gastrointestinal: any melena or hematochezia?',
          'Genitourinary & reproductive: any heavy periods?',
          'Endocrine: any thirst or polyuria?',
          'Neurologic: any tremor or numbness?',
          'Psychiatric: any anxiety?'
        ]
      },
      differentials: [
        { name: 'Orthostatic hypotension', clues: 'On standing; antihypertensives, diuretics, dehydration, DM or Parkinson disease (autonomic failure)' },
        { name: 'POTS', clues: 'Young, often female; racing heart and lightheadedness on standing, without a fall in BP' },
        { name: 'Vasovagal syncope', clues: 'Prolonged standing, heat, pain or blood; warmth, nausea and sweating first' },
        { name: 'Arrhythmia', clues: 'Abrupt palpitations, no trigger, may black out without warning' },
        { name: 'Structural heart disease', clues: 'On exertion; aortic stenosis, hypertrophic cardiomyopathy' },
        { name: 'Blood or fluid loss', clues: 'GI bleeding, heavy periods, vomiting, diarrhea, poor intake' },
        { name: 'Anemia', clues: 'Fatigue, pallor, dyspnea on exertion' },
        { name: 'Hypoglycemia', clues: 'Shaky, sweaty, hungry; insulin or sulfonylureas' },
        { name: 'Addison disease', clues: 'Dizziness on standing, salt craving, darker skin, weight loss' },
        { name: 'Hyperventilation', clues: 'Fast breathing, tingling around the mouth and hands, fear' }
      ]
    }
  ]
});
