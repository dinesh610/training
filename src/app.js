import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import Cart from './pages/Cart';

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();


const App = () => {

    return (
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    );
};

export default App;
