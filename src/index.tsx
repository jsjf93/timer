import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import './scss/core.scss';
import 'bulma/css/bulma.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const onRedirectCallback = (appState: any) => {
  history.replace(appState?.returnTo || window.location.pathname);
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
