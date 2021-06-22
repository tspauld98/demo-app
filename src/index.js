// No longer need to use import React from 'react';

import { render } from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, colorName: "green" },
  { id: 2, colorName: "blue" },
  { id: 3, colorName: "red" },
];

const carList = [
  { id: 1, make: "Toyota", model: "Avalon Limited Hybrid", year: 2019, color: "White", price: 45000 },
  { id: 2, make: "Porche", model: "911 Spyder", year: 2021, color: "Navy", price: 150000 },
];

const elements = (
  <>
    <ColorTool colors={colorList} />
    <CarTool cars={carList} />
  </>
);

render(elements, document.querySelector("#root"));