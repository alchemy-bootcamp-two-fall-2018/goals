const client = require('../lib/db-client');


client.query(`
    CREATE TABLE IF NOT EXISTS profile (
        id SERIAL PRIMARY KEY,
        username VARCHAR(256) NOT NULL,
        password VARCHAR(256) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS goals (
        id SERIAL PRIMARY KEY,
        goal VARCHAR(256) NOT NULL,
        date VARCHAR(20) NOT NULL
    );
`)
    .then (
        () => console.log('create tables script ran'), 
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });