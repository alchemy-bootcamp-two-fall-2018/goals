const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router.post('/signup', (req, res) => {
  const body = req.body;
  const username = body.username;
  const password = body.password;

  if(!username || !password){
    res.status(400).send({ error: 'username and password required' });
    return;
  }
  client.query(`
    SELECT id 
    FROM profile
    WHERE username = $1
  `, [username])
    .then(result => {
      if(result.rows.length > 0){
        res.status(400).send({ error: 'username already exists' });
        return;
      }
      client.query(`
        INSERT INTO profile(username, password)
        VALUES ($1, $2)
        RETURNING *;
      `, [username, password])
        .then(result => {
          res.json(result.rows[0]);
        });
    });
});

module.exports = router;
