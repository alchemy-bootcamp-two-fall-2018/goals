const express = require('express');
const app = express();
const morgan = require('morgan');
const auth = require('./routes/auth');

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/auth', auth);

module.exports = app;