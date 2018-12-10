const express = require('express');
const app = express();
const morgan = require('morgan');
const synths = require('./routes/synths');
const manufacturers = require('./routes/manufacturers');

// enhanced server logging in Terminal
app.use(morgan('dev'));

// register the json middleware body parser
app.use(express.json());

// register routes
app.use('/api/manufacturers', manufacturers);
app.use('/api/synths', synths);

module.exports = app;