const express = require('express');
const app = express();
const morgan = require('morgan');
const goals = require('./routes/goals');
const auth = require('./routes/auth');

// enhanced logging
app.use(morgan('dev'));

// register the json "middleware" body parser
app.use(express.json());

function checkAuth(req, res, next) {
  const userId = req.get('Authorization');
  if(!userId) {
    res.status(400).send({ error: 'No Authorization Found.' });
    return;
  }
  req.userId = userId;
  next();
}

app.use('/api/auth', auth);
app.use('/api/goals', checkAuth, goals);

module.exports = app;