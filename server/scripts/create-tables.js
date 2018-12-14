const client = require('../lib/db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS profiles (
    id SERIAL PRIMARY KEY,
    username VARCHAR(256) NOT NULL,
    hash VARCHAR(256) NOT NULL,
    firstname VARCHAR(256) NOT NULL,
    lastname VARCHAR(256) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS goals (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    startdate DATE NOT NULL,
    enddate DATE,
    completed BOOLEAN,
    profile_id INTEGER NOT NULL REFERENCES profiles(id) 
  );

`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });