const express = require('express');
const app = express();
const morgan = require('morgan');
const goals = require('./routes/goals');

app.use(morgan('dev'));

app.use(express.json());

app.use('./api/goals', goals);

module.exports = app;