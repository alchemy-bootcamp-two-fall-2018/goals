const express = require('express');
const app = express();
const client = require('./db-client');

app.use(express.json());

app.post('/signup', (req, res) => {
  const body = req.body;
  const username = body.username;
  const password = body.password;

  if(!username || !password) {
    res.status(400).json({ error: 'username and password required' });
    return;
  }

  client.query(`
    SELECT id FROM users WHERE username = $1;
  `,
  [username])
    .then(result => {
      if(result.rows.length > 0) {
        res.status(400).json({ error: 'username already exists' });
        return;
      }

      console.log('creating new user profile...');

      client.query(`
        INSERT INTO users (username, first_name, last_name, email, password)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, username;
      `,
      [username, body.fName, body.lName, body.email, password])
        .then(result => {
          res.json(result.rows[0]);
        });
    });
});

app.post('/signin', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if(!username || !password) {
    res.status(400).json({ error: 'username and password required' });
    return;
  }

  client.query(`
    SELECT id, username, password
    FROM users
    WHERE username = $1;
  `,
  [username])
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

// app.get('/goals/:token', (req, res) => {
//   client.query(`
//     SELECT
//       goals.title,
//       goals.start_date,
//       goals.end_date
//     FROM goals
//     JOIN users
//     ON goals.user_id = users.id
//     WHERE goals.user_id = $1;
//   `,
//   [req.param.token])
//     .then(result => {
//       res.json(result.rows[0]);
//     });
// });

app.post('/goals/:token', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO goals (title, start_date, end_date, user_id)
    VALUES($1, $2, $3, $4)
    RETURNING title
  `,
  [body.title, body.stDate, body.enDate, body.userId])
    .then(result => {
      res.json(result.rows[0]);
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});