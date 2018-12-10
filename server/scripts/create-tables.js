const client = require('../lib/db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS goal (
        id SERIAL PRIMARY KEY,
        title VARCHAR(256) NOT NULL,
        start_date DATE NOT NULL,
        end_date DATE
    );
`).then(
  () => console.log('create tables complete'),
  err => console.log(err)
)
  .then(() => {
    client.end();
  });