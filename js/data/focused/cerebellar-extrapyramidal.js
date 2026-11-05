/*
 * Cerebellar and extrapyramidal examination: coordination and movement, to tell a cerebellar
 * syndrome (ataxia, intention tremor, dysmetria, nystagmus, scanning speech; signs on the
 * same side as the lesion) from parkinsonism (rest tremor, rigidity, bradykinesia, postural
 * instability). Power, sensation and reflexes in full come from the peripheral neurologic
 * examination.
 */
CHE.registerFocused({
  id: 'cerebellar-extrapyramidal',
  title: 'Cerebellar and extrapyramidal examination',
  aka: ['cerebellar examination', 'parkinsonism examination', 'movement disorder examination', 'coordination', 'ataxia', 'tremor', 'bradykinesia', 'rigidity', 'nystagmus', 'DANISH', 'Parkinson disease'],
  tags: ['neurologic'],
  summary: 'Gait, eyes, speech and limb coordination, to tell a cerebellar syndrome (ataxia, intention tremor, nystagmus, scanning speech) from parkinsonism (rest tremor, rigidity, bradykinesia, postural instability).',
  ref: '',
  sections: [
    {
      id: 'inspection',
      title: 'Preparation and General Inspection',
      summary: 'Consent, then watch the patient at rest: posture, face, tremor, movements, sitting balance and speech.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Introduce and consent',
              how: 'Wash your hands, introduce yourself and confirm the patient\'s identity. Explain the examination and ask for consent. Expose the arms and legs, and sit the patient on a chair without arms.',
              say: 'I\'d like to check your balance, coordination and movements. I\'ll ask you to walk, follow my finger with your eyes, and do some movements with your hands and feet. Is that all right? Do you have any pain or problems with walking?'
            },
            {
              title: 'Watch the patient at rest',
              how: 'Watch for a minute while talking with the patient, with the hands resting in the lap.',
              lookFor: 'Facial expression and blinking, posture, tremor at rest, and any extra movements.',
              findings: [
                { text: 'Expressionless face with reduced blinking (hypomimia)', dx: ['Parkinsonism'] },
                { text: 'Stooped, flexed posture', dx: ['Parkinsonism'] },
                { text: 'Rest tremor of one hand that eases with movement', dx: ['Parkinson disease'] },
                { text: 'Writhing or jerky extra movements', dx: ['Levodopa-induced dyskinesia', 'Chorea'] },
                { text: 'Sustained twisting postures', dx: ['Dystonia'] },
                { text: 'Fixed staring with the brow raised', dx: ['Progressive supranuclear palsy'] }
              ]
            },
            {
              title: 'Sitting balance',
              how: 'Ask the patient to sit on the edge of the bed or chair with the arms folded and the feet off the floor if possible.',
              say: 'Could you sit forward on the edge of the bed with your arms folded across your chest?',
              lookFor: 'Swaying of the trunk while sitting.',
              findings: [
                { text: 'Sways or falls while sitting (truncal ataxia)', dx: ['Midline cerebellar lesion (vermis): alcohol, tumor'] }
              ]
            },
            {
              title: 'Listen to the speech',
              how: 'Listen during conversation, then ask the patient to repeat test phrases.',
              say: 'Could you say "baby hippopotamus" for me? Now "West Register Street". And "British Constitution".',
              lookFor: 'The rhythm, volume and clarity of speech.',
              findings: [
                { text: 'Slurred, with each syllable separated and unevenly stressed (scanning or staccato speech)', dx: ['Cerebellar lesion'] },
                { text: 'Quiet, monotonous and fading, with words running together', dx: ['Parkinsonism (hypokinetic dysarthria)'] }
              ]
            }
          ]
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Cerebellar signs',
          text: 'DANISH: Dysdiadochokinesia, Ataxia (gait and truncal), Nystagmus, Intention tremor, Scanning speech (slurred), Hypotonia and heel-shin ataxia. Cerebellar signs appear on the same side as the lesion.'
        }
      ]
    },
    {
      id: 'gait',
      title: 'Gait and Balance',
      summary: 'Rising from a chair, walking and turning, heel-to-toe walking, walking on the toes and heels, the Romberg test and the pull test. Stay close to catch the patient.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Rise from the chair',
              how: 'Ask the patient to stand up from the chair with the arms folded across the chest.',
              say: 'Could you stand up without using your arms? Keep them folded across your chest.',
              lookFor: 'Slowness, several attempts, or falling back into the chair.',
              findings: [
                { text: 'Needs several attempts, or falls back into the chair', dx: ['Parkinsonism (axial bradykinesia)', 'Proximal weakness'] }
              ]
            },
            {
              title: 'Walk and turn',
              how: 'Ask the patient to walk to the end of the room, turn around and come back. Watch the start, the stride, the arm swing and the turn.',
              say: 'Could you walk to the end of the room at your normal pace, turn around and come back?',
              lookFor: 'Hesitation at the start, stride length, base width, arm swing, freezing and the number of steps to turn.',
              findings: [
                { text: 'Slow to start, short shuffling steps, reduced arm swing on one side', dx: ['Parkinson disease'] },
                { text: 'Steps get faster and shorter, as if chasing the center of gravity (festination)', dx: ['Parkinson disease'] },
                { text: 'Feet freeze to the floor, especially in doorways or on turning (freezing)', dx: ['Parkinson disease', 'Vascular parkinsonism'] },
                { text: 'Turns in many small steps (turning en bloc)', dx: ['Parkinsonism'] },
                { text: 'Broad-based and staggering, veering to one side', dx: ['Cerebellar lesion (veers toward the side of the lesion)'] },
                { text: 'Upright, stiff posture with frequent backward falls', dx: ['Progressive supranuclear palsy'] }
              ]
            },
            {
              title: 'Heel-to-toe walking',
              how: 'Ask the patient to walk in a straight line, heel touching toe.',
              say: 'Now walk in a straight line, putting the heel of one foot right in front of the toes of the other.',
              lookFor: 'Unsteadiness, and the side the patient falls toward.',
              findings: [
                { text: 'Falls to one side', dx: ['Cerebellar lesion on that side'] },
                { text: 'Cannot do it at all', dx: ['Midline cerebellar lesion'] }
              ]
            },
            {
              title: 'Walk on the toes, then the heels',
              how: 'Ask the patient to walk a few steps on the toes, then a few on the heels. Walk alongside, ready to steady them.',
              say: 'Could you walk on your tiptoes for me? Now on your heels.',
              lookFor: 'Loss of balance, a heel that drops, or a forefoot that will not lift.',
              findings: [
                { text: 'Loses balance or needs steadying on the toes or heels', dx: ['Cerebellar ataxia', 'Sensory ataxia'] },
                { text: 'Cannot stay up on the toes', dx: ['Plantarflexion weakness (S1, tibial nerve)'] },
                { text: 'Cannot lift the forefoot to walk on the heels', dx: ['Dorsiflexion weakness (L4 to L5, common peroneal nerve)'] }
              ]
            },
            {
              title: 'Romberg test',
              how: 'Ask the patient to stand with the feet together and the arms by the sides, first with the eyes open, then closed. Stand close to catch.',
              say: 'Stand with your feet together and your arms by your sides. Now close your eyes. I\'m right here to catch you.',
              lookFor: 'Whether unsteadiness starts only when the eyes close.',
              findings: [
                { text: 'Unsteady with the eyes open and closed', dx: ['Cerebellar ataxia (Romberg negative)'] },
                { text: 'Steady with the eyes open, falls with them closed', dx: ['Sensory ataxia, not cerebellar (positive Romberg)'] }
              ]
            },
            {
              title: 'Pull test',
              how: 'Stand behind the patient and warn them. Pull back briskly on the shoulders, ready to catch.',
              say: 'I\'m going to pull you backward by the shoulders. Take a step back to keep your balance if you need to. I\'ll catch you.',
              lookFor: 'More than two steps backward, or falling.',
              findings: [
                { text: 'Several steps backward, or falls without catching themselves (retropulsion)', dx: ['Parkinsonism (postural instability)', 'Progressive supranuclear palsy'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'eyes-face',
      title: 'Eyes and Face',
      summary: 'Pursuit and nystagmus with the H test, saccades, vertical gaze, visual fields, then the glabellar tap.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Smooth pursuit and nystagmus (H test)',
              how: 'Sit about 1 meter away, with your face level with the patient\'s. Ask the patient to keep the head still and follow your finger in an H shape. Hold the gaze for a few seconds at each end, not beyond about 30° from the center.',
              say: 'Keep your head still and follow my finger with just your eyes. Tell me if you see double.',
              lookFor: 'Jerky rather than smooth pursuit, and nystagmus at the ends of gaze.',
              findings: [
                { text: 'Jerky, broken pursuit', dx: ['Cerebellar lesion'] },
                { text: 'Nystagmus with the fast phase toward the side of gaze, worse looking toward one side', dx: ['Cerebellar lesion on that side'] },
                { text: 'Vertical nystagmus', dx: ['Brainstem lesion', 'Cerebellar lesion'] },
                { text: 'Nystagmus in all directions', dx: ['Drug toxicity (phenytoin, alcohol)'] },
                { text: 'An eye that will not adduct, with nystagmus in the other eye', dx: ['Internuclear ophthalmoplegia (MS)'] }
              ]
            },
            {
              title: 'Saccades',
              how: 'Hold up two targets, such as your fist and a finger, to either side and then above and below. Ask the patient to look quickly from one to the other.',
              say: 'Look at my fist. Now look at my finger. Keep switching between them as quickly as you can.',
              lookFor: 'Overshoot, slowness, and whether vertical saccades are as fast as horizontal ones.',
              findings: [
                { text: 'Overshoots the target, then corrects (saccadic dysmetria)', dx: ['Cerebellar lesion'] },
                { text: 'Slow vertical saccades, especially looking down', dx: ['Progressive supranuclear palsy'] }
              ]
            },
            {
              title: 'Vertical gaze',
              how: 'Ask the patient to look up and down. If limited, keep the eyes on a target and tilt the head back and forward (doll\'s eye maneuver).',
              say: 'Look up at the ceiling. Now down at the floor.',
              lookFor: 'Limited up or down gaze that improves when you move the head.',
              findings: [
                { text: 'Limited down gaze that the doll\'s eye maneuver overcomes', dx: ['Progressive supranuclear palsy (supranuclear gaze palsy)'] }
              ]
            },
            {
              title: 'Visual fields',
              how: 'Sit opposite the patient at arm\'s length. Test each eye\'s fields by confrontation, bringing a wiggling finger in from each quadrant.',
              say: 'Cover your left eye and look at my nose. Tell me when you see my finger move.',
              lookFor: 'A field defect.',
              findings: [
                { text: 'Loss of the same half of the field in both eyes (homonymous hemianopia)', dx: ['Posterior circulation stroke (often with cerebellar signs)'] }
              ]
            },
            {
              title: 'Glabellar tap',
              how: 'Stand behind or to the side, out of the patient\'s line of sight, and tap gently on the forehead between the eyebrows about once a second.',
              say: 'I\'m going to tap gently on your forehead. Just keep looking straight ahead.',
              lookFor: 'Whether blinking stops after the first few taps.',
              findings: [
                { text: 'Keeps blinking with every tap (Myerson sign)', dx: ['Parkinsonism'] },
                { text: 'Blinking stops after 2 to 3 taps', dx: ['Normal'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'upper-limbs',
      title: 'Upper Limbs',
      summary: 'Tone, tremor at rest and on posture, finger-nose, rapid alternating movements, finger tapping, rebound and handwriting.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Tone',
              how: 'Hold the hand like a handshake and support the elbow. Move the wrist in circles and flex and extend the elbow, at varying speeds. Ask the patient to open and close the other hand while you do this.',
              say: 'Let your arm go floppy. Now keep opening and closing your other hand while I move this one.',
              lookFor: 'Rigidity, and whether it increases with movement of the other hand.',
              findings: [
                { text: 'Jerky, ratchet-like resistance at the wrist (cogwheel rigidity), increasing with the other hand moving', dx: ['Parkinsonism'] },
                { text: 'Reduced resistance (hypotonia)', dx: ['Cerebellar lesion on that side'] }
              ]
            },
            {
              title: 'Rest tremor',
              how: 'With the hands resting in the lap, ask the patient to count backward from 20 or name the months backward, to bring out a tremor.',
              say: 'Let your hands rest in your lap. Could you count backward from 20 for me?',
              lookFor: 'A tremor at rest, its side, and its character.',
              findings: [
                { text: 'Slow tremor at rest, rubbing the thumb against the fingers (pill-rolling), on one side, easing with movement', dx: ['Parkinson disease'] },
                { text: 'No tremor at rest', dx: ['Normal', 'Cerebellar or essential tremor (look on action)'] }
              ]
            },
            {
              title: 'Postural tremor and drift',
              how: 'Ask the patient to hold both arms straight out in front, palms down, then palms up with the eyes closed.',
              say: 'Hold your arms straight out in front of you. Now turn your palms up and close your eyes.',
              lookFor: 'Tremor in this posture, and drift of the arms.',
              findings: [
                { text: 'Fine tremor of both hands, held out', dx: ['Essential tremor', 'Hyperthyroidism', 'Drugs (salbutamol, lithium, caffeine)'] },
                { text: 'Rest tremor that returns after a few seconds of holding (re-emergent tremor)', dx: ['Parkinson disease'] },
                { text: 'One arm drifts upward and outward', dx: ['Cerebellar lesion on that side'] }
              ]
            },
            {
              title: 'Finger-nose test',
              how: 'Hold your finger at the patient\'s arm\'s length. Ask them to touch your finger, then their nose, back and forth, moving your finger between touches.',
              say: 'Touch my finger, then your nose, and keep going back and forth as quickly and accurately as you can.',
              lookFor: 'Tremor as the finger approaches the target, and missing the target.',
              findings: [
                { text: 'Tremor that worsens near the target (intention tremor)', dx: ['Cerebellar lesion on that side'] },
                { text: 'Overshooting or missing the target (past-pointing, dysmetria)', dx: ['Cerebellar lesion on that side'] }
              ]
            },
            {
              title: 'Rapid alternating movements',
              how: 'Ask the patient to tap the palm and then the back of one hand on the other palm, as fast as possible. Repeat on the other side.',
              say: 'Clap one hand onto the other, turning it over each time, as fast as you can.',
              lookFor: 'Irregular, clumsy movements, or movements that slow and shrink.',
              findings: [
                { text: 'Irregular and clumsy (dysdiadochokinesia)', dx: ['Cerebellar lesion on that side'] },
                { text: 'Regular, but slowing and getting smaller', dx: ['Parkinsonism (bradykinesia)'] }
              ]
            },
            {
              title: 'Finger tapping and hand opening',
              how: 'Ask the patient to tap the index finger on the thumb as fast and as wide as possible for 10 seconds, then to open and close the fist fully and quickly. Test each hand.',
              say: 'Tap your index finger on your thumb, as big and as fast as you can, and keep going. Now open and close your fist as fast as you can.',
              lookFor: 'Speed and size, and whether they fade as the patient continues.',
              findings: [
                { text: 'Taps get slower and smaller, with pauses (decrement)', dx: ['Parkinsonism (bradykinesia)'] },
                { text: 'Irregular rhythm and size, without fading', dx: ['Cerebellar lesion'] }
              ]
            },
            {
              title: 'Rebound',
              how: 'Ask the patient to hold the arms out in front. Push one wrist down sharply and let go. Keep your other hand ready to protect the patient\'s face.',
              say: 'Hold your arms out in front of you, and keep them in place when I push.',
              lookFor: 'Overshoot or swinging of the arm after release.',
              findings: [
                { text: 'The arm overshoots and swings before settling (impaired check, Holmes rebound)', dx: ['Cerebellar lesion on that side'] }
              ]
            },
            {
              title: 'Handwriting and spiral',
              how: 'Ask the patient to write a sentence, and to draw a spiral between two lines without touching them.',
              say: 'Could you write your name and address for me? Now draw a spiral like this one.',
              lookFor: 'The size and regularity of the writing and the spiral.',
              findings: [
                { text: 'Writing that starts normally but gets smaller (micrographia)', dx: ['Parkinson disease'] },
                { text: 'Large, irregular writing and a wobbly, uneven spiral', dx: ['Cerebellar lesion'] },
                { text: 'A spiral with a regular tremor on one axis', dx: ['Essential tremor'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'lower-limbs',
      title: 'Lower Limbs',
      summary: 'Tone, heel-shin, foot tapping and leg agility, then the pendular reflex.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Tone',
              how: 'With the patient lying, roll each leg from side to side, then lift the knee briskly.',
              say: 'Let your legs go floppy while I move them.',
              lookFor: 'Rigidity, or reduced tone.',
              findings: [
                { text: 'Increased tone throughout the movement (rigidity)', dx: ['Parkinsonism'] },
                { text: 'Floppy leg (hypotonia)', dx: ['Cerebellar lesion on that side'] }
              ]
            },
            {
              title: 'Heel-shin test',
              how: 'Ask the patient to place one heel on the opposite knee, slide it down the shin to the ankle, lift it and return it to the knee, several times. Repeat on the other side.',
              say: 'Put your heel on your other knee, run it down your shin to your ankle, then lift it back to your knee. Keep going.',
              lookFor: 'A heel that wobbles or slides off the shin.',
              findings: [
                { text: 'The heel wobbles or slides off (heel-shin ataxia)', dx: ['Cerebellar lesion on that side'] }
              ]
            },
            {
              title: 'Foot tapping',
              how: 'Ask the patient to tap each foot rapidly against your hand, or the toes on the floor with the heel down.',
              say: 'Tap your foot against my hand as fast as you can.',
              lookFor: 'Irregular tapping, or tapping that slows and shrinks.',
              findings: [
                { text: 'Irregular rhythm', dx: ['Cerebellar lesion on that side'] },
                { text: 'Slowing and getting smaller', dx: ['Parkinsonism (bradykinesia)'] }
              ]
            },
            {
              title: 'Leg agility',
              how: 'With the patient seated, ask them to lift each foot and stamp it on the floor, as high and as fast as possible, 10 times.',
              say: 'Lift your foot as high as you can and stamp it down, fast, 10 times.',
              lookFor: 'Height and speed, and whether they fade.',
              findings: [
                { text: 'Movements fade in height and speed', dx: ['Parkinsonism (bradykinesia)'] }
              ]
            },
            {
              title: 'Pendular knee reflex',
              how: 'With the patient seated and the legs hanging freely, tap the patellar tendon.',
              lookFor: 'The leg swinging back and forth several times after the jerk.',
              findings: [
                { text: 'The leg swings several times (pendular reflex)', dx: ['Cerebellar lesion (hypotonia)'] }
              ]
            }
          ]
        },
        {
          type: 'redflags',
          title: 'Outside expectations: take an acute history',
          items: [
            { text: 'Sudden ataxia with headache, vomiting or drowsiness: cerebellar stroke or hemorrhage (can compress the brainstem)', see: ['headache', 'dizziness'] },
            { text: 'Ataxia with confusion and eye movement problems in a person who drinks heavily: Wernicke encephalopathy (give thiamine)', see: ['memory-thinking'] },
            { text: 'Rigidity, fever and confusion on antipsychotics or antiemetics: neuroleptic malignant syndrome', see: ['movement-change'] },
            { text: 'Ataxia getting worse over weeks: tumor, paraneoplastic syndrome or prion disease', see: ['movement-change'] },
            { text: 'Early falls with vertical gaze palsy: progressive supranuclear palsy', see: ['movement-change'] }
          ]
        },
        {
          type: 'list',
          title: 'To complete the examination',
          items: [
            'Examine the cranial nerves and complete the peripheral neurologic examination',
            'Measure the BP lying and standing: a large fall suggests multiple system atrophy',
            'Review medications (antipsychotics, metoclopramide, valproate, lithium, phenytoin) and alcohol use',
            'Screen cognition',
            'Consider an MRI of the brain, and check thiamine and B12 levels'
          ]
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Summarize as a syndrome. Cerebellar: ataxia, intention tremor, dysmetria, dysdiadochokinesia, nystagmus and scanning speech, on the same side as the lesion. Parkinsonism: bradykinesia with rest tremor, rigidity or postural instability, often starting on one side.'
        }
      ]
    }
  ]
});
