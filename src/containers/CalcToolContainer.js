import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION, CLEAR_ACTION } from '../actions/calc-tool-actions';

import {
  createAddAction,
  createSubtractAction,
  createMultiplyAction,
  createDivideAction,
  createClearAction,
  createDeleteAction,
} from '../actions/calc-tool-actions';

import { CalcTool } from '../components/CalcTool';

export const CalcToolContainer = () => {

  const result = useSelector(state => { 
    return state.operations.reduce((acc, val) => {
      console.log(acc);
      console.log(val);

      switch(val.operator) {
        case ADD_ACTION:
          return acc + val.operand;
        case SUBTRACT_ACTION:
          return acc - val.operand;
        case MULTIPLY_ACTION:
          return acc * val.operand;
        case DIVIDE_ACTION:
          return acc / val.operand;
        case CLEAR_ACTION:
          return 0;
        default:
          return acc;
      };
    }, 0); 
  });

  const opCounts = useSelector(state => {
    return state.operations.reduce((acc, val) => {
      switch(val.operator) {
        case ADD_ACTION:
          acc.add++;
          break;
        case SUBTRACT_ACTION:
          acc.subtract++;
          break;
        case MULTIPLY_ACTION:
          acc.multiply++;
          break;
        case DIVIDE_ACTION:
          acc.divide++;
          break;
        default:
          break;
      };

      return acc;
    }, { add: 0, subtract: 0, multiply: 0, divide: 0 });
  })

  const errorMsg = useSelector(state => state.errorMsg);

  const operations = useSelector(state => state.operations);

  const actions = bindActionCreators({
    onAdd: createAddAction,
    onSubtract: createSubtractAction,
    onMultiply: createMultiplyAction,
    onDivide: createDivideAction,
    onClear: createClearAction,
    onDelete: createDeleteAction,
  }, useDispatch());

  return <CalcTool result={result} opCounts={opCounts} errorMsg={errorMsg} operations={operations} {...actions} />

};