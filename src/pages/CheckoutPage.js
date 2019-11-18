import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../selectors/cartSelectors';
import CheckoutItem from '../components/CheckoutItem';
import StripeCheckoutButton from '../components/StripeCheckoutButton';

const CheckoutPage = ({cartItems, total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(
        cartItem => <CheckoutItem key={cartItem.id} item={cartItem}/> 
      )
    }
    <div className="total">{`Total ${total}`}</div>
    <StripeCheckoutButton price={total}/>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);