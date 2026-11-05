/*
 * Cranial nerve examination, I to XII. It does not fit the head-to-toe skeleton, so it brings
 * its own pages: general inspection (the skeleton's framework), then one page per nerve or
 * group. II, III, IV and VI share a page (the eyes), as do IX and X. Within each page the
 * steps run: inspection, motor, sensory, reflex, special tests.
 */
CHE.registerExam({
  id: 'cranial-nerves',
  title: 'Cranial nerve examination',
  aka: ['cranial nerves', 'CN examination', 'eye examination', 'visual fields', 'pupils', 'eye movements', 'facial nerve', 'hearing', 'Rinne', 'Weber', 'bulbar', 'tongue'],
  tags: ['neurologic', 'HEENT'],
  summary: 'From I to XII, each in the same order: inspection, motor, sensory, reflex, special tests. Place the lesion: one nerve, several nerves together (brainstem, cavernous sinus, cerebellopontine angle), UMN or LMN, or the neuromuscular junction.',
  ref: '',
  frameworkNotes: {
    'general-inspection': {
      reposition: ['Sit the patient on the edge of the bed or a chair, facing you at eye level, about 1 meter away'],
      appearance: [
        { text: 'Facial asymmetry or droop', dx: ['Facial nerve palsy', 'Stroke'] },
        { text: 'Drooping eyelid', dx: ['Oculomotor nerve palsy', 'Horner syndrome', 'Myasthenia gravis'] }
      ],
      mental: [
        { text: 'Nasal or hoarse voice', dx: ['Bulbar palsy', 'Recurrent laryngeal nerve palsy'] },
        { text: 'Slow, effortful, spastic speech', dx: ['Pseudobulbar palsy'] }
      ],
      movement: [{ text: 'Head tilted to one side', dx: ['Trochlear nerve palsy (tilts away from the affected side)'] }],
      surroundings: ['Glasses or hearing aids, an eye patch, a feeding tube or a suction catheter']
    }
  },
  sections: [
    {
      id: 'general-inspection',
      title: 'General Inspection',
      summary: 'Prepare the patient, then look at the face, eyes and posture, and listen to the speech.',
      core: [{ type: 'framework', id: 'general-inspection' }]
    },
    {
      id: 'olfactory',
      title: 'Olfactory Nerve (I)',
      summary: 'Smell, tested in each nostril. Often skipped unless smell is a complaint.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Sensory: smell',
              how: 'Ask about any change in smell or taste. Then, with the eyes closed and one nostril blocked, hold a familiar smell (e.g. coffee, peppermint) under the open nostril. Avoid ammonia, which stimulates the trigeminal nerve instead.',
              say: 'Have you noticed any change in your sense of smell or taste? Close your eyes and block this nostril. Tell me what you can smell.',
              lookFor: 'Loss of smell in one or both nostrils.',
              findings: [
                { text: 'Loss of smell on both sides', dx: ['URTI or sinus disease', 'Head injury', 'COVID-19', 'Parkinson disease'] },
                { text: 'Loss of smell on one side', dx: ['Frontal tumor (olfactory groove meningioma)'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'eyes',
      title: 'Eyes (II, III, IV, VI)',
      summary: 'Inspection, eye movements (III, IV, VI), vision (II), the pupil reflexes (II in, III out), then fatigability, the cover test and fundoscopy.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Inspection: the eyes',
              how: 'Look at both eyes from the front with the patient looking straight ahead.',
              lookFor: 'Drooping eyelids, the size and symmetry of the pupils, the position of each eye at rest, protruding eyes, and head tilt.',
              findings: [
                { text: 'Complete ptosis, with the eye down and out and a large pupil', dx: ['Oculomotor nerve palsy'] },
                { text: 'Partial ptosis with a small pupil on the same side', dx: ['Horner syndrome'] },
                { text: 'Ptosis on both sides, worse in the evening', dx: ['Myasthenia gravis'] },
                { text: 'One eye turned in at rest', dx: ['Abducens nerve palsy'] },
                { text: 'Protruding eyes with lid retraction', dx: ['Thyroid eye disease'] },
                { text: 'Unequal pupils (anisocoria)', dx: ['Oculomotor nerve palsy (large pupil)', 'Horner syndrome (small pupil)', 'Physiologic (less than 1 mm, both react)'] }
              ]
            },
            {
              title: 'Motor: eye movements (H test)',
              how: 'Hold a target about 50 cm from the patient. Ask them to keep the head still and follow it in an H shape, pausing at each end. Ask about double vision in each direction, and which image disappears when you cover each eye (the outer image comes from the weak eye).',
              say: 'Keep your head still and follow my finger with just your eyes. Tell me if you see double, and in which direction it is worst.',
              lookFor: 'Limited movement of either eye, double vision and its direction, and nystagmus.',
              findings: [
                { text: 'Eye cannot move up, down or in; rests down and out', dx: ['Oculomotor nerve palsy'] },
                { text: 'Vertical double vision, worst looking down and in (reading, stairs)', dx: ['Trochlear nerve palsy'] },
                { text: 'Horizontal double vision, worst looking to one side; that eye will not move out', dx: ['Abducens nerve palsy (also a false-localizing sign of raised ICP)'] },
                { text: 'An eye that will not adduct, with nystagmus in the other eye', dx: ['Internuclear ophthalmoplegia (MS)'] },
                { text: 'Variable double vision that does not fit one nerve, worse with fatigue', dx: ['Myasthenia gravis'] },
                { text: 'Limited up gaze with protruding eyes', dx: ['Thyroid eye disease'] }
              ]
            },
            {
              title: 'Sensory: visual acuity',
              how: 'Test each eye separately with a Snellen chart at 20 feet (6 m), with glasses on. If the acuity is reduced, retest through a pinhole.',
              say: 'Cover your left eye, and read the lowest line you can see on the chart.',
              lookFor: 'The smallest line read with each eye, and whether a pinhole improves it.',
              findings: [
                { text: 'Improves through a pinhole', dx: ['Refractive error'] },
                { text: 'Does not improve through a pinhole', dx: ['Disease of the eye or optic nerve'] }
              ]
            },
            {
              title: 'Sensory: color vision',
              how: 'Test each eye with Ishihara plates, or compare how red a red object looks to each eye.',
              say: 'Does this red look the same with each eye, or duller with one?',
              lookFor: 'Errors on the plates, or red looking washed out in one eye.',
              findings: [
                { text: 'Red looks washed out in one eye (red desaturation)', dx: ['Optic neuritis', 'Optic nerve compression'] }
              ]
            },
            {
              title: 'Sensory: visual fields',
              how: 'Sit opposite the patient at arm\'s length, eyes level. Ask them to cover one eye and look at your nose, and cover your opposite eye. Bring a wiggling finger in from the edge of each quadrant, halfway between you, comparing their field with yours. Test the other eye.',
              say: 'Cover your left eye with your hand and keep looking at my nose. Say "now" as soon as you see my finger move.',
              lookFor: 'Any field loss, and its shape across both eyes.',
              findings: [
                { text: 'Loss in one eye only', dx: ['Retinal or optic nerve lesion'] },
                { text: 'Loss of the outer half of the field in both eyes (bitemporal hemianopia)', dx: ['Optic chiasm lesion (pituitary tumor)'] },
                { text: 'Loss of the same half in both eyes (homonymous hemianopia)', dx: ['Optic tract, radiation or occipital lesion (stroke)'] },
                { text: 'Loss of the upper quarter on the same side in both eyes', dx: ['Temporal lobe lesion'] },
                { text: 'Loss of the lower quarter on the same side in both eyes', dx: ['Parietal lobe lesion'] },
                { text: 'A central blind spot (central scotoma)', dx: ['Optic neuritis (MS)'] }
              ]
            },
            {
              title: 'Reflex: pupillary light reflex',
              how: 'In dim light, ask the patient to look into the distance. Shine a light into one eye from the side and watch that pupil (direct), then shine it again and watch the other pupil (consensual). Repeat for the other eye.',
              say: 'Keep looking at the far wall. I\'m going to shine a light in your eyes.',
              lookFor: 'Whether each pupil constricts briskly to direct and consensual light.',
              findings: [
                { text: 'Neither pupil constricts with light in one eye, but both constrict with light in the other', dx: ['Optic nerve lesion on the first side (afferent defect)'] },
                { text: 'One pupil large and unreactive to direct and consensual light', dx: ['Oculomotor nerve palsy (efferent defect)', 'Mydriatic eye drops'] }
              ]
            },
            {
              title: 'Reflex: swinging light test',
              how: 'Swing the light briskly from one eye to the other, holding it for 2 to 3 seconds on each.',
              lookFor: 'A pupil that dilates when the light swings onto it.',
              findings: [
                { text: 'The pupil dilates when the light swings onto it (RAPD)', dx: ['Optic nerve lesion on that side (optic neuritis, compression)'] }
              ]
            },
            {
              title: 'Reflex: accommodation',
              how: 'Ask the patient to look into the distance, then at your finger held about 15 cm in front of the nose.',
              say: 'Look at the far wall. Now look at my finger.',
              lookFor: 'The pupils constricting as the eyes converge.',
              findings: [
                { text: 'Constricts to near, but not to light (light-near dissociation)', dx: ['Argyll Robertson pupil (neurosyphilis, DM)', 'Adie pupil (large, slow)'] }
              ]
            },
            {
              title: 'Special test: fatigability',
              how: 'Ask the patient to look up at your finger without blinking for 60 seconds.',
              say: 'Keep looking up at my finger for a minute, without moving your head.',
              lookFor: 'Eyelids that droop as the patient keeps looking up.',
              findings: [
                { text: 'Ptosis that worsens with sustained up gaze', dx: ['Myasthenia gravis'] }
              ]
            },
            {
              title: 'Special test: cover test',
              how: 'Ask the patient to look at a target. Cover one eye and watch the other for movement, then uncover and watch the covered eye.',
              lookFor: 'An eye that moves to pick up the target.',
              findings: [
                { text: 'The uncovered eye moves to take up fixation', dx: ['Manifest squint (strabismus)'] }
              ]
            },
            {
              title: 'Special test: fundoscopy',
              how: 'In a darkened room, use your right eye for the patient\'s right eye. Check the red reflex from 30 cm, then come in close and look at the disc, the vessels and the macula.',
              say: 'Keep looking at that spot on the wall, even if I get in the way. I\'ll be quite close for a moment.',
              lookFor: 'The red reflex, the disc margin and color, and the vessels and retina.',
              findings: [
                { text: 'Absent red reflex', dx: ['Cataract', 'Retinoblastoma (in a child)'] },
                { text: 'Swollen disc with blurred margins (papilledema)', dx: ['Raised ICP'] },
                { text: 'Pale disc (optic atrophy)', dx: ['Previous optic neuritis', 'Optic nerve compression'] },
                { text: 'Enlarged cup', dx: ['Glaucoma'] },
                { text: 'Hemorrhages, exudates or new vessels', dx: ['Diabetic retinopathy', 'Hypertensive retinopathy'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'trigeminal',
      title: 'Trigeminal Nerve (V)',
      summary: 'Inspection, the muscles of chewing, sensation in the three divisions, then the corneal reflex and jaw jerk.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Inspection: muscles of chewing',
              how: 'Look at the temples and the angles of the jaw on each side.',
              lookFor: 'Hollowing over the temporalis or masseter.',
              findings: [
                { text: 'Hollow temple or jaw on one side', dx: ['Trigeminal motor lesion'] }
              ]
            },
            {
              title: 'Motor: masseter, temporalis and pterygoids',
              how: 'Ask the patient to clench the teeth while you feel the masseter and temporalis on both sides. Then ask them to open the mouth against your hand under the chin.',
              say: 'Clench your teeth together. Now open your mouth and don\'t let me close it.',
              lookFor: 'Weak bulk on one side, and the jaw deviating as it opens.',
              findings: [
                { text: 'The jaw deviates to one side on opening', dx: ['Trigeminal motor lesion on that side (weak pterygoid)'] }
              ]
            },
            {
              title: 'Sensory: the three divisions',
              how: 'With the eyes closed, test light touch and then pinprick on each side of the forehead (V1), cheek (V2) and chin (V3), comparing sides. The angle of the jaw is supplied by C2, not the trigeminal nerve.',
              say: 'Close your eyes and say "yes" each time you feel this. Does it feel the same on both sides?',
              lookFor: 'Reduced sensation, and which divisions it affects.',
              findings: [
                { text: 'Loss in one division', dx: ['Branch lesion (e.g. herpes zoster, trauma)'] },
                { text: 'Loss in all three divisions on one side', dx: ['Trigeminal ganglion or root lesion (cerebellopontine angle tumor)'] },
                { text: 'Loss that includes the angle of the jaw', dx: ['Not trigeminal (C2, or nonorganic)'] }
              ]
            },
            {
              title: 'Reflex: corneal reflex',
              how: 'Ask the patient to look up and away. Touch the edge of the cornea (not the white of the eye) lightly with a wisp of cotton wool, approaching from the side. Repeat on the other eye.',
              say: 'Look up and away from me. I\'m going to touch your eye very lightly with this cotton wool.',
              lookFor: 'Blinking of both eyes.',
              findings: [
                { text: 'No blink in either eye when one cornea is touched', dx: ['V1 lesion on that side (afferent; early sign of an acoustic neuroma)'] },
                { text: 'The other eye blinks, but not the touched eye', dx: ['Facial nerve lesion on that side (efferent)'] }
              ]
            },
            {
              title: 'Reflex: jaw jerk',
              how: 'Ask the patient to let the mouth hang slightly open. Place your finger on the chin and tap it gently with the hammer.',
              say: 'Let your mouth hang slightly open and relax your jaw.',
              lookFor: 'A brisk closing jerk of the jaw.',
              findings: [
                { text: 'Brisk jaw jerk', dx: ['UMN lesion above the pons on both sides (pseudobulbar palsy, MND)'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'facial',
      title: 'Facial Nerve (VII)',
      summary: 'Inspection, the muscles of facial expression (is the forehead spared?), then taste and the ear.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Inspection: the face',
              how: 'Watch the face at rest and during conversation.',
              lookFor: 'Asymmetry, a flattened nasolabial fold, a drooping corner of the mouth, and reduced blinking on one side.',
              findings: [
                { text: 'Flattened nasolabial fold and drooping mouth on one side', dx: ['Facial weakness'] }
              ]
            },
            {
              title: 'Motor: muscles of facial expression',
              how: 'Ask the patient to raise the eyebrows, screw the eyes shut (try to open them), puff out the cheeks, and show the teeth. Compare both sides.',
              say: 'Raise your eyebrows as if surprised. Now screw your eyes shut and don\'t let me open them. Puff out your cheeks. Now show me your teeth.',
              lookFor: 'Weakness on one side, and whether the forehead is spared.',
              findings: [
                { text: 'Whole half of the face weak, including the forehead', dx: ['LMN facial nerve lesion (Bell palsy, Ramsay Hunt syndrome, parotid tumor)'] },
                { text: 'Lower face weak, forehead spared', dx: ['UMN lesion (stroke; the forehead has input from both hemispheres)'] },
                { text: 'Weakness on both sides', dx: ['Guillain-Barré syndrome', 'Sarcoidosis', 'Lyme disease'] },
                { text: 'The eye rolls up when the patient tries to close it (Bell phenomenon)', dx: ['LMN facial weakness (eye closure fails)'] }
              ]
            },
            {
              title: 'Sensory: taste',
              how: 'If indicated, place sugar or salt on each side of the front of the protruded tongue, and ask the patient to identify it before pulling the tongue back in.',
              lookFor: 'Loss of taste on the front two thirds of the tongue on one side.',
              findings: [
                { text: 'Loss of taste on one side', dx: ['Facial nerve lesion proximal to the chorda tympani (e.g. Bell palsy)'] }
              ]
            },
            {
              title: 'Special test: the ear and parotid',
              how: 'Look in and around the ear, and feel the parotid gland in front of the ear.',
              lookFor: 'Vesicles in or around the ear, and a parotid lump.',
              findings: [
                { text: 'Vesicles in the ear canal or on the palate', dx: ['Ramsay Hunt syndrome (herpes zoster)'] },
                { text: 'A parotid lump with facial weakness', dx: ['Parotid tumor'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'vestibulocochlear',
      title: 'Vestibulocochlear Nerve (VIII)',
      summary: 'Hearing with the whispered voice, Rinne and Weber tests, then otoscopy and the vestibular tests if dizziness is a complaint.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Sensory: whispered voice test',
              how: 'Stand behind the patient at arm\'s length. Mask the other ear by rubbing the tragus. Breathe out, then whisper a combination of numbers and letters. Repeat on the other side.',
              say: 'I\'m going to whisper some numbers and letters. Repeat them back to me.',
              lookFor: 'Whether the patient repeats them correctly.',
              findings: [
                { text: 'Cannot repeat the whisper on one side', dx: ['Hearing loss on that side (go on to Rinne and Weber)'] }
              ]
            },
            {
              title: 'Sensory: Rinne test',
              how: 'Strike a 512 Hz tuning fork and place its base on the mastoid process. When the patient no longer hears it, hold the prongs beside the ear canal.',
              say: 'Tell me when you can no longer hear the sound. Can you hear it now?',
              lookFor: 'Whether air conduction (beside the ear) is louder than bone conduction (on the mastoid).',
              findings: [
                { text: 'Heard beside the ear after the mastoid (air louder than bone, Rinne positive)', dx: ['Normal', 'Sensorineural hearing loss'] },
                { text: 'Not heard beside the ear (bone louder than air, Rinne negative)', dx: ['Conductive hearing loss on that side'] }
              ]
            },
            {
              title: 'Sensory: Weber test',
              how: 'Strike the tuning fork and place its base on the middle of the forehead.',
              say: 'Where do you hear the sound: in the middle, or louder in one ear?',
              lookFor: 'Whether the sound is central or lateralizes to one ear.',
              findings: [
                { text: 'Louder in the ear with reduced hearing', dx: ['Conductive hearing loss in that ear (wax, otitis media, otosclerosis)'] },
                { text: 'Louder in the better-hearing ear', dx: ['Sensorineural hearing loss in the other ear (presbycusis, noise, acoustic neuroma)'] }
              ]
            },
            {
              title: 'Special test: otoscopy',
              how: 'Pull the ear up and back, and look at the canal and the eardrum with the otoscope.',
              lookFor: 'Wax, discharge, and the color and integrity of the eardrum.',
              findings: [
                { text: 'Wax blocking the canal', dx: ['Conductive hearing loss'] },
                { text: 'Red, bulging eardrum', dx: ['Otitis media'] },
                { text: 'A hole in the eardrum', dx: ['Perforation'] }
              ]
            },
            {
              title: 'Special test: head impulse test',
              how: 'For a patient with acute, continuous vertigo (part of HINTS, with the nystagmus seen on the H test and the test of skew): ask them to fix on your nose. Turn the head quickly about 15° to one side and watch the eyes. Repeat to the other side.',
              say: 'Keep looking at my nose, and let me move your head quickly.',
              lookFor: 'A catch-up saccade back to your nose after the turn.',
              findings: [
                { text: 'A catch-up saccade', dx: ['Peripheral vestibular lesion (vestibular neuritis) on that side'] },
                { text: 'No catch-up saccade in acute continuous vertigo', dx: ['Central cause (posterior circulation stroke)'] }
              ]
            },
            {
              title: 'Special test: test of skew',
              how: 'For acute, continuous vertigo: ask the patient to look at your nose. Cover one eye, then quickly move the cover to the other eye, and back.',
              say: 'Keep looking at my nose while I cover each eye in turn.',
              lookFor: 'An eye that moves up or down to refix when uncovered.',
              findings: [
                { text: 'Vertical refixation (skew deviation)', dx: ['Central cause (brainstem or cerebellar stroke)'] },
                { text: 'In acute vertigo: a normal head impulse test, nystagmus that changes direction, or skew (any one)', dx: ['Posterior circulation stroke (HINTS)'] }
              ]
            },
            {
              title: 'Special test: Dix-Hallpike maneuver',
              how: 'For brief vertigo triggered by head movement: sit the patient on the bed and turn the head 45° to one side. Lie them back quickly so the head hangs about 20° below the bed edge. Watch the eyes for 30 seconds, then sit them up. Repeat on the other side.',
              say: 'I\'m going to lie you back quickly. Keep your eyes open and look at my nose, even if you feel dizzy.',
              lookFor: 'Rotatory nystagmus after a short delay, with vertigo, that fades within a minute.',
              findings: [
                { text: 'Delayed, fading rotatory nystagmus with vertigo', dx: ['BPPV on the side turned down'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'glossopharyngeal-vagus',
      title: 'Glossopharyngeal and Vagus Nerves (IX, X)',
      summary: 'Voice and swallow, the palate and uvula, then the gag reflex if indicated.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Inspection: voice and cough',
              how: 'Listen to the voice, and ask the patient to cough.',
              say: 'Could you give a cough for me?',
              lookFor: 'A hoarse, nasal or breathy voice, and a weak cough.',
              findings: [
                { text: 'Hoarse voice and a weak, breathy cough', dx: ['Recurrent laryngeal nerve palsy'] },
                { text: 'Nasal voice', dx: ['Palatal weakness (bulbar palsy, myasthenia gravis)'] }
              ]
            },
            {
              title: 'Motor: palate and uvula',
              how: 'With a light, look at the palate and uvula at rest, then ask the patient to say "ah".',
              say: 'Open your mouth wide and say "aah".',
              lookFor: 'Whether both sides of the palate rise equally, and which way the uvula moves.',
              findings: [
                { text: 'The uvula pulls to one side', dx: ['Vagus nerve lesion on the opposite side'] },
                { text: 'The palate barely rises on either side', dx: ['Bilateral vagus lesion (bulbar palsy)'] }
              ]
            },
            {
              title: 'Motor: swallow',
              how: 'If it is safe (the patient is alert and sitting up), ask them to take a small sip of water.',
              say: 'Take a small sip of water and swallow for me.',
              lookFor: 'Coughing, choking or a wet voice after swallowing.',
              findings: [
                { text: 'Coughing, choking or a wet voice after a sip', dx: ['Unsafe swallow (aspiration risk)'] }
              ]
            },
            {
              title: 'Reflex: gag reflex',
              how: 'Only if indicated: warn the patient, and touch the back of the pharynx on each side with a tongue depressor.',
              say: 'This may make you gag for a moment. I\'ll be quick.',
              lookFor: 'Gagging, and the palate rising on both sides.',
              findings: [
                { text: 'No gag on one side', dx: ['Glossopharyngeal lesion (afferent) or vagus lesion (efferent)'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'accessory',
      title: 'Accessory Nerve (XI)',
      summary: 'Inspection of the trapezius and sternocleidomastoid, then their power.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Inspection: neck and shoulders',
              how: 'Look at the neck and shoulders from the front and behind.',
              lookFor: 'Wasting of the sternocleidomastoid or trapezius, and a drooping shoulder.',
              findings: [
                { text: 'Wasting with a drooping shoulder', dx: ['Accessory nerve lesion (e.g. after neck surgery)'] }
              ]
            },
            {
              title: 'Motor: trapezius and sternocleidomastoid',
              how: 'Ask the patient to shrug the shoulders against your hands. Then ask them to turn the head against your hand on the side of the chin, feeling the opposite sternocleidomastoid (turning to the left tests the right muscle).',
              say: 'Shrug your shoulders up and don\'t let me push them down. Now turn your head to the left against my hand.',
              lookFor: 'Weakness on one or both sides.',
              findings: [
                { text: 'Weak shrug and head turn on one side', dx: ['Accessory nerve lesion'] },
                { text: 'Weak on both sides', dx: ['MND', 'Myopathy (e.g. myotonic dystrophy)'] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'hypoglossal',
      title: 'Hypoglossal Nerve (XII)',
      summary: 'The tongue at rest in the mouth, then sticking out and moving.',
      core: [
        {
          type: 'steps',
          items: [
            {
              title: 'Inspection: the tongue at rest',
              how: 'With a light, look at the tongue lying in the floor of the mouth for about 30 seconds.',
              say: 'Open your mouth and let your tongue rest. Don\'t stick it out yet.',
              lookFor: 'Wasting and fasciculations.',
              findings: [
                { text: 'Wasting and fasciculations of the tongue', dx: ['LMN lesion (MND, bulbar palsy)'] },
                { text: 'Small, stiff tongue', dx: ['UMN lesion (pseudobulbar palsy)'] }
              ]
            },
            {
              title: 'Motor: tongue movements',
              how: 'Ask the patient to stick the tongue out, move it from side to side, and push it into each cheek against your finger.',
              say: 'Stick your tongue out. Move it from side to side. Now push it into your cheek against my finger.',
              lookFor: 'Deviation when protruded, and weak or slow movements.',
              findings: [
                { text: 'The tongue deviates to one side when stuck out', dx: ['Hypoglossal nerve lesion on that side (it pushes toward the weak side)'] },
                { text: 'Slow, stiff side-to-side movements', dx: ['Pseudobulbar palsy'] }
              ]
            }
          ]
        },
        {
          type: 'redflags',
          title: 'Outside expectations: take an acute history',
          items: [
            { text: 'A large, unreactive pupil with ptosis and headache: oculomotor nerve compression (aneurysm, raised ICP)', see: ['headache', 'senses-change'] },
            { text: 'Sudden loss of vision in one eye: retinal artery occlusion or giant cell arteritis', see: ['senses-change'] },
            { text: 'Papilledema: raised ICP', see: ['headache'] },
            { text: 'Facial weakness sparing the forehead, or with limb weakness or speech change: stroke', see: ['weakness-numbness'] },
            { text: 'Sudden hearing loss in one ear: sudden sensorineural hearing loss (treat within days)', see: ['senses-change'] },
            { text: 'Acute vertigo with a normal head impulse test or nystagmus that changes direction: posterior circulation stroke', see: ['dizziness'] },
            { text: 'Fatigable ptosis or bulbar weakness with dyspnea: myasthenic crisis', see: ['weakness-numbness'] }
          ]
        },
        {
          type: 'list',
          title: 'To complete the examination',
          items: [
            'Complete the peripheral neurologic and cerebellar examinations',
            'Check the BP and BG',
            'Arrange formal tests as needed: perimetry for visual fields, audiometry, an MRI of the brain'
          ]
        },
        {
          type: 'callout',
          variant: 'tip',
          text: 'Summarize by pattern. One nerve, or several together: III, IV, V1 and VI point to the cavernous sinus; V, VII and VIII to the cerebellopontine angle; IX, X and XII together are a bulbar palsy (LMN: wasted, fasciculating tongue) or pseudobulbar palsy (UMN: stiff tongue, brisk jaw jerk). Variable, fatigable signs suggest myasthenia gravis.'
        }
      ]
    }
  ]
});
