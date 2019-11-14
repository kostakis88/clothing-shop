import * as actionTypes from './actionTypes';

export const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});

export const toggleCartDropDown = () => ({
  type: actionTypes.TOGGLE_CART_DROPDOWN
});