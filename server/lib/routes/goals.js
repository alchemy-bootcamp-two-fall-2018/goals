const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router();

router
  .get('/', (req, res) => {
    client.query(`
            SELECT id, name, type, start_date as "startDate", end_date as "endDate", completed
            FROM goal
            WHERE profile_id = $1;
        `,
    [req.userId])
      .then(results => {
        res.json(results.rows);
      });
  })

  .post('/', (req, res) => {
    const body = req.body;

    client.query(`
            INSERT INTO goal (name, type, profile_id, start_date, end_date, completed)
            VALUES($1, $2, $3, $4, $5, $6)
            RETURNING name, type, profile_id, start_date as "startDate", end_date as "endDate", completed;
        `,
    [body.name, body.type, req.userId, body.startDate, body.endDate, body.completed])
      .then(result => {
        console.log(result);
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