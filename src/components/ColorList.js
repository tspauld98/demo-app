export const ColorList = ({ colors, onDeleteClick }) => 
  <ul>
    {colors.map(color => {
      const deleteColor = () => onDeleteClick(color.id);
      return (
        <li key={color.id}>
          {color.colorName}&nbsp;
          <button type="button" value={color.id} onClick={deleteColor}>Delete</button>
        </li>
      );
    })}
  </ul>;