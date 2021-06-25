import { ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION, CLEAR_ACTION } from '../actions/calc-tool-actions';

export const calcToolReducer = (state = { result: 0 }, action) => {

  switch(action.type) {
    case ADD_ACTION:
      return {
        ...state,
        result: state.result + action.value,
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        result: state.result - action.value,
      };
    case MULTIPLY_ACTION:
      return {
        ...state,
        result: state.result * action.value,
      };
    case DIVIDE_ACTION:
      return {
        ...state,
        result: state.result / action.value,
      };
    case CLEAR_ACTION:
      return {
        ...state,
        result: 0,
      };
    default:
      return state;
  };

};