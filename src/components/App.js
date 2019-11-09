import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import SignPage from '../pages/SignPage';
import { auth } from '../firebase/firebase.utils';

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignPage} />
        </Switch>
      </div>
    );
  }
}

export default App;