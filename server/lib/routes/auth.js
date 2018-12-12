const router = require('express').Router();
const client = require('../db-client');
const bcrypt = require('bcrypt');

router 
    .post('/signup', (req, res) => {
        const body = req.body;
        const username = body.username; 
        const password = body.password;

        // logic to check username and password upon sign in 
        if(!username || !password) {
            res.status(400).json({ error: 'username and password required' });
            return;
        }

        // check to see if username matches one in DB

        client.query(`
        SELECT id, username, hash
        FROM profile
        WHERE username = $1;
      `, 
        [username]
        )
            .then(result => {
                if(result.rows.length > 0) {
                    res.status(400).json({ error: 'username already exists' });
                    return;
                }
                console.log(' creating new user profile...');

                client.query(`
                INSERT INTO profile (username, hash)
                VALUES ($1, $2)
                RETURNING ID, username;
                `, 
                [username, bcrypt.hashSync(password, 8)]
                )
                    .then(result => {
                        res.json(result.rows[0]);
                    });
            });

    })

    .post('/signin', (req, res) => {
        const body = req.body;
        const username = body.username; 
        const password = body.password;


        // logic to check username and password upon sign in 
        if(!username || !password) {
            res.status(400).json({ error: 'username and password required' });
            return;
        }

        // check to see if username matches one in DB

        client.query(`
        SELECT id, username, password
        FROM profile
        WHERE username = $1;
      `, 
        [username]
        )
            .then(result => {
                const profile = result.rows[0];
                if(!profile || !bcrypt.compareSync(password, profile.hash)) {
                    res.status(400).json({ error: 'username or password incorrect' });
                    return;
                }
                res.json({
                    id: result.rows[0].id,
                    username: result.rows[0].username,
                    token: result.rows[0].id

                });
            });
    });

module.exports = router;