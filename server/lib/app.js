const express = require('express');
const app = express();
const morgan = require('morgan');
const auth = require('./routes/auth');
const goals = require('./routes/goals');

app.use(morgan('dev'));

app.use(express.json());


app.use('/api/auth', auth);
app.use('/api/goals', goals);

module.exports = app;