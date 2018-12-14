const client = require('../lib/db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS profile (
        id SERIAL PRIMARY KEY,
        username VARCHAR(256) NOT NULL,
        password VARCHAR(256) NOT NULL
    );
    CREATE TABLE IF NOT EXISTS goal (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        type VARCHAR(32) NOT NULL,
        profile_id INTEGER NOT NULL REFERENCES profile(id),
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        completed BOOLEAN
    );
    
`)
  .then(
    () => console.log('created tables completed'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });