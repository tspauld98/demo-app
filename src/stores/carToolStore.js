import { createStore } from 'redux';

import { carToolReducer } from '../reducers/car-tool-reducer';

export const carToolStore = createStore(carToolReducer);