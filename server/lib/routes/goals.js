const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable new-cap

router
    .get('/', (req, res) => {
        client.query(`
    SELECT id, goal, date
    FROM goals
    WHERE profile_id = $1;`, 
        [req.userId])
            .then(result => {
                res.json(result.rows);
            });
    });
module.exports = router;