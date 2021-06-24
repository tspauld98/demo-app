// No longer need to use import React from 'react';

import { render } from 'react-dom';

import { ColorToolStoreProvider } from './contexts/colorToolStoreContext';
import { ColorToolContainer } from './containers/ColorToolContainer';
import { CarToolStoreProvider } from './contexts/carToolStoreContext';
import { CarToolContainer } from './containers/CarToolContainer';

const colorList = [
  { id: 1, colorName: "green", colorHexcode: "" },
  { id: 2, colorName: "blue", colorHexcode: "" },
  { id: 3, colorName: "red", colorHexcode: "" },
];

const carList = [
  { id: 1, carMake: "Toyota", carModel: "Avalon Limited Hybrid", carYear: "2019", carColor: "White", carPrice: "$45,000" },
  { id: 2, carMake: "Porche", carModel: "911 Spyder", carYear: "2021", carColor: "Navy", carPrice: "$150,000" },
];

const elements = (
  <>
    <ColorToolStoreProvider initialColors={colorList}>
      <ColorToolContainer />
    </ColorToolStoreProvider>
    <CarToolStoreProvider initialCars={carList}>
      <CarToolContainer />
    </CarToolStoreProvider>
  </>
);

render(elements, document.querySelector("#root"));