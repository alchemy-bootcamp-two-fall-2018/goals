const client = require('../lib/db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS profile (
    id SERIAL PRIMARY KEY,
    username VARCHAR(256) NOT NULL,
    hash VARCHAR(256) NOT NULL,
    first VARCHAR(256),
    last VARCHAR(256)
  );
  CREATE TABLE IF NOT EXISTS goals (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    type VARCHAR(32) NOT NULL,
    start_date DATE,
    end_date DATE,
    profile_id INTEGER NOT NULL REFERENCES profile(id)
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });