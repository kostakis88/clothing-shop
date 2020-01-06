import React from 'react';
import { auth } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../selectors/cartSelectors';
import { selectCurrentUser } from '../selectors/userSelectors';
import { ReactComponent as Logo } from '../assets/crown.svg';
import CartIcon from './CartIcon';
import CartDropDown from './CartDropDown';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from '../styles/HeaderStyles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as='div' to='/' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropDown />
    } 
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);