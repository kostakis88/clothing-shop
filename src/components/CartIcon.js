import React from 'react';
import { toggleCartDropDown } from '../actions/index';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartDropDown }) => (
  <div className="cart-icon" onClick={ toggleCartDropDown }>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartDropDown: () => dispatch(toggleCartDropDown())
});

export default connect(null, mapDispatchToProps)(CartIcon);