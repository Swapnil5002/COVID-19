import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import login from './login';

describe('<login />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<login />);
    const login = getByTestId('login');

    expect(login).toBeInTheDocument();
  });
});