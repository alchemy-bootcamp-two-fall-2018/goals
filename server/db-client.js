const pg = require('pg');

// As we move to into deployment, this value will not
// be hard-coded, but instead come from environment configuration
const DATABASE_URL = 'postgres://localhost:5432/goals';
// on windows, linux, or other systems where you need to 
// specify username and password


const Client = pg.Client;

// create our pg client object
const client = new Client(DATABASE_URL);

// call connect
client.connect()
  // provide success/failure log based on connection working
  .then(() => console.log('connected to db', DATABASE_URL))
  .catch(err => console.error('connection error', err));

// listen for errors on the connection and log them
client.on('error', err => {
  console.error('\n**** DATABASE ERROR ****\n\n', err);
});

// export so other modules (files) can use
module.exports = client;