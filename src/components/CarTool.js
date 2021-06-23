import { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { ToolFooter } from './ToolFooter';

export const CarTool = ({ cars: initialCars, crHolder }) => {

  const [ cars, setCars ] = useState([ ...initialCars ]);

  const addCar = (carForm) => {
    setCars([
      ...cars,
      {
        ...carForm,
        id: cars.length > 0 ? (Math.max(...cars.map((c) => c.id), 0) + 1) : 1,
      }
    ]);
  }

  const deleteCar = (carId) => {
    setCars([
      ...cars
    ].filter(car => car.id !== carId));
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
      <CarTable cars={cars} onDeleteCar={deleteCar} />
      <br/>
      <CarForm onSubmitForm={addCar} submitButtonLabel="Add Car"/>
      <br/>
      <ToolFooter copyRightHolder={crHolder}/>
    </>
  );

};