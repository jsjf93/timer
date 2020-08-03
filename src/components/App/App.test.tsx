import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { createMemoryHistory } from 'history';
import * as H from 'history';

import { useAuth0 } from '@auth0/auth0-react';
import { Router } from 'react-router-dom';

jest.mock('@auth0/auth0-react');
const mockedUseAuth0 = useAuth0 as jest.Mock;

describe('The App component', () => {
  let history: H.MemoryHistory<H.History.PoorMansUnknown>;

  beforeEach(() => {
    mockedUseAuth0.mockReturnValue({
      isAuthenticated: true,
    });

    history = createMemoryHistory();
  });

  it('Should render correctly when the user is authenticated', () => {
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    const welcome = getByText('Welcome to the earthware CRA template');
    const home = getByText('Home page');

    expect(welcome).toBeInTheDocument();
    expect(home).toBeInTheDocument();
  });

  it('Should have an element with the navigation role', () => {
    const { getByRole } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    expect(getByRole('navigation')).toBeInTheDocument();
  });
});
