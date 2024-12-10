import { Question } from '../../types';

export const cseQuestions: Question[] = [
  {
    id: 'cse1',
    domain: 'cse',
    subDomain: 'core',
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
    correctAnswer: 'O(log n)',
    explanation: 'Binary search repeatedly divides the search interval in half, resulting in logarithmic time complexity.',
    difficulty: 'medium'
  },
  {
    id: 'cse2',
    domain: 'cse',
    subDomain: 'core',
    question: 'Which of the following is not a valid access modifier in Java?',
    options: ['public', 'private', 'friendly', 'protected'],
    correctAnswer: 'friendly',
    explanation: 'Java has public, private, protected, and default (package-private) access modifiers. "friendly" is not a valid access modifier.',
    difficulty: 'easy'
  }
];