import { LOAD_QUESTIONS, LoadQuestionsAction } from "./action";

const initialState = {
  questionsList: [],
};

function rootReducer(state = initialState, action: LoadQuestionsAction) {
  switch (action.type) {
    case LOAD_QUESTIONS:
      return {
        ...state,
        questionsList: action.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;
