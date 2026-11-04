/*
 * Diabetic foot examination, focused on the feet: inspection (ulcers, infection, deformity),
 * vascular assessment (temperature, capillary refill, pulses, Buerger test), neurologic
 * assessment (monofilament, vibration, proprioception, pinprick, ankle reflexes), then
 * footwear, gait and the foot risk category. Not IPA: auscultation has little role, and the
 * vascular and neurologic tests carry the risk assessment.
 */
CHE.registerFocused({
  id: 'diabetic-foot',
  title: 'Diabetic foot examination',
  aka: ['foot examination', 'diabetes foot check', 'foot ulcer', 'monofilament', 'peripheral neuropathy', 'Charcot foot', 'annual diabetes review'],
  tags: ['endocrine'],
  summary: 'The feet only: look for ulcers, infection and deformity, assess the circulation and sensation, check the footwear and gait, and assign a foot risk category.',
  ref: '',
  sections: [
    {
      id: 'preparation',
      title: 'Preparation',
      summary: 'Lie the patient back with both legs exposed to the knees, and keep the shoes and socks to inspect later.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Introduce and consent',
              how: 'Wash your hands, introduce yourself and confirm the patient\'s identity. Explain the examination and ask for consent.',
              say: 'I\'d like to examine your feet to check the skin, the circulation and the feeling, which diabetes can affect. It involves looking, feeling, and some simple tests with a thin plastic filament and a tuning fork. Is that all right? Do you have any pain in your feet or legs?'
            },
            {
              title: 'Position and expose',
              how: 'Lie the patient back on the couch. Expose both legs to the knees, with shoes and socks off. Put the shoes and socks aside to inspect at the end.',
              say: 'Could you take off your shoes and socks, roll your trousers up to your knees, and lie back on the couch for me?'
            }
          ]
        }
      ]
    },
    {
      id: 'inspection',
      title: 'Inspection',
      summary: 'Both feet, top and sole, heels and between the toes. Compare one side with the other.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Look at the skin',
              how: 'Look at the top of each foot, then lift each foot to see the sole and heel, and spread the toes to look between them.',
              say: 'I\'m just going to look under your feet and between your toes.',
              lookFor: 'Ulcers, calluses, cracks, redness, swelling, discharge, black areas, and the color and hair of the skin.',
              findings: [
                { text: 'Painless ulcer over a pressure point (metatarsal heads, heel), ringed by callus', dx: ['Neuropathic ulcer'] },
                { text: 'Painful, punched-out ulcer on the toes or the edges of the foot, with a pale base', dx: ['Ischemic ulcer'] },
                { text: 'Callus over pressure points', dx: ['Abnormal loading from neuropathy (ulcer risk)'] },
                { text: 'Redness, warmth, swelling, pus or a spreading red area', dx: ['Diabetic foot infection', 'Cellulitis'] },
                { text: 'A black toe or patch', dx: ['Gangrene (dry: ischemia; wet: infection)'] },
                { text: 'Pale, shiny, hairless skin with thickened nails', dx: ['Peripheral vascular disease'] },
                { text: 'Dry, cracked skin', dx: ['Autonomic neuropathy (reduced sweating)'] },
                { text: 'Scaling between the toes or thickened, discolored nails', dx: ['Tinea pedis or onychomycosis (entry point for infection)'] }
              ]
            },
            {
              title: 'Look at the shape of the foot',
              how: 'Look at both feet from the front, the side and below, comparing them.',
              lookFor: 'Toe deformity, prominent metatarsal heads, a collapsed arch, swelling, and amputations.',
              findings: [
                { text: 'Clawed or hammer toes with prominent metatarsal heads', dx: ['Motor neuropathy (new pressure points)'] },
                { text: 'Bunions or other bony prominences', dx: ['Pressure points (ulcer risk)'] },
                { text: 'A hot, swollen foot, often painless', dx: ['Acute Charcot neuroarthropathy', 'Infection'] },
                { text: 'Collapsed arch with a rounded sole (rocker-bottom foot)', dx: ['Chronic Charcot neuroarthropathy'] },
                { text: 'Previous toe or forefoot amputation', dx: ['Past ulcer or gangrene (high risk)'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'vascular',
      title: 'Vascular Assessment',
      summary: 'Temperature, capillary refill, the foot pulses, then the Buerger test if the circulation is in doubt.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Feel the temperature',
              how: 'Run the back of your hand down each shin to the toes, comparing the two sides at each level.',
              lookFor: 'A cold foot, a temperature change partway down the leg, or one foot warmer than the other.',
              findings: [
                { text: 'Cool foot, or a sharp drop in temperature down the leg', dx: ['Peripheral vascular disease'] },
                { text: 'One foot clearly warmer than the other', dx: ['Acute Charcot neuroarthropathy', 'Infection'] }
              ]
            },
            {
              title: 'Check capillary refill',
              how: 'Press the tip of the big toe for 5 seconds, release, and time how long the color takes to return.',
              lookFor: 'A refill time over 2 seconds.',
              findings: [
                { text: 'Capillary refill over 2 seconds', dx: ['Peripheral vascular disease'] }
              ]
            },
            {
              title: 'Feel the foot pulses',
              how: 'Feel the dorsalis pedis pulse on the top of the foot, just lateral to the extensor hallucis longus tendon, and the posterior tibial pulse behind and below the medial malleolus. If either is absent, feel the popliteal and femoral pulses.',
              say: 'I\'m going to feel for the pulses in your feet. My hands may be a little cold.',
              lookFor: 'Whether each pulse is present, weak or absent, comparing the two sides.',
              findings: [
                { text: 'Weak or absent foot pulses', dx: ['Peripheral vascular disease'] },
                { text: 'Strong pulses with an ulcer on the sole', dx: ['Neuropathic ulcer'] }
              ]
            },
            {
              title: 'Buerger test',
              how: 'With the patient lying flat, raise one leg to 45° and hold it for 1 to 2 minutes, watching the sole. Note the angle at which the foot turns pale. Then sit the patient up with the legs hanging over the side of the couch.',
              say: 'I\'m going to lift your leg and hold it up for a minute or two. Tell me if it becomes painful. Now could you sit up and hang your legs over the side of the couch?',
              lookFor: 'Pallor on raising the leg, then the color on hanging it down.',
              findings: [
                { text: 'Sole turns pale when raised, especially below 20° (Buerger angle)', dx: ['Severe peripheral vascular disease'] },
                { text: 'Foot turns dusky red when hanging down (dependent rubor)', dx: ['Critical limb ischemia'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'neurologic',
      title: 'Neurologic Assessment',
      summary: 'Protective sensation with the monofilament, then vibration, proprioception, pinprick and the ankle reflexes.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Monofilament test (10 g)',
              how: 'Show the patient the feeling on the hand or sternum first. With the patient\'s eyes closed, press the filament against the skin until it bends, for 1 to 2 seconds, on the pads of the big toe and the first, third and fifth metatarsal heads. Avoid calluses, scars and ulcers, and vary the timing so the patient cannot guess.',
              say: 'I\'m going to touch your hand with this first so you know what it feels like. Now please close your eyes, and say "yes" each time you feel it touch your foot.',
              lookFor: 'Any site where the patient does not feel the filament.',
              findings: [
                { text: 'Cannot feel the filament at one or more sites', dx: ['Loss of protective sensation (peripheral neuropathy, high ulcer risk)'] }
              ]
            },
            {
              title: 'Vibration sense',
              how: 'Strike a 128 Hz tuning fork and place it on the sternum first, then on the bony tip of the big toe. Ask the patient to say when the buzzing stops, then stop it yourself to check. If it is absent, move up to the medial malleolus, then the tibial tuberosity.',
              say: 'Can you feel this buzzing on your chest? Now close your eyes and tell me when you feel the buzzing on your toe, and when it stops.',
              lookFor: 'Reduced or absent vibration at the toe, and the level where it returns.',
              findings: [
                { text: 'Reduced or absent vibration at the big toe', dx: ['Large-fiber peripheral neuropathy (often the earliest sign)'] }
              ]
            },
            {
              title: 'Proprioception',
              how: 'Hold the sides of the big toe and move it up or down, first with the patient watching, then with the eyes closed.',
              say: 'This is up, and this is down. Now close your eyes and tell me which way I move your toe.',
              lookFor: 'Wrong answers with the eyes closed.',
              findings: [
                { text: 'Cannot tell which way the toe moves', dx: ['Large-fiber peripheral neuropathy'] }
              ]
            },
            {
              title: 'Pinprick sensation',
              how: 'With a disposable neurotip, test sharp sensation from the toes upward on each foot and leg, comparing with a normal area such as the thigh.',
              say: 'Tell me whether this feels sharp or dull.',
              lookFor: 'The level where sharp sensation returns.',
              findings: [
                { text: 'Reduced sensation below a level on both legs (stocking distribution)', dx: ['Length-dependent peripheral neuropathy'] }
              ]
            },
            {
              title: 'Ankle reflexes',
              how: 'With the knee slightly bent and the foot gently dorsiflexed, strike the Achilles tendon. If absent, ask the patient to clasp the hands and pull (reinforcement) and try again.',
              say: 'Let your leg go floppy for me. Now hook your fingers together and pull hard as I tap.',
              lookFor: 'A reduced or absent reflex.',
              findings: [
                { text: 'Absent ankle reflexes', dx: ['Peripheral neuropathy'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'footwear',
      title: 'Footwear and Gait',
      summary: 'The shoes and socks, then the walk. Finish with the foot risk category.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Inspect the shoes and socks',
              how: 'Look inside and outside each shoe, and at the socks.',
              lookFor: 'Fit, wear pattern, objects inside the shoe, and blood or discharge on the socks.',
              findings: [
                { text: 'Tight, narrow or worn-out shoes', dx: ['Ulcer risk from pressure'] },
                { text: 'Blood or discharge on the socks', dx: ['Unnoticed ulcer'] },
                { text: 'A stone or other object inside the shoe', dx: ['Loss of protective sensation'] },
                { text: 'Uneven wear on the sole', dx: ['Abnormal gait or foot deformity'] }
              ]
            },
            {
              title: 'Watch the patient walk',
              how: 'Ask the patient to walk a few steps away from you, turn and walk back.',
              say: 'Could you walk to the door for me, turn around and come back?',
              lookFor: 'Foot drop, unsteadiness and how the foot lands.',
              findings: [
                { text: 'High-stepping gait with the foot slapping down', dx: ['Foot drop (motor neuropathy)'] },
                { text: 'Unsteady gait that worsens in the dark or with the eyes closed', dx: ['Sensory ataxia (loss of proprioception)'] }
              ]
            }
          ]
        },
        {
          type: 'groups',
          title: 'Foot risk category',
          groups: [
            { title: 'Low risk', items: ['Normal sensation and pulses, no deformity: review yearly'] },
            { title: 'Moderate risk', items: ['One risk factor (neuropathy, absent pulses or deformity): podiatry review'] },
            { title: 'High risk', items: ['Two or more risk factors, or a previous ulcer or amputation, or on dialysis: frequent podiatry review'] },
            { title: 'Active foot problem', items: ['Ulcer, infection, Charcot foot, critical ischemia or gangrene: refer to the foot team the same day'] }
          ]
        },
        {
          type: 'redflags',
          title: 'Outside expectations: take an acute history',
          items: [
            { text: 'Spreading redness, swelling, pus or fever: diabetic foot infection', see: ['skin-changes'] },
            { text: 'A hot, swollen foot without a wound: acute Charcot neuroarthropathy', see: ['swelling'] },
            { text: 'A cold, pale, painful foot: critical limb ischemia' },
            { text: 'A black area on a toe or the foot: gangrene', see: ['skin-changes'] }
          ]
        },
        {
          type: 'list',
          title: 'To complete the examination',
          items: [
            'Measure the ABI with a handheld Doppler if the pulses are weak or absent',
            'Check the BG and HbA1c',
            'Request a foot X-ray if osteomyelitis or Charcot foot is suspected, and swab any infected wound',
            'Refer to podiatry or the foot team according to the risk category',
            'Teach foot care: check the feet daily, never walk barefoot, and seek help early for any wound'
          ]
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Thank the patient and let them dress. Summarize: the skin and any ulcer, the circulation, sensation and reflexes, the footwear, and the risk category.'
        }
      ]
    }
  ]
});
