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
    })
    .post('/', (req, res) => {
        const body = req.body;

        client.query(`
        INSERT INTO goals (goal, date, profile_id)
        VALUES($1, $2, $3)
        RETURNING *;
    `, 
        [body.goal, body.date, req.userId])
            .then(result => {
                res.json(result.rows[0]);
            });
    });
module.exports = router;