const client = require('../lib/db-client');

const goals = [
  { name: 'Set alarm' },
  { name: 'Finish lab' },
  { name: 'Sleep' }
];

client.query(`
  INSERT INTO profile (username, password)
  VALUES ($1, $2)
  RETURNING id;
`,
['test user', '1234']
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
          INSERT INTO goal (title, profile_id)
          VALUES ($1, $2)
        `,
        [goal.name, goal.type, profile.id]);
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