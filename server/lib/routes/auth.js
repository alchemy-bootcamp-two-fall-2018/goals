const router = require('express').Router();
const client = require('../db-client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const APP_SECRET = 'CHANGEMENOW';

function getProfileWithToken(profile) {
  return {
    id: profile.id,
    username: profile.username,
    token: jwt.sign({ id: profile.id }, APP_SECRET)
  };
}

router
  .post('/signup', (req, res) => {

    const body = req.body;
    const username = body.username;
    const password = body.password;
    const firstname = body.firstname;
    const lastname = body.lastname;
    
    // username and password needs to exist
    if(!username || !password) {
      res.status(400).json({ error: 'username and password required' });
      return;
    }

    // username needs to not exist already
    client.query(`
      SELECT id
      FROM profiles
      WHERE username = $1;
    `,
    [username])  
      .then(result => {
        if(result.rows.length > 0) {
          res.status(400).json({ error: 'username already exists' });
          return;
        }

        console.log('creating new user profile...');

        // insert into profile the new user
        client.query(`
          INSERT into profiles (username, hash, firstname, lastname)
          VALUES ($1, $2, $3, $4)
          RETURNING id, username;
        `,
        [username, bcrypt.hashSync(password, 8), firstname, lastname]
        )
          .then(result => {
            const profile = result.rows[0];
            res.json(getProfileWithToken(profile));
          });
      });
  })

  .post('/signin', (req, res) => {
    const body = req.body;
    const username = body.username;
    const password = body.password;

    // username and password needs to exist
    if(!username || !password) {
      res.status(400).json({ error: 'username and password required' });
      return;
    }

    // does username match one in db
    // relative password should match

    client.query(`
      SELECT id, username, hash 
      FROM profiles
      WHERE username = $1;
    `,
    [username]
    )
      .then(result => {
        const profile = result.rows[0];
        if(!profile || !bcrypt.compareSync(password, profile.hash)) {
          res.status(400).json({ error: 'username or password incorrect' });
          return;
        }

        res.json(getProfileWithToken(profile));
      });
  });
  

module.exports = router;