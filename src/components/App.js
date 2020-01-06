import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import SignPage from '../pages/SignPage';
import CheckoutPage from '../pages/CheckoutPage';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from '../actions/index';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../selectors/userSelectors';
import { selectCollectionsForPreview } from '../selectors/collectionSelectors';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      } else {
          setCurrentUser(userAuth);
          addCollectionAndDocuments('collections', collectionsArray);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={ () => this.props.currentUser ? <Redirect to='/' /> : <SignPage /> } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);