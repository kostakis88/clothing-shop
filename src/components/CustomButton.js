import React from 'react';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherButtonProps }) => (
  <button className={
    `${ isGoogleSignIn ? 'google-sign-in' : '' } ${ inverted ? 'inverted': '' } custom-button`} 
    { ...otherButtonProps }
  >
    {children}
  </button>
)

export default CustomButton;