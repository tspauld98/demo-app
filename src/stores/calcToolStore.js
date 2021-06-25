import { createStore } from 'redux';

import { calcToolReducer } from '../reducers/calc-tool-reducer';

export const calcToolStore = createStore(calcToolReducer);