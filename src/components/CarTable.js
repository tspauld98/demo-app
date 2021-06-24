import { CarEditRow } from './CarEditRow';
import { CarViewRow } from './CarViewRow';

export const CarTable = ({ carEdit, cars, onEditClick: editCar, onDeleteClick: deleteCar, onSaveClick: updateCar, onCancelClick: resetCarEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{cars.map(car => carEdit === car.id 
        ? <CarEditRow key={car.id} car={car} onSaveClick={updateCar} onCancelClick={resetCarEdit} /> 
        : <CarViewRow key={car.id} car={car} onEditCar={editCar} onDeleteCar={deleteCar} />)}</tbody>
    </table>
  );
};