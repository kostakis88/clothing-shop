import React from 'react';

const CustomButton = ({ children, ...otherButtonProps }) => (
  <button className="custom-button" { ...otherButtonProps }>
    {children}
  </button>
)

export default CustomButton;