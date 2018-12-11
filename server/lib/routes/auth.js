const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap
const bcrypt = require('bcryptjs');

router
  .post('/signup', (req, res) => {
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
            INSERT INTO profile(username, hash)
            VALUES ($1, $2)
            RETURNING id, username;
        `, [username, bcrypt.hashSync(password, 8)])
          .then(result => {
            res.json(result.rows[0]);
          });
      });
  })
  .post('/signin', (req, res) => {
    const body = req.body;
    const username = body.username;
    const password = body.password;

    if(!username || !password){
      res.status(400).send({ error: 'username and password required' });
      return;
    }

    client.query(`
        SELECT id, username, hash
        FROM profile
        WHERE username = $1
    `, [username])
      .then(result => {
        const profile = result.rows[0];
        if(!profile || !bcrypt.compareSync(password, profile.hash)){
          res.status(400).send({ error: 'username or password incorrect' });
          return;
        }

        res.json({
          id: result.rows[0].id,
          username: result.rows[0].username,
        });
      });
  });

module.exports = router;
