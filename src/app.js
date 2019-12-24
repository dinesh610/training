import React from 'react';
import { BrowserRouter , Route, Switch, Link } from 'react-router-dom';
import Main from './pages/main';
import Cart from './pages/Cart';
import styled from 'styled-components';

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const NavBar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  background: coral;
  justify-content: space-evenly;
  align-items: center;
  height: 6vh;
  
  .logo {
    font-size: 2rem;
  }
  .nav-links {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 60vw;
   list-style: none;
  }
  .link {
    text-decoration: none;
    padding: 10px;
    font-weight: bold;
    
  }
  a{
  text-decoration: none;
    color: white;
    font-size: 2rem;
  }
  

`;


const App = () => {

    return (
      <BrowserRouter history={history}>
          <NavBar>
              <div className="logo"> Logo </div>
              <ul className='nav-links'>
                  <li className="link">
                      <Link to={'/'}> Home </Link>
                  </li>
                  <li className="link">
                      <Link to={'/cart'}> Cart </Link>
                  </li>
              </ul>
          </NavBar>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    );
};

export default App;
