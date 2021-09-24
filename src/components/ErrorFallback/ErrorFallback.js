import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import { fallbackContainer, errorHeader } from './ErrorFallback.module.scss';

const ErrorFallback = ({ error }) => {
  console.error('Error from fallback ', error);

  return (
    <div
      role="alert"
      className={classnames(fallbackContainer, 'd-flex flex-column justify-content-center align-items-center')}
    >
      <h3 className={classnames(errorHeader, 'mb-3')}>Oops! Something went wrong. Click below to reload the page.</h3>
      <Button color="primary" onClick={() => window.location.reload()}>
        Reload Page
      </Button>
    </div>
  );
};

ErrorFallback.defaultProps = {
  error: null,
};

ErrorFallback.propTypes = {
  error: PropTypes.shape(),
};

export default ErrorFallback;
