export const CarViewRow = ({ car }) => <>
  <tr>
    <td>{car.id}</td>
    <td>{car.carMake}</td>
    <td>{car.carModel}</td>
    <td>{car.carYear}</td>
    <td>{car.carColor}</td>
    <td>{car.carPrice}</td>
    <td>Actions for {car.id}</td>
  </tr>
</>;