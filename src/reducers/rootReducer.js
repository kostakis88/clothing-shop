import { combineReducers } from 'redux';
import userReducer from './userReducer';
import toggleCartDropdownReducer from './toggleCartDropdownReducer';

export default combineReducers({
  user: userReducer,
  cart: toggleCartDropdownReducer
});