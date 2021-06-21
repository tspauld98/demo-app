export const ColorTool = () => {

  const colors = ["green","blue","red","yellow","gray"];
  const colorItems = colors.map((color) => {
    return <li key={color}>{color}</li>;
  })

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>{colorItems}</ul>
    </>
  );
};