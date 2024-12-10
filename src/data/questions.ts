import { Question } from '../types';
import { generalQuestions } from './questions/general';
import { cseQuestions } from './questions/cse';
import { eceQuestions } from './questions/ece';
import { eeeQuestions } from './questions/eee';
import { mechanicalQuestions } from './questions/mechanical';
import { civilQuestions } from './questions/civil';
import { itQuestions } from './questions/it';
import { marineQuestions } from './questions/marine';
import { automobileQuestions } from './questions/automobile';

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