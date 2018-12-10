const express = require('express');
const app = express();
const morgan = require('morgon');
const auth = require('./routes/auth');


//morgon logging 
app.use(morgan('dev'));
app.use(express.json());


//register roots

app.use('/api/auth', auth);


module.exports = app;