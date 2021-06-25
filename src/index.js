import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { calcToolStore } from './stores/calcToolStore';
import { CalcToolContainer } from './containers/CalcToolContainer';

render(<Provider store={calcToolStore}>
  <CalcToolContainer />
</Provider>, document.querySelector("#root"));

// import { ColorToolStoreProvider } from './contexts/colorToolStoreContext';
// import { CarToolStoreProvider } from './contexts/carToolStoreContext';
// import { App } from './components/App';

// const colorList = [
//   { id: 1, colorName: "green", colorHexcode: "" },
//   { id: 2, colorName: "blue", colorHexcode: "" },
//   { id: 3, colorName: "red", colorHexcode: "" },
// ];

// const carList = [
//   { id: 1, carMake: "Toyota", carModel: "Avalon Limited Hybrid", carYear: "2019", carColor: "White", carPrice: "$45,000" },
//   { id: 2, carMake: "Porche", carModel: "911 Spyder", carYear: "2021", carColor: "Navy", carPrice: "$150,000" },
// ];

// render(<ColorToolStoreProvider initialColors={colorList}>
//   <CarToolStoreProvider initialCars={carList}>
//     <App />
//   </CarToolStoreProvider>
// </ColorToolStoreProvider>, document.querySelector("#root"));