const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router();//eslint-disable-line new-cap

router
  .get('/', (req, res) => {
    client.query(`
        SELECT title, start_date, end_date
        FROM goal;
    `)
      .then(result => {
        res.json(result.rows);
      });
  })
  .post('/', (req, res) => {
    const body = req.body;

    client.query(`
      INSERT INTO goal (title, start_date, end_date)
      VALUES($1, $2, $3)
      RETURNING *;
      `,
    [body.title, body.start_date, body.end_date])
      .then(result => {
        res.json(result.rows[0]);
      });
  });

    
module.exports = router;