import { useForm } from '../hooks/useForm';

export const CarEditRow = ({ car, onSaveClick, onCancelClick: resetCarEdit }) => {

  const [ carForm, change ] = useForm({
    carMake: car.carMake,
    carModel: car.carModel,
    carYear: car.carYear,
    carColor: car.carColor,
    carPrice: car.carPrice,
  });

  const updateCar = () => onSaveClick({
    ...carForm,
    id: car.id,
  });

  return (
    <>
      <tr>
        <td>{car.id}</td>
        <td><input type="text" value={carForm.carMake} onChange={change} name="carMake" /></td>
        <td><input type="text" value={carForm.carModel} onChange={change} name="carModel" /></td>
        <td><input type="text" value={carForm.carYear} onChange={change} name="carYear" /></td>
        <td><input type="text" value={carForm.carColor} onChange={change} name="carColor" /></td>
        <td><input type="text" value={carForm.carPrice} onChange={change} name="carPrice" /></td>
        <td><button type="button" onClick={updateCar}>Save</button><button type="button" onClick={resetCarEdit}>Cancel</button></td>
      </tr>
    </>
  );
};