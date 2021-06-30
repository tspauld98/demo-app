export const EDIT_CAR_ACTION = "EDIT_CAR";
export const CANCEL_CAR_ACTION = "CANCEL_CAR";

export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE';

export const ADD_CAR_REQUEST_ACTION = "ADD_CAR";
export const UPDATE_CAR_REQUEST_ACTION = "UPDATE_CAR";
export const DELETE_CAR_REQUEST_ACTION = "DELETE_CAR";

export const createRefreshCarsRequestAction = () => ({type: REFRESH_CARS_REQUEST_ACTION});
export const createRefreshCarsDoneAction = value => ({type: REFRESH_CARS_DONE_ACTION, value});

export const refreshCars = () => {
  return (dispatch) => {
    dispatch(createRefreshCarsRequestAction());
    return fetch("http://localhost:3060/cars")
      .then(res => res.json())
      .then(cars => dispatch(createRefreshCarsDoneAction(cars)));
  };
};

export const createEditCarAction = value => ({type: EDIT_CAR_ACTION, value});
export const createCancelCarAction = () => ({type: CANCEL_CAR_ACTION});

export const createAddCarRequestAction = () => ({type: ADD_CAR_REQUEST_ACTION});
export const createUpdateCarRequestAction = () => ({type: UPDATE_CAR_REQUEST_ACTION});
export const createDeleteCarRequestAction = () => ({type: DELETE_CAR_REQUEST_ACTION});

export const addCar = (car) => {
  return (dispatch) => {
    dispatch(createAddCarRequestAction());
    return fetch("http://localhost:3060/cars", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(car)
    }).then(() => dispatch(refreshCars()));
  };
};

export const updateCar = (car) => {
  return (dispatch) => {
    dispatch(createUpdateCarRequestAction());
    return fetch("http://localhost:3060/cars/" + encodeURIComponent(car.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(car)
    }).then(() => dispatch(refreshCars()));
  };
};

export const deleteCar = (carId) => {
  return (dispatch) => {
    dispatch(createDeleteCarRequestAction());
    return fetch("http://localhost:3060/cars/" + encodeURIComponent(carId), {
      method: 'DELETE'
    }).then(() => dispatch(refreshCars()));
  };
};
