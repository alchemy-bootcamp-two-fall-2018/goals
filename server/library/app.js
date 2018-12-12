const express = require('express');
const app = express();
const morgan = require('morgan');
const auth = require('./routes/auth');
const goals = require('./routes/goals');

app.use(morgan('dev'));
app.use(express.json());

function checkAuth(req, res, next) {
  const userId = req.get('Authorization');
  console.log('userId in checkAuth', userId);
  if(!userId) {
    res.status(401).json({ error: 'no authorization found' });
    return;
  }
  req.userId = userId;
  next();
}

app.use('/api/auth', auth);
app.use('/api/goals', checkAuth, goals);

module.exports = app;