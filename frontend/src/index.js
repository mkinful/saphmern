import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider as Provider1 } from '@auth0/auth0-react';
import { Provider as Provider2 } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0__CLIENT_ID;

ReactDOM.render(
  <Provider1
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
      <Provider2
        store={store}>
        <App />
      </Provider2>
  </Provider1>,
  document.getElementById('root')
);

reportWebVitals();
