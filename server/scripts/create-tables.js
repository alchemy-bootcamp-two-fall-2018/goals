const client = require('../lib/db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS profile (
    id SERIAL PRIMARY KEY,
    username VARCHAR(256) NOT NULL,
    hash VARCHAR(256) NOT NULL,
    first_name VARCHAR(256) NOT NULL,
    last_name VARCHAR(256) NOT NULL,
    email VARCHAR(256) NOT NULL
  );
  CREATE TABLE IF NOT EXISTS goal (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    type VARCHAR(32) NOT NULL,
    profile_id INTEGER NOT NULL REFERENCES profile(id),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    completed BOOLEAN
  );
  CREATE TABLE IF NOT EXISTS complete (
    id SERIAL PRIMARY KEY,
    time INTEGER NOT NULL,
    goal_id INTEGER NOT NULL REFERENCES goal(id)
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });