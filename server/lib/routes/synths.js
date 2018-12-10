const client = require('../../db-client');
const Router = require('express').Router;
const router = Router(); // eslint-disable-line new-cap

router
  .get('/', (req, res) => {
    client.query(`
      SELECT 
        id, 
        name,
        manufacturer_id as "manufacturerId",
        image,
        polyphonic,
        year
      FROM synths
      ORDER BY id;
    `)
      .then(result => {
        res.json(result.rows);
      });
  })

  .get('/:id', (req, res) => {
    client.query(`
      SELECT
        id, 
        name,
        manufacturer_id as "manufacturerId",
        image,
        polyphonic,
        year
      FROM synths 
      WHERE id = $1;
  `,
    [req.params.id])
      .then(result => {
        res.json(result.rows[0]);
      });
  })

  .delete('/:id', (req, res) => {
    client.query(`
      DELETE FROM synths WHERE id = $1;
  `,
    [req.params.id])
      .then(result => {
        res.json({ removed: result.rowCount === 1 });
      });
  })

  .post('/', (req, res) => {
    const body = req.body;
    client.query(`
      INSERT INTO synths (name, manufacturer_id, image, polyphonic, year)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING
        id, 
        name,
        manufacturer_id as "manufacturerId",
        image,
        polyphonic,
        year;
  `,
    [body.name, body.manufacturerId, body.image, body.polyphonic, body.year])
      .then(result => {
        res.json(result.rows[0]);
      });
  })
  
  .put('/:id', (req, res) => {
    const body = req.body;
    client.query(`
      UPDATE synths
      SET
        name = $1,
        manufacturer_id = $2,
        image = $3,
        polyphonic = $4,
        year = $5
      WHERE id = $6
      RETURNING
        id, 
        name,
        manufacturer_id as "manufacturerId",
        image,
        polyphonic,
        year;
    `,
    [body.name, body.manufacturerId, body.image, body.polyphonic, body.year, body.id])
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;