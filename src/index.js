import React from 'react';
import ReactDOM from 'react-dom'; // Error if missing: ReactDOM is not defined
import App from './app';
import ErrorBoundry from './errorBoundary';
import './errorBoundary/globalErrorBoundary';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { createStore } from 'redux';

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <App />
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root')
);

module.hot.accept();