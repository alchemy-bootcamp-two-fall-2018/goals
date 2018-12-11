const pg = require('pg');
const DATABASE_URL = 'postgres://localhost:5432/lab11';

const Client = pg.Client;

const client = new Client(DATABASE_URL);

client.connect()
    .then(() => 
        console.log('connected to the database', DATABASE_URL))
    .catch(err => console.log('connection erro', err));

client.on('error', err => {
    console.log('\n**** DATABASE ERROR ****\n\n', err);
});

module.exports = client;
