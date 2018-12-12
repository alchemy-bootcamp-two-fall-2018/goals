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
            FROM profile
            WHERE username = $1;
            `,
    [username])
      .then(result => {
        if(result.rows.length > 0) {
          res.status(400).json({ error: 'username already exists' });
          return;
        }

        client.query(`
          INSERT into profile (username, first_name, last_name, email, password)
          VALUES ($1, $2, $3, $4, $5)
          RETURNING id, username, first_name as "firstName", last_name as "lastName", email, password;
        `,
        [username, password]
        )
          .then(result => {
            res.json(result.rows[0]);
          });
      });
  })

  .post('/signin', (req, res) => {
    const body = req.body;
    const username = body.username;
    const password = body.password;

    if(!username || !password) {
      res.status(400).json({ error: 'username and password required' });
      return;
    }

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
          username: result.rows[0].username, 
          token: result.rows[0].id
        });
      });
  });

module.exports = router;