import React, { ChangeEvent, useEffect, useState } from "react";
import preguntas from "../src/questions/questions.json";
import { loadQuestions } from "./redux/action";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

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

  const handleClick = (direction: number) => {
    setSelectedAnswer("");
    setShowAnswerInfo(false);
    setCurrentCuestion(currentCuestion + direction);
    dispatch(loadQuestions());
  };

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    currentQuiz.map((quiz) => (quiz.respondida = true));
    setSelectedAnswer(e.target.value);
    setShowAnswerInfo(true);

    const theQuiz = quizlist[currentCuestion];
    localStorage.setItem("pregunta", JSON.stringify(theQuiz.pregunta));
    localStorage.setItem("respondida", JSON.stringify(theQuiz.respondida));
    localStorage.setItem(
      "respuestaAcertada",
      JSON.stringify(theQuiz.respuestaAcertada)
    );
  };

  function parseStorage() {
    try {
      const respondida = JSON.parse(
        localStorage.getItem("respondida") || "null"
      );
      const respuestaAcertada = JSON.parse(
        localStorage.getItem("respuestaAcertada") || "null"
      );
      if (respondida !== null) {
        currentQuiz.map((quiz) => (quiz.respondida = respondida));
        currentQuiz.map((quiz) => (quiz.respuestaAcertada = respuestaAcertada));
      }
    } catch (error) {
      console.error(`Error parsing value:`, error);
      return null;
    }
    return;
  }

  useEffect(() => {
    // Recuperar estado guardado en localStorage
    parseStorage();
  }, []);

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

      <button type="button" onClick={() => handleClick(-1)}>
        Anterior
      </button>
      <button
        type="button"
        onClick={() => {
          handleClick(1);
        }}
      >
        Siguiente
      </button>
    </div>
  );
}

export default App;
