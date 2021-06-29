export const ADD_COLOR_ACTION = 'ADD_COLOR';
export const DELETE_COLOR_ACTION = 'DELETE_COLOR';

export const createAddColorAction = value => ({type: ADD_COLOR_ACTION, value});
export const createDeleteColorAction = value => ({type: DELETE_COLOR_ACTION, value});
