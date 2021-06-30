import { useForm } from '../hooks/useForm';

export const CarForm = ({ submitButtonLabel, onAddCar: onSubmitForm }) => {

  const [ carForm, change, resetForm ] = useForm({
    make: '',
    model: '',
    year: 0,
    color: '',
    price: 0,
  });

  const submitForm = () => {
    onSubmitForm(carForm);

    resetForm();
  };

  return (
    <form>
      <div>
        <label htmlFor="car-make-input">Car Make</label>
        <input type="text" id="car-make-input" value={carForm.make} onChange={change} name="make" />
      </div>
      <div>
        <label htmlFor="car-model-input">Car Model</label>
        <input type="text" id="car-model-input" value={carForm.model} onChange={change} name="model" />
      </div>
      <div>
        <label htmlFor="car-year-input">Car Year</label>
        <input type="text" id="car-year-input" value={carForm.year} onChange={change} name="year" />
      </div>
      <div>
        <label htmlFor="car-color-input">Car Color</label>
        <input type="text" id="car-color-input" value={carForm.color} onChange={change} name="color" />
      </div>
      <div>
        <label htmlFor="car-price-input">Car Price</label>
        <input type="text" id="car-price-input" value={carForm.price} onChange={change} name="price" />
      </div>
      <button type="button" onClick={submitForm}>{submitButtonLabel}</button>
    </form>
  );
};