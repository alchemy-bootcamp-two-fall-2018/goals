const express = require('express');
const app = express();
const morgan = require('morgan');
const goals = require('./routes/goals');

// enhanced logging
app.use(morgan('dev'));

// register the json "middleware" body parser
app.use(express.json());

app.use('/api/goals', goals);

module.exports = app;