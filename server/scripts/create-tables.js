const client = require('../lib/db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(256) NOT NULL,
    password VARCHAR(56) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS goal (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
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