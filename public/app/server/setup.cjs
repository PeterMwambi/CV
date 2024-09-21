/**
 * ```````````````````````````````````````````````````````````````````````````````````````````````````````````
 * Define App Constants;
 * ```````````````````````````````````````````````````````````````````````````````````````````````````````````
 */
const express = require('express');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require(path.join(__dirname, '../../..', 'webpack.config.js'));
const { urlencoded } = require('body-parser');



/**
 * ```````````````````````````````````````````````````````````````````````````````````````````````````````````
 * Bootstrap 
 * ```````````````````````````````````````````````````````````````````````````````````````````````````````````
 */
const app = express();
const port = process.env.SERVER_PORT || 8000;
const HTMLPath = path.resolve(__dirname, '../../..', 'public/dist/index.html');

/**
 * ```````````````````````````````````````````````````````````````````````````````````````````````````````````
 * Define App Use;
 * ```````````````````````````````````````````````````````````````````````````````````````````````````````````
 */
//Logging  middleware
app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
});

//Define the compiler
const compiler = webpack(webpackConfig);

//Set up webpack middleware
app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
}));

//Set up HRM middleware
app.use(webpackHotMiddleware(compiler));

//Set up app path to handle static paths 
app.use(express.static(path.join(__dirname, 'public')));

//Set up app to handle json 
app.use(express.json());

//Allow parsing of url encoded payloads
app.use(express.urlencoded({ extended: true }));

/**
 * ```````````````````````````````````````````````````````````````````````````````````````````````````````````
 * Define Routes;
 * ```````````````````````````````````````````````````````````````````````````````````````````````````````````
 */
app.get(['/', '/home'], (req, res) => {
    res.sendFile(HTMLPath);
});

app.get('/page', (req, res) => {
    res.sendFile(HTMLPath);
})


/**
 * ```````````````````````````````````````````````````````````````````````````````````````````````````````````
 * Begin Server
 * ```````````````````````````````````````````````````````````````````````````````````````````````````````````
 */
app.listen(port, () => {
    console.log(`Server listening on: http://${process.env.HOST}:${process.env.SERVER_PORT}`);
})


