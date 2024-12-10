import { Question } from '../../types';

export const mechanicalQuestions: Question[] = [
  {
    id: 'mech1',
    domain: 'mech',
    subDomain: 'core',
    question: 'What is the principle behind the working of a heat engine?',
    options: [
      'Converting electrical energy to mechanical energy',
      'Converting heat energy to mechanical energy',
      'Converting mechanical energy to heat energy',
      'Converting chemical energy to mechanical energy'
    ],
    correctAnswer: 'Converting heat energy to mechanical energy',
    explanation: 'A heat engine is a system that converts heat energy to mechanical work by exploiting the temperature difference between a hot source and a cold sink.',
    difficulty: 'medium'
  },
  {
    id: 'mech2',
    domain: 'mech',
    subDomain: 'core',
    question: 'In a four-stroke engine, what is the correct sequence of strokes?',
    options: [
      'Intake, Compression, Power, Exhaust',
      'Compression, Power, Exhaust, Intake',
      'Power, Exhaust, Intake, Compression',
      'Exhaust, Intake, Compression, Power'
    ],
    correctAnswer: 'Intake, Compression, Power, Exhaust',
    explanation: 'The four-stroke cycle consists of intake (fuel-air mixture enters), compression (mixture is compressed), power (combustion drives piston), and exhaust (burnt gases exit).',
    difficulty: 'medium'
  }
];