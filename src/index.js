// No longer need to use import React from 'react';

import { render } from 'react-dom';

import { HelloWorld } from './components/HelloWorld';
import { CarTool } from './components/CarTool';

const elements = <>
  <HelloWorld />
  <CarTool />
</>;

render(elements, document.querySelector("#root"));