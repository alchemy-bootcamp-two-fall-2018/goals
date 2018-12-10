const express = require('express');
const app = express();
const morgan = require('morgan');
const auth = require('./routes/auth');
const goalz = require('./routes/goalz');

// enhanced server logging in Terminal
app.use(morgan('dev'));

// register the json middleware body parser
app.use(express.json());

function checkAuth(req, res, next) {
  const userId = req.get('Authorization');
  if(!userId) {
    res.status(401).json({ error: 'no authorization found' });
    return;
  }
  req.userId = userId;
  next();
}

// register routes
app.use('/api/auth', auth);
app.use('/api/goalz', checkAuth, goalz);

module.exports = app;