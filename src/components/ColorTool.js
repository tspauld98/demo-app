import { useList } from "../hooks/useList";

import { ToolHeader } from "./ToolHeader";
import { ColorList } from "./ColorList";
import { ColorForm } from "./ColorForm";
import { ToolFooter } from "./ToolFooter";

export const ColorTool = ({ colors: initialColors, crHolder }) => {

  const [ colors, addItem ] = useList([ ...initialColors ]);

  const addColor = (colorForm) => {
    addItem(colorForm);
  }

  console.log(colors);

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