/*
 * Abdominal examination, focused on the abdomen: inspection, palpation with the signs of
 * peritoneal irritation (tenderness, guarding, rigidity, rebound and percussion tenderness),
 * the liver, spleen, kidneys and bladder, percussion for fluid, auscultation, and the special
 * tests (Murphy, Rovsing, psoas, obturator, Carnett, succussion splash, hernial orifices).
 * Peripheral signs of liver and kidney disease come from the system examinations.
 */
CHE.registerFocused({
  id: 'abdominal',
  title: 'Abdominal examination',
  aka: ['abdomen examination', 'acute abdomen', 'peritonism', 'peritonitis', 'tenderness', 'guarding', 'rebound', 'hepatomegaly', 'splenomegaly', 'ballotting', 'ascites', 'shifting dullness', 'Murphy sign', 'Rovsing sign', 'appendicitis'],
  tags: ['gastrointestinal'],
  summary: 'The abdomen only: inspect, palpate for tenderness and the signs of peritoneal irritation, feel for the liver, spleen, kidneys and bladder, percuss for fluid, listen, then the special tests.',
  ref: '',
  sections: [
    {
      id: 'preparation',
      title: 'Preparation',
      summary: 'Lie the patient flat, expose the abdomen, and find out where it hurts before you touch.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Introduce and consent',
              how: 'Wash your hands, introduce yourself and confirm the patient\'s identity. Explain the examination and ask for consent. Offer a chaperone.',
              say: 'I\'d like to examine your belly. It involves looking, pressing gently on different areas, tapping and listening. Is that all right? Would you like someone else in the room?'
            },
            {
              title: 'Ask where it hurts',
              how: 'Ask the patient to point to any pain. Examine that area last.',
              say: 'Do you have any pain in your belly at the moment? Can you point to where it hurts most? I\'ll leave that area until last.'
            },
            {
              title: 'Position and expose',
              how: 'Lie the patient flat with one pillow under the head and the arms by the sides, so the abdominal muscles relax. Expose from the lower chest to the groin, keeping the genitals covered. Warm your hands.',
              say: 'Could you lie flat on your back with your arms by your sides, and lift your top up to your chest? I\'ll keep you covered below.'
            }
          ]
        }
      ]
    },
    {
      id: 'inspection',
      title: 'Inspection',
      summary: 'From the end of the bed, then from the side at the level of the abdomen.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Look at the patient',
              how: 'Stand at the end of the bed and watch the patient for a moment.',
              lookFor: 'Whether the patient lies still or keeps moving, and how they breathe.',
              findings: [
                { text: 'Lying very still, with shallow breathing', dx: ['Peritonitis (movement hurts)'] },
                { text: 'Restless, writhing and unable to get comfortable', dx: ['Colic (biliary, renal or bowel)'] }
              ]
            },
            {
              title: 'Look at the abdomen',
              how: 'Crouch so your eyes are level with the abdomen, and look across it from the side, then from the front.',
              lookFor: 'Shape, symmetry, movement with breathing, scars, stomas, veins, pulsations, visible peristalsis and skin changes.',
              findings: [
                {
                  text: 'Generalized distension',
                  options: [
                    { text: 'Full flanks and an everted umbilicus', dx: ['Ascites'] },
                    { text: 'Tympanic and tense', dx: ['Bowel obstruction', 'Paralytic ileus'] },
                    { text: 'Central adiposity', dx: ['Obesity'] }
                  ]
                },
                { text: 'An asymmetric swelling', dx: ['Enlarged organ or mass'] },
                { text: 'The abdomen does not move with breathing', dx: ['Peritonitis'] },
                { text: 'Visible peristalsis', dx: ['Bowel obstruction'] },
                { text: 'Visible pulsation above the umbilicus', dx: ['AAA', 'Normal aorta in a thin patient'] },
                { text: 'Dilated veins radiating from the umbilicus (caput medusae)', dx: ['Portal hypertension'] },
                { text: 'Dilated veins on the flanks with blood flowing upward', dx: ['Inferior vena cava obstruction'] },
                { text: 'Bruising around the umbilicus (Cullen sign) or in the flanks (Grey Turner sign)', dx: ['Hemorrhagic pancreatitis', 'Retroperitoneal bleeding'] },
                { text: 'Purple striae wider than 1 cm', dx: ['Cushing syndrome'] },
                { text: 'Scars or a stoma', dx: ['Previous surgery (adhesions can cause obstruction)'] }
              ]
            },
            {
              title: 'Look for hernias',
              how: 'Watch the umbilicus, any scars and the groins while the patient coughs.',
              say: 'Could you give a big cough for me?',
              lookFor: 'A bulge that appears or grows on coughing.',
              findings: [
                { text: 'A bulge at the umbilicus or a scar on coughing', dx: ['Umbilical or incisional hernia'] },
                { text: 'A bulge in the groin on coughing', dx: ['Inguinal or femoral hernia'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'palpation',
      title: 'Palpation',
      summary: 'Light then deep palpation of the nine regions, watching the face, then the signs of peritoneal irritation, masses and the aorta.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Light palpation',
              how: 'Kneel or sit so your forearm is level with the abdomen. With the flat of your fingers, press gently in each of the nine regions, starting far from any pain and ending at it. Watch the patient\'s face, not your hand.',
              say: 'I\'m going to press gently on your belly. Let me know if anything is sore, and I\'ll keep watching your face too.',
              lookFor: 'Tenderness (a wince or a pulled face), guarding and rigidity.',
              findings: [
                {
                  text: 'Tenderness: note where it is',
                  options: [
                    { text: 'RUQ', dx: ['Cholecystitis', 'Hepatitis'] },
                    { text: 'Epigastrium', dx: ['PUD', 'Pancreatitis'] },
                    { text: 'RLQ', dx: ['Appendicitis', 'Ectopic pregnancy or ovarian torsion', 'Crohn disease'] },
                    { text: 'LLQ', dx: ['Diverticulitis'] },
                    { text: 'Suprapubic', dx: ['Cystitis', 'Urinary retention', 'PID'] },
                    { text: 'Flank', dx: ['Pyelonephritis', 'Urolithiasis'] },
                    { text: 'Diffuse', dx: ['Generalized peritonitis', 'Gastroenteritis'] }
                  ]
                },
                { text: 'Voluntary guarding: tensing that eases when the patient is distracted or breathes out', dx: ['Anxiety', 'Tenderness without peritonitis'] },
                { text: 'Involuntary guarding: reflex spasm over a tender area that does not ease', dx: ['Localized peritonitis'] },
                { text: 'Rigidity: a board-like abdomen throughout', dx: ['Generalized peritonitis (perforated viscus)'] },
                { text: 'Severe pain with a soft, barely tender abdomen (pain out of proportion)', dx: ['Mesenteric ischemia'] }
              ]
            },
            {
              title: 'Deep palpation',
              how: 'Press more firmly in each region, again ending at any painful area.',
              lookFor: 'Deeper tenderness and any mass. Describe a mass by site, size, shape, surface, consistency, tenderness, mobility, pulsation, and whether you can get above and below it.',
              findings: [
                { text: 'A tender mass in the RLQ', dx: ['Appendix mass or abscess', 'Crohn disease'] },
                { text: 'A hard, irregular mass', dx: ['Malignancy (e.g. CRC, gastric cancer)'] },
                { text: 'A mass in the LLQ that can be indented', dx: ['Feces'] }
              ]
            },
            {
              title: 'Test for peritoneal irritation',
              how: 'Percuss lightly over the tender area, or ask the patient to cough, and watch the face. Use percussion tenderness rather than pressing deeply and letting go suddenly (rebound), which is unkind and adds little.',
              say: 'I\'m going to tap gently over the sore area. Now could you give a cough for me?',
              lookFor: 'Pain on light percussion, on coughing, or when the hand is released.',
              findings: [
                { text: 'Pain on light percussion over the area (percussion tenderness)', dx: ['Peritoneal irritation'] },
                { text: 'Pain on release of deep pressure (rebound tenderness)', dx: ['Peritoneal irritation'] },
                { text: 'Pain on coughing at the tender site', dx: ['Peritoneal irritation'] },
                { text: 'Tenderness at the point one third of the way from the right anterior superior iliac spine to the umbilicus (McBurney point)', dx: ['Appendicitis'] }
              ]
            },
            {
              title: 'Feel the aorta',
              how: 'Place the fingers of both hands on either side of the midline, just above the umbilicus, and press gently.',
              lookFor: 'Whether the pulsation pushes your fingers upward (transmitted) or apart (expansile), and its width.',
              findings: [
                { text: 'An expansile pulsation wider than about 3 cm', dx: ['AAA'] },
                { text: 'A tender expansile mass with back pain or low BP', dx: ['Ruptured or leaking AAA'] },
                { text: 'A pulsation that only pushes the fingers upward', dx: ['Aorta transmitted through a mass', 'Normal aorta in a thin patient'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'organs',
      title: 'Liver, Spleen and Kidneys',
      summary: 'Feel for each organ from the RLQ upward, with the patient breathing in, then the bladder.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Feel for the liver',
              how: 'Start in the RLQ, so you do not miss a large liver. With the hand flat and the fingers pointing toward the head, press in as the patient breathes in, and move up toward the right costal margin between breaths.',
              say: 'Take a deep breath in for me, and out. And again.',
              lookFor: 'The liver edge meeting your fingers on breathing in. Measure how far below the costal margin it reaches, and note its surface, consistency, tenderness and pulsation.',
              findings: [
                { text: 'Smooth, tender edge', dx: ['Hepatitis', 'Right HF (congestion)'] },
                { text: 'Hard, irregular edge', dx: ['Metastases', 'HCC'] },
                { text: 'Firm, smooth, nontender edge', dx: ['MASLD', 'Early cirrhosis'] },
                { text: 'Pulsatile liver', dx: ['Tricuspid regurgitation'] },
                { text: 'Small or impalpable liver', dx: ['Cirrhosis', 'Normal'] }
              ]
            },
            {
              title: 'Percuss the liver span',
              how: 'In the right midclavicular line, percuss down from the chest until the note turns dull (upper border, normally about the fifth intercostal space), and up from the RLQ until it turns dull (lower border).',
              lookFor: 'The span between the two borders.',
              findings: [
                { text: 'Span over 13 cm', dx: ['Hepatomegaly'] },
                { text: 'Edge felt low, but a normal span', dx: ['Liver pushed down by hyperinflated lungs (COPD)'] }
              ]
            },
            {
              title: 'Feel for the gallbladder',
              how: 'Feel where the right costal margin meets the lateral edge of the rectus muscle.',
              lookFor: 'A smooth, rounded mass that moves with breathing.',
              findings: [
                { text: 'A palpable, nontender gallbladder with jaundice', dx: ['Obstruction by pancreatic cancer (Courvoisier law)'] }
              ]
            },
            {
              title: 'Feel for the spleen',
              how: 'Start in the RLQ and move diagonally toward the left costal margin, pressing in as the patient breathes in. If you cannot feel it, roll the patient onto the right side, support the left rib cage with your other hand, and feel again.',
              say: 'Breathe in deeply for me. Now could you roll toward me onto your right side?',
              lookFor: 'An edge that meets your fingers on breathing in. Note how far it extends toward the RLQ.',
              findings: [
                { text: 'Mildly enlarged spleen', dx: ['Infection (e.g. infectious mononucleosis)', 'Portal hypertension', 'Hemolysis'] },
                { text: 'Massive spleen, reaching the RLQ', dx: ['Myelofibrosis', 'Chronic myeloid leukemia', 'Malaria'] }
              ]
            },
            {
              title: 'Percuss for the spleen',
              how: 'Percuss the lowest intercostal space in the left anterior axillary line, first with the breath out and then with the breath held in.',
              lookFor: 'A note that turns dull on breathing in (Castell sign).',
              findings: [
                { text: 'Dull on breathing in', dx: ['Splenomegaly'] }
              ]
            },
            {
              title: 'Ballot the kidneys',
              how: 'For the right kidney, place your left hand behind the right flank and your right hand on the front of the abdomen, below the costal margin. Ask the patient to breathe in, and flick the back hand upward toward the front hand. Repeat on the left, reaching across the patient.',
              say: 'I\'m going to put one hand behind your back. Take a deep breath in for me.',
              lookFor: 'A mass that bounces against the front hand.',
              findings: [
                { text: 'Both kidneys enlarged and irregular', dx: ['PKD'] },
                { text: 'One kidney enlarged', dx: ['RCC', 'Obstructive uropathy', 'Simple cyst'] },
                { text: 'A smooth mass in the right or left iliac fossa', dx: ['Transplanted kidney'] }
              ]
            },
            {
              title: 'Tell a spleen from a kidney',
              how: 'Compare the features of a left upper quadrant mass.',
              findings: [
                { text: 'Has a notch, cannot get above it, moves down and toward the RLQ on breathing in, dull to percussion, not ballotable', dx: ['Spleen'] },
                { text: 'No notch, can get above it, moves straight down, resonant over it (bowel in front), ballotable', dx: ['Kidney'] }
              ]
            },
            {
              title: 'Feel and percuss the bladder',
              how: 'Feel and percuss from the umbilicus down toward the pubic symphysis.',
              lookFor: 'A dull, smooth suprapubic mass that you cannot get below.',
              findings: [
                { text: 'A dull suprapubic mass you cannot get below', dx: ['Urinary retention', 'Pregnant uterus', 'Fibroids'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'percussion',
      title: 'Percussion',
      summary: 'Percuss all nine regions, then test for fluid with shifting dullness and a fluid thrill.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Percuss the nine regions',
              how: 'Percuss each region, comparing the notes.',
              lookFor: 'Tympany over gas, and dullness over organs, masses or fluid.',
              findings: [
                { text: 'Tympanic throughout with distension', dx: ['Bowel obstruction', 'Paralytic ileus'] },
                { text: 'Dull over a mass', dx: ['Solid mass or enlarged organ'] }
              ]
            },
            {
              title: 'Shifting dullness',
              how: 'Percuss from the midline toward the flank, away from you, until the note turns dull, and keep your finger there. Roll the patient toward you, wait about 30 seconds for fluid to move, and percuss again. Then percuss back toward the midline to find the new dull level.',
              say: 'Could you roll onto your side toward me, and stay there for a moment?',
              lookFor: 'Whether the dull area becomes resonant after the patient rolls.',
              findings: [
                { text: 'The dull area turns resonant on rolling', dx: ['Ascites'] },
                { text: 'Dull flanks that do not shift', dx: ['Fluid-filled bowel', 'Large mass', 'Loculated fluid'] }
              ]
            },
            {
              title: 'Fluid thrill',
              how: 'For a tensely distended abdomen: ask the patient or an assistant to press the edge of a hand firmly along the midline. Flick one flank and feel with your other hand on the opposite flank.',
              say: 'Could you press the side of your hand down the middle of your belly, like this?',
              lookFor: 'A wave you can feel arrive on the opposite side.',
              findings: [
                { text: 'A palpable wave across the abdomen', dx: ['Large-volume ascites'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'auscultation',
      title: 'Auscultation',
      summary: 'Bowel sounds, then bruits and rubs.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Listen for bowel sounds',
              how: 'Place the diaphragm just below and to the right of the umbilicus. Listen for up to 2 minutes before calling bowel sounds absent.',
              lookFor: 'Whether sounds are present, and their pitch and frequency.',
              findings: [
                { text: 'No bowel sounds after 2 minutes', dx: ['Paralytic ileus', 'Generalized peritonitis'] },
                { text: 'High-pitched, tinkling sounds', dx: ['Bowel obstruction'] },
                { text: 'Loud, frequent gurgling (borborygmi)', dx: ['Gastroenteritis', 'Early obstruction'] }
              ]
            },
            {
              title: 'Listen for bruits and rubs',
              how: 'Listen over the aorta above the umbilicus, over each renal artery (2 to 3 cm above and lateral to the umbilicus), and over the liver and spleen.',
              lookFor: 'A whooshing bruit, or a creaking rub that changes with breathing.',
              findings: [
                { text: 'Aortic bruit', dx: ['AAA', 'Atherosclerosis'] },
                { text: 'Renal bruit', dx: ['Renal artery stenosis'] },
                { text: 'Bruit over the liver', dx: ['HCC', 'Alcohol-related hepatitis'] },
                { text: 'Friction rub over the liver or spleen', dx: ['Infarct', 'Tumor', 'Recent biopsy'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'special-tests',
      title: 'Special Tests',
      summary: 'Tests for cholecystitis and appendicitis, abdominal wall pain, gastric outlet obstruction and hernias.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Murphy sign',
              how: 'Place your fingers below the right costal margin in the midclavicular line and ask the patient to breathe in deeply. Repeat on the left to compare.',
              say: 'Take a deep breath in for me.',
              lookFor: 'The patient stopping the breath partway in because of pain, on the right but not the left.',
              findings: [
                { text: 'Breath stops with pain on the right only', dx: ['Acute cholecystitis'] }
              ]
            },
            {
              title: 'Rovsing sign',
              how: 'Press deeply in the LLQ.',
              lookFor: 'Pain felt in the RLQ.',
              findings: [
                { text: 'Pain in the RLQ on pressing the LLQ', dx: ['Appendicitis'] }
              ]
            },
            {
              title: 'Psoas sign',
              how: 'With the patient lying on the left side, extend the right hip. Alternatively, with the patient on the back, ask them to lift the straight right leg against your hand.',
              say: 'Could you lift your right leg straight up against my hand?',
              lookFor: 'RLQ pain on stretching or contracting the psoas.',
              findings: [
                { text: 'RLQ pain', dx: ['Retrocecal appendicitis', 'Psoas abscess'] }
              ]
            },
            {
              title: 'Obturator sign',
              how: 'Flex the right hip and knee to 90°, then rotate the hip inward by moving the foot outward.',
              lookFor: 'Pain deep in the pelvis or the RLQ.',
              findings: [
                { text: 'Pain on internal rotation', dx: ['Pelvic appendicitis', 'Obturator hernia'] }
              ]
            },
            {
              title: 'Carnett sign',
              how: 'Find the most tender spot, then ask the patient to lift the head and shoulders off the bed to tense the abdominal muscles, and press again.',
              say: 'Could you lift your head and shoulders off the bed, as if doing a sit-up, and hold it there?',
              lookFor: 'Whether the tenderness gets worse or eases with the muscles tensed.',
              findings: [
                { text: 'Tenderness the same or worse', dx: ['Abdominal wall pain (nerve entrapment, hernia, hematoma)'] },
                { text: 'Tenderness eases', dx: ['Intra-abdominal cause'] }
              ]
            },
            {
              title: 'Succussion splash',
              how: 'Place the stethoscope over the epigastrium and gently shake the patient\'s abdomen from side to side. Do this at least 3 hours after a meal.',
              say: 'I\'m going to rock your belly gently from side to side while I listen.',
              lookFor: 'A splashing sound.',
              findings: [
                { text: 'A splash more than 3 hours after eating', dx: ['Gastric outlet obstruction'] }
              ]
            },
            {
              title: 'Examine the hernial orifices',
              how: 'Ideally with the patient standing, feel over the inguinal and femoral canals and the umbilicus while the patient coughs. Find the pubic tubercle to tell the hernias apart.',
              say: 'Could you stand up for me? I\'m going to feel in your groin. Now give a big cough.',
              lookFor: 'A cough impulse, and whether a lump can be pushed back.',
              findings: [
                { text: 'A cough impulse above and medial to the pubic tubercle', dx: ['Inguinal hernia'] },
                { text: 'A lump below and lateral to the pubic tubercle', dx: ['Femoral hernia (high risk of strangulation)'] },
                { text: 'A tense, tender lump that cannot be pushed back', dx: ['Incarcerated or strangulated hernia'] }
              ]
            }
          ]
        },
        {
          type: 'redflags',
          title: 'Outside expectations: take an acute history',
          items: [
            { text: 'Rigidity, percussion tenderness or a patient lying very still: peritonitis (perforated viscus)', see: ['abdominal-pain'] },
            { text: 'Pain out of proportion to a soft abdomen: mesenteric ischemia', see: ['abdominal-pain'] },
            { text: 'A tender, expansile mass with back pain or low BP: ruptured AAA', see: ['abdominal-pain'] },
            { text: 'Distension, vomiting, tinkling or absent bowel sounds: bowel obstruction', see: ['nausea-vomiting', 'diarrhea-constipation'] },
            { text: 'A tense, tender hernia that cannot be pushed back: strangulation', see: ['abdominal-pain'] },
            { text: 'Bruising around the umbilicus or in the flanks: hemorrhagic pancreatitis or retroperitoneal bleeding', see: ['abdominal-pain'] },
            { text: 'Lower abdominal tenderness when the patient could be pregnant: ectopic pregnancy', see: ['abdominal-pain', 'menstrual-sexual'] },
            { text: 'Ascites with fever or tenderness: spontaneous bacterial peritonitis', see: ['swelling'] }
          ]
        },
        {
          type: 'list',
          title: 'To complete the examination',
          items: [
            'Examine the external genitalia (testes) and perform a DRE, with a chaperone',
            'Check the temperature, pulse, BP and respiratory rate',
            'Test the urine with a dipstick, and do a pregnancy test in anyone who could be pregnant',
            'Look for peripheral signs of liver and kidney disease with the system examinations'
          ]
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Thank the patient and help them cover up. Summarize: the appearance, any tenderness and its site, signs of peritoneal irritation, organ enlargement or masses, fluid, bowel sounds, and hernias.'
        }
      ]
    }
  ]
});
