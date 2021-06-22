// No longer need to use import React from 'react';

import { render } from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';
import { ToolHeader } from './components/ToolHeader';

const colorList = [
  { id: 1, colorName: "green" },
  { id: 2, colorName: "blue" },
  { id: 3, colorName: "red" },
];

const carList = [
  { id: 1, carMake: "Toyota", carModel: "Avalon Limited Hybrid", carYear: "2019", carColor: "White", carPrice: "$45,000" },
  { id: 2, carMake: "Porche", carModel: "911 Spyder", carYear: "2021", carColor: "Navy", carPrice: "$150,000" },
];

const elements = (
  <>
    <ToolHeader toolTitle="Color Tool" />
    <ColorTool colors={colorList} />
    <ToolHeader toolTitle="Car Tool" />
    <CarTool cars={carList} />
  </>
);

render(elements, document.querySelector("#root"));