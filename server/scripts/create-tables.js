const client = require('../lib/db-client');

client.query(`
CREATE TABLE IF NOT EXISTS profile (
  id SERIAL PRIMARY KEY,
  username VARCHAR(256) NOT NULL,
  hash VARCHAR(256) NOT NULL,
  first VARCHAR(256) NOT NULL,
  last VARCHAR(256) NOT NULL,
  email VARCHAR(256) NOT NULL
);  
CREATE TABLE IF NOT EXISTS goal (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(256) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    description VARCHAR(256),
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
 