import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'pages/app';


/**
 * Get document root
 */
const container = document.getElementById('root');

/**
 *Create the root element for the React application
 */
const root = ReactDOM.createRoot(container);

/**
 * Render the React application to the DOM 
 */
root.render(<App />);

/**
 *Enable hot module replacement for the 'pages/app' module  
 */
if (module.hot) {
    module.hot.accept('pages/app', () => {
        const NextApp = require('pages/app').default;
        render(NextApp);
    });
}    