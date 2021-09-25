import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import './index.scss';
import PropertiesPage from './pages/PropertiesPage/PropertiesPage.lazy';

ReactDOM.render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <PropertiesPage />
  </ErrorBoundary>,
  document.getElementById('root')
);
