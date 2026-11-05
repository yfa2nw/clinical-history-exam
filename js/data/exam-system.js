/*
 * System examination skeleton: general inspection, then head to toe (hands, arms, axillae,
 * face, neck, chest, abdomen, legs). Each region's general steps are a framework (defined
 * below, keyed by framework id); the chest and abdomen use IPA (inspection, palpation and
 * percussion, auscultation). Examinations (js/data/exams) add what to look for under the rows
 * through `frameworkNotes`, the way chronic conditions add questions to the chronic sections.
 * Steps are clinician actions, written as imperatives.
 */

(function () {
// IPA for a chest or abdominal region: the same three rows, with region-specific steps.
function ipa(id, title, steps) {
  return {
    id: id,
    title: title,
    rows: [
      { key: 'inspection',   letter: 'I', label: 'Inspection',               prompt: steps.inspection },
      { key: 'palpation',    letter: 'P', label: 'Palpation and percussion', prompt: steps.palpation },
      { key: 'auscultation', letter: 'A', label: 'Auscultation',             prompt: steps.auscultation }
    ]
  };
}

// One framework per region. Rows with a `group` render under that heading.
Object.assign(CHE.frameworks, {
  'general-inspection': {
    id: 'general-inspection',
    rows: [
      { key: 'wash',        letter: 'W', label: 'Wash hands',           group: 'Before you start (WIPER)', prompt: 'Wash or sanitize your hands.' },
      { key: 'introduce',   letter: 'I', label: 'Introduce',            group: 'Before you start (WIPER)', prompt: 'Introduce yourself, and confirm the patient\'s name and date of birth.' },
      { key: 'permission',  letter: 'P', label: 'Permission',           group: 'Before you start (WIPER)', prompt: 'Explain the examination and ask for consent. Ask about any pain before you start.' },
      { key: 'expose',      letter: 'E', label: 'Expose',               group: 'Before you start (WIPER)', prompt: 'Expose the areas you need, and keep the patient covered elsewhere.' },
      { key: 'reposition',  letter: 'R', label: 'Reposition',           group: 'Before you start (WIPER)', prompt: 'Position the patient for the examination (e.g. at 45° for the chest, flat for the abdomen).' },
      { key: 'appearance',  letter: '1', label: 'Overall appearance',   group: 'The patient',              prompt: 'Does the patient look well or unwell? In pain or distress?' },
      { key: 'habitus',     letter: '2', label: 'Body habitus',         group: 'The patient',              prompt: 'Note the build: obese, thin or cachectic, any obvious asymmetry or deformity.' },
      { key: 'color',       letter: '3', label: 'Color',                group: 'The patient',              prompt: 'Look for pallor, cyanosis and jaundice.' },
      { key: 'breathing',   letter: '4', label: 'Breathing',            group: 'The patient',              prompt: 'Count the respiratory rate. Note the effort and any audible sounds.' },
      { key: 'mental',      letter: '5', label: 'Mental state',         group: 'The patient',              prompt: 'Is the patient alert and oriented? Note speech and behavior.' },
      { key: 'movement',    letter: '6', label: 'Posture and movement', group: 'The patient',              prompt: 'Note the posture, gait and any abnormal movements.' },
      { key: 'surroundings', letter: '7', label: 'Surroundings',        group: 'Around the patient',       prompt: 'Look around the bed: oxygen, IV lines, drains, catheters, medications, mobility aids, food and drink, a sputum pot.' }
    ]
  },

  hands: {
    id: 'hands',
    rows: [
      { key: 'nails',   letter: '1', label: 'Nails',       prompt: 'Look at the nails and nail beds: shape, color, lines, pitting. Look from the side, and check capillary refill.' },
      { key: 'dorsal',  letter: '2', label: 'Dorsal side', prompt: 'Look at the backs of the hands: skin, joints, muscle wasting. Ask the patient to hold the arms out, and look for a tremor.' },
      { key: 'palmar',  letter: '3', label: 'Palmar side', prompt: 'Turn the hands over: palm color and creases, muscle bulk, thickened tissue. Feel the temperature and moisture.' }
    ]
  },

  arms: {
    id: 'arms',
    rows: [
      { key: 'pulse', letter: '1', label: 'Pulse',             prompt: 'Feel the radial pulse: rate and rhythm. Compare both sides.' },
      { key: 'bp',    letter: '2', label: 'Blood pressure',    prompt: 'Measure the BP, or note it from the chart.' },
      { key: 'skin',  letter: '3', label: 'Skin and muscles',  prompt: 'Look along the arms: bruising, scratch marks, injection sites, scars, muscle wasting.' }
    ]
  },

  axilla: {
    id: 'axilla',
    rows: [
      { key: 'inspection', letter: '1', label: 'Inspection',  prompt: 'Look at the skin and hair of each axilla.' },
      { key: 'nodes',      letter: '2', label: 'Lymph nodes', prompt: 'Support the patient\'s arm, and palpate the apical, central, anterior, posterior and lateral groups on each side.' }
    ]
  },

  face: {
    id: 'face',
    rows: [
      { key: 'forehead', letter: '1', label: 'Forehead', prompt: 'Look at the skin and hairline.' },
      { key: 'cheeks',   letter: '2', label: 'Cheeks',   prompt: 'Look at the color and contour, and for any rash or flushing.' },
      { key: 'eyes',     letter: '3', label: 'Eyes',     prompt: 'Look at the sclerae, the conjunctivae (pull down the lower lid), the eyelids, the pupils and the position of the eyes.' },
      { key: 'nose',     letter: '4', label: 'Nose',     prompt: 'Look at the shape, nostrils and any discharge.' },
      { key: 'ears',     letter: '5', label: 'Ears',     prompt: 'Look at the outer ears and the skin around them.' },
      { key: 'mouth',    letter: '6', label: 'Mouth',    prompt: 'Look at the lips, tongue, teeth, gums and mucosa, and note the hydration. Use a light.' }
    ]
  },

  neck: {
    id: 'neck',
    rows: [
      { key: 'inspection', letter: '1', label: 'Inspection',  prompt: 'Look for swelling, scars and visible pulsations. Ask the patient to swallow.' },
      { key: 'vessels',    letter: '2', label: 'Vessels',     prompt: 'Look at the JVP with the patient at 45°, and feel each carotid pulse in turn.' },
      { key: 'trachea',    letter: '3', label: 'Trachea',     prompt: 'Feel the position of the trachea.' },
      { key: 'thyroid',    letter: '4', label: 'Thyroid',     prompt: 'From behind, feel the thyroid as the patient swallows.' },
      { key: 'nodes',      letter: '5', label: 'Lymph nodes', prompt: 'From behind, palpate the submental, submandibular, preauricular, postauricular, occipital, anterior and posterior cervical, and supraclavicular nodes.' }
    ]
  },

  lungs: ipa('lungs', 'Lungs (IPA)', {
    inspection: 'Look at the shape and symmetry of the chest, the movement with breathing, scars, and the use of accessory muscles.',
    palpation: 'Feel the chest expansion, front and back. Percuss front, sides and back, comparing side to side.',
    auscultation: 'Listen front, sides and back, comparing side to side: breath sounds, added sounds, vocal resonance.'
  }),

  heart: ipa('heart', 'Heart (IPA)', {
    inspection: 'Look at the precordium: scars, deformity, visible pulsations.',
    palpation: 'Feel for the apex beat (position and character), heaves and thrills.',
    auscultation: 'Listen over the four valve areas with the diaphragm and the bell, timing against the carotid pulse: heart sounds, added sounds, murmurs. Roll the patient to the left, and sit them forward in expiration.'
  }),

  abdomen: ipa('abdomen', 'IPA', {
    inspection: 'With the patient flat, look at the shape, distension, scars, stomas, visible veins and pulsations. Ask the patient to cough, and look for hernias.',
    palpation: 'Palpate the nine regions, light then deep, watching the face. Feel for the liver, spleen and kidneys, and for an aortic pulsation. Percuss the liver and spleen, and for fluid.',
    auscultation: 'Listen for bowel sounds and for bruits over the aorta and renal arteries.'
  }),

  legs: {
    id: 'legs',
    rows: [
      { key: 'inspection', letter: '1', label: 'Inspection', prompt: 'Look at the skin, color, hair, scars, ulcers and muscle bulk. Compare both legs.' },
      { key: 'ankles',     letter: '2', label: 'Ankles',     prompt: 'Look for swelling. Press over the ankle and shin for 10 seconds, and look for a dent.' },
      { key: 'pulses',     letter: '3', label: 'Pulses',     prompt: 'Feel the temperature, and the femoral, popliteal, posterior tibial and dorsalis pedis pulses.' }
    ]
  }
});
})();

CHE.exam.system = {
  id: 'system',
  title: 'System Examination',
  description: 'A full examination of one system, usually from the end of the bed to the feet. Choose an examination from the library to add what to look for at each step.',
  sections: [
    {
      id: 'general-inspection',
      title: 'General Inspection',
      summary: 'Prepare the patient, then look at the patient and the surroundings before touching.',
      slots: ['exam'],
      core: [
        { type: 'framework', id: 'general-inspection' }
      ]
    },
    {
      id: 'hands',
      title: 'Hands',
      summary: 'Nails, then the backs of the hands, then the palms.',
      slots: ['exam'],
      core: [
        { type: 'framework', id: 'hands' }
      ]
    },
    {
      id: 'arms',
      title: 'Arms',
      summary: 'Pulse and BP, then the skin and muscles of the arms.',
      slots: ['exam'],
      core: [
        { type: 'framework', id: 'arms' }
      ]
    },
    {
      id: 'axilla',
      title: 'Axillae',
      summary: 'The skin, then the lymph nodes.',
      slots: ['exam'],
      core: [
        { type: 'framework', id: 'axilla' }
      ]
    },
    {
      id: 'face',
      title: 'Face',
      summary: 'From the forehead down: cheeks, eyes, nose, ears and mouth.',
      slots: ['exam'],
      core: [
        { type: 'framework', id: 'face' }
      ]
    },
    {
      id: 'neck',
      title: 'Neck',
      summary: 'Inspection, vessels, trachea, thyroid and lymph nodes.',
      slots: ['exam'],
      core: [
        { type: 'framework', id: 'neck' }
      ]
    },
    {
      id: 'chest',
      title: 'Chest',
      summary: 'The lungs, then the heart, each by inspection, palpation and percussion, and auscultation.',
      slots: ['exam'],
      core: [
        { type: 'framework', id: 'lungs' },
        { type: 'framework', id: 'heart' }
      ]
    },
    {
      id: 'abdomen',
      title: 'Abdomen',
      summary: 'Inspection, palpation and percussion, and auscultation, with the patient flat.',
      slots: ['exam'],
      core: [
        { type: 'framework', id: 'abdomen' }
      ]
    },
    {
      id: 'legs',
      title: 'Legs and Ankles',
      summary: 'The skin and muscles, ankle swelling, then the pulses.',
      slots: ['exam'],
      core: [
        { type: 'framework', id: 'legs' }
      ]
    }
  ]
};
