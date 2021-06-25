import { useColorToolStoreContext } from "../contexts/colorToolStoreContext";

import { ToolHeader } from "../components/ToolHeader";
import { ColorForm } from "../components/ColorForm";

export const ColorFormContainer = () => {

  const { colors, addColor } = useColorToolStoreContext();

  console.log(colors);

  return (
    <>
      <ToolHeader toolTitle="Color Form" />
      <ColorForm onSubmitForm={addColor} submitButtonLabel="Add Color"/>
    </>
  );
};
