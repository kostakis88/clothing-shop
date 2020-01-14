import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from '../styles/SpinnerStyles';

const Spinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
}

export default Spinner;