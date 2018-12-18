const express = require('express');
const app = express();
const auth = require('./routes/auth');
const goals = require('./routes/goals');
const jwt = require('./routes/jwt');
const morgan = require('morgan');


// enhanced logging using morgan
app.use(morgan('dev'));

// register the json "middleware" body parserers
app.use(express.json());

function checkAuth(req, res, next) {
  const token = req.get('Authorization');
  if(!token) {
    res.status(401).json({ error: 'no authorization found' });
    return;
  }
  let payload = null;
  console.log(token);
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
// register our routes
app.use('/api/auth', auth);
app.use('/api/goals', checkAuth, goals);

module.exports = app; 