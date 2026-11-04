/*
 * Endocrine examination: one head-to-toe pass for the thyroid, adrenal, pituitary, DM,
 * calcium (PTH) and androgen excess. Many signs come from more than one hormone, so each
 * finding names the hormones behind it (↑ elevated, ↓ lowered) as well as what it suggests.
 */
CHE.registerExam({
  id: 'endocrine',
  title: 'Endocrine examination',
  aka: ['thyroid examination', 'diabetes examination', 'Cushing syndrome', 'acromegaly', 'Addison disease', 'pituitary examination', 'adrenal examination', 'hormones'],
  tags: ['endocrine'],
  summary: 'One pass for the thyroid, adrenal glands, pituitary, DM, calcium and androgens. Each finding notes the hormones behind it (↑ elevated, ↓ lowered), since many signs have more than one hormonal cause.',
  ref: '',
  // Added under the rows of each region's framework.
  frameworkNotes: {
    'general-inspection': {
      appearance: [
        { text: 'Restless, fidgety or anxious', hormones: ['↑ Thyroid hormone'], dx: ['Hyperthyroidism'] },
        { text: 'Slow movements and speech, hoarse voice', hormones: ['↓ Thyroid hormone'], dx: ['Hypothyroidism'] }
      ],
      habitus: [
        { text: 'Central obesity with thin limbs', hormones: ['↑ Cortisol'], dx: ['Cushing syndrome'] },
        { text: 'Coarse features, large hands and jaw', hormones: ['↑ GH'], dx: ['Acromegaly'] },
        { text: 'Weight loss', hormones: ['↑ Thyroid hormone', '↓ Insulin', '↓ Cortisol'], dx: ['Hyperthyroidism', 'Type 1 DM', 'Addison disease'] },
        { text: 'Weight gain', hormones: ['↓ Thyroid hormone', '↑ Cortisol'], dx: ['Hypothyroidism', 'Cushing syndrome'] },
        { text: 'Central obesity', hormones: ['↑ Insulin'], dx: ['Insulin resistance (type 2 DM, PMOS)'] }
      ],
      color: [
        { text: 'Generalized hyperpigmentation, worst in sun-exposed areas and creases', hormones: ['↑ ACTH', '↓ Cortisol'], dx: ['Addison disease'] },
        { text: 'Pale, waxy skin with little pigment', hormones: ['↓ Pituitary hormones'], dx: ['Hypopituitarism'] },
        { text: 'Facial plethora', hormones: ['↑ Cortisol'], dx: ['Cushing syndrome'] }
      ],
      breathing: [{ text: 'Deep, sighing breathing (Kussmaul)', hormones: ['↓ Insulin'], dx: ['DKA'] }],
      mental: [
        { text: 'Drowsiness, confusion or sweating', hormones: ['↑ Insulin'], dx: ['Hypoglycemia (insulin, sulfonylurea)'] },
        { text: 'Agitation or delirium with fever', hormones: ['↑ Thyroid hormone'], dx: ['Thyroid storm'] },
        { text: 'Low mood or slowed thinking', hormones: ['↓ Thyroid hormone', '↑ Cortisol'], dx: ['Hypothyroidism', 'Cushing syndrome'] }
      ],
      surroundings: ['A BG meter, insulin pens, a CGM sensor or a steroid emergency card']
    },
    hands: {
      nails: [
        { text: 'Nail separating from the nail bed (onycholysis)', hormones: ['↑ Thyroid hormone'], dx: ['Hyperthyroidism'] },
        { text: 'Clubbing with finger swelling (thyroid acropachy)', dx: ['Graves disease'] }
      ],
      dorsal: [
        { text: 'Fine tremor of the outstretched hands', hormones: ['↑ Thyroid hormone'], dx: ['Hyperthyroidism'] },
        { text: 'Large, broad hands with thick fingers', hormones: ['↑ GH'], dx: ['Acromegaly'] },
        { text: 'Pigmented knuckles', hormones: ['↑ ACTH'], dx: ['Addison disease'] },
        { text: 'Stiff fingers that cannot press flat together (prayer sign)', hormones: ['↓ Insulin'], dx: ['Diabetic cheiroarthropathy'] }
      ],
      palmar: [
        { text: 'Warm, sweaty palms', hormones: ['↑ Thyroid hormone'], dx: ['Hyperthyroidism'] },
        { text: 'Cool, dry palms', hormones: ['↓ Thyroid hormone'], dx: ['Hypothyroidism'] },
        { text: 'Soft, doughy, sweaty palms', hormones: ['↑ GH'], dx: ['Acromegaly'] },
        { text: 'Pigmented palmar creases', hormones: ['↑ ACTH'], dx: ['Addison disease'] },
        { text: 'Thenar wasting, or tingling on tapping the wrist (carpal tunnel syndrome)', hormones: ['↑ GH', '↓ Thyroid hormone'], dx: ['Acromegaly', 'Hypothyroidism'] }
      ]
    },
    arms: {
      pulse: [
        { text: 'Tachycardia or AF', hormones: ['↑ Thyroid hormone'], dx: ['Hyperthyroidism'] },
        { text: 'Bradycardia', hormones: ['↓ Thyroid hormone'], dx: ['Hypothyroidism'] }
      ],
      bp: [
        {
          text: 'High BP',
          options: [
            { text: 'With central obesity and striae', hormones: ['↑ Cortisol'], dx: ['Cushing syndrome'] },
            { text: 'With low potassium', hormones: ['↑ Aldosterone'], dx: ['Primary hyperaldosteronism'] },
            { text: 'Episodic, with headache, sweating and palpitations', hormones: ['↑ Catecholamines'], dx: ['Pheochromocytoma'] },
            { text: 'With coarse features', hormones: ['↑ GH'], dx: ['Acromegaly'] }
          ]
        },
        { text: 'A fall in BP on standing', hormones: ['↓ Cortisol', '↓ Aldosterone'], dx: ['Addison disease'] },
        { text: 'Inflate the cuff above systolic for 3 minutes: carpal spasm (Trousseau sign)', hormones: ['↓ PTH'], dx: ['Hypocalcemia'] }
      ],
      skin: [
        { text: 'Thin skin and easy bruising', hormones: ['↑ Cortisol'], dx: ['Cushing syndrome'] },
        { text: 'Difficulty raising the arms above the head (proximal weakness)', hormones: ['↑ Cortisol', '↑ Thyroid hormone'], dx: ['Cushing syndrome', 'Hyperthyroidism'] },
        { text: 'Slow relaxation of the biceps reflex', hormones: ['↓ Thyroid hormone'], dx: ['Hypothyroidism'] },
        { text: 'Lumpy injection sites (lipohypertrophy)', dx: ['Insulin injected in the same spot'] }
      ]
    },
    axilla: {
      inspection: [
        { text: 'Dark, velvety skin (acanthosis nigricans)', hormones: ['↑ Insulin'], dx: ['Insulin resistance (type 2 DM, PMOS)', 'Acromegaly'] },
        { text: 'Skin tags', hormones: ['↑ GH', '↑ Insulin'], dx: ['Acromegaly', 'Insulin resistance'] },
        { text: 'Pigmented skin creases', hormones: ['↑ ACTH'], dx: ['Addison disease'] },
        { text: 'Loss of axillary hair', hormones: ['↓ Sex hormones'], dx: ['Hypopituitarism', 'Hypogonadism'] }
      ]
    },
    face: {
      forehead: [
        { text: 'Prominent brow (frontal bossing)', hormones: ['↑ GH'], dx: ['Acromegaly'] },
        { text: 'Loss of the outer third of the eyebrows', hormones: ['↓ Thyroid hormone'], dx: ['Hypothyroidism'] },
        { text: 'Temporal hair loss', hormones: ['↑ Androgens'], dx: ['PMOS', 'Androgen-secreting tumor'] }
      ],
      cheeks: [
        { text: 'Round, red face (moon face)', hormones: ['↑ Cortisol'], dx: ['Cushing syndrome'] },
        { text: 'Hirsutism on the upper lip and chin', hormones: ['↑ Androgens'], dx: ['PMOS', 'CAH', 'Cushing syndrome'] },
        { text: 'Acne', hormones: ['↑ Androgens', '↑ Cortisol'], dx: ['PMOS', 'Cushing syndrome'] }
      ],
      eyes: [
        { text: 'Lid retraction and lid lag', hormones: ['↑ Thyroid hormone'], dx: ['Hyperthyroidism'] },
        { text: 'Bulging eyes (exophthalmos), red swollen conjunctivae or restricted eye movements', dx: ['Graves eye disease'] },
        { text: 'Puffy eyelids', hormones: ['↓ Thyroid hormone'], dx: ['Hypothyroidism'] },
        { text: 'Loss of the outer visual fields (bitemporal hemianopia)', hormones: ['↑ Prolactin', '↑ GH', '↓ Pituitary hormones'], dx: ['Pituitary tumor'] }
      ],
      nose: [{ text: 'Broad, fleshy nose', hormones: ['↑ GH'], dx: ['Acromegaly'] }],
      ears: [{ text: 'Tap over the facial nerve in front of the ear: twitching of the mouth (Chvostek sign)', hormones: ['↓ PTH'], dx: ['Hypocalcemia'] }],
      mouth: [
        { text: 'Large tongue, widely spaced teeth or a jutting jaw', hormones: ['↑ GH'], dx: ['Acromegaly'] },
        { text: 'Pigmented patches inside the cheeks and on the gums', hormones: ['↑ ACTH'], dx: ['Addison disease'] },
        { text: 'Oral thrush', hormones: ['↓ Insulin'], dx: ['Poorly controlled DM'] }
      ]
    },
    neck: {
      inspection: [
        { text: 'A swelling that rises on swallowing', dx: ['Goiter'] },
        { text: 'A transverse scar low in the neck', dx: ['Past thyroidectomy or parathyroidectomy'] },
        { text: 'Fat pad over the upper back (buffalo hump) and above the collarbones', hormones: ['↑ Cortisol'], dx: ['Cushing syndrome'] }
      ],
      trachea: [{ text: 'Trachea pushed to one side', dx: ['Large or retrosternal goiter'] }],
      thyroid: [
        {
          text: 'Feel the gland from behind, then listen over it',
          options: [
            { text: 'Smooth, diffuse goiter with a bruit', hormones: ['↑ Thyroid hormone'], dx: ['Graves disease'] },
            { text: 'Multiple nodules', hormones: ['↑ Thyroid hormone'], dx: ['Toxic multinodular goiter', 'Nontoxic multinodular goiter'] },
            { text: 'Firm, rubbery goiter', hormones: ['↓ Thyroid hormone'], dx: ['Hashimoto thyroiditis'] },
            { text: 'Tender gland', hormones: ['↑ Thyroid hormone'], dx: ['Subacute thyroiditis'] },
            { text: 'A single hard nodule', dx: ['Thyroid cancer'] }
          ]
        }
      ],
      nodes: [{ text: 'Enlarged nodes with a thyroid nodule', dx: ['Thyroid cancer'] }]
    },
    lungs: {
      inspection: [
        { text: 'Gynecomastia', hormones: ['↓ Sex hormones', '↑ Prolactin'], dx: ['Hypogonadism', 'Prolactinoma'] },
        { text: 'Hair on the chest and around the nipples in a woman', hormones: ['↑ Androgens'], dx: ['PMOS', 'Androgen-secreting tumor'] }
      ]
    },
    heart: {
      palpation: [{ text: 'Displaced apex beat', hormones: ['↑ GH', '↑ Thyroid hormone'], dx: ['Acromegalic cardiomyopathy', 'Thyrotoxic HF'] }],
      auscultation: [
        { text: 'Flow murmur', hormones: ['↑ Thyroid hormone'], dx: ['Hyperthyroidism'] },
        { text: 'Quiet heart sounds', hormones: ['↓ Thyroid hormone'], dx: ['Pericardial effusion in hypothyroidism'] }
      ]
    },
    abdomen: {
      inspection: [
        { text: 'Purple striae wider than 1 cm', hormones: ['↑ Cortisol'], dx: ['Cushing syndrome'] },
        { text: 'Lumpy injection sites (lipohypertrophy)', dx: ['Insulin injected in the same spot'] },
        { text: 'Male-pattern hair from the pubis to the umbilicus in a woman', hormones: ['↑ Androgens'], dx: ['PMOS', 'Androgen-secreting tumor'] }
      ],
      palpation: [{ text: 'Enlarged liver', hormones: ['↑ Insulin'], dx: ['MASLD (insulin resistance)'] }]
    },
    legs: {
      inspection: [
        { text: 'Shiny, yellow-brown plaques on the shins (necrobiosis lipoidica)', dx: ['DM'] },
        { text: 'Small brown scars on the shins (diabetic dermopathy)', dx: ['DM'] },
        { text: 'Raised, firm, orange-peel plaques on the shins (pretibial myxedema)', dx: ['Graves disease'] },
        { text: 'Foot ulcers, calluses or deformity', hormones: ['↓ Insulin'], dx: ['Diabetic foot'] },
        { text: 'Difficulty rising from a chair without the arms (proximal weakness)', hormones: ['↑ Cortisol', '↑ Thyroid hormone'], dx: ['Cushing syndrome', 'Hyperthyroidism'] }
      ],
      ankles: [
        { text: 'Slow relaxation of the ankle reflex', hormones: ['↓ Thyroid hormone'], dx: ['Hypothyroidism'] },
        { text: 'Non-pitting swelling', hormones: ['↓ Thyroid hormone'], dx: ['Myxedema'] },
        { text: 'Pitting edema', hormones: ['↑ Cortisol'], dx: ['Cushing syndrome'] }
      ],
      pulses: [{ text: 'Reduced or absent foot pulses', hormones: ['↓ Insulin'], dx: ['Peripheral vascular disease in DM'] }]
    }
  },
  // Stands apart from the rows: steps after the head-to-toe examination.
  sections: {
    legs: [
      {
        type: 'list',
        title: 'To complete the examination',
        items: [
          'Check the BG, and test the urine for glucose and ketones',
          'Measure the height, weight, BMI and waist',
          'Test the visual fields, and look at the fundi: diabetic retinopathy, papilledema',
          'Measure the BP lying and standing',
          'Test foot sensation with a monofilament and a tuning fork',
          'Compare with old photographs: gradual change in Cushing syndrome or acromegaly',
          'Consider examining the external genitalia (testicular volume) and the breasts (galactorrhea)'
        ]
      }
    ]
  }
});
