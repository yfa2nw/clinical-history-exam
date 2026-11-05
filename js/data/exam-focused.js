/*
 * Focused examination: one body part examined in depth (e.g. the thyroid). Each focused
 * examination (js/data/focused) brings its own pages; this skeleton only holds the page shown
 * before one is chosen. Thyroid status and the rest of the body come from the system
 * examinations.
 */
CHE.exam.focused = {
  id: 'focused',
  title: 'Focused Examination',
  description: 'One body part examined in depth: the technique, what to say to the patient, what to look for and what it means. Choose an examination from the library.',
  // The chosen examination's own pages replace these.
  sections: [
    {
      id: 'choose',
      title: 'Choose an Examination',
      summary: 'Pick a focused examination from the library to see its steps.',
      slots: ['exam'],
      core: []
    }
  ]
};
