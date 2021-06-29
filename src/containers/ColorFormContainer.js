import { useColorList } from "../hooks/useColorList";

import { ToolHeader } from "../components/ToolHeader";
import { ColorForm } from "../components/ColorForm";

export const ColorFormContainer = () => {

  const { colors, addColor } = useColorList();

  console.log(colors);

  return (
    <>
      <ToolHeader toolTitle="Color Form" />
      <ColorForm onSubmitForm={addColor} submitButtonLabel="Add Color"/>
    </>
  );
};
