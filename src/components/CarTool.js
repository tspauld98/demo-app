import { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { ToolFooter } from './ToolFooter';

export const CarTool = ({ cars: initialCars, crHolder }) => {

  const [ cars, setCars ] = useState([ ...initialCars ]);

  const [ carEditId, setCarEditId ] = useState(0);

  const editCar = (carId) => {
    setCarEditId(carId);
  };

  const resetCarEdit = () => {
    setCarEditId(0);
  }

  const addCar = (carForm) => {
    setCars([
      ...cars,
      {
        ...carForm,
        id: cars.length > 0 ? (Math.max(...cars.map((c) => c.id), 0) + 1) : 1,
      }
    ]);

    resetCarEdit();
  }

  const updateCar = (updatedCar) => {
    const updatedCars = [...cars];
    const updatedCarIndex = updatedCars.findIndex((c) => c.id === updatedCar.id);
    updatedCars[updatedCarIndex] = {
      ...updatedCar,
    };
    setCars(updatedCars);

    resetCarEdit();
  };

  const deleteCar = (carId) => {
    setCars([
      ...cars
    ].filter(car => car.id !== carId));

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