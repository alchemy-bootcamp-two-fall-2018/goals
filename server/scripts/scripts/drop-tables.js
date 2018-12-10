const client = require('../db-client');

client.query(`
  DROP TABLE IF EXISTS synths;
  DROP TABLE IF EXISTS manufacturer;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });