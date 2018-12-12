const express = require('express');
const app = express();
const morgan = require('morgan');
const auth = require('./routes/auth');

app.use(morgan('dev'));
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

app.use('/api/auth', auth);
module.exports = app;