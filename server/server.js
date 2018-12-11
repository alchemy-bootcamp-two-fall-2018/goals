const express = require('express');
const app = express();
const client = require('./db-client');

app.use(express.json());

app.post('/signup', (req, res) => {
  console.log(req.body);
  const body = req.body;
  const username = body.username;
  const password = body.password;

  // if(!username || !password) {
  //   res.status(400).json({ error: 'username and password required' });
  //   return;
  // }

  // client.query(`
  //   SELECT id FROM users WHERE username = $1;
  // `,
  // [username])
  //   .then(result => {
  //     if(result.row.length > 0) {
  //       res.status(400).json({ error: 'username already exists' });
  //       return;
  //     }

      console.log('creating new user profile...');

      client.query(`
        INSERT INTO users (username, first_name, last_name, email, password)
        VALUES ($1, $2, $3, $4, $5)
      `,
      [username, body.fname, body.lname, body.email, password]);
    // });
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});