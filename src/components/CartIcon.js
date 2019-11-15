import React from 'react';
import { toggleCartDropDown } from '../actions/index';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../selectors/cartSelectors';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartDropDown, itemCount }) => (
  <div className="cart-icon" onClick={ toggleCartDropDown }>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropDown: () => dispatch(toggleCartDropDown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);