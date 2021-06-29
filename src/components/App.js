import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { carToolStore } from '../stores/carToolStore';
import { colorToolStore } from '../stores/colorToolStore';

import { Layout } from './Layout';
import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { Menu } from './Menu';
import { Home } from './Home';
import { Sidebar } from './Sidebar';

import { ColorListContainer } from '../containers/ColorListContainer';
import { ColorFormContainer } from '../containers/ColorFormContainer';
import { CarToolContainer } from '../containers/CarToolContainer';

export const App = () => {
  
  return (
    <Router>
      <Layout>
        <ToolHeader toolTitle="App Tools" />
        <Menu />
        <main>
          <Switch>
            <Route path="/color-list">
              <Provider store={colorToolStore}>
                <ColorListContainer />
              </Provider>
            </Route>
            <Route path="/color-form">
              <Provider store={colorToolStore}>
                <ColorFormContainer />
              </Provider>
            </Route>
            <Route path="/car-tool">
              <Provider store={carToolStore}>
                <CarToolContainer />
              </Provider>
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </main>
        <Sidebar />
        <ToolFooter />
      </Layout>
    </Router>
  );

}