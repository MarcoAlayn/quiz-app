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
  const [preguntasList, setPreguntasList] = useState<Pregunta[]>(preguntas);
  const [preguntaActual, setPreguntaActual] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [preguntaElegida, setPreguntaElegida] = useState<string>("");

  const currentCuestion = Array(preguntasList[preguntaActual]);
  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    return setPreguntaElegida(e.target.value);
  };

  return (
    <div>
      {currentCuestion.map((item) => (
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
                  checked={preguntaElegida === option}
                  onChange={handlerChange}
                />
                <span>{option}</span>
              </div>
            ))}
          </span>
        </>
      ))}
      <button
        type="button"
        onClick={() => {
          setPreguntaActual(preguntaActual - 1);
        }}
      >
        Anterior
      </button>
      <button
        type="button"
        onClick={() => {
          setPreguntaActual(preguntaActual + 1);
        }}
      >
        Siguiente
      </button>
    </div>
  );
}

export default App;
