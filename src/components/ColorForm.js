import { useForm } from '../hooks/useForm';

export const ColorForm = ({ onSubmitForm, submitButtonLabel }) => {

  const [ colorForm, change, resetForm ] = useForm({
    name: '',
    hexcode: '',
  });

  const submitForm = () => {
    onSubmitForm(colorForm);
    resetForm();
  };

  return(
    <form>
      <div>
        <label htmlFor="color-name-input">Color Name</label>
        <input type="text" id="color-name-input" value={colorForm.name} onChange={change} name="name" />
      </div>
      <div>
        <label htmlFor="color-hexcode-input">Color Hexcode</label>
        <input type="text" id="color-hexcode-input" value={colorForm.hexcode} onChange={change} name="hexcode" />
      </div>
      <button type="button" onClick={submitForm}>{submitButtonLabel}</button>
    </form>
  )
};

ColorForm.defaultProps = {
  submitButtonLabel: "Submit Color",
};