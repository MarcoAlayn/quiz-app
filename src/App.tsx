import React, { ChangeEvent, ReactEventHandler, useState } from "react";
import preguntas from "../src/questions/questions.json";

interface Pregunta {
  tema: string;
  pregunta: string;
  respuestas: Array<string>;
  respuestaCorrecta: string;
  explicacion: string;
  respondida: boolean;
  respuestaAcertada: boolean;
  dificultad: string;
}

function App() {
  const quizlist: Pregunta[] = preguntas;
  const [currentCuestion, setCurrentCuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showAnswerInfo, setShowAnswerInfo] = useState(false);

  const currentQuiz = Array(quizlist[currentCuestion]);
  const resCorrecta = quizlist.map((item) => item.respuestaCorrecta);

  if (resCorrecta.includes(selectedAnswer)) {
    console.log("esta es la res. correcta");
    currentQuiz.map((quiz) => (quiz.respuestaAcertada = true));
  }

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    currentQuiz.map((quiz) => (quiz.respondida = true));
    setSelectedAnswer(e.target.value);
    setShowAnswerInfo(true);
  };
  console.log(quizlist);
  return (
    <div>
      {currentQuiz.map((item) => (
        <>
          <span key={item.pregunta}>{item.tema}</span>
          <span>{item.pregunta}</span>
          <span>
            {item.respuestas.map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  name={item.pregunta}
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={handlerChange}
                />
                <span>{option}</span>
              </div>
            ))}
          </span>

          <div>
            {showAnswerInfo && (
              <>
                <span>
                  {item.respuestaAcertada
                    ? "Tu respuesta es Correcta"
                    : "Tu respuesta es Incorrecta"}
                </span>
                <span>
                  <strong>Explicación:</strong> {item.explicacion}
                </span>
              </>
            )}
          </div>
        </>
      ))}

      <button
        type="button"
        onClick={() => {
          setSelectedAnswer("");
          setShowAnswerInfo(false);
          setCurrentCuestion(currentCuestion - 1);
        }}
      >
        Anterior
      </button>
      <button
        type="button"
        onClick={() => {
          setSelectedAnswer("");
          setShowAnswerInfo(false);
          setCurrentCuestion(currentCuestion + 1);
        }}
      >
        Siguiente
      </button>
    </div>
  );
}

export default App;
