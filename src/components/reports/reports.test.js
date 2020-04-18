import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import reports from './reports';

describe('<reports />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<reports />);
    const reports = getByTestId('reports');

    expect(reports).toBeInTheDocument();
  });
});