const client = require('../../db-client');
const Router = require('express').Router;
const router = Router(); // eslint-disable-line new-cap

const getShortName = name => name
  .toLowerCase()
  .slice(0, 8)
  .trim()
  .replace(/[^a-z]/ig, '-');

router
  .get('/', (req, res) => {
    client.query(`
      SELECT id, name, short_name as "shortName"
      FROM manufacturer
      ORDER BY name;
  `)
      .then(result => {
        res.json(result.rows);
      });
  })

  .post('/', (req, res) => {
    const body = req.body;
    client.query(`
      INSERT INTO manufacturer (name, short_name)
      VALUES ($1, $2)
      RETURNING id, name, short_name as "shortName";
    `,
    [body.name, getShortName(body.name)])
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;