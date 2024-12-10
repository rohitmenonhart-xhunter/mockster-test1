import { Question } from '../../types';

export const eeeQuestions: Question[] = [
  {
    id: 'eee1',
    domain: 'eee',
    subDomain: 'core',
    question: 'What is the power factor of a purely inductive circuit?',
    options: ['0 leading', '0 lagging', '1', '-1'],
    correctAnswer: '0 lagging',
    explanation: 'In a purely inductive circuit, the current lags the voltage by 90°, resulting in a power factor of 0 lagging.',
    difficulty: 'medium'
  },
  {
    id: 'eee2',
    domain: 'eee',
    subDomain: 'core',
    question: 'Which law states that the induced EMF is proportional to the rate of change of magnetic flux?',
    options: ["Faraday's law", "Ampere's law", "Gauss's law", "Lenz's law"],
    correctAnswer: "Faraday's law",
    explanation: "Faraday's law of electromagnetic induction states that the induced EMF is directly proportional to the rate of change of magnetic flux through the circuit.",
    difficulty: 'medium'
  }
];