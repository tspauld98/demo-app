export const CarTool = () => {

  const cars = [
    { id: 1, make: "Toyota", model: "Avalon Limited Hybrid", year: 2019, color: "White", price: 45000 },
    { id: 2, make: "Porche", model: "911 Spyder", year: 2021, color: "Navy", price: 150000 },
  ];

  const carItems = cars.map((car) => {
    return (
      <tr key={car.id}>
        <td>{car.id}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.color}</td>
        <td>{car.price}</td>
      </tr>
    );
  });

  return (
    <>
      <header>
        <h1>Car Tool</h1>
      </header>
      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>{carItems}</tbody>
      </table>
    </>
  );

};