const router = require('express').Router();
const client = require('../db-client');
const bcrypt = require('bcryptjs');
const jwt = require('./jwt');

function getProfileWithToken(profile) {
  return {
    id: profile.id,
    username: profile.username,
    token: jwt.sign({ id: profile.id })
  };
}
router
//SIGN UP
  .post('/signup', (req, res) => {

    const body = req.body;
    const username = body.username;
    const password = body.password;
    const first = body.first;
    const last = body.last;
    const email = body.email;
    
    // username and password needs to exist
    if(!username || !password) {
      res.status(400).json({ error: 'username and password required' });
      return;
    }
    //verify with postman via POST |localhost:3000/api/auth/signup
    //should get 404
    // res.json({ result: 'You are now logged in' });
    
    // username needs to not exist already
    client.query(`
      SELECT id
      FROM profile
      WHERE username = $1;
    `,
    [username])  
      .then(result => {
        if(result.rows.length > 0) {
          res.status(400).json({ error: 'Dang that username already exists' });
          return;
        }

        console.log('creating new user profile...');

        // insert into profile the new user
        client.query(`
          INSERT into profile (username, hash, first, last, email)
          VALUES ($1, $2, $3, $4, $5)
          RETURNING *;
        `,
        [username, bcrypt.hashSync(password, 8), first, last, email]
        )
          .then(result => {
            const profile = result.rows[0];
            res.json(getProfileWithToken(profile));
          });
      });
  })
// console.log('new user profile created');
  
  
  //SIGN IN
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
      FROM profile
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