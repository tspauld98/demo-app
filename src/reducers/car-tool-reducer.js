import { combineReducers } from 'redux';

import { ADD_CAR_ACTION, UPDATE_CAR_ACTION, DELETE_CAR_ACTION, EDIT_CAR_ACTION } from '../actions/car-tool-actions';

const initialCarList = [
  { id: 1, carMake: "Toyota", carModel: "Avalon Limited Hybrid", carYear: "2019", carColor: "White", carPrice: "$45,000" },
  { id: 2, carMake: "Porche", carModel: "911 Spyder", carYear: "2021", carColor: "Navy", carPrice: "$150,000" },
];

export const carsReducer = ( cars = [...initialCarList], action ) => {
  switch(action.type) {
    case ADD_CAR_ACTION:
      return [
        ...cars,
        {
          id: Math.max(...cars.map((c) => c.id), 0) + 1,
          ...action.value,
        },
      ];
    case UPDATE_CAR_ACTION:
      const updatedList = [...cars];
      const updatedListIndex = cars.findIndex((c) => c.id === action.value.id);
      updatedList[updatedListIndex] = {
        ...action.value,
      };
      return updatedList;
    case DELETE_CAR_ACTION:
      return ([
        ...cars
      ].filter(item => item.id !== action.value));
    default:
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
