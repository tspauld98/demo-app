export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';
export const MULTIPLY_ACTION = 'MULTIPLY';
export const DIVIDE_ACTION = 'DIVIDE';
export const CLEAR_ACTION = 'CLEAR';
export const DELETE_ACTION = 'DELETE';
export const SET_ERROR_ACTION = 'ERROR';

export const createAddAction = value => ({ type: ADD_ACTION, value });
export const createSubtractAction = value => ({ type: SUBTRACT_ACTION, value });
export const createMultiplyAction = value => ({ type: MULTIPLY_ACTION, value });
export const createDivideAction = value => {
  if (value === 0) {
    return { type: SET_ERROR_ACTION, message: "Cannot divide by zero. Try again." };
  } else {
    return { type: DIVIDE_ACTION, value };
  }
};
export const createClearAction = () => ({ type: CLEAR_ACTION });
export const createDeleteAction = value => ({type: DELETE_ACTION, value});
