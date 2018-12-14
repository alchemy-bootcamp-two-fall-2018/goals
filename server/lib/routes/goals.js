const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router();

router
  .get('/', (req, res) => {
    client.query(`
      SELECT 
      id, 
      title, 
      start_date as "startDate", 
      end_date as "endDate"
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
      INSERT INTO goal (title, start_date, end_date, profile_id)
      VALUES($1, $2, $3, $4)
      RETURNING *;
    `,
    [body.title, body.startDate, body.endDate, req.userId])
      .then(result => {
        res.json(result.rows[0]);
      });
  })

  .put('/:id/completed', (req, res) => {
    const completed = req.body.completed;

    client.query(`
      UPDATE goal
      SET completed = $1
      WHERE id = $2
      AND profile_id = $3
      RETURNING *;
    `,
    [completed, req.params.id, req.userId]
    )
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;