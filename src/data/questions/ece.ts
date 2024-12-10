import { Question } from '../../types';

export const eceQuestions: Question[] = [
  {
    id: 'ece1',
    domain: 'ece',
    subDomain: 'core',
    question: 'What is the bandwidth of an ideal low-pass filter with cutoff frequency of 1 MHz?',
    options: ['500 kHz', '1 MHz', '2 MHz', '4 MHz'],
    correctAnswer: '1 MHz',
    explanation: 'The bandwidth of an ideal low-pass filter is equal to its cutoff frequency.',
    difficulty: 'medium'
  },
  {
    id: 'ece2',
    domain: 'ece',
    subDomain: 'core',
    question: 'In a common-emitter amplifier configuration, the phase difference between input and output signal is:',
    options: ['0°', '90°', '180°', '270°'],
    correctAnswer: '180°',
    explanation: 'In a common-emitter amplifier, the output signal is inverted (180° phase shift) relative to the input signal.',
    difficulty: 'medium'
  }
];