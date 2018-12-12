const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router
  .get('/', (req, res) => {
    client.query(`
      SELECT id, name, start_date, end_date
      FROM goals;
    `)
      .then(result => {
        res.json(result.rows);
      });
  })

  .post('/', (req, res) => {
    const body = req.body;

    client.query(`
      INSERT INTO goals (name, start_date, end_date)
      VALUES ($1, $2, $3)
      RETURNING *;
    `,
    [body.name, body.start_date, body.end_date])
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;