import { render } from 'react-dom';
import { Provider } from 'react-redux';

// import { calcToolStore } from './stores/calcToolStore';
// import { CalcToolContainer } from './containers/CalcToolContainer';

// render(<Provider store={calcToolStore}>
//   <CalcToolContainer />
// </Provider>, document.querySelector("#root"));

import { ColorToolStoreProvider } from './contexts/colorToolStoreContext';
import { App } from './components/App';
import { carToolStore } from './stores/carToolStore';

const colorList = [
  { id: 1, colorName: "green", colorHexcode: "" },
  { id: 2, colorName: "blue", colorHexcode: "" },
  { id: 3, colorName: "red", colorHexcode: "" },
];

render(<ColorToolStoreProvider initialColors={colorList}>
  <Provider store={carToolStore}>
    <App />
  </Provider>
</ColorToolStoreProvider>, document.querySelector("#root"));