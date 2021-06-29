import { useColorList } from "../hooks/useColorList";

import { ToolHeader } from "../components/ToolHeader";
import { ColorList } from "../components/ColorList";

export const ColorListContainer = () => {

  const { colors, deleteColor } = useColorList();

  console.log(colors);

  return (
    <>
      <ToolHeader toolTitle="Color List" />
      <ColorList colors={colors} onDeleteClick={deleteColor} />
    </>
  );

};
