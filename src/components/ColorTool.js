import { useState } from "react";

import { ToolHeader } from "./ToolHeader";
import { ColorList } from "./ColorList";
import { ToolFooter } from "./ToolFooter";

export const ColorTool = ({ colors: initialColors }) => {

  const [ colors, setColors ] = useState([ ...initialColors ]);

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

  const addColor = () => {
    setColors([
      ...colors,
      {
        ...colorForm,
        id: Math.max(...colors.map((c) => c.id)) + 1,
      },
    ]);

    setColorForm({
      colorName: "",
      colorHexcode: "",
    });
  }

  console.log(colorForm);

  return (
    <>
      <ToolHeader toolTitle="Color Tool" />
      <ColorList colors={colors} />
      <form>
        <div>
          <label htmlFor="color-name-input">Color Name</label>
          <input type="text" id="color-name-input" value={colorForm.colorName} onChange={change} name="colorName" />
        </div>
        <div>
          <label htmlFor="color-hexcode-input">Color Hexcode</label>
          <input type="text" id="color-hexcode-input" value={colorForm.colorHexcode} onChange={change} name="colorHexcode" />
        </div>
        <button type="button" onClick={addColor}>Add Color</button>
      </form>
      <br/>
      <ToolFooter />
    </>
  );
};