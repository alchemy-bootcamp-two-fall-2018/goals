const pg = require('pg');

const DATABASE_URL = 'postgres://localhost:5432/goals';

const Client = pg.Client;

const client = new Client(DATABASE_URL);

client.connect()
  .then(() => console.log('connected to database'))
  .catch(err => console.error('connection error', err));

client.on('error', err => {
  console.error('\n*** DATABASE ERROR **** \n\n\n', err);
});

module.exports = client;