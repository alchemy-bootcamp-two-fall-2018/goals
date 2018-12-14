const express = require('express');
const app = express();
const morgan = require('morgan');
const auth = require('./routes/auth');
const goals = require('./routes/goals');
const jwt = require('./jwt');


app.use(morgan('dev'));
app.use(express.json());

function checkAuth(req, res, next) {
  const token = req.get('Authorization');
  if(!token) {
    res.status(401).json({ error: 'no authorization found' });
    return;
  }

  let payload = null;
  try {
    payload = jwt.verify(token);
  }
  catch (err) {
    res.status(401).json({ error: 'invalid token' });
    return;
  }

  req.userId = payload.id;
  next();
}

app.use('/api/auth', auth);
app.use('/api/goals', checkAuth, goals);

module.exports = app;