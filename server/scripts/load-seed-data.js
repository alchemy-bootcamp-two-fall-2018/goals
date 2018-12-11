const client = require('../lib/db-client');

const goals = [
  { name: 'Finish Goals Lab', type: 'school' },
  { name: 'Do Laundry', type: 'home' }
];

client.query(`
  INSERT INTO profile (username, password, first_name, last_name)
  VALUES ($1, $2, $3, $4)
  RETURNING id;
`,
['user1', 'password1', 'first1', 'last1'])
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
          INSERT INTO goal (name, type, profile_id)
          VALUES ($1, $2, $3)
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