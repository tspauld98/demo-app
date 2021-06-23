import { useState } from 'react';

export const CarForm = ({ onSubmitForm, submitButtonLabel }) => {

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

  const submitForm = () => {
    onSubmitForm(carForm);

    setCarForm({
      carMake: '',
      carModel: '',
      carYear: '',
      carColor: '',
      carPrice: '',  
    });    
  };

  return (
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
      <button type="button" onClick={submitForm}>{submitButtonLabel}</button>
    </form>
  );
};