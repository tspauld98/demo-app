import { useState } from 'react';
import { useList } from './useList';

export const useCarToolStore = (initialCars) => {

  const [ carEditId, setCarEditId ] = useState(0);

  const editCar = (carId) => {
    setCarEditId(carId);
  };

  const cancelCar = () => {
    setCarEditId(0);
  }

  const [ cars, addItem, updateItem, deleteItem ] = useList([ ...initialCars ]);

  const addCar = (carForm) => {
    addItem(carForm);
    cancelCar();
  }

  const updateCar = (updatedCar) => {
    updateItem(updatedCar);
    cancelCar();
  };

  const deleteCar = (carId) => {
    deleteItem(carId);
    cancelCar();
  };

  return {
    cars,
    carEditId,
    addCar,
    updateCar,
    deleteCar,
    editCar,
    cancelCar,
  };
};