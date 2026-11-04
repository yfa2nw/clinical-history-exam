/*
 * Thyroid examination, focused on the neck: inspection (with the swallow and tongue tests),
 * palpation and percussion, auscultation, and the special tests for a retrosternal goiter
 * and nerve or airway compression. Thyroid status (tremor, eye signs, pulse, reflexes) comes
 * from the endocrine system examination.
 */
CHE.registerFocused({
  id: 'thyroid',
  title: 'Thyroid examination',
  aka: ['neck examination', 'goiter', 'thyroid nodule', 'thyroid lump', 'neck lump', 'Graves disease', 'Pemberton sign'],
  tags: ['endocrine'],
  summary: 'The neck only: inspect (swallow and tongue tests), palpate from behind, percuss for retrosternal extension, listen for a bruit, then the special tests. Thyroid status comes from the endocrine examination.',
  ref: '',
  sections: [
    {
      id: 'preparation',
      title: 'Preparation',
      summary: 'Seat the patient so you can stand behind them, with the neck exposed and a glass of water ready.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Introduce and consent',
              how: 'Wash your hands, introduce yourself and confirm the patient\'s identity. Explain the examination and ask for consent.',
              say: 'I\'d like to examine your neck to look at your thyroid gland. It involves looking, feeling from behind and listening. Is that all right? Do you have any pain or tenderness in your neck?'
            },
            {
              title: 'Position and expose',
              how: 'Seat the patient upright on a chair with space behind it. Expose the neck down to the clavicles, and use good light from the front.',
              say: 'Could you sit on this chair, please, and loosen your top so I can see your neck down to your collarbones?'
            },
            {
              title: 'Prepare the water',
              how: 'Give the patient a glass of water to hold for the swallow tests.',
              say: 'Please hold this glass of water. I\'ll ask you to take sips during the examination.'
            }
          ]
        }
      ]
    },
    {
      id: 'inspection',
      title: 'Inspection',
      summary: 'From the front and the side, then while the patient swallows and sticks the tongue out.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Look from the front and the side',
              how: 'Stand in front, then to the side. Ask the patient to tilt the head back slightly to bring the gland forward.',
              say: 'Could you tip your head back a little for me?',
              lookFor: 'Any swelling in the lower neck (midline or to one side), scars, redness and dilated veins.',
              findings: [
                { text: 'Diffuse swelling on both sides of the trachea', dx: ['Goiter'] },
                { text: 'A lump on one side', dx: ['Thyroid nodule or cyst'] },
                { text: 'A transverse scar low in the neck', dx: ['Past thyroidectomy'] },
                { text: 'Redness over the gland', dx: ['Subacute or suppurative thyroiditis'] },
                { text: 'Dilated veins over the neck and upper chest', dx: ['Retrosternal goiter (SVC obstruction)'] }
              ]
            },
            {
              title: 'Swallow test',
              how: 'Watch the swelling from the front as the patient swallows.',
              say: 'Please take a sip of water and hold it in your mouth. Now swallow.',
              lookFor: 'Whether the swelling rises and falls with swallowing, and whether its lower border appears.',
              findings: [
                { text: 'Rises with swallowing', dx: ['Thyroid (attached to the larynx by the pretracheal fascia)'] },
                { text: 'Does not move with swallowing', dx: ['Lymph node', 'Another neck mass'] },
                { text: 'The lower border never appears', dx: ['Retrosternal extension'] }
              ]
            },
            {
              title: 'Tongue protrusion test',
              how: 'Watch a midline swelling as the patient sticks the tongue out.',
              say: 'Now could you stick your tongue out as far as you can?',
              lookFor: 'Whether a midline swelling rises when the tongue comes out.',
              findings: [
                { text: 'A midline swelling that rises with the tongue', dx: ['Thyroglossal cyst (attached to the tongue base)'] },
                { text: 'Rises with swallowing but not with the tongue', dx: ['Thyroid swelling'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'palpation',
      title: 'Palpation and Percussion',
      summary: 'Feel the gland from behind, then the lymph nodes and trachea, and percuss for retrosternal extension.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Feel the gland from behind',
              how: 'Stand behind the patient. Flex the neck slightly to relax the sternocleidomastoids. Place the fingers of both hands just below the cricoid cartilage: the isthmus lies over the second to fourth tracheal rings. Feel each lobe in turn, working out from the isthmus.',
              say: 'I\'m going to feel your neck from behind now. Could you drop your chin slightly? Tell me if anything is tender.',
              lookFor: 'Size, shape (diffuse or nodular), consistency, tenderness and mobility. Measure any nodule.',
              findings: [
                { text: 'Smooth, diffuse enlargement', hormones: ['↑ Thyroid hormone'], dx: ['Graves disease', 'Simple goiter'] },
                { text: 'Firm, rubbery, diffuse enlargement', hormones: ['↓ Thyroid hormone'], dx: ['Hashimoto thyroiditis'] },
                { text: 'Multiple nodules', hormones: ['↑ Thyroid hormone'], dx: ['Toxic multinodular goiter', 'Nontoxic multinodular goiter'] },
                { text: 'A single nodule', dx: ['Adenoma or cyst', 'Thyroid cancer'] },
                { text: 'Hard, irregular and fixed to surrounding tissue', dx: ['Thyroid cancer', 'Riedel thyroiditis'] },
                { text: 'Tender gland', hormones: ['↑ Thyroid hormone'], dx: ['Subacute thyroiditis'] },
                { text: 'Sudden, painful swelling of a nodule', dx: ['Bleeding into a cyst'] }
              ]
            },
            {
              title: 'Feel the gland as the patient swallows',
              how: 'Keep your fingers on the gland as the patient swallows again.',
              say: 'Take another sip of water and swallow for me.',
              lookFor: 'The gland rising under your fingers, and whether you can feel below its lower border.',
              findings: [
                { text: 'Lower border cannot be felt', dx: ['Retrosternal extension'] }
              ]
            },
            {
              title: 'Feel the lymph nodes',
              how: 'From behind, feel the anterior and posterior cervical chains, then the supraclavicular nodes.',
              lookFor: 'Enlarged, hard or matted nodes.',
              findings: [
                { text: 'Hard, enlarged nodes with a thyroid nodule', dx: ['Thyroid cancer (papillary)'] },
                { text: 'Tender, enlarged nodes', dx: ['Infection'] }
              ]
            },
            {
              title: 'Feel the trachea',
              how: 'From the front, place a fingertip in the suprasternal notch and feel the trachea on each side.',
              say: 'I\'m just going to feel your windpipe. It may feel a little uncomfortable.',
              lookFor: 'Whether the trachea sits in the midline.',
              findings: [
                { text: 'Trachea pushed to one side', dx: ['Large or asymmetric goiter', 'Retrosternal goiter'] }
              ]
            },
            {
              title: 'Percuss for retrosternal extension',
              how: 'Percuss down over the manubrium from the suprasternal notch.',
              lookFor: 'Dullness over the manubrium (normally resonant).',
              findings: [
                { text: 'Dull over the manubrium', dx: ['Retrosternal goiter'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'auscultation',
      title: 'Auscultation',
      summary: 'Listen over each lobe for a bruit.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Listen over each lobe',
              how: 'Place the diaphragm of the stethoscope over each lobe while the patient holds the breath.',
              say: 'Please take a breath in, let it out, and hold it there for a moment.',
              lookFor: 'A bruit over the gland. Tell it apart from a carotid bruit (loudest higher up, over the artery) and a venous hum (disappears with light pressure over the internal jugular vein).',
              findings: [
                { text: 'Bruit over the gland', hormones: ['↑ Thyroid hormone'], dx: ['Graves disease (increased blood flow)'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'special-tests',
      title: 'Special Tests',
      summary: 'Retrosternal goiter, and compression of the recurrent laryngeal nerve or the airway.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Pemberton sign',
              how: 'Ask the patient to raise both arms above the head until they touch the ears, and hold them there for a minute. Watch the face and listen to the breathing.',
              say: 'Could you raise both arms above your head until they touch your ears, and hold them there for about a minute? Tell me straight away if you feel dizzy or short of breath.',
              lookFor: 'Facial plethora or cyanosis, distended neck veins, dyspnea or stridor.',
              findings: [
                { text: 'Facial plethora, dyspnea or stridor', dx: ['Retrosternal goiter compressing the thoracic inlet (SVC obstruction)'] }
              ]
            },
            {
              title: 'Voice and cough',
              how: 'Listen to the voice, then ask the patient to cough.',
              say: 'Could you tell me your name and address? Now give a cough for me.',
              lookFor: 'A hoarse voice, or a weak, breathy cough without the normal explosive start.',
              findings: [
                { text: 'Hoarse voice or weak, breathy cough', dx: ['Recurrent laryngeal nerve palsy (thyroid cancer, after thyroidectomy)'] }
              ]
            },
            {
              title: 'Breathing',
              how: 'Listen to the breathing at rest, close to the patient\'s mouth.',
              lookFor: 'Stridor: a harsh, high-pitched sound on breathing in.',
              findings: [
                { text: 'Stridor', dx: ['Tracheal compression by a large or retrosternal goiter'] }
              ]
            }
          ]
        },
        {
          type: 'redflags',
          title: 'Outside expectations: take an acute history',
          items: [
            { text: 'Stridor, dyspnea lying flat or a positive Pemberton sign: airway or thoracic inlet compression' },
            { text: 'Sudden painful swelling of a nodule: bleeding into a cyst, which can compress the airway' },
            { text: 'A rapidly growing, hard or fixed mass, especially with new hoarseness: anaplastic thyroid cancer or lymphoma' },
            { text: 'Dysphagia: compression of the esophagus', see: ['upper-gi-symptoms'] },
            { text: 'Fever, agitation, confusion or vomiting with signs of hyperthyroidism: thyroid storm', see: ['memory-thinking', 'nausea-vomiting'] },
            { text: 'Drowsiness, a low temperature or a slow pulse with signs of hypothyroidism: myxedema coma', see: ['memory-thinking'] },
            { text: 'A tender gland with high fever: suppurative thyroiditis' }
          ]
        },
        {
          type: 'list',
          title: 'To complete the examination',
          items: [
            'Assess thyroid status with the endocrine examination: tremor, eye signs, pulse, reflexes',
            'Request thyroid function tests (TSH, free thyroxine) and thyroid antibodies',
            'Request a thyroid ultrasound, and a fine-needle aspiration of any suspicious nodule',
            'Before thyroid surgery, check the vocal cords with laryngoscopy'
          ]
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Thank the patient, offer to help them dress, and summarize: the gland\'s size, shape and consistency, any nodule, retrosternal extension, a bruit, and the patient\'s thyroid status.'
        }
      ]
    }
  ]
});
