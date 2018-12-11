const client = require('../db-client');

client.query(`
  DROP TABLE IF EXISTS goal;
  DROP TABLE IF EXISTS user;
`)
  .then(
      () => console.log('drop tables complete'),
      err => console.log(err)
  )
  .then(() => {
    client.end();
  });