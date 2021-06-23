import { useState } from 'react';

export const ColorForm = ({ onSubmitForm, submitButtonLabel }) => {

  const [ colorForm, setColorForm ] = useState({
    colorName: '',
    colorHexcode: '',
  });

  const change = (e) => {
    setColorForm({
      ...colorForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = () => {
    onSubmitForm(colorForm);

    setColorForm({
      colorName: "",
      colorHexcode: "",
    });
  };

  return(
    <form>
      <div>
        <label htmlFor="color-name-input">Color Name</label>
        <input type="text" id="color-name-input" value={colorForm.colorName} onChange={change} name="colorName" />
      </div>
      <div>
        <label htmlFor="color-hexcode-input">Color Hexcode</label>
        <input type="text" id="color-hexcode-input" value={colorForm.colorHexcode} onChange={change} name="colorHexcode" />
      </div>
      <button type="button" onClick={submitForm}>{submitButtonLabel}</button>
    </form>
  )
};

ColorForm.defaultProps = {
  submitButtonLabel: "Submit Color",
};