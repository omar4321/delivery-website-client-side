import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Clients from './components/Clients';
import Home from './components/Home/Home';
// import Login from './components/Login/Firebase/Login/Login/Login';
import Menu from './components/Menu';
import AuthProvider from './contexts/AuthProvider';
import Notfound from './components/Notfound/Notfound';
import Services from './components/Services/Services';
import PrivateRoute from './components/Login/Firebase/Login/PrivateRoute/PrivateRoute';

import Cart from './Cart/Cart';
import Login from './components/Login/Firebase/Login/Login/Login';
import Viewpizza from './components/Viewpizza/Viewpizza';
import Admin from './Admin/Admin';

export const CartInfo = createContext();

function App() {
  const [cartId, setcartId] = useState([]);

  console.log(cartId);
  return (
    <AuthProvider>
      <CartInfo.Provider value={{ cartId, setcartId }}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/about">
                <About></About>
              </Route>
              <Route exact path="/menu">
                <Menu></Menu>
              </Route>
              <Route exact path="/client">
                <Clients></Clients>
              </Route>
              <Route exact path="/services">
                <Services></Services>
              </Route>
              <Route exact path="/Restaurant">
                <Viewpizza></Viewpizza>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/admin">
                <Admin></Admin>
              </Route>
              <PrivateRoute exact path="/cart">
                <Cart></Cart>
              </PrivateRoute>
              <Route path="*">
                <Notfound></Notfound>
              </Route>
            </Switch>
          </div>
        </Router>
      </CartInfo.Provider>
    </AuthProvider>
  );
}

export default App;
