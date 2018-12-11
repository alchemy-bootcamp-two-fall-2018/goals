const express = require('express');
const app = express();
const morgan = require('morgan');
const goals = require('./routes/goals');
const auth = require('./routes/auth');

// enhanced logging
app.use(morgan('dev'));

// register the json "middleware" body parser
app.use(express.json());

app.use('/api/auth', auth);
app.use('/api/goals', goals);

module.exports = app;