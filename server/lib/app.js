const express = require('express');
const app = express();
const morgan = require('morgan');
const auth = require('./routes/auth');


//morgan logging 
app.use(morgan('dev'));
app.use(express.json());


//register roots

app.use('/api/auth', auth);


module.exports = app;