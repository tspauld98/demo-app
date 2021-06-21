export const ColorTool = (props) => {

  const colorItems = props.colors.map((color) => {
    return <li key={color.id}>{color.name}</li>;
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