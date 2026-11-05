/*
 * Peripheral neurologic examination: gait and balance, then the upper and lower limbs, each
 * in the same order (tone, power, sensation, proprioception and coordination, reflexes,
 * special tests). It does not fit the head-to-toe skeleton, so it brings its own pages; the
 * general inspection reuses the skeleton's framework. Cranial nerves are a separate
 * examination. The aim is to place the lesion: UMN, LMN (root, plexus, nerve), muscle,
 * neuromuscular junction, cerebellum or dorsal columns.
 */
CHE.registerExam({
  id: 'peripheral-neurologic',
  title: 'Peripheral neurologic examination',
  aka: ['neurological examination', 'neuro exam', 'limb examination', 'upper limb', 'lower limb', 'tone', 'power', 'reflexes', 'sensation', 'coordination', 'gait', 'Romberg', 'UMN', 'LMN'],
  tags: ['neurologic'],
  summary: 'Gait and balance, then the upper and lower limbs in the same order: tone, power, sensation, proprioception and coordination, reflexes, special tests. Place the lesion: UMN, LMN, muscle, neuromuscular junction, cerebellum or dorsal columns.',
  ref: '',
  frameworkNotes: {
    'general-inspection': {
      reposition: ['Expose the arms and legs (shorts and a short-sleeved top), with the patient sitting at first, then lying'],
      habitus: [
        { text: 'Muscle wasting', dx: ['LMN lesion', 'Myopathy', 'Disuse'] },
        { text: 'High-arched feet (pes cavus)', dx: ['Hereditary neuropathy (Charcot-Marie-Tooth disease)', 'Friedreich ataxia'] }
      ],
      mental: [{ text: 'Slurred or scanning speech', dx: ['Cerebellar lesion', 'Bulbar palsy'] }],
      movement: [
        { text: 'Flexed arm and extended leg on one side', dx: ['Hemiplegia (stroke)'] },
        { text: 'Rest tremor, reduced blinking, a masked face', dx: ['Parkinson disease'] },
        { text: 'Twitching under the skin (fasciculations)', dx: ['LMN lesion (MND)'] },
        { text: 'Jerky, dance-like movements', dx: ['Chorea (Huntington disease, drugs)'] }
      ],
      surroundings: ['Walking aids, a wheelchair, splints or ankle-foot orthoses, a urinary catheter']
    }
  },
  sections: [
    {
      id: 'general-inspection',
      title: 'General Inspection',
      summary: 'Prepare the patient, then look at the patient and the surroundings before touching.',
      core: [{ type: 'framework', id: 'general-inspection' }]
    },
    {
      id: 'gait',
      title: 'Gait and Balance',
      summary: 'Walking, heel-to-toe, on the toes and heels, then the Romberg test. Stay close to catch the patient.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Watch the patient walk',
              how: 'Ask the patient to walk to the end of the room, turn and walk back, with any usual walking aid.',
              say: 'Could you walk to the end of the room for me, turn around and walk back? Use your stick if you normally do.',
              lookFor: 'Posture, arm swing, stride length, width of the base, how the feet land, and turning.',
              findings: [
                { text: 'One leg swings out in an arc with the arm held flexed (hemiplegic)', dx: ['UMN lesion (stroke)'] },
                { text: 'Stooped, shuffling, short steps with reduced arm swing, turning in several steps (parkinsonian)', dx: ['Parkinson disease', 'Drug-induced parkinsonism'] },
                { text: 'Broad-based, unsteady and staggering (ataxic)', dx: ['Cerebellar lesion'] },
                { text: 'High-stepping, with the foot slapping down', dx: ['Foot drop (common peroneal nerve palsy, L5 radiculopathy, peripheral neuropathy)'] },
                { text: 'Waddling, with the pelvis dropping on each step', dx: ['Proximal myopathy'] },
                { text: 'Stiff legs crossing over each other (scissoring)', dx: ['Spastic paraparesis (cord lesion, cerebral palsy)'] },
                { text: 'Stamping, watching the feet, worse in the dark', dx: ['Sensory ataxia (loss of proprioception)'] }
              ]
            },
            {
              title: 'Heel-to-toe walking',
              how: 'Ask the patient to walk in a straight line, placing the heel of one foot directly in front of the toes of the other.',
              say: 'Now could you walk in a straight line, putting the heel of one foot right in front of the toes of the other, like on a tightrope?',
              lookFor: 'Unsteadiness, and the side the patient falls toward.',
              findings: [
                { text: 'Falls consistently to one side', dx: ['Cerebellar lesion on that side'] },
                { text: 'Cannot do it at all', dx: ['Midline cerebellar lesion (e.g. alcohol)', 'Sensory ataxia'] }
              ]
            },
            {
              title: 'Walk on the toes, then the heels',
              how: 'Ask the patient to walk a few steps on the toes, then a few on the heels.',
              say: 'Could you walk on your tiptoes for me? Now on your heels.',
              lookFor: 'A heel that drops, or a forefoot that will not lift.',
              findings: [
                { text: 'Cannot walk on the toes', dx: ['Plantarflexion weakness (S1, tibial nerve)'] },
                { text: 'Cannot walk on the heels', dx: ['Dorsiflexion weakness (L4 to L5, common peroneal nerve)'] }
              ]
            },
            {
              title: 'Romberg test',
              how: 'Ask the patient to stand with the feet together and the arms by the sides. Watch with the eyes open, then ask them to close the eyes for 30 seconds. Stand close with your arms ready to catch.',
              say: 'Please stand with your feet together and your arms by your sides. Now close your eyes. Don\'t worry, I\'m right here to catch you.',
              lookFor: 'Swaying or falling once the eyes close, compared with eyes open.',
              findings: [
                { text: 'Steady with the eyes open, but sways or falls with them closed (positive Romberg)', dx: ['Sensory ataxia (dorsal columns, peripheral neuropathy, B12 deficiency)'] },
                { text: 'Unsteady even with the eyes open', dx: ['Cerebellar ataxia (the test cannot be interpreted)'] }
              ]
            },
            {
              title: 'Pull test',
              how: 'Stand behind the patient and warn them. Pull back briskly on the shoulders, ready to catch.',
              say: 'I\'m going to pull you backward by the shoulders. Try to keep your balance. I\'ll catch you.',
              lookFor: 'More than two steps backward, or falling.',
              findings: [
                { text: 'Several steps backward or falls (retropulsion)', dx: ['Parkinson disease (postural instability)'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'upper-tone',
      title: 'Upper Limb Tone',
      summary: 'Look at the arms, then move each joint passively at different speeds.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Look at the arms',
              how: 'With the arms exposed and resting, look at the shoulders, arms and hands.',
              lookFor: 'Wasting, fasciculations, tremor and abnormal posture.',
              findings: [
                { text: 'Wasting of the small hand muscles', dx: ['T1 root or ulnar nerve lesion', 'MND'] },
                { text: 'Fasciculations', dx: ['LMN lesion (MND)'] },
                { text: 'Rest tremor that eases with movement', dx: ['Parkinson disease'] }
              ]
            },
            {
              title: 'Feel the tone',
              how: 'Hold the patient\'s hand as if shaking hands, and support the elbow. Move the wrist in circles, flex and extend the elbow, and turn the forearm palm up and down, at varying speeds. Repeat on the other side.',
              say: 'Let your arm go completely floppy, and let me do all the work.',
              lookFor: 'Resistance to passive movement: increased, reduced or normal, and whether it depends on speed.',
              findings: [
                { text: 'A catch that increases with speed, then suddenly gives way (spasticity, clasp-knife)', dx: ['UMN lesion'] },
                { text: 'Steady resistance through the whole movement (lead-pipe rigidity)', dx: ['Parkinson disease', 'Antipsychotics'] },
                { text: 'Jerky, ratchet-like resistance at the wrist (cogwheel rigidity)', dx: ['Parkinson disease (rigidity with tremor)'] },
                { text: 'Floppy arm with reduced resistance (hypotonia)', dx: ['LMN lesion', 'Cerebellar lesion', 'Early stroke'] }
              ]
            },
            {
              title: 'Bring out subtle rigidity',
              how: 'Ask the patient to open and close the other hand, or tap it on the knee, while you feel the tone.',
              say: 'Could you keep opening and closing your other hand while I move this arm?',
              lookFor: 'Rigidity that increases with movement of the other limb.',
              findings: [
                { text: 'Rigidity increases (synkinesis)', dx: ['Early Parkinson disease'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'upper-power',
      title: 'Upper Limb Power',
      summary: 'Test each movement against resistance, comparing sides, and grade it from 0 to 5. Note the root and nerve.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Test each movement',
              how: 'Show the patient each movement. Fix the joint above with one hand and resist with the other. Compare each side in turn.',
              say: 'I\'m going to test the strength of different muscles. Push or pull as hard as you can, and don\'t let me move you.',
              lookFor: 'Which movements are weak, on which side, and in which pattern.',
              findings: [
                { text: 'Shoulder abduction: "Arms out like chicken wings. Don\'t let me push them down." (C5, axillary nerve)' },
                { text: 'Elbow flexion: "Bend your elbow and pull me toward you." (C5 to C6, musculocutaneous nerve)' },
                { text: 'Elbow extension: "Now push me away." (C7, radial nerve)' },
                { text: 'Wrist extension: "Cock your wrist back. Don\'t let me push it down." (C6 to C7, radial nerve)' },
                { text: 'Finger extension: "Keep your fingers straight." (C7, posterior interosseous nerve)' },
                { text: 'Grip: "Squeeze my two fingers as hard as you can." (C8, median and ulnar nerves)' },
                { text: 'Finger abduction: "Spread your fingers apart. Don\'t let me push them together." (T1, ulnar nerve)' },
                { text: 'Thumb abduction: "Point your thumb at the ceiling." (T1, median nerve)' }
              ]
            },
            {
              title: 'Grade the power',
              how: 'Grade each movement from 0 to 5.',
              findings: [
                '5: normal power',
                '4: moves against some resistance, but weaker than normal',
                '3: moves against gravity, but not against resistance',
                '2: moves only with gravity eliminated',
                '1: a flicker of contraction, no movement',
                '0: no contraction'
              ]
            },
            {
              title: 'Work out the pattern',
              how: 'Compare the weak movements with each other and with the other side.',
              findings: [
                { text: 'Extensors weaker than flexors in the arm, on one side (pyramidal pattern)', dx: ['UMN lesion'] },
                { text: 'Weakness in one root\'s muscles', dx: ['Radiculopathy'] },
                { text: 'Weakness in one nerve\'s muscles', dx: ['Mononeuropathy'] },
                { text: 'Distal weakness on both sides', dx: ['Peripheral neuropathy'] },
                { text: 'Proximal weakness on both sides', dx: ['Myopathy'] },
                { text: 'Weakness that worsens with repeated testing (fatigability)', dx: ['Myasthenia gravis'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'upper-sensation',
      title: 'Upper Limb Sensation',
      summary: 'Light touch and pinprick in each dermatome, comparing sides.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Light touch and pinprick',
              how: 'Show the patient each sensation on the sternum first. With the eyes closed, test light touch (a wisp of cotton) and then pinprick (a disposable neurotip) in each dermatome, comparing sides: C5 lateral upper arm, C6 lateral forearm and thumb, C7 middle finger, C8 little finger and medial forearm, T1 medial upper arm. Map any abnormal area from abnormal to normal.',
              say: 'This is what the cotton feels like on your chest. Now close your eyes and say "yes" each time you feel it. Does it feel the same on both sides?',
              lookFor: 'Reduced or absent sensation, and its distribution.',
              findings: [
                { text: 'Loss in one dermatome', dx: ['Radiculopathy'] },
                { text: 'Loss over the palm of the thumb, index, middle and half the ring finger', dx: ['Median nerve lesion (carpal tunnel syndrome)'] },
                { text: 'Loss over the little finger and half the ring finger', dx: ['Ulnar nerve lesion'] },
                { text: 'Loss over the back of the hand at the base of the thumb', dx: ['Radial nerve lesion'] },
                { text: 'Loss in both hands, like gloves (glove distribution)', dx: ['Peripheral neuropathy'] },
                { text: 'Loss down one whole side of the body', dx: ['Stroke (cortex or thalamus)'] },
                { text: 'Loss of pinprick and temperature with light touch kept, over the shoulders and arms (cape distribution)', dx: ['Syringomyelia'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'upper-proprioception',
      title: 'Upper Limb Proprioception and Coordination',
      summary: 'Vibration and joint position sense (dorsal columns), then finger-nose and rapid alternating movements (cerebellum).',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Vibration sense',
              how: 'Strike a 128 Hz tuning fork and place it on the sternum first, then on the tip of the index finger. Ask the patient to say when it stops. If absent, move up to the wrist, elbow and shoulder.',
              say: 'Can you feel this buzzing on your chest? Now close your eyes and tell me when you feel it on your finger, and when it stops.',
              lookFor: 'Reduced or absent vibration, and the level where it returns.',
              findings: [
                { text: 'Reduced or absent vibration', dx: ['Dorsal column lesion', 'Large-fiber peripheral neuropathy'] }
              ]
            },
            {
              title: 'Joint position sense',
              how: 'Hold the sides of the distal phalanx of the index finger and move it up or down, first with the patient watching, then with the eyes closed. If wrong, move to larger joints.',
              say: 'This is up, and this is down. Now close your eyes and tell me which way I move your finger.',
              lookFor: 'Wrong answers with the eyes closed.',
              findings: [
                { text: 'Cannot tell which way the finger moves', dx: ['Dorsal column lesion', 'Large-fiber peripheral neuropathy'] }
              ]
            },
            {
              title: 'Finger-nose test',
              how: 'Hold your finger at arm\'s length from the patient. Ask them to touch your finger, then their nose, back and forth. Move your finger between touches.',
              say: 'Touch my finger with your index finger, then touch your nose, and keep going back and forth as quickly and accurately as you can.',
              lookFor: 'A tremor that worsens near the target, and missing the target.',
              findings: [
                { text: 'Tremor that worsens near the target (intention tremor)', dx: ['Cerebellar lesion on that side'] },
                { text: 'Overshooting or missing the target (past-pointing, dysmetria)', dx: ['Cerebellar lesion on that side'] }
              ]
            },
            {
              title: 'Rapid alternating movements',
              how: 'Ask the patient to tap the palm and then the back of one hand on the other palm, as fast as possible. Repeat on the other side.',
              say: 'Clap one hand onto the other, turning it over each time, like this, as fast as you can.',
              lookFor: 'Slow, clumsy or irregular movements.',
              findings: [
                { text: 'Slow, clumsy and irregular (dysdiadochokinesia)', dx: ['Cerebellar lesion on that side'] },
                { text: 'Movements that get smaller and slower', dx: ['Parkinson disease (bradykinesia)'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'upper-reflexes',
      title: 'Upper Limb Reflexes',
      summary: 'Biceps, supinator and triceps, comparing sides, with reinforcement if absent.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Biceps, supinator and triceps',
              how: 'With the arm relaxed: biceps (C5 to C6), place your thumb on the tendon with the elbow bent, and strike your thumb; supinator (C5 to C6), strike the radius about 5 cm above the wrist; triceps (C7), hold the arm across the chest and strike the tendon just above the elbow. If a reflex is absent, ask the patient to clench the teeth as you strike (reinforcement).',
              say: 'Let your arm relax completely. If I can\'t get a reflex, I\'ll ask you to clench your teeth.',
              lookFor: 'Absent, reduced, normal or brisk reflexes, and any spread to other muscles.',
              findings: [
                { text: 'Brisk reflexes, spreading to nearby muscles', dx: ['UMN lesion'] },
                { text: 'Absent or reduced reflexes', dx: ['LMN lesion (radiculopathy at that level, peripheral neuropathy)'] },
                { text: 'Striking the supinator gives finger flexion but no forearm movement (inverted supinator)', dx: ['C5 to C6 cord lesion (cervical myelopathy)'] },
                { text: 'Slow relaxation after the jerk', hormones: ['↓ Thyroid hormone'], dx: ['Hypothyroidism'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'upper-special',
      title: 'Upper Limb Special Tests',
      summary: 'Pronator drift, Hoffmann sign, and the tests for median and ulnar nerve lesions.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Pronator drift',
              how: 'Ask the patient to hold both arms straight out in front, palms up, and close the eyes for 20 to 30 seconds.',
              say: 'Hold both arms straight out in front of you with your palms facing up, as if carrying a tray. Now close your eyes and keep them there.',
              lookFor: 'One arm turning palm down and drifting, or fingers wandering.',
              findings: [
                { text: 'One arm turns palm down and drifts downward', dx: ['UMN lesion (subtle pyramidal weakness)'] },
                { text: 'One arm drifts upward and outward', dx: ['Cerebellar lesion'] },
                { text: 'Fingers wander and move without the patient knowing (pseudoathetosis)', dx: ['Loss of proprioception'] }
              ]
            },
            {
              title: 'Hoffmann sign',
              how: 'Hold the patient\'s middle finger loosely and flick the nail downward.',
              lookFor: 'Flexion of the thumb and index finger.',
              findings: [
                { text: 'The thumb and index finger flex', dx: ['UMN lesion (cervical myelopathy)'] }
              ]
            },
            {
              title: 'Tinel and Phalen tests',
              how: 'Tinel: tap over the carpal tunnel at the front of the wrist. Phalen: ask the patient to press the backs of the hands together with the wrists fully flexed for 60 seconds.',
              say: 'Press the backs of your hands together with your fingers pointing down, and hold them there for a minute. Tell me if you feel tingling.',
              lookFor: 'Tingling in the thumb, index, middle and half the ring finger.',
              findings: [
                { text: 'Tingling in the median nerve distribution', dx: ['Carpal tunnel syndrome'] }
              ]
            },
            {
              title: 'Froment sign',
              how: 'Ask the patient to grip a sheet of paper between the thumb and the side of the index finger with both hands, while you pull it away.',
              say: 'Hold this paper tightly between your thumb and the side of your finger, and don\'t let me pull it away.',
              lookFor: 'The thumb tip bending to hold the paper.',
              findings: [
                { text: 'The thumb bends at the tip on one side', dx: ['Ulnar nerve lesion (weak adductor pollicis)'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'lower-tone',
      title: 'Lower Limb Tone',
      summary: 'Look at the legs, then roll and lift them, and test for ankle clonus.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Look at the legs',
              how: 'With the patient lying and the legs exposed, look at both legs and feet.',
              lookFor: 'Wasting, fasciculations, foot shape and posture.',
              findings: [
                { text: 'Distal wasting of the lower legs (inverted champagne bottle)', dx: ['Hereditary neuropathy (Charcot-Marie-Tooth disease)'] },
                { text: 'Fasciculations', dx: ['LMN lesion (MND)'] },
                { text: 'Wasting of one thigh', dx: ['L3 to L4 radiculopathy', 'Femoral nerve lesion', 'Disuse'] }
              ]
            },
            {
              title: 'Roll and lift the legs',
              how: 'Roll each leg from side to side and watch the foot. Then place your hand behind the knee and lift it briskly.',
              say: 'Let your legs go floppy. I\'m going to roll them and lift your knee.',
              lookFor: 'Whether the foot flops loosely, and whether the heel lifts off the bed with the knee.',
              findings: [
                { text: 'The heel lifts off the bed with the knee, or the foot moves stiffly with the leg', dx: ['UMN lesion (increased tone)'] },
                { text: 'The foot flops loosely', dx: ['LMN lesion', 'Cerebellar lesion'] }
              ]
            },
            {
              title: 'Ankle clonus',
              how: 'With the knee slightly bent, dorsiflex the foot sharply and hold it there.',
              lookFor: 'Rhythmic beats of the foot.',
              findings: [
                { text: 'More than 5 beats of sustained clonus', dx: ['UMN lesion'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'lower-power',
      title: 'Lower Limb Power',
      summary: 'Test each movement against resistance, comparing sides, and grade it from 0 to 5. Note the root and nerve.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Test each movement',
              how: 'Show the patient each movement. Fix the joint above with one hand and resist with the other. Compare each side in turn, and grade from 0 to 5 as for the arms.',
              say: 'Now the legs. Push or pull as hard as you can, and don\'t let me move you.',
              lookFor: 'Which movements are weak, on which side, and in which pattern.',
              findings: [
                { text: 'Hip flexion: "Lift your leg off the bed. Don\'t let me push it down." (L1 to L2, femoral nerve)' },
                { text: 'Hip extension: "Push your leg down into the bed." (L5 to S1, inferior gluteal nerve)' },
                { text: 'Hip abduction: "Push your legs out against my hands." (L4 to S1, superior gluteal nerve)' },
                { text: 'Hip adduction: "Squeeze your legs together." (L2 to L3, obturator nerve)' },
                { text: 'Knee flexion: "Bend your knee and pull your heel toward your bottom." (S1, sciatic nerve)' },
                { text: 'Knee extension: "Straighten your leg and kick me away." (L3 to L4, femoral nerve)' },
                { text: 'Ankle dorsiflexion: "Pull your foot up toward your face." (L4 to L5, deep peroneal nerve)' },
                { text: 'Ankle plantarflexion: "Push your foot down like pressing a pedal." (S1 to S2, tibial nerve)' },
                { text: 'Big toe extension: "Pull your big toe up." (L5, deep peroneal nerve)' },
                { text: 'Ankle eversion: "Turn your foot out." (L5 to S1, superficial peroneal nerve)' },
                { text: 'Ankle inversion: "Turn your foot in." (L4, tibial nerve)' }
              ]
            },
            {
              title: 'Work out the pattern',
              how: 'Compare the weak movements with each other and with the other side.',
              findings: [
                { text: 'Flexors weaker than extensors in the leg (pyramidal pattern)', dx: ['UMN lesion'] },
                { text: 'Weakness of both legs', dx: ['Spinal cord lesion', 'Cauda equina syndrome', 'Guillain-Barré syndrome'] },
                { text: 'Weak dorsiflexion and eversion with normal inversion', dx: ['Common peroneal nerve palsy'] },
                { text: 'Weak dorsiflexion, eversion and inversion', dx: ['L5 radiculopathy'] },
                { text: 'Proximal weakness: difficulty rising from a squat or a chair', dx: ['Myopathy'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'lower-sensation',
      title: 'Lower Limb Sensation',
      summary: 'Light touch and pinprick in each dermatome, comparing sides, and look for a sensory level.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Light touch and pinprick',
              how: 'With the eyes closed, test light touch and then pinprick in each dermatome, comparing sides: L2 upper anterior thigh, L3 medial knee, L4 medial shin and ankle, L5 top of the foot and big toe, S1 lateral foot and little toe. If sensation is lost in both legs, move up the trunk to find a sensory level.',
              say: 'Close your eyes and say "yes" each time you feel this. Tell me if it feels different between your two legs.',
              lookFor: 'Reduced or absent sensation, and its distribution.',
              findings: [
                { text: 'Loss in one dermatome', dx: ['Radiculopathy'] },
                { text: 'Loss in both feet and lower legs, like stockings (stocking distribution)', dx: ['Peripheral neuropathy (e.g. DM)'] },
                { text: 'Loss below a level on the trunk (sensory level)', dx: ['Spinal cord lesion'] },
                { text: 'Loss over the outer thigh', dx: ['Lateral cutaneous nerve of the thigh (meralgia paresthetica)'] },
                { text: 'Loss over the top of the foot only', dx: ['Common peroneal nerve palsy', 'L5 radiculopathy'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'lower-proprioception',
      title: 'Lower Limb Proprioception and Coordination',
      summary: 'Vibration and joint position sense at the big toe, then the heel-shin test.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Vibration sense',
              how: 'Place a 128 Hz tuning fork on the sternum first, then on the tip of the big toe. If absent, move up to the medial malleolus, the tibial tuberosity and the anterior superior iliac spine.',
              say: 'Close your eyes and tell me when you feel the buzzing on your toe, and when it stops.',
              lookFor: 'Reduced or absent vibration, and the level where it returns.',
              findings: [
                { text: 'Absent at the toe, returning higher up the leg', dx: ['Large-fiber peripheral neuropathy (often the earliest sign)'] },
                { text: 'Reduced in both legs and arms', dx: ['Dorsal column lesion (e.g. B12 deficiency)'] }
              ]
            },
            {
              title: 'Joint position sense',
              how: 'Hold the sides of the big toe and move it up or down, first with the patient watching, then with the eyes closed. If wrong, move to the ankle and knee.',
              say: 'This is up, and this is down. Now close your eyes and tell me which way I move your toe.',
              lookFor: 'Wrong answers with the eyes closed.',
              findings: [
                { text: 'Cannot tell which way the toe moves', dx: ['Dorsal column lesion', 'Large-fiber peripheral neuropathy'] }
              ]
            },
            {
              title: 'Heel-shin test',
              how: 'Ask the patient to place one heel on the opposite knee, slide it down the shin to the ankle, lift it, and return it to the knee. Repeat several times, then on the other side.',
              say: 'Put your right heel on your left knee, run it down your shin to your ankle, then lift it back to your knee. Keep going.',
              lookFor: 'A heel that wobbles or slides off the shin.',
              findings: [
                { text: 'The heel wobbles or slides off the shin', dx: ['Cerebellar lesion on that side'] },
                { text: 'Accurate with the eyes open, but not closed', dx: ['Loss of proprioception'] }
              ]
            },
            {
              title: 'Foot tapping',
              how: 'Ask the patient to tap each foot rapidly against your hand.',
              say: 'Tap your foot against my hand as fast as you can.',
              lookFor: 'Slow, irregular tapping.',
              findings: [
                { text: 'Slow, irregular tapping', dx: ['Cerebellar lesion on that side'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'lower-reflexes',
      title: 'Lower Limb Reflexes',
      summary: 'Knee and ankle reflexes, with reinforcement if absent, then the plantar response.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Knee and ankle reflexes',
              how: 'Knee (L3 to L4): support both knees bent over your forearm and strike the patellar tendon. Ankle (S1): with the leg bent outward and the foot gently dorsiflexed, strike the Achilles tendon. If a reflex is absent, ask the patient to hook the fingers together and pull hard as you strike (reinforcement).',
              say: 'Let your legs relax completely. Now hook your fingers together and pull hard as I tap.',
              lookFor: 'Absent, reduced, normal or brisk reflexes, comparing sides.',
              findings: [
                { text: 'Brisk reflexes with spread or clonus', dx: ['UMN lesion'] },
                { text: 'Absent knee reflex on one side', dx: ['L3 to L4 radiculopathy', 'Femoral nerve lesion'] },
                { text: 'Absent ankle reflex on one side', dx: ['S1 radiculopathy'] },
                { text: 'Absent ankle reflexes on both sides', dx: ['Peripheral neuropathy'] },
                { text: 'Absent reflexes everywhere, with weakness', dx: ['Guillain-Barré syndrome'] }
              ]
            },
            {
              title: 'Plantar response',
              how: 'Stroke the outer edge of the sole firmly with a blunt object, from the heel toward the little toe and then across toward the big toe.',
              say: 'I\'m going to run this along the sole of your foot. It may tickle.',
              lookFor: 'The first movement of the big toe.',
              findings: [
                { text: 'Big toe curls down (flexor plantar)', dx: ['Normal'] },
                { text: 'Big toe extends upward and the other toes fan out (extensor plantar, Babinski sign)', dx: ['UMN lesion'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'lower-special',
      title: 'Lower Limb Special Tests',
      summary: 'Nerve root tension tests, the Trendelenburg sign and the Gowers sign.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Straight leg raise',
              how: 'With the patient lying flat, lift the straight leg slowly by the heel. Note the angle at which pain starts, then lower it slightly and dorsiflex the foot.',
              say: 'I\'m going to lift your leg slowly with your knee straight. Tell me as soon as you feel any pain, and where you feel it.',
              lookFor: 'Pain shooting down the back of the leg below the knee, between 30° and 70°, made worse by dorsiflexing the foot.',
              findings: [
                { text: 'Pain down the leg below the knee, worse with dorsiflexion', dx: ['L5 or S1 radiculopathy (sciatica, disc prolapse)'] },
                { text: 'Pain in the back of the thigh only', dx: ['Tight hamstrings'] }
              ]
            },
            {
              title: 'Femoral stretch test',
              how: 'With the patient lying face down, bend the knee to bring the heel toward the buttock, then extend the hip.',
              say: 'Could you lie on your front? I\'m going to bend your knee. Tell me if you feel pain, and where.',
              lookFor: 'Pain in the front of the thigh.',
              findings: [
                { text: 'Pain in the front of the thigh', dx: ['L3 to L4 radiculopathy'] }
              ]
            },
            {
              title: 'Trendelenburg sign',
              how: 'Ask the patient to stand on one leg, holding your hands for balance if needed. Watch the pelvis from behind.',
              say: 'Could you stand on your right leg for me, and lift your left foot off the floor?',
              lookFor: 'The pelvis dropping on the side of the lifted leg.',
              findings: [
                { text: 'The pelvis drops on the unsupported side', dx: ['Weak hip abductors on the standing side (superior gluteal nerve, L5)'] }
              ]
            },
            {
              title: 'Gowers sign',
              how: 'If proximal weakness is suspected, ask the patient to rise from sitting on the floor, or from a low chair without using the arms.',
              say: 'Could you stand up from the chair without using your arms?',
              lookFor: 'The patient using the hands to push up on the thighs.',
              findings: [
                { text: 'Climbs up the thighs with the hands', dx: ['Proximal myopathy (e.g. muscular dystrophy)'] }
              ]
            }
          ]
        },
        {
          type: 'redflags',
          title: 'Outside expectations: take an acute history',
          items: [
            { text: 'Weakness of both legs with saddle anesthesia or urinary retention: cauda equina syndrome or cord compression', see: ['weakness-numbness', 'incontinence'] },
            { text: 'A sensory level on the trunk: spinal cord compression', see: ['weakness-numbness'] },
            { text: 'Sudden weakness or numbness of one side: stroke', see: ['weakness-numbness'] },
            { text: 'Rapidly ascending weakness with absent reflexes: Guillain-Barré syndrome', see: ['weakness-numbness'] },
            { text: 'Fatigable weakness with dyspnea or difficulty swallowing: myasthenic crisis', see: ['weakness-numbness'] }
          ]
        },
        {
          type: 'list',
          title: 'To complete the examination',
          items: [
            'Examine the cranial nerves and the fundi',
            'Examine the spine, and test perianal sensation and anal tone if cauda equina syndrome is suspected',
            'Check the BG and the BP',
            'Consider nerve conduction studies and an MRI of the brain or spine'
          ]
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Summarize by pattern: tone, power, reflexes and plantars place the lesion as UMN or LMN; sensation shows its distribution (dermatome, nerve, glove and stocking, or a level); coordination and Romberg separate cerebellar from sensory ataxia.'
        }
      ]
    }
  ]
});
