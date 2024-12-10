export type Domain = 'general' | 'cse' | 'ece' | 'eee' | 'mech' | 'civil' | 'it' | 'marine' | 'automobile';

export type SubDomain = 'quantitative' | 'logical' | 'verbal' | 'core';

export interface Question {
  id: string;
  domain: Domain;
  subDomain?: SubDomain;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface UserProgress {
  domain: Domain;
  questionId: string;
  timeSpent: number;
  attempts: number;
  timestamp: number;
}

export interface QuestionResult {
  questionId: string;
  domain: Domain;
  isCorrect: boolean;
  attempts: number;
  timeSpent: number;
  question: string;
}