import PropTypes from "prop-types";
import { useState } from 'react';

export const CalcTool = ({ result, errorMsg, operations, onAdd: add, onSubtract: subtract, onMultiply: multiply, onDivide: divide, onClear: clear, onDelete: deleteOp }) => {

  const [ numInput, setNumInput ] = useState(0);

  const clearAll = () => {
    clear();
    setNumInput(0);
  };

  console.log(operations);

  return (
    <div>
      <div>Num: <input type="text" value={numInput}
        onChange={e => setNumInput(Number(e.target.value))} /></div>
      <div>Result: { errorMsg ? errorMsg : result }</div>

      <div>
        <button type="button" onClick={() => add(numInput)}>+</button>
        <button type="button" onClick={() => subtract(numInput)}>-</button>
        <button type="button" onClick={() => multiply(numInput)}>X</button>
        <button type="button" onClick={() => divide(numInput)}>/</button>
        <button type="button" onClick={() => clearAll()}>C</button>
      </div>

      <div>
        Operation History:
        <ul>
          {operations.map(op => {
            return (
              <li key={op.id}>
                {op.id}: {op.operator}&nbsp;{op.operand}&nbsp;<button type="button" onClick={() => deleteOp(op.id)}>Delete</button>
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
  errorMsg: PropTypes.string,
  operations: PropTypes.array,
  onAdd: PropTypes.func,
  onSubtract: PropTypes.func,
  onMultiply: PropTypes.func,
  onDivide: PropTypes.func,
  onClear: PropTypes.func,
  onDelete: PropTypes.func,
};