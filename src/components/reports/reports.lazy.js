import React, { lazy, Suspense } from 'react';

const Lazyreports = lazy(() => import('./reports'));

const reports = props => (
  <Suspense fallback={null}>
    <Lazyreports {...props} />
  </Suspense>
);

export default reports;
