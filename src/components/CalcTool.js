import PropTypes from "prop-types";
import { useState } from 'react';

export const CalcTool = ({ result, opCounts, errorMsg, operations, onAdd: add, onSubtract: subtract, onMultiply: multiply, onDivide: divide, onClear: clear, onDelete: deleteOp }) => {

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
      <br/>
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
      <br/>
      <div>
        Operation Counts:
        <ul>
        <li>Number of Adds: {opCounts.add}</li>
        <li>Number of Subtracts: {opCounts.subtract}</li>
        <li>Number of Multiplies: {opCounts.multiply}</li>
        <li>Number of Divides: {opCounts.divide}</li>
        </ul>
      </div>
    </div>
  )
};

CalcTool.propTypes = {
  result: PropTypes.number,
  opCounts: PropTypes.object,
  errorMsg: PropTypes.string,
  operations: PropTypes.array,
  onAdd: PropTypes.func,
  onSubtract: PropTypes.func,
  onMultiply: PropTypes.func,
  onDivide: PropTypes.func,
  onClear: PropTypes.func,
  onDelete: PropTypes.func,
};