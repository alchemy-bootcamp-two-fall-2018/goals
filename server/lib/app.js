const express = require('express');
const app = express();
const morgan = require('morgan');
// const goals = require('./routes/goals');
// const profiles = require('./routes/profiles');

// enhanced logging using morgan
app.use(morgan('dev'));

// register the json "middleware" body parserers
app.use(express.json());

// register our routes
// app.use('/api/profiles', profiles);
// app.use('/api/goals', goals);

module.exports = app;