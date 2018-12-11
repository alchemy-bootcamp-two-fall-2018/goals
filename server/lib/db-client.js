const pg = require('pg');

const DATABASE_URL = 'postgres://postgres:Stitch32.@localhost:5432/goal';

const Client = pg.Client;

const client = new Client(DATABASE_URL);

client.connect()
  .then(() => console.log('connected to db', DATABASE_URL))
  .catch(err => console.error('connection error', err));

client.on('error', err => {
    console.error('\n****DATABASE ERROR ****\n\n, err');
});

module.exports = client;