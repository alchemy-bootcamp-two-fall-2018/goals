const express = require('express');
const app = express();
const morgan = require('morgan');

// enhanced logging
app.use(morgan('dev'));

// register the json "middleware" body parser
app.use(express.json());

module.exports = app;