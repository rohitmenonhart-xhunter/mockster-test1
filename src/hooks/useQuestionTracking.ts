import { useState } from 'react';
import { QuestionResult } from '../types';

export function useQuestionTracking() {
  const [questionResults, setQuestionResults] = useState<Map<string, QuestionResult>>(new Map());
  const [attemptsMap, setAttemptsMap] = useState<Map<string, number>>(new Map());

  const trackAnswer = (
    questionId: string,
    domain: string,
    isCorrect: boolean,
    timeSpent: number,
    question: string
  ) => {
    const currentAttempts = (attemptsMap.get(questionId) || 0) + 1;
    setAttemptsMap(new Map(attemptsMap.set(questionId, currentAttempts)));

    setQuestionResults(new Map(questionResults.set(questionId, {
      questionId,
      domain,
      isCorrect,
      attempts: currentAttempts,
      timeSpent,
      question
    })));
  };

  return {
    questionResults,
    trackAnswer,
    attemptsMap
  };
}