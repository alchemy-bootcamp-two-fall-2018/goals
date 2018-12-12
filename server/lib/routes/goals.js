const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router
  .get('/', (req, res) => {
    client.query(`
      SELECT 
      id, 
      title, 
      type,  
      start_date as "startDate", 
      end_date as "endDate"
      FROM goals
      WHERE profile_id = $1;
    `,
    [req.userId])
      .then(result => {
        res.json(result.rows);
      });
  })

  .get('/stats', (req, res) => {
    client.query(`
      select 
      profile_id, 
      count(goals.id) as "count",
      MIN(end_date - start_date) as mindiff,
      MAX(end_date - start_date) as maxdiff,
      CAST(AVG(end_date - start_date) as INT) as average
    from goals
    WHERE profile_id = $1
    group by profile_id;
    `,
    [req.userId]
    )
      .then(result => {
        res.json(result.rows);
      });
  })

  .post('/', (req, res) => {
    const body = req.body;

    client.query(`
      INSERT INTO goals (title, type, profile_id, start_date, end_date)
      VALUES($1, $2, $3, $4, $5)
      RETURNING 
      title,
      type,
      profile_id,
      start_date as "startDate",
      end_date as "endDate";
    `,
    [body.title, body.type, req.userId, body.startDate, body.endDate])
      .then(result => {
        res.json(result.rows[0]);
      });
  })
  
  // pseudo example for goals
  // okay to have "virtual" sub-resource
  .put('/:id/completed', (req, res) => {

    client.query(`
      UPDATE goals
      SET end_date as endDate = $1
      WHERE id = $2
      AND profile_id = $3
      RETURNING *;
    `,
    [null, req.params.id, req.userId]
    )
      .then(result => {
        res.json(result.rows[0]);
      });
  });

  
  

module.exports = router;