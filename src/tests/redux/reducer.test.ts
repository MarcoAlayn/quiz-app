import rootReducer from "../../redux/reducer";
import { LOAD_QUESTIONS, LoadQuestionsAction } from "../../redux/action";

describe("rootReducer", () => {
  let initialState: { questionsList: [] };

  beforeEach(() => {
    initialState = {
      questionsList: [],
    };
  });

  /* 
    se establece el estado inicial del reductor en un objeto vacío 
    antes de cada prueba, lo que garantiza que cada prueba comienza
     con el mismo estado inicial y no afecta a las pruebas siguientes.
  */

  it("deberia actualizar el estado con el listado de preguntas", () => {
    const questions = [
      {
        tema: "JavaScript",
        pregunta: "¿Qué es un closure en JavaScript?",
        respuestas: [
          "Una función anónima",
          "Una función que se ejecuta automáticamente",
          "Una función que retiene el scope de las variables en su ámbito padre",
          "Un tipo de objeto en JavaScript",
        ],
        respuestaCorrecta:
          "Una función que retiene el scope de las variables en su ámbito padre",
        explicacion:
          "Un closure es una función que retiene el scope de las variables en su ámbito padre, permitiendo el acceso a esas variables incluso después de que la función original haya regresado.",
        respondida: false,
        respuestaAcertada: false,
        dificultad: "Intermedio",
      },
      {
        tema: "JavaScript",
        pregunta: "¿Qué es una promesa en JavaScript?",
        respuestas: [
          "Una función que retorna una promesa",
          "Un objeto que representa una operación asíncrona",
          "Un método para hacer llamadas a un servidor",
          "Una forma de manejar errores en JavaScript",
        ],
        respuestaCorrecta: "Un objeto que representa una operación asíncrona",
        explicacion:
          "Una promesa es un objeto que representa una operación asíncrona en JavaScript. Una promesa tiene dos estados posibles: cumplida o rechazada, y permite manejar el resultado de una operación asíncrona de forma organizada.",
        respondida: false,
        respuestaAcertada: false,
        dificultad: "Intermedio",
      },
    ];
    const action: LoadQuestionsAction = {
      type: LOAD_QUESTIONS,
      payload: questions,
    };
    const newState = rootReducer(initialState, action);
    expect(newState.questionsList).toEqual(questions);
  });
});
