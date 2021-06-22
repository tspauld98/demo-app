export const ColorTool = ({ colors }) => {
  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>{colors.map(color => <li key={color.id}>{color.name}</li>)}</ul>
    </>
  );
};