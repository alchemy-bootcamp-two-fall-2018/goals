const client = require('../lib/db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(256) NOT NULL,
    first_name VARCHAR(256) NOT NULL,
    last_name VARCHAR(256) NOT NULL,
    email VARCHAR(320) NOT NULL,
    password VARCHAR(256) NOT NULL,
    id SERIAL PRIMARY KEY
);
  CREATE TABLE IF NOT EXISTS goal (
    title VARCHAR(256) NOT NULL,
    start_date INTEGER NOT NULL,
    end_date INTEGER NOT NULL,
    id SERIAL PRIMARY KEY,
    users_id INTEGER NOT NULL REFERENCES users(id)
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });