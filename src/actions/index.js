import * as actionTypes from './actionTypes';

export const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});

export const toggleCartDropDown = () => ({
  type: actionTypes.TOGGLE_CART_DROPDOWN
});

export const addItem = item => ({
  type: actionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item
});