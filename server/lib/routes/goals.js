const router = require('express').Router(); //eslint-disable-line new-cap
const client = require('../db-client');

router
  .get('/', (req, res) => {
    client.query(`
      SELECT id, title, type, start_date as "startDate", end_date as "endDate"
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
      INSERT INTO goal (title, type, profile_id, start_date, end_date)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *;
    `,
    [body.title, body.type, req.userId, body.startDate, body.endDate])
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
  })

  .delete('/:id', (req, res) => {
    client.query(`
      DELETE FROM goal WHERE id = $1;
  `,
    [req.params.id])
      .then(result => {
        res.json({ removed: result.rowCount === 1 });
      });
  });

module.exports = router;