import { useState } from 'react';
import { useList } from '../hooks/useList';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { ToolFooter } from './ToolFooter';

export const CarTool = ({ cars: initialCars, crHolder }) => {

  const [ carEditId, setCarEditId ] = useState(0);

  const editCar = (carId) => {
    setCarEditId(carId);
  };

  const resetCarEdit = () => {
    setCarEditId(0);
  }

  const [ cars, addItem, updateItem, deleteItem ] = useList([ ...initialCars ]);

  const addCar = (carForm) => {
    addItem(carForm);
    resetCarEdit();
  }

  const updateCar = (updatedCar) => {
    updateItem(updatedCar);
    resetCarEdit();
  };

  const deleteCar = (carId) => {
    deleteItem(carId);
    resetCarEdit();
  };

  // console.log(carForm);

  // const carItems = props.cars.map((car) => {
  //   return (
  //     <tr key={car.id}>
  //       <td>{car.id}</td>
  //       <td>{car.carMake}</td>
  //       <td>{car.carModel}</td>
  //       <td>{car.carYear}</td>
  //       <td>{car.carColor}</td>
  //       <td>{car.carPrice}</td>
  //     </tr>
  //   );
  // });

  return (
    <>
      <ToolHeader toolTitle="Car Tool" />
      <CarTable carEdit={carEditId} cars={cars} onEditClick={editCar} onDeleteClick={deleteCar} onSaveClick={updateCar} onCancelClick={resetCarEdit} />
      <br/>
      <CarForm onSubmitForm={addCar} submitButtonLabel="Add Car"/>
      <br/>
      <ToolFooter copyRightHolder={crHolder}/>
    </>
  );

};