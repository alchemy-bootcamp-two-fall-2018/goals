const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router
  .get('/', (req, res) => {
    client.query(`
      SELECT id, title, startdate, enddate, completed
      FROM goals
      WHERE profile_id = $1;
    `,
    [req.userId])
      .then(result => {
        res.json(result.rows);
      });
  })

  .get('/summary', (req, res) => {
    client.query(`
    SELECT
      profile_id,
      MIN(enddate - startdate) as min,
      MAX(enddate - startdate) as max,
      CAST(AVG(enddate - startdate) as int) as average,
      COUNT(profile_id) as count
      FROM goals
      WHERE profile_id = $1
      GROUP by profile_id;
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
      INSERT INTO goals (title, startdate, enddate, completed, profile_id)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *;
    `,
    [body.title, body.startdate, body.enddate, false, req.userId])
      .then(result => {
        res.json(result.rows[0]);
      });
  })
  
  // pseudo example for goals
  // okay to have "virtual" sub-resource
  .put('/:id', (req, res) => {
    const body = req.body;

    client.query(`
      UPDATE goals
      SET
        title = $1,
        startdate = $2,
        enddate = $3
      WHERE id = $4
      AND profile_id = $5
      RETURNING 
        id,
        title,
        startdate,
        enddate,
        profile_id;
    `,
    [body.title, body.startdate, body.enddate, req.params.id, req.userId]
    )
      .then(result => {
        res.json(result.rows[0]);
      });
  });
  

module.exports = router;
