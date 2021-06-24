import { ToolHeader } from "./ToolHeader";
import { ColorList } from "./ColorList";
import { ColorForm } from "./ColorForm";
import { ToolFooter } from "./ToolFooter";
import { useColorToolStore } from "../hooks/useColorToolStore";

export const ColorTool = ({ colors: initialColors, crHolder }) => {

  const { colors, addColor, deleteColor } = useColorToolStore([ ...initialColors ]);

  console.log(colors);

  return (
    <>
      <ToolHeader toolTitle="Color Tool" />
      <ColorList colors={colors} onDeleteClick={deleteColor} />
      <ColorForm onSubmitForm={addColor} submitButtonLabel="Add Color"/>
      <br/>
      <ToolFooter copyRightHolder={crHolder}/>
    </>
  );
};