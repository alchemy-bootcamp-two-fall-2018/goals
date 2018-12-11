const client = require('../lib/db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS profile (
    id SERIAL PRIMARY KEY,
    username VARCHAR(256) NOT NULL,
    password VARCHAR(256) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS goals (
    id SERIAL PRIMARY KEY,
    goal_name VARCHAR(256) NOT NULL,
    type VARCHAR(256) NOT NULL,
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