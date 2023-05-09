import React from 'react'
import Home from "./pages/Home.jsx";
import ProductList from "./pages/ProductList.jsx";
import {  Redirect, Route } from "react-router-dom"
import {Switch} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Success from './pages/Success.jsx';




const App = () => {
  const user = true
  return (
    <Router>
      <Switch>
        <Route exact  path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/product">
          <Product/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/success">
          <Success/>
        </Route>
        <Route path="/Login">
          {user ? <Redirect to="/"/> : <Login/>}
          <Login/>
        </Route>
        <Route path="/Register">
        {user ? <Redirect to="/"/> : <Register/>}
          <Register/>
        </Route>
      </Switch>
    </Router>
  )
};

export default App;
