import React from 'react';
import ReactDOM from 'react-dom'; // Error if missing: ReactDOM is not defined
import App  from './app';
import ErrorBoundry from './errorBoundary';
import './errorBoundary/globalErrorBoundary';



ReactDOM.render(
    <ErrorBoundry>
        <App />
    </ErrorBoundry>
    , document.getElementById('root')
);

module.hot.accept();