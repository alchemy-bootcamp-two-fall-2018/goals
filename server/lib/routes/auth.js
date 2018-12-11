const router = require('express').Router();
const client = require('../db-client');

router
  .post('/signup', (req, res) => {
  
    const body = req.body;
    const username = body.username;
    const password = body.password;

    if(!username || !password) {
      res.status(400).json({ error: 'username and password required'});
      return;
    }

    res.json({ result: 'fake response' })

    


  })

module.exports = router;