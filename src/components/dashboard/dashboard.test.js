import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import dashboard from './dashboard';

describe('<dashboard />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<dashboard />);
    const dashboard = getByTestId('dashboard');

    expect(dashboard).toBeInTheDocument();
  });
});