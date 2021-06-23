import { CarEditRow } from './CarEditRow';
import { CarViewRow } from './CarViewRow';

export const CarTable = ({ carEdit, onEditClick: editCar, cars, onDeleteCar: deleteCar }) => {

  console.log(cars);

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
        ? <CarEditRow key={car.id} car={car} /> 
        : <CarViewRow key={car.id} car={car} onEditCar={editCar} onDeleteCar={deleteCar} />)}</tbody>
    </table>
  );
};