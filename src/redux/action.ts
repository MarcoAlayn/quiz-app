export const LOAD_QUESTIONS = "LOAD_QUESTIONS";
import questions from "../questions/questions.json";

interface Quiz {
  tema: string;
  pregunta: string;
  respuestas: Array<string>;
  respuestaCorrecta: string;
  explicacion: string;
  respondida: boolean;
  respuestaAcertada: boolean;
  dificultad: string;
}

export interface LoadQuestionsAction {
  type: typeof LOAD_QUESTIONS;
  payload: Quiz[];
}

export function loadQuestions(): LoadQuestionsAction {
  const questionsList: Quiz[] = questions;
  return {
    type: LOAD_QUESTIONS,
    payload: questionsList,
  };
}
