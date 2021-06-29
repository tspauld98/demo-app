import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { createAddColorAction  } from '../actions/color-tool-actions';
import { createDeleteColorAction  } from '../actions/color-tool-actions';

export const useColorList = () => {

  const colors = useSelector(state => state.colors);

  const actions = bindActionCreators({
    addColor: createAddColorAction,
    deleteColor: createDeleteColorAction,
  }, useDispatch());

  return {
    colors,
    ...actions,
  };

};