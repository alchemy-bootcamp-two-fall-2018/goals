const client = require('../lib/db-client');

client.query(`
    DROP TABLE IF EXISTS goals;
    DROP TABLE IF EXISTS profile;

`)
    .then(
        () => {
            return console.log('Drop table script ran');
        },
        err => 
            console.log(err)
          
        
    )
    .then(() => {
        client.end();
    });