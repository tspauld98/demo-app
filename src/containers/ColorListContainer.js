import { useColorToolStoreContext } from "../contexts/colorToolStoreContext";

import { ToolHeader } from "../components/ToolHeader";
import { ColorList } from "../components/ColorList";

export const ColorListContainer = () => {

  const { colors, deleteColor } = useColorToolStoreContext();

  console.log(colors);

  return (
    <>
      <ToolHeader toolTitle="Color List" />
      <ColorList colors={colors} onDeleteClick={deleteColor} />
    </>
  );

};
