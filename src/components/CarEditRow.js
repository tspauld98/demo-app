import { useForm } from '../hooks/useForm';

export const CarEditRow = ({ car, onSaveClick, onCancelClick: resetCarEdit }) => {

  const [ carForm, change ] = useForm({
    make: car.make,
    model: car.model,
    year: car.year,
    color: car.color,
    price: car.price,
  });

  const updateCar = () => onSaveClick({
    ...carForm,
    id: car.id,
  });

  return (
    <>
      <tr>
        <td>{car.id}</td>
        <td><input type="text" value={carForm.make} onChange={change} name="make" /></td>
        <td><input type="text" value={carForm.model} onChange={change} name="model" /></td>
        <td><input type="text" value={carForm.year} onChange={change} name="year" /></td>
        <td><input type="text" value={carForm.color} onChange={change} name="color" /></td>
        <td><input type="text" value={carForm.price} onChange={change} name="price" /></td>
        <td><button type="button" onClick={updateCar}>Save</button><button type="button" onClick={resetCarEdit}>Cancel</button></td>
      </tr>
    </>
  );
};