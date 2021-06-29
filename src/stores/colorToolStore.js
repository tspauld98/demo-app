import { createStore } from 'redux';

import { colorToolReducer } from '../reducers/color-tool-reducer';

export const colorToolStore = createStore(colorToolReducer);