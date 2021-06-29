export const ADD_CAR_ACTION = "ADD_CAR";
export const UPDATE_CAR_ACTION = "UPDATE_CAR";
export const DELETE_CAR_ACTION = "DELETE_CAR";
export const EDIT_CAR_ACTION = "EDIT_CAR";
export const CANCEL_CAR_ACTION = "CANCEL_CAR";

export const createAddCarAction = value => ({type: ADD_CAR_ACTION, value});
export const createUpdateCarAction = value => ({type: UPDATE_CAR_ACTION, value});
export const createDeleteCarAction = value => ({type: DELETE_CAR_ACTION, value});
export const createEditCarAction = value => ({type: EDIT_CAR_ACTION, value});
export const createCancelCarAction = () => ({type: CANCEL_CAR_ACTION});