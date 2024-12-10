import { generalQuestions } from './general';
import { cseQuestions } from './cse';
import { eceQuestions } from './ece';
import { eeeQuestions } from './eee';
import { mechanicalQuestions } from './mechanical';
import { civilQuestions } from './civil';
import { itQuestions } from './it';
import { marineQuestions } from './marine';
import { automobileQuestions } from './automobile';
import { Question } from '../../types';

export const questions: Record<string, Question[]> = {
  general: generalQuestions,
  cse: cseQuestions,
  ece: eceQuestions,
  eee: eeeQuestions,
  mech: mechanicalQuestions,
  civil: civilQuestions,
  it: itQuestions,
  marine: marineQuestions,
  automobile: automobileQuestions
};