const client = require('../library/db-client');

client.query(`
    DROP TABLE IF EXISTS profile;
    DROP TABLE IF EXISTS goal;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
