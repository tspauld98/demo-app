export const CarViewRow = ({ car, onEditCar, onDeleteCar }) => {

  const editCar = () => onEditCar(car.id);
  const deleteCar = () => onDeleteCar(car.id);

  return (
    <>
      <tr>
        <td>{car.id}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.color}</td>
        <td>{car.price}</td>
        <td><button type="button" value={car.id} onClick={editCar}>Edit</button><button type="button" value={car.id} onClick={deleteCar}>Delete</button></td>
      </tr>
    </>
  );
};