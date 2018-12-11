const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router();

router
  .get('/', (req, res) => {
    client.query(`
            SELECT id, name, type
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
            INSERT INTO goal (name, type, profile_id)
            VALUES($1, $2, $3)
            RETURNING *;
        `,
    [body.name, body.type, req.userId])
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