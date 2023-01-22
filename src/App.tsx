import React, { useState } from "react";
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
  const currentCuestion = Array(preguntasList[preguntaActual]);

  console.log(currentCuestion);

  return (
    <div>
      {currentCuestion.map((item) => (
        <span key={item.pregunta}>{item.tema}</span>
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
