'use strict';

const path = require('path');
const express = require('express');
// var proxy = require('express-http-proxy');

const addDevMiddlewares = require('./middlewares/dev');

const app = express();

// app.all('/api/*', proxy('http://localhost:3001'));

const options = {
	outputPath: path.resolve(process.cwd(), 'build'),
	publicPath: '/',
};

if (process.env.NODE_ENV === 'production') {
  const addProdMiddlewares = require('./addProdMiddlewares');
  addProdMiddlewares(app, options);
}
else {
  const webpackConfig = require('../config/webpack.config.dev.js');
  addDevMiddlewares(app, webpackConfig);
}

const PORT = 8080;
const HOST = process.env.HOST || '0.0.0.0';

console.log('============')
console.log(PORT)

app.listen(PORT, HOST, err => {
	if (err) {
    console.log('Error!!!');
    console.log(err);
    return;
  }

	console.log(`app started on port: ${PORT}, host: ${HOST}`);
});
