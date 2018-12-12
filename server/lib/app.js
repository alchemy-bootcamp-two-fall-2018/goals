const express = require('express');
const app = express();
const morgan = require('morgan');
const auth = require('./routes/auth');
const goals = require('./routes/goals');
const jwt = require('jsonwebtoken');
const APP_SECRET = 'CHANGEMENOW';

// enhanced server logging in Terminal
app.use(morgan('dev'));

// register the json middleware body parser
app.use(express.json());

const checkAuth = (req, res, next) => {
  const token = req.get('Authorization');
  if(!token) {
    res.status(401).json({ error: 'no authorization found' });
    return;
  }
  let payload = null;
  try {
    payload = jwt.verify(token, APP_SECRET);
  }
  catch (err) {
    res.status(401).json({ error: 'invalid token' });
  }
  req.userId = payload.id;
  next();
};

// register routes
app.use('/api/auth', auth);
app.use('/api/goals', checkAuth, goals);

module.exports = app;