/*
 * Liver examination: the signs of chronic liver disease, its causes (alcohol, MASLD, viral
 * hepatitis, hemochromatosis, Wilson disease, PBC), portal hypertension and decompensation
 * (jaundice, ascites, encephalopathy, bleeding). The heart is left out; the axillae are kept
 * (hair loss, acanthosis nigricans).
 */
CHE.registerExam({
  id: 'liver',
  title: 'Liver examination',
  aka: ['hepatic examination', 'chronic liver disease examination', 'stigmata of chronic liver disease', 'cirrhosis', 'portal hypertension', 'jaundice', 'ascites', 'gastrointestinal examination'],
  tags: ['gastrointestinal'],
  summary: 'Look for the signs of chronic liver disease and its cause, then for portal hypertension and decompensation: jaundice, ascites, encephalopathy and bleeding.',
  ref: '',
  skip: ['heart'],
  // Added under the rows of each region's framework.
  frameworkNotes: {
    'general-inspection': {
      appearance: [{ text: 'Distended abdomen with thin limbs', dx: ['Ascites with muscle wasting (cirrhosis)'] }],
      habitus: [
        { text: 'Muscle wasting', dx: ['Malnutrition in cirrhosis'] },
        { text: 'Central obesity', dx: ['MASLD'] }
      ],
      color: [
        { text: 'Jaundice', dx: ['Decompensated cirrhosis', 'Cholestasis'] },
        { text: 'Pallor', dx: ['GI bleeding', 'Anemia'] },
        { text: 'Slate-gray or bronze skin', dx: ['Hemochromatosis'] }
      ],
      mental: [
        { text: 'Drowsiness, confusion or slowed responses', dx: ['Hepatic encephalopathy'] },
        { text: 'Agitation, sweating or tremor', dx: ['Alcohol withdrawal'] }
      ],
      surroundings: ['Lactulose, diuretics or a paracentesis drain at the bedside']
    },
    hands: {
      nails: [
        { text: 'Leukonychia (white nails)', dx: ['Hypoalbuminemia (cirrhosis)'] },
        { text: 'Clubbing', dx: ['Cirrhosis', 'IBD'] },
        { text: 'Koilonychia (spoon-shaped nails)', dx: ['Iron deficiency (GI blood loss)'] },
        { text: 'Blue lunules', dx: ['Wilson disease'] }
      ],
      dorsal: [
        { text: 'Asterixis (flapping tremor with the wrists extended)', dx: ['Hepatic encephalopathy'] },
        { text: 'Fine tremor', dx: ['Alcohol withdrawal'] },
        { text: 'Swelling of the second and third knuckles', dx: ['Hemochromatosis arthropathy'] }
      ],
      palmar: [
        { text: 'Palmar erythema (red thenar and hypothenar eminences)', dx: ['Cirrhosis'] },
        { text: 'Dupuytren contracture (thickened palmar fascia, a bent finger)', dx: ['Alcohol use'] },
        { text: 'Pale palmar creases', dx: ['Anemia'] }
      ]
    },
    arms: {
      pulse: [{ text: 'Tachycardia', dx: ['GI bleeding', 'Sepsis', 'Alcohol withdrawal'] }],
      bp: [{ text: 'Low BP', dx: ['GI bleeding', 'Sepsis', 'Hepatorenal syndrome'] }],
      skin: [
        { text: 'Bruising', dx: ['Coagulopathy'] },
        { text: 'Petechiae', dx: ['Thrombocytopenia from hypersplenism'] },
        { text: 'Scratch marks', dx: ['Cholestasis (PBC, primary sclerosing cholangitis)'] },
        { text: 'Spider nevi (a central arteriole with radiating vessels that blanch on pressure)', dx: ['Cirrhosis'] },
        { text: 'Injection sites or tattoos', dx: ['Viral hepatitis'] },
        { text: 'Muscle wasting', dx: ['Malnutrition in cirrhosis'] }
      ]
    },
    axilla: {
      inspection: [
        { text: 'Loss of axillary hair', dx: ['Hypogonadism in cirrhosis'] },
        { text: 'Dark, velvety skin (acanthosis nigricans)', dx: ['Insulin resistance (MASLD)'] }
      ]
    },
    face: {
      cheeks: [
        { text: 'Bilateral swelling in front of the ears (parotid enlargement)', dx: ['Alcohol use'] },
        { text: 'Spider nevi or telangiectasia', dx: ['Cirrhosis'] }
      ],
      eyes: [
        { text: 'Scleral icterus', dx: ['Jaundice'] },
        { text: 'Conjunctival pallor', dx: ['Anemia'] },
        { text: 'A brown-green ring at the edge of the cornea (Kayser-Fleischer ring)', dx: ['Wilson disease'] },
        { text: 'Yellow plaques on the eyelids (xanthelasma)', dx: ['PBC'] }
      ],
      mouth: [
        { text: 'Sweet, musty breath (fetor hepaticus)', dx: ['Hepatic encephalopathy'] },
        { text: 'Smooth, red tongue or cracks at the corners of the mouth', dx: ['Nutritional deficiency'] },
        { text: 'Telangiectasia on the lips and tongue', dx: ['Hereditary hemorrhagic telangiectasia'] }
      ]
    },
    neck: {
      vessels: [{ text: 'Raised JVP', dx: ['Right HF (congestive hepatopathy)'] }],
      nodes: [{ text: 'An enlarged left supraclavicular node (Virchow node)', dx: ['Gastric or other GI cancer'] }]
    },
    lungs: {
      inspection: [
        { text: 'Gynecomastia', dx: ['Cirrhosis', 'Spironolactone'] },
        { text: 'More than 5 spider nevi over the upper chest', dx: ['Cirrhosis'] },
        { text: 'Loss of chest hair', dx: ['Hypogonadism in cirrhosis'] }
      ],
      palpation: [{ text: 'Stony dullness at the right base', dx: ['Hepatic hydrothorax'] }],
      auscultation: [{ text: 'Reduced breath sounds at the right base', dx: ['Hepatic hydrothorax'] }]
    },
    abdomen: {
      inspection: [
        { text: 'Distension with full flanks and an everted umbilicus', dx: ['Ascites'] },
        { text: 'Dilated veins radiating from the umbilicus (caput medusae)', dx: ['Portal hypertension'] },
        { text: 'Umbilical hernia', dx: ['Ascites'] },
        {
          text: 'Scars',
          options: [
            { text: 'Curved scar under both costal margins (rooftop or Mercedes)', dx: ['Liver transplant', 'Liver resection'] },
            { text: 'Small puncture marks in the flanks', dx: ['Paracentesis'] }
          ]
        }
      ],
      palpation: [
        {
          text: 'Feel for the liver edge from the RLQ up, with breathing',
          options: [
            { text: 'Enlarged, smooth and tender', dx: ['Hepatitis', 'Right HF'] },
            { text: 'Enlarged, hard and irregular', dx: ['HCC', 'Metastases'] },
            { text: 'Enlarged and pulsatile', dx: ['Tricuspid regurgitation'] },
            { text: 'Small or impalpable', dx: ['Cirrhosis'] }
          ]
        },
        { text: 'Splenomegaly', dx: ['Portal hypertension'] },
        { text: 'Palpable, nontender gallbladder with jaundice', dx: ['Pancreatic cancer'] },
        { text: 'Liver span over 13 cm on percussion', dx: ['Hepatomegaly'] },
        { text: 'Shifting dullness', dx: ['Ascites'] },
        { text: 'Fluid thrill', dx: ['Tense ascites'] }
      ],
      auscultation: [
        { text: 'Bruit over the liver', dx: ['HCC', 'Alcohol-related hepatitis'] },
        { text: 'Venous hum near the umbilicus', dx: ['Portal hypertension'] },
        { text: 'Friction rub over the liver', dx: ['Liver tumor', 'Recent liver biopsy'] }
      ]
    },
    legs: {
      inspection: [
        { text: 'Bruising', dx: ['Coagulopathy'] },
        { text: 'Muscle wasting', dx: ['Malnutrition in cirrhosis'] }
      ],
      ankles: [{ text: 'Pitting edema', dx: ['Hypoalbuminemia', 'Fluid retention in cirrhosis'] }]
    }
  },
  // Stands apart from the rows: steps after the head-to-toe examination.
  sections: {
    legs: [
      {
        type: 'redflags',
        title: 'Outside expectations: take an acute history',
        items: [
          { text: 'Hematemesis or melena, with tachycardia or low BP: variceal bleeding', see: ['upper-gi-symptoms', 'fecal-symptoms'] },
          { text: 'Confusion, drowsiness or asterixis: hepatic encephalopathy', see: ['memory-thinking'] },
          { text: 'Fever or abdominal tenderness with ascites: spontaneous bacterial peritonitis', see: ['abdominal-pain'] },
          { text: 'Tense ascites with dyspnea: large-volume ascites', see: ['swelling'] },
          { text: 'New or deepening jaundice: decompensation or alcohol-related hepatitis', see: ['skin-changes'] },
          { text: 'Little urine with low BP: hepatorenal syndrome', see: ['urinary-symptoms'] },
          { text: 'A hard, irregular liver, a hepatic bruit or weight loss: HCC', see: ['weight-change'] }
        ]
      },
      {
        type: 'list',
        title: 'To complete the examination',
        items: [
          'Test for encephalopathy: orientation, and ask the patient to draw a five-pointed star',
          'Examine the hernial orifices and the external genitalia (testicular atrophy)',
          'Perform a DRE: melena',
          'Test the urine with a dipstick: bilirubin, urobilinogen',
          'Check the weight, temperature and stool chart'
        ]
      },
      {
        type: 'callout',
        variant: 'tip',
        text: 'Summarize: signs of chronic liver disease, clues to the cause (alcohol, MASLD, viral hepatitis, hemochromatosis, Wilson disease), and whether it is decompensated (jaundice, ascites, encephalopathy, bleeding), with portal hypertension (splenomegaly, caput medusae).'
      }
    ]
  }
});
