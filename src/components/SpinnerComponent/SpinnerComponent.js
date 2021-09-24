import React from 'react';
import { Spinner } from 'reactstrap';

import defaultSpinnerSize from './SpinnerComponent.constants';

const SpinnerComponent = () => (
  <div className="w-100 d-flex justify-content-center align-items-center">
    <Spinner color="info" style={defaultSpinnerSize} />
  </div>
);

export default SpinnerComponent;
