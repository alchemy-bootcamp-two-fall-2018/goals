const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable new-cap

router
    .put('/:id', (req, res) => {
        const body = req.body;

        client.query(`
        UPDATE goals 
        SET
            date_end = $1, 
            date_start = $2,
            goal = $3 
        WHERE id = $4
        AND profile_id = $5

        RETURNING 
            id,
            goal, 
            date_start as "dateStart",
            date_end as "dateEnd",
            profile_id
        `, 
        [body.dateEnd, body.dateStart, body.goal, body.id, req.userId])
            .then(result => {
                res.json(result.rows[0]);
            });
    })

    .get('/stats', (req, res) => {
        console.log('backend req', req.userId);
        client.query(`
        SELECT 
            count(goals.id),
            avg(date_end - date_start) as "avg",
            max(date_end - date_start) as "max", 
            min(date_end - date_start) as "min"
        FROM goals
        WHERE goals.profile_id = $1
        `, 
        [req.userId]
        )
            .then(result => {
                res.json(result.rows);
            });
    })

    .get('/', (req, res) => {
        client.query(`
    SELECT id, goal, date_start as "dateStart", date_end as "dateEnd"
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
        INSERT INTO goals 
        (
            goal, 
            date_start,
            date_end,
            profile_id
        )
        VALUES($1, $2, $3, $4)
        RETURNING
            id,
            goal, 
            date_start as "dateStart",
            date_end as "dateEnd";
    `, 
        [body.goal, body.dateStart, body.dateEnd, req.userId])
            .then(result => {
                res.json(result.rows[0]);
            });
    });
module.exports = router;