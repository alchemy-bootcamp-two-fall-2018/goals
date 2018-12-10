const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router
  .get('/', req, res) => {
    client.query(`
      SELECT id, name, type
      FROM goal
      WHERE profile_id = $1;
      `,
  [req.userId])
    .then(result => {
      res.json(result.rows);
    });  
}


module.export = router;