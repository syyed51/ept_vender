import React from 'react';
import ReactDOM from 'react-dom'; // Error if missing: ReactDOM is not defined
import './errorBoundary/globalErrorBoundary';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import ErrorBoundry from './errorBoundary';
import App from './app';
import './style.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root'),
);

module.hot.accept();
