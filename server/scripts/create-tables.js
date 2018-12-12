// const env = require('dotenv').config();  // keep as top line
const client = require('../lib/db-client');

// const PORT = process.env.PORT;
// const DATABASE_URL = process.env.DATABASE_URL;

client.query(`
  CREATE TABLE IF NOT EXISTS profile (
    id SERIAL PRIMARY KEY,
    username VARCHAR(32) NOT NULL,
    password VARCHAR(32) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS goal (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    startdate VARCHAR(16),
    enddate VARCHAR(16),
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