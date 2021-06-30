import { useEffect, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { createEditCarAction, createCancelCarAction, refreshCars, addCar, updateCar, deleteCar } from '../actions/car-tool-actions';

export const useCarList = () => {

  const cars = useSelector(state => state.cars);

  const carEditId = useSelector(state => state.carEditId);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    editCar: createEditCarAction,
    cancelCar: createCancelCarAction,
    refreshCars: refreshCars,
    addCar: addCar,
    updateCar: updateCar,
    deleteCar: deleteCar,
  }, dispatch), [dispatch]);

  useEffect(() => {
    actions.refreshCars();
  }, [actions]);

  return {
    cars,
    carEditId,
    ...actions,
  };


}