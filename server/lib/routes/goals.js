const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router();//eslint-disable-line new-cap

router
  .get('/', (req, res) => {
    client.query(`
        SELECT title, start_date, end_date
        FROM goal
        WHERE users_id = $1;
        `,
    [req.users_id])
      .then(result => {
        res.json(result.rows);
      });
  });
