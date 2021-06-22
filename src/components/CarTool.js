import { useState } from 'react';

export const CarTool = (props) => {

  const [ carForm, setCarForm ] = useState({
    carMake: '',
    carModel: '',
    carYear: '',
    carColor: '',
    carPrice: '',
  });

  const change = (e) => {
    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.value,
    });
  };

  console.log(carForm);

  const carItems = props.cars.map((car) => {
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
      <br/>
      <form>
        <div>
          <label htmlFor="car-make-input">Car Make</label>
          <input type="text" id="car-make-input" value={carForm.carMake} onChange={change} name="carMake" />
        </div>
        <div>
          <label htmlFor="car-model-input">Car Model</label>
          <input type="text" id="car-model-input" value={carForm.carModel} onChange={change} name="carModel" />
        </div>
        <div>
          <label htmlFor="car-year-input">Car Year</label>
          <input type="text" id="car-year-input" value={carForm.carYear} onChange={change} name="carYear" />
        </div>
        <div>
          <label htmlFor="car-color-input">Car Color</label>
          <input type="text" id="car-color-input" value={carForm.carColor} onChange={change} name="carColor" />
        </div>
        <div>
          <label htmlFor="car-price-input">Car Price</label>
          <input type="text" id="car-price-input" value={carForm.carPrice} onChange={change} name="carPrice" />
        </div>
      </form>
    </>
  );

};