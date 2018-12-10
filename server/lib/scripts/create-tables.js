const client = require('../db-client');

client.query(`
   CREATE TABLE IF NOT EXISTS user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(256) NOT NULL,
    password VARCHAR(256) NOT NULL,
  );
   CREATE TABLE IF NOT EXISTS goal (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    type VARCHAR(32) NOT NULL,
    user_id INTEGER REFERENCES user(id)
  );
 `)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });