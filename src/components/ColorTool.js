import { useState } from "react";

import { ToolHeader } from "./ToolHeader";
import { ColorList } from "./ColorList";
import { ColorForm } from "./ColorForm";
import { ToolFooter } from "./ToolFooter";

export const ColorTool = ({ colors: initialColors, crHolder }) => {

  const [ colors, setColors ] = useState([ ...initialColors ]);

  const addColor = (colorForm) => {
    setColors([
      ...colors,
      {
        ...colorForm,
        id: Math.max(...colors.map((c) => c.id), 0) + 1,
      },
    ]);
  }

  return (
    <>
      <ToolHeader toolTitle="Color Tool" />
      <ColorList colors={colors} />
      <ColorForm onSubmitForm={addColor} submitButtonLabel="Add Color"/>
      <br/>
      <ToolFooter copyRightHolder={crHolder}/>
    </>
  );
};