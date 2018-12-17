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
          start_date as "startDate", 
          completed
        FROM goal
        WHERE profile_id = $1;
        `, [req.userId])
      .then(result => {
        res.json(result.rows);
      });
  })
  .get('/:id', (req, res) =>{
    client.query(`
      SELECT id, title, start_date
      FROM goal
      WHERE id = $1;
    `, [req.params.id])
      .then(result => {
        res.json(result.rows);
      });
  })
  .post('/', (req, res) => {
    const body = req.body;
    client.query(`
        INSERT INTO goal(
          title, 
          start_date, 
          end_date,
          profile_id)
        VALUES($1, $2, $3, $4)
        RETURNING title, 
          start_date as "startDate", 
          end_date as "endDate";
    `, [body.title, body.startDate, body.endDate, req.userId])
      .then(result => {
        res.json(result.rows[0]);
      });
  })
  .put('/:id', (req, res) => {
    const body = req.body;
    console.log('\n\n\nthis is body', body);
    client.query(`
      UPDATE goal
      SET 
        title = $1,
        start_date = $2,
        end_date = $3
      WHERE id = $4
      RETURNING 
        id,
        title,
        start_date as "startDate",
        end_date as "endDate";
    `, 
    [body.title, body.startDate, body.endDate, req.params.id])
      .then(result => {
        res.json(result.rows[0]);
      });
  })
  .get('/stats', (req, res) => {
    client.query(`
    SELECT 
      id,
      COUNT(goal.id) as count,
      MIN(end_date - start_date) as mindiff,
      MAX(end_date - start_date) as maxdiff,
      ROUND(AVG(end_date - start_date), 0) as average
    FROM goal
    WHERE id = $1;
    `,
    [req.userId]
    )
      .then(result => {
        res.json(result.rows);
      });
  });

module.exports = router;