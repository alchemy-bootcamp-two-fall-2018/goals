const express = require('express');
const app = express();
const morgan = require('morgan');
const goals = require('./routes/goals');
const auth = require('./routes/auth');
const jwt = require('jsonwebtoken');

const APP_SECRET = 'CHANGEMENOW';

// enhanced logging
app.use(morgan('dev'));

// register the json "middleware" body parser
app.use(express.json());

function checkAuth(req, res, next) {
  const token = req.get('Authorization');
  if(!token) {
    res.status(400).send({ error: 'No Authorization Found.' });
    return;
  }
  let payload = null;
  try {
    payload = jwt.verify(token, APP_SECRET);
  }
  catch (err){
    res.status(400).send({ error: 'Invalid token.' });
    return;
  }
  req.userId = payload.id;
  next();
}

app.use('/api/auth', auth);
app.use('/api/goals', checkAuth, goals);

module.exports = app;