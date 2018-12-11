const router = require('express'). Router();
const client = require('../db-client');

router
  .post('/signup', (req, res) => {

    const body = req.body;
    const username = body.username;
    const password = body.password;

    if(!username || !password) {
      res.status(400).json({ error: 'username and password required' });
      return;
    }

    client.query(`
            SELECT id
            FROM users
            WHERE username = $1;
            `,
    [username])
      .then(result => {
        if(result.rows.length > 0) {
          res.status(400).json({ error: 'username already exists' });
          return;
        }

        console.log('creating new user profile...');
      });
  });

module.exports = router;