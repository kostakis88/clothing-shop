import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollection } from '../selectors/collectionSelector';
import CollectionPreview from './CollectionPreview';

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({id, ...otherCollectionProps}) => (
      <CollectionPreview key={id} {...otherCollectionProps}/>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollection
});

export default connect(mapStateToProps)(CollectionOverview);