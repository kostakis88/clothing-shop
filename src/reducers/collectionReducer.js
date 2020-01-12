import SHOP_DATA from './ShopData';
import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  collections: SHOP_DATA
}

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state;
  }
};

export default collectionReducer;