import React, { lazy, Suspense } from 'react';

const LazyPropertiesPage = lazy(() => import('./PropertiesPage'));

const PropertiesPage = (props) => (
  <Suspense fallback={null}>
    <LazyPropertiesPage {...props} />
  </Suspense>
);

export default PropertiesPage;
