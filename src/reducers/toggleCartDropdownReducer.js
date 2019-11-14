import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  hidden: true
}

const toggleCartDropDownReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case actionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state; 
  }
};

export default toggleCartDropDownReducer;