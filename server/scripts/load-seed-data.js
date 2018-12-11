const client = require('../lib/db-client');

const goals = [
  { name: 'wash dog' },
  { name: 'laundry' },
  { name: 'vacuum' }
];

client.query(`
  INSERT INTO profile (username, password)
  VALUES ($1, $2)
  RETURNING id;  
`,

['cherip', 'abc123']
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
          INSERT INTO goal (name)
          VALUES ($1)
        `,
        [goal.name, profile.id]);
      })
    );
  })
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)  
  )
  .then(() => {
    client.end();
  });