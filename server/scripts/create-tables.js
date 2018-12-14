const client = require('../lib/db-client');


client.query(`
    CREATE TABLE IF NOT EXISTS profile (
        id SERIAL PRIMARY KEY,
        username VARCHAR(256) NOT NULL,
        hash VARCHAR(256) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS goals (
        id SERIAL PRIMARY KEY,
        goal VARCHAR(256) NOT NULL,
        date_start DATE,
        date_end DATE, 
        profile_id INTEGER NOT NULL REFERENCES profile(id)
    );
`)
    .then (
        () => console.log('create tables script ran'), 
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });