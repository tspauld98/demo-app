import { combineReducers } from 'redux';

import { ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION, CLEAR_ACTION, DELETE_ACTION, SET_ERROR_ACTION } from '../actions/calc-tool-actions';

// export const resultReducer = (result = 0, action) => {
//   switch(action.type) {
//     case ADD_ACTION:
//       return result + action.value;
//     case SUBTRACT_ACTION:
//       return result - action.value;
//     case MULTIPLY_ACTION:
//       return result * action.value;
//     case DIVIDE_ACTION:
//       return result / action.value;
//     case CLEAR_ACTION:
//       return 0;
//     default:
//       return result;
//   };
// };

export const operationsReducer = (operations = [], action) => {

  switch(action.type) {
    case ADD_ACTION:
    case SUBTRACT_ACTION:
    case MULTIPLY_ACTION:
    case DIVIDE_ACTION:
      return [
        ...operations,
        {
          id: Math.max(...operations.map((op) => op.id), 0) + 1,
          operator: action.type,
          operand: action.value,
        },
      ];
    case CLEAR_ACTION:
      return [];
    case DELETE_ACTION:
      return [
        ...operations
      ].filter(item => item.id !== action.value);
    default:
      return operations;
  }
};

export const errorMsgReducer = (_, action) => {
  if (action.type === SET_ERROR_ACTION) {
    return 'Cannot divide by zero. Try again.';
  }

  return '';
};

export const calcToolReducer = combineReducers({
  // result: resultReducer,
  errorMsg: errorMsgReducer,
  operations: operationsReducer,
});
