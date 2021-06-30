import { combineReducers } from 'redux';

import { REFRESH_CARS_DONE_ACTION, EDIT_CAR_ACTION } from '../actions/car-tool-actions';

export const carsReducer = ( cars = [], action ) => {
  console.log(action);
  if (action.type === REFRESH_CARS_DONE_ACTION) {
    return action.value;
  } else {
    return cars;
  };
};

export const carEditIdReducer = ( _, action ) => {
  if (action.type === EDIT_CAR_ACTION) {
    return action.value;
  } else {
    return 0;
  }
};

export const carToolReducer = combineReducers({
  cars: carsReducer,
  carEditId: carEditIdReducer,
});
