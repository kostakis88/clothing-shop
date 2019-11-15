import React from 'react';
import CartItem from './CartItem';
import CustomButton from './CustomButton';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../selectors/cartSelectors';
import { connect } from 'react-redux';

const CartDropDown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      { cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem}/>
      )) }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropDown);