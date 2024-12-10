import { Question } from '../../types';

export const marineQuestions: Question[] = [
  {
    id: 'marine1',
    domain: 'marine',
    subDomain: 'core',
    question: 'What is the purpose of a bulbous bow in ship design?',
    options: [
      'To increase cargo capacity',
      'To reduce wave resistance',
      'To improve stability',
      'To increase speed only'
    ],
    correctAnswer: 'To reduce wave resistance',
    explanation: 'A bulbous bow creates a wave system that interferes with the bow wave, reducing wave resistance and improving fuel efficiency.',
    difficulty: 'medium'
  },
  {
    id: 'marine2',
    domain: 'marine',
    subDomain: 'core',
    question: 'Which system is responsible for maintaining the stability of a ship?',
    options: [
      'Ballast system',
      'Propulsion system',
      'Navigation system',
      'Communication system'
    ],
    correctAnswer: 'Ballast system',
    explanation: 'The ballast system helps maintain ship stability by controlling the water in ballast tanks, adjusting the ships trim and draft as needed.',
    difficulty: 'medium'
  }
];