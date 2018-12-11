const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router();

router.get('/', (req, res) => {
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
});

router.post('/', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO goal (
      title, 
      start_date as "startDate", 
      end_date as "endDate", 
      profile_id
    )
    VALUES($1, $2, $3, $4)
    RETURNING *;
  `,
  [body.title, body.startDate, body.endDate, req.userId])
    .then(result => {
      res.json(result.rows[0]);
    });
});

router.put('/:id/completed', (req, res) => {
  const body = req.body;

  client.query(`
    UPDATE goal
    SET 
      title = $1,
      start_date = $2,
      end_date = $3
    WHERE id = $4
    AND profile_id = $5
    RETURNING *;
  `,
  [body.title, body.startDate, body.endDate, req.params.id, req.userId]
  )
    .then(result => {
      res.json(result.rows[0]);
    });
});
 
module.exports = router;