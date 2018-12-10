const client = require('../lib/db-client');

const goals = [
  { title: 'Finish reports', type: 'Work' },
  { title: 'Learn Apis', type: 'School' },
  { title: 'Finish laundry', type: 'Home' }
];

client.query(`
  INSERT INTO profile (username, password)
  VALUES ($1, $2)
  RETURNING id;
`,
['aarond87', 'abc123']
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
          INSERT INTO goals (title, type, profile_id)
          VALUES ($1, $2, $3)
        `,
        [goal.title, goal.type, profile.id]);
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