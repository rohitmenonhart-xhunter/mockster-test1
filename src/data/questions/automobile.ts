import { Question } from '../../types';

export const automobileQuestions: Question[] = [
  {
    id: 'auto1',
    domain: 'automobile',
    subDomain: 'core',
    question: 'What is the function of a catalytic converter in an automobile?',
    options: [
      'To increase engine power',
      'To reduce exhaust emissions',
      'To improve fuel efficiency',
      'To reduce engine noise'
    ],
    correctAnswer: 'To reduce exhaust emissions',
    explanation: 'A catalytic converter converts harmful pollutants in exhaust gas into less harmful substances through chemical reactions.',
    difficulty: 'medium'
  },
  {
    id: 'auto2',
    domain: 'automobile',
    subDomain: 'core',
    question: 'Which type of brake system is most commonly used in modern cars?',
    options: [
      'Drum brakes',
      'Disc brakes',
      'Mechanical brakes',
      'Band brakes'
    ],
    correctAnswer: 'Disc brakes',
    explanation: 'Disc brakes are most common in modern cars due to their superior stopping power, better heat dissipation, and more consistent performance compared to other brake types.',
    difficulty: 'medium'
  }
];