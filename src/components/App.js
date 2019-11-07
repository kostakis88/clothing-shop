import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;