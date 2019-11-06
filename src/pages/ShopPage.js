import React, { Component } from 'react';
import CollectionPreview from '../components/CollectionPreview';
import SHOP_DATA from './ShopData';

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  }
  render() {
    return (
      <div>
        {this.state.collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
      </div>
    );
  }
}

export default ShopPage;