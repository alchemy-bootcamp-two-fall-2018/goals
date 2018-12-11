const express = require('express');
const client = require('../../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router
  .get('/', (req, res) => {
    client.query(`
      SELECT id, name
      FROM goal;
    `)
      .then(result => {
          res.json(result.rows);
      });
  })

  .post('/', (req, res) => {
      const body = req.body;

      client.query(`
        INSERT INTO goal (name)
        VALUES($1)
        RETURNING *;
      `,
      [body.name])
        .then(result => {
          res.json(result.rows[0]);
        });
  });

  module.exports = router;