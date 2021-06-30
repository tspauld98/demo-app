// import { bindActionCreators } from 'redux';
// import { useDispatch, useSelector } from 'react-redux';

// import {
//   createAddCarAction,
//   createUpdateCarAction,
//   createDeleteCarAction,
//   createEditCarAction,
//   createCancelCarAction,
// } from '../actions/car-tool-actions';

import { useCarList } from '../hooks/useCarList';

import { ToolHeader } from '../components/ToolHeader';
import { CarTable } from '../components/CarTable';
import { CarForm } from '../components/CarForm';
import { ToolFooter } from '../components/ToolFooter';

export const CarToolContainer = () => {

  const { cars, carEditId, editCar, cancelCar, addCar, updateCar, deleteCar } = useCarList();

  console.log(cars);
  console.log(carEditId);

  return (
    <>
      <ToolHeader toolTitle="Car Tool" />
      <CarTable carEdit={carEditId} cars={cars} onUpdateCar={updateCar} onDeleteCar={deleteCar} onEditCar={editCar} onCancelCar={cancelCar}  />
      <br/>
      <CarForm submitButtonLabel="Add Car" onAddCar={addCar} />
      <br/>
      <ToolFooter />
    </>
  );

};
