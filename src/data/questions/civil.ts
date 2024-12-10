import { Question } from '../../types';

export const civilQuestions: Question[] = [
  {
    id: 'civil1',
    domain: 'civil',
    subDomain: 'core',
    question: 'What is the minimum grade of concrete recommended for reinforced concrete structural members?',
    options: ['M15', 'M20', 'M25', 'M30'],
    correctAnswer: 'M20',
    explanation: 'As per standard codes, M20 is the minimum grade of concrete recommended for reinforced concrete structural members to ensure adequate strength and durability.',
    difficulty: 'medium'
  },
  {
    id: 'civil2',
    domain: 'civil',
    subDomain: 'core',
    question: 'Which type of foundation is most suitable for soft soil conditions?',
    options: ['Isolated footing', 'Raft foundation', 'Pile foundation', 'Strip foundation'],
    correctAnswer: 'Pile foundation',
    explanation: 'Pile foundations are most suitable for soft soil conditions as they transfer the load to deeper, stronger soil layers or bedrock.',
    difficulty: 'medium'
  }
];