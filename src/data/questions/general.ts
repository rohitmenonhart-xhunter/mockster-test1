import { Question } from '../../types';

export const generalQuestions: Question[] = [
  // Quantitative Aptitude
  {
    id: 'g-q1',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'If a train travels 360 kilometers in 4 hours, what is its average speed in kilometers per hour?',
    options: ['80 km/h', '90 km/h', '85 km/h', '95 km/h'],
    correctAnswer: '90 km/h',
    explanation: 'To find average speed, divide total distance by total time: 360 ÷ 4 = 90 km/h',
    difficulty: 'easy'
  },
  {
    id: 'g-q2',
    domain: 'general',
    subDomain: 'quantitative',
    question: 'What is the compound interest on Rs. 1000 at 10% per annum for 2 years?',
    options: ['210', '220', '221', '200'],
    correctAnswer: '210',
    explanation: 'CI = P(1 + r/100)^t - P = 1000(1 + 10/100)^2 - 1000 = 1210 - 1000 = 210',
    difficulty: 'medium'
  },
  // Logical Reasoning
  {
    id: 'g-l1',
    domain: 'general',
    subDomain: 'logical',
    question: 'If all flowers are plants, and some plants are trees, which statement is definitely true?',
    options: [
      'All flowers are trees',
      'Some flowers are trees',
      'All flowers are plants',
      'No flowers are trees'
    ],
    correctAnswer: 'All flowers are plants',
    explanation: 'This is a syllogism. Only the given statement "All flowers are plants" is definitely true.',
    difficulty: 'medium'
  },
  // Verbal Ability
  {
    id: 'g-v1',
    domain: 'general',
    subDomain: 'verbal',
    question: 'Choose the word that is closest in meaning to "BENEVOLENT"',
    options: ['Kind', 'Hostile', 'Indifferent', 'Cruel'],
    correctAnswer: 'Kind',
    explanation: 'Benevolent means kind and generous, showing goodwill.',
    difficulty: 'medium'
  }
];