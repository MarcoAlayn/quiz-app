import { LOAD_QUESTIONS } from "./action";

let initialState = {
  questionsList: [],
};

function rootReducer(state = initialState, action) {
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
