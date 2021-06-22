export const CarViewRow = ({ car, deleteCar }) => <>
  <tr>
    <td>{car.id}</td>
    <td>{car.carMake}</td>
    <td>{car.carModel}</td>
    <td>{car.carYear}</td>
    <td>{car.carColor}</td>
    <td>{car.carPrice}</td>
    <td><button type="button" value={car.id} onClick={ () => deleteCar(car.id) }>Delete</button></td>
  </tr>
</>;