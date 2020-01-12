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

export const clearItem = item => ({
  type: actionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeItem = item => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item
});

export const updateCollections = (collectionsMap) => ({
  type: actionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});