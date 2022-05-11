import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
  Home,
  About,
  Products,
  Error,
  Cart,
  Checkout,
  PrivateRoute,
  SingleProduct,
} from './pages';
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Footer />
      <switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route exact path='/products/:id' children={<SingleProduct />}>
          <Products />
        </Route>
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
        <Route exact path='*'>
          <Error />
        </Route>
      </switch>
    </Router>
  );
}

export default App;
