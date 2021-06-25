import PropTypes from "prop-types";
import { useState } from 'react';

export const CalcTool = ({ result, operations, onAdd: add, onSubtract: subtract, onMultiply: multiply, onDivide: divide, onClear: clear }) => {

  const [ numInput, setNumInput ] = useState(0);

  const clearAll = () => {
    clear();
    setNumInput(0);
  }

  console.log(operations);

  return (
    <div>
      <div>Num: <input type="text" value={numInput}
        onChange={e => setNumInput(Number(e.target.value))} /></div>
      <div>Result: {result}</div>

      <div>
        <button type="button" onClick={() => add(numInput)}>+</button>
        <button type="button" onClick={() => subtract(numInput)}>-</button>
        <button type="button" onClick={() => multiply(numInput)}>X</button>
        <button type="button" onClick={() => numInput > 0 && divide(numInput)}>/</button>
        <button type="button" onClick={() => clearAll()}>C</button>
      </div>

      <div>
        Operation History:
        <ul>
          {operations.map(op => {
            return (
              <li key={op.id}>
                {op.id}: {op.operator}&nbsp;{op.operand}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
};

CalcTool.propTypes = {
  result: PropTypes.number,
  onAdd: PropTypes.func,
  onSubtract: PropTypes.func,
  onMultiply: PropTypes.func,
  onDivide: PropTypes.func,
  onClear: PropTypes.func,
};