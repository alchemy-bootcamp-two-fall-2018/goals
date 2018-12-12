const router = require('express').Router();
const client = require('../db-client');


router

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
    SELECT id, username, last_name, first_name, email, password 
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