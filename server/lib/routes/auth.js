const router = require('express').Router();
const client = require('../db-client');

router
//SIGN UP
  .post('/signup', (req, res) => {

    const body = req.body;
    const username = body.username;
    const password = body.password;
    
    // username and password needs to exist
    if(!username || !password) {
      res.status(400).json({ error: 'username and password required' });
      return;
    }
    //verify with postman via POST |localhost:3000/api/auth/signup
    //should get 404
    res.json({ result: 'You are now logged in' });
    
    // username needs to not exist already
    client.query(`
      SELECT id
      FROM profile
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
          INSERT into profile (username, password)
          VALUES ($1, $2)
          RETURNING id, username;
        `,
        [username, password]
        )
          .then(result => {
            // return profile object that has id that will be used as a token
            res.json(result.rows[0]);
          });
      });
  })
  console.log('new user profile created');
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
      SELECT id, username, password 
      FROM profile
      WHERE username = $1;
    `,
    [username]
    )
      .then(result => {
        if(result.rows.length === 0 || result.rows[0].password !== password) {
          res.status(400).json({ error: 'username or password incorrect' });
          return;
        }

        res.json({
          id: result.rows[0].id,
          username: result.rows[0].username
        });
      });
  });

module.exports = router;