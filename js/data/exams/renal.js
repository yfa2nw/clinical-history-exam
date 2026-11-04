/*
 * Renal examination: signs of CKD and its causes (DM, HTN, PKD, vasculitis and SLE), volume
 * status, uremia, and kidney replacement therapy (AV fistula, PD catheter, transplant).
 * The axillae are left out; the back (renal angles, sacral edema) is examined with the
 * patient sitting forward.
 */
CHE.registerExam({
  id: 'renal',
  title: 'Renal examination',
  aka: ['kidney examination', 'CKD examination', 'uremia', 'dialysis', 'AV fistula', 'kidney transplant', 'volume status'],
  tags: ['renal'],
  summary: 'Look for the signs of CKD and its causes (DM, HTN, PKD, vasculitis, SLE), assess volume status, and look for uremia and signs of kidney replacement therapy: an AV fistula, a PD catheter or a transplant.',
  ref: '',
  skip: ['axilla'],
  // Added under the rows of each region's framework.
  frameworkNotes: {
    'general-inspection': {
      appearance: [{ text: 'Sallow, yellow-brown skin', dx: ['Uremia'] }],
      habitus: [
        { text: 'Cushingoid appearance', dx: ['Corticosteroids after a transplant'] },
        { text: 'Muscle wasting', dx: ['Advanced CKD'] }
      ],
      color: [{ text: 'Pallor', dx: ['Anemia of CKD'] }],
      breathing: [
        { text: 'Deep, sighing breathing (Kussmaul)', dx: ['Metabolic acidosis'] },
        { text: 'Dyspnea at rest', dx: ['Pulmonary edema'] },
        { text: 'Hiccups', dx: ['Uremia'] }
      ],
      mental: [{ text: 'Drowsiness or confusion', dx: ['Uremic encephalopathy'] }],
      movement: [{ text: 'Twitching or jerking of the limbs', dx: ['Uremia'] }],
      surroundings: [
        'A dialysis machine, PD bags or a fluid chart',
        'A urinary catheter: note the volume and color of urine'
      ]
    },
    hands: {
      nails: [
        { text: 'Leukonychia (white nails)', dx: ['Hypoalbuminemia (nephrotic syndrome)'] },
        { text: 'Paired white bands across the nail (Muehrcke lines)', dx: ['Hypoalbuminemia (nephrotic syndrome)'] },
        { text: 'Half-and-half nails: pale proximal half, red-brown distal half', dx: ['CKD'] },
        { text: 'Splinter hemorrhages', dx: ['Vasculitis', 'IE'] }
      ],
      dorsal: [
        { text: 'Asterixis (flapping tremor with the wrists extended)', dx: ['Uremia'] },
        { text: 'Gouty tophi', dx: ['Gout (urate nephropathy)'] },
        { text: 'Tight, shiny skin of the fingers (sclerodactyly)', dx: ['Systemic sclerosis'] }
      ],
      palmar: [{ text: 'Pale palmar creases', dx: ['Anemia of CKD'] }]
    },
    arms: {
      pulse: [{ text: 'Irregularly irregular pulse', dx: ['AF'] }],
      bp: [
        { text: 'High BP', dx: ['HTN (cause or effect of CKD)'] },
        { text: 'A fall in BP on standing', dx: ['Volume depletion'] },
        'Do not measure the BP in an arm with an AV fistula'
      ],
      skin: [
        {
          text: 'AV fistula at the wrist or elbow: look, feel and listen',
          options: [
            'A thrill on palpation and a continuous bruit: working fistula',
            'No thrill or bruit: thrombosed fistula',
            'Redness, tenderness or discharge: infected fistula',
            'Needle marks along the fistula: in use for hemodialysis'
          ]
        },
        { text: 'Bruising', dx: ['Uremic platelet dysfunction', 'Anticoagulation for dialysis'] },
        { text: 'Scratch marks', dx: ['Uremic pruritus'] },
        { text: 'Purpura or a vasculitic rash', dx: ['Vasculitis'] }
      ]
    },
    face: {
      cheeks: [
        { text: 'Butterfly rash over the cheeks and nose', dx: ['SLE'] },
        { text: 'Rounded face (moon face)', dx: ['Corticosteroids after a transplant'] }
      ],
      eyes: [
        { text: 'Conjunctival pallor', dx: ['Anemia of CKD'] },
        { text: 'Jaundice', dx: ['Hepatorenal syndrome'] },
        { text: 'A gray-white band across the edge of the cornea (band keratopathy)', dx: ['Hypercalcemia'] },
        { text: 'Puffy eyelids', dx: ['Nephrotic syndrome'] }
      ],
      nose: [{ text: 'Collapsed nasal bridge (saddle nose)', dx: ['GPA'] }],
      mouth: [
        { text: 'Dry mucous membranes', dx: ['Volume depletion'] },
        { text: 'Ammonia-like breath (uremic fetor)', dx: ['Uremia'] },
        { text: 'Mouth ulcers', dx: ['SLE', 'Vasculitis'] },
        { text: 'Gum hypertrophy', dx: ['Cyclosporine after a transplant'] }
      ]
    },
    neck: {
      inspection: [
        { text: 'Scars or a tunneled catheter in the neck', dx: ['Current or past hemodialysis'] },
        { text: 'A transverse scar low in the neck', dx: ['Parathyroidectomy for secondary hyperparathyroidism'] }
      ],
      vessels: [
        { text: 'Raised JVP', dx: ['Fluid overload'] },
        { text: 'JVP not visible lying flat', dx: ['Volume depletion'] }
      ],
      nodes: [{ text: 'Enlarged nodes after a transplant', dx: ['Post-transplant lymphoproliferative disorder'] }]
    },
    lungs: {
      inspection: ['Scars from a previous tunneled catheter on the upper chest'],
      palpation: [{ text: 'Stony dullness at the bases', dx: ['Pleural effusion (fluid overload, nephrotic syndrome)'] }],
      auscultation: [
        { text: 'Fine bibasal crackles', dx: ['Pulmonary edema'] },
        { text: 'Reduced breath sounds at the bases', dx: ['Pleural effusion'] }
      ]
    },
    heart: {
      palpation: [{ text: 'Displaced or heaving apex beat', dx: ['LVH from HTN', 'HF'] }],
      auscultation: [
        { text: 'Pericardial rub', dx: ['Uremic pericarditis'] },
        { text: 'Third heart sound', dx: ['Fluid overload'] },
        { text: 'Fourth heart sound', dx: ['LVH from HTN'] }
      ]
    },
    abdomen: {
      inspection: [
        {
          text: 'Scars and catheters',
          options: [
            { text: 'Curved scar in the right or left iliac fossa', dx: ['Kidney transplant'] },
            { text: 'Flank scar', dx: ['Nephrectomy'] },
            { text: 'A catheter exiting the lower abdomen', dx: ['PD'] },
            { text: 'Small scars from previous PD catheters', dx: ['Past PD'] }
          ]
        },
        { text: 'Distension', dx: ['Enlarged polycystic kidneys', 'Ascites'] }
      ],
      palpation: [
        {
          text: 'Ballot each kidney between both hands',
          options: [
            { text: 'Both kidneys enlarged and irregular', dx: ['PKD'] },
            { text: 'One kidney enlarged', dx: ['RCC', 'Obstructive uropathy'] }
          ]
        },
        { text: 'Smooth mass in the iliac fossa, dull to percussion', dx: ['Transplanted kidney'] },
        { text: 'Tenderness over a transplanted kidney', dx: ['Rejection', 'Pyelonephritis'] },
        { text: 'Enlarged liver', dx: ['Polycystic liver disease (PKD)'] },
        { text: 'Dull suprapubic mass that the hands cannot get below', dx: ['Urinary retention'] },
        { text: 'Shifting dullness', dx: ['Ascites (nephrotic syndrome)', 'PD fluid'] },
        { text: 'Sit the patient forward: renal angle tenderness', dx: ['Pyelonephritis'] },
        { text: 'Sit the patient forward: sacral edema', dx: ['Fluid overload', 'Nephrotic syndrome'] }
      ],
      auscultation: [
        { text: 'Bruit above and to one side of the umbilicus', dx: ['Renal artery stenosis'] },
        { text: 'Bruit over a transplanted kidney', dx: ['Transplant renal artery stenosis'] }
      ]
    },
    legs: {
      inspection: [
        { text: 'Purpura', dx: ['Vasculitis'] },
        { text: 'Scratch marks', dx: ['Uremic pruritus'] },
        { text: 'Painful dark patches or ulcers of the skin', dx: ['Calciphylaxis'] },
        { text: 'Gouty tophi', dx: ['Gout'] }
      ],
      ankles: [{ text: 'Pitting edema', dx: ['Fluid overload', 'Nephrotic syndrome'] }],
      pulses: [{ text: 'Reduced or absent foot pulses', dx: ['Peripheral vascular disease'] }]
    }
  },
  // Stands apart from the rows: steps after the head-to-toe examination.
  sections: {
    legs: [
      {
        type: 'list',
        title: 'To complete the examination',
        items: [
          'Test the urine with a dipstick: blood, protein, leukocytes, nitrites, glucose',
          'Measure the BP lying and standing',
          'Look at the fundi: hypertensive or diabetic retinopathy',
          'Check the weight and fluid balance chart',
          'Examine the sensation in the feet: peripheral neuropathy',
          'Consider a DRE (prostate)'
        ]
      }
    ]
  }
});
