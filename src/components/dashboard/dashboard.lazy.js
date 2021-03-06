import React, { lazy, Suspense } from 'react';

const Lazydashboard = lazy(() => import('./dashboard'));

const dashboard = props => (
  <Suspense fallback={null}>
    <Lazydashboard {...props} />
  </Suspense>
);

export default dashboard;
