const express = require('express');
const app = express();
const morgan = require('morgan');
const auth = require('./routes/auth');



// enhanced logging
app.use(morgan('dev'));

// register the json "middleware" body parser
app.use(express.json());



// register our routes
app.use('/api/auth', auth);


module.exports = app;