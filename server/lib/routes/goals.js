const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router
  .get('/', (req, res) => {
    client.query(`
      SELECT id, name, start_date as "startDate", end_date as "endDate", description, complete
      FROM goal
      WHERE profile_id = $1;
    `,
    [req.userId])
      .then(result => {
        res.json(result.rows);
      });
  })

  .post('/', (req, res) => {
    const body = req.body;

    client.query(`
      INSERT INTO goal (name, start_date, end_date, description, profile_id, complete)
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `,
    [body.name, body.startDate, body.endDate, body.description, req.userId, body.complete])
      .then(result => {
        res.json(result.rows[0]);
      });
  })
  .put('/:id/complete', (req, res) => {
    const complete = req.body.complete;

    client.query(`
      UPDATE goal
      SET complete = $1
      WHERE id = $2
      AND profile_id = $3
      RETURNING *;
    `,
    [complete, req.params.id, req.userId]
    )
      .then(result => {
        res.json(result.rows[0]);
      });
  });
  

module.exports = router;