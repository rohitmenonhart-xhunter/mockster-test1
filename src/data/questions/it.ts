import { Question } from '../../types';

export const itQuestions: Question[] = [
  {
    id: 'it1',
    domain: 'it',
    subDomain: 'core',
    question: 'Which protocol is used for secure communication over a computer network?',
    options: ['HTTP', 'FTP', 'HTTPS', 'SMTP'],
    correctAnswer: 'HTTPS',
    explanation: 'HTTPS (Hypertext Transfer Protocol Secure) is used for secure communication over a computer network, encrypting the data being transferred between client and server.',
    difficulty: 'medium'
  },
  {
    id: 'it2',
    domain: 'it',
    subDomain: 'core',
    question: 'What is the primary purpose of a firewall in network security?',
    options: [
      'To speed up network traffic',
      'To monitor and control incoming and outgoing network traffic',
      'To store network data',
      'To compress data packets'
    ],
    correctAnswer: 'To monitor and control incoming and outgoing network traffic',
    explanation: 'A firewall acts as a barrier between a trusted network and untrusted networks, monitoring and controlling incoming and outgoing network traffic based on security rules.',
    difficulty: 'medium'
  }
];