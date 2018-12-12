const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router
  .get('/', (req, res) => {
    client.query(`
      SELECT 
      id,
      name, 
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
      INSERT INTO goal (name, start_date, end_date, profile_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `,
    [body.name, body.startDate, body.endDate, req.userId])
      .then(result => {
        res.json(result.rows[0]);
      });
  })
  
  .put('/:id/completed', (req, res) => {
    const completed = req.body.completed;

    client.query(`
      UPDATE goal
      SET 
        name = $1
        start_date = $2,
        end_date = $3
      WHERE id = $4
      AND profile_id = $5
      RETURNING *;
    `,
    [body.name, body.startDate, body.endDate, req.params.id, req.userId]
    )
      .then(result => {
        res.json(result.rows[0]);
      })
});

router.get('/stats', (req, res) => {
  client.query(`
  SELECT 
    profile_id,
    MIN(end_date - start_date) as mindiff,
    MAX(end_date - start_date) as maxdiff,
    CAST(AVG(end_date - start_date) as int) as average,
    COUNT(goal.id) as count
  FROM goal
  GROUP BY profile_id;
  `,
  []
  )
    .then(result => {
      res.json(result.rows);
    });
});

module.exports = router;