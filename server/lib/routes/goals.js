const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router
  .get('/', (req, res) => {
    client.query(`
        SELECT id, title, start_date
        FROM goal
        `)
      .then(result => {
        res.json(result.rows);
      });
  });

module.exports = router;