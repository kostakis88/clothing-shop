import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../components/CollectionOverview';
import CollectionPage from './CollectionPage';
import { firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../actions/index';
import Spinner from '../components/Spinner';

const CollectionOverviewWithSpinner = Spinner(CollectionOverview);
const CollectionPagewWithSpinner = Spinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const {match} = this.props;
    const loading = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={props => (<CollectionOverviewWithSpinner isLoading={loading} {...props} />)} />
        <Route path={`${match.path}/:collectionId`} render={props => <CollectionPagewWithSpinner isLoading={loading} {...props} />} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
}); 

export default connect(null, mapDispatchToProps)(ShopPage);