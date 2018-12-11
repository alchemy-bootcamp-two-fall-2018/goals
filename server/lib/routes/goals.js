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

  .post('/', (req, res) => {
    const body = req.body;

    client.query(`
      INSERT INTO goals (title, type, profile_id, start_date, end_date)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *;
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
        select profile_id as "profileId", 
        min(profile.username) as "profileName",
        count(goals.id)
      from goals
      join profile
      on goals.profile_id = profile.id
      group by profile_id;
    `,
    [null, req.params.id, req.userId]
    )
      .then(result => {
        res.json(result.rows[0]);
      });
  });
  

module.exports = router;