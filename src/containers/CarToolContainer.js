import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import {
  createAddCarAction,
  createUpdateCarAction,
  createDeleteCarAction,
  createEditCarAction,
  createCancelCarAction,
} from '../actions/car-tool-actions';

import { ToolHeader } from '../components/ToolHeader';
import { CarTable } from '../components/CarTable';
import { CarForm } from '../components/CarForm';
import { ToolFooter } from '../components/ToolFooter';

export const CarToolContainer = () => {

  const cars = useSelector(state => state.cars);

  const carEditId = useSelector(state => state.carEditId);

  console.log(cars);
  console.log(carEditId);

  const tableActions = bindActionCreators({
    onUpdateCar: createUpdateCarAction,
    onDeleteCar: createDeleteCarAction,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,
   }, useDispatch());

   const formActions = bindActionCreators({
    onAddCar: createAddCarAction,
   }, useDispatch());

  return (
    <>
      <ToolHeader toolTitle="Car Tool" />
      <CarTable carEdit={carEditId} cars={cars} {...tableActions} />
      <br/>
      <CarForm submitButtonLabel="Add Car" {...formActions} />
      <br/>
      <ToolFooter />
    </>
  );

};
