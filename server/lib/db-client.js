const pg = require('pg');

const DATABASE_URL = 'postgres://localhost:5432/goals';

const Client = pg.Client;

const client = new Client(DATABASE_URL);

client.connect()
  .then(() => console.log('connected to DB URL:', DATABASE_URL))
  .catch(err => console.log('connection error', err));

client.on('error', err => {
  console.log('\n**** DATABASE ERROR ***\n\n', err);
});

module.exports = client;