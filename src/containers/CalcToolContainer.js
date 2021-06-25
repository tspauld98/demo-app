import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import {
  createAddAction,
  createSubtractAction,
  createMultiplyAction,
  createDivideAction,
  createClearAction,
} from '../actions/calc-tool-actions';

import { CalcTool } from '../components/CalcTool';

export const CalcToolContainer = () => {

  const result = useSelector(state => state.result);

  const operations = useSelector(state => state.operations);

  const actions = bindActionCreators({
    onAdd: createAddAction,
    onSubtract: createSubtractAction,
    onMultiply: createMultiplyAction,
    onDivide: createDivideAction,
    onClear: createClearAction,
  }, useDispatch());

  return <CalcTool result={result} operations={operations} {...actions} />

};