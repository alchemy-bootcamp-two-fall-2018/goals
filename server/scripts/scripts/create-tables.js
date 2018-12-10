const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS manufacturer (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    short_name VARCHAR(8) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS synths (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    image VARCHAR(256),
    polyphonic BOOLEAN,
    year INT,
    manufacturer_id INTEGER NOT NULL REFERENCES manufacturer(id)
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });