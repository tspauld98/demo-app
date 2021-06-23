import { useState } from 'react';

export const CarEditRow = ({ car, onSaveClick, onCancelClick: resetCarEdit }) => {

  const updateCar = () => onSaveClick({
    ...updatedCar,
    id: car.id,
  });

  const [ updatedCar, setUpdatedCar ] = useState({
    carMake: car.carMake,
    carModel: car.carModel,
    carYear: car.carYear,
    carColor: car.carColor,
    carPrice: car.carPrice,
  });

  const change = (e) => {
    setUpdatedCar({
      ...updatedCar,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <tr>
        <td>{car.id}</td>
        <td><input type="text" value={updatedCar.carMake} onChange={change} name="carMake" /></td>
        <td><input type="text" value={updatedCar.carModel} onChange={change} name="carModel" /></td>
        <td><input type="text" value={updatedCar.carYear} onChange={change} name="carYear" /></td>
        <td><input type="text" value={updatedCar.carColor} onChange={change} name="carColor" /></td>
        <td><input type="text" value={updatedCar.carPrice} onChange={change} name="carPrice" /></td>
        <td><button type="button" onClick={updateCar}>Save</button><button type="button" onClick={resetCarEdit}>Cancel</button></td>
      </tr>
    </>
  );
};