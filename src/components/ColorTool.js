import { useColorToolStore } from "../hooks/useColorToolStore";

import { ToolHeader } from "./ToolHeader";
import { ColorList } from "./ColorList";
import { ColorForm } from "./ColorForm";
import { ToolFooter } from "./ToolFooter";

export const ColorTool = ({ initialColors }) => {

  const { colors, addColor, deleteColor } = useColorToolStore([...initialColors]);

  console.log(colors);

  return (
    <>
      <ToolHeader toolTitle="Color Tool" />
      <ColorList colors={colors} onDeleteClick={deleteColor} />
      <ColorForm onSubmitForm={addColor} submitButtonLabel="Add Color"/>
      <br/>
      <ToolFooter />
    </>
  );
};

ColorTool.defaultProps = {
  initialColors: [
    { id: 1, colorName: "green", colorHexcode: "" },
    { id: 2, colorName: "blue", colorHexcode: "" },
    { id: 3, colorName: "red", colorHexcode: "" },
  ],
};