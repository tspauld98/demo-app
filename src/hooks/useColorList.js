import { useEffect, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { refreshColors, addColor, deleteColor  } from '../actions/color-tool-actions';

export const useColorList = () => {

  const colors = useSelector(state => state.colors);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    refreshColors: refreshColors,
    addColor: addColor,
    deleteColor: deleteColor,
  }, dispatch), [dispatch]);

  useEffect(() => {
    actions.refreshColors();
  }, [actions]);

  return {
    colors,
    ...actions,
  };

};