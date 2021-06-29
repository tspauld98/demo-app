import { render } from 'react-dom';

// import { calcToolStore } from './stores/calcToolStore';
// import { CalcToolContainer } from './containers/CalcToolContainer';

// render(<Provider store={calcToolStore}>
//   <CalcToolContainer />
// </Provider>, document.querySelector("#root"));

import { App } from './components/App';

render(<App />, document.querySelector("#root"));