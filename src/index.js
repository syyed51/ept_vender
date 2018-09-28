import React from 'react';
import ReactDOM from 'react-dom'; // Error if missing: ReactDOM is not defined
import App  from './app';

ReactDOM.render(
        <App />
    , document.getElementById('root')
);

module.hot.accept();