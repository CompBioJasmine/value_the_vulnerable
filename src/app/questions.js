export const questions = [
  {
    question: 'How are you coping with the crisis?',
    answerType: 'multiple',
    answerChoices: ['Very Poorly', 'Somewhat Poorly', 'Neutral', 'Somewhat Well', 'Very Well'],
    explainMoreText: null,
    id: 1,
    sort: 1,
    group: 'personal questions'
  },

  {
    question: 'What is your current situation (due to the crisis)?',
    answerType: 'multiple',
    answerChoices: [
      'quarantine due to infection',
      'quarantine due to law',
      'voluntary quarantine',
      'just a little less outside / social',
      'no change to previous situation'
    ],
    explainMoreText: 'Other: Explain',
    id: 2,
    sort: 2,
    group: 'situational questions'
  },

  {
    question: 'Are you working outside the home?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 3,
    sort: 3,
    group: 'situational questions'
  },

  {
    question: 'Are you working at home?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 4,
    sort: 4,
    group: 'situational questions'
  },

  {
    question: 'If you are quarantined, how many people are you quarantined with?',
    answerType: 'numerical',
    answerChoices: [],
    explainMoreText: null,
    id: 5,
    sort: 5,
    group: 'situational questions'
  },

  {
    question: 'Did you lose your job due to the virus?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 6,
    sort: 6,
    group: 'situational questions'
  },

  {
    question: 'Did you lose someone due to the virus?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 9,
    sort: 9,
    group: 'personal questions'
  },

  {
    question: 'Have you been diagnosed with the virus?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 10,
    sort: 10,
    group: 'personal questions'
  },

  {
    question: 'Do you know anyone (or more than one person) diagnosed with the virus?',
    answerType: 'multiple',
    answerChoices: ['yes', 'no', 'multiple'],
    explainMoreText: 'Specify number',
    id: 11,
    sort: 11,
    group: 'personal questions'
  },

  {
    question: 'Has anyone (or more than one person) in your household been diagnosed with the virus?',
    answerType: 'multiple',
    answerChoices: ['yes', 'no', 'multiple'],
    explainMoreText: 'Specify number',
    id: 12,
    sort: 12,
    group: 'personal questions'
  },

  {
    question: 'How do you perceive your physical health?',
    answerType: 'multiple',
    answerChoices: ['worse than before', 'similar / unchanged', 'better than before'],
    explainMoreText: 'Explain',
    id: 13,
    sort: 13,
    group: 'personal questions'
  },

  {
    question: 'Have you experienced any flulike symptoms?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 14,
    sort: 14,
    group: 'personal questions'
  },

  {
    question: 'If so, do you have a stuffy nose?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 15,
    sort: 15,
    group: 'personal questions'
  },

  {
    question: 'How do you perceive your mental health?',
    answerType: 'multiple',
    answerChoices: ['worse than before', 'similar / unchanged', 'better than before'],
    explainMoreText: 'Explain',
    id: 16,
    sort: 16,
    group: 'personal questions'
  },

  {
    question: 'How do you feel about the level of conflict in your home?',
    answerType: 'multiple',
    answerChoices: ['worse than before', 'similar / unchanged', 'better than before'],
    explainMoreText: 'Explain',
    id: 17,
    sort: 17,
    group: 'personal questions'
  },

  {
    question: 'Do you feel unsafe in your home?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: 'Explain',
    id: 18,
    sort: 18,
    group: 'personal questions'
  },

  {
    question: 'Do you feel insecure about your future?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 19,
    sort: 19,
    group: 'personal questions'
  },

  {
    question: 'Do you feel tired?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 20,
    sort: 20,
    group: 'personal questions'
  },

  {
    question: 'Do you find it hard to be productive?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 21,
    sort: 21,
    group: 'personal questions'
  },

  {
    question: 'Do you feel like your relationships with people close to you have been negatively impacted?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 22,
    sort: 22,
    group: 'personal questions'
  },

  {
    question: 'Have you been outside in the past three days?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 23,
    sort: 23,
    group: 'personal questions'
  },

  {
    question: 'Have you experienced any shortage of (one or more) household goods?',
    answerType: 'multiple',
    answerChoices: ['yes, 1', 'yes, multiple', 'no'],
    explainMoreText: 'Specify good(s)',
    id: 24,
    sort: 24,
    group: 'situational questions'
  },

  {
    question: 'If you are a healthcare worker, have you experienced any shortage of Personal Protective Equipment?',
    answerType: 'multiple',
    answerChoices: ['yes', 'not applicable', 'no'],
    explainMoreText: 'Specify good(s)',
    id: 25,
    sort: 25,
    group: 'situational questions'
  },

  {
    question: 'Where do you live?',
    answerType: 'text',
    answerChoices: [],
    explainMoreText: 'Specify country (and state if applicable)',
    id: 26,
    sort: 26,
    group: 'demographic questions'
  },

  {
    question: 'Which gender do you identify as?',
    answerType: 'multiple',
    answerChoices: ['cisgender male', 'cisgender female', 'transgender male', 'transgender female', 'other'],
    explainMoreText: 'Specify other',
    id: 27,
    sort: 27,
    group: 'demographic questions'
  },

  {
    question: 'How old are you?',
    answerType: 'numerical',
    answerChoices: [],
    explainMoreText: null,
    id: 28,
    sort: 28,
    group: 'demographic questions'
  },

  {
    question: 'What is your profession?',
    answerType: 'text',
    answerChoices: [],
    explainMoreText: null,
    id: 29,
    sort: 29,
    group: 'demographic questions'
  },

  {
    question: 'Are you a healthcare worker?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 30,
    sort: 30,
    group: 'demographic questions'
  },

  {
    question: 'Are you a warehouse worker?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 31,
    sort: 31,
    group: 'demographic questions'
  },

  {
    question: 'Are you a grocery store worker?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 32,
    sort: 32,
    group: 'demographic questions'
  },

  {
    question: 'Are you a different kind of worker but considered essential?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: 'Specify profession',
    id: 33,
    sort: 33,
    group: 'demographic questions'
  },

  {
    question: 'What is your religion?',
    answerType: 'text',
    answerChoices: [],
    explainMoreText: null,
    id: 34,
    sort: 34,
    group: 'demographic questions'
  },

  {
    question: 'What is your socioeconomic status?',
    answerType: 'multiple',
    answerChoices: ['upper', 'upper-middle', 'middle', 'working', 'lower'],
    explainMoreText: 'Explain',
    id: 35,
    sort: 35,
    group: 'demographic questions'
  },

  {
    question: 'How many children do you have?',
    answerType: 'numerical',
    answerChoices: [],
    explainMoreText: null,
    id: 36,
    sort: 36,
    group: 'demographic questions'
  },

  {
    question: 'Have you attended any large gatherings (20+ people) in the past month?',
    answerType: 'yes-no',
    answerChoices: [],
    explainMoreText: null,
    id: 37,
    sort: 37,
    group: 'demographic questions'
  },

  {
    question: 'Is there any other way the crisis affected you, which was not covered by the questionnaire?',
    answerType: 'text',
    answerChoices: [],
    explainMoreText: null,
    id: 38,
    sort: 38,
    group: 'open questions'
  }
];
