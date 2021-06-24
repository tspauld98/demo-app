import { useColorToolStoreContext } from "../contexts/colorToolStoreContext";

import { ToolHeader } from "../components/ToolHeader";
import { ColorList } from "../components/ColorList";
import { ColorForm } from "../components/ColorForm";
import { ToolFooter } from "../components/ToolFooter";

export const ColorToolContainer = () => {

  const { colors, addColor, deleteColor } = useColorToolStoreContext();

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
