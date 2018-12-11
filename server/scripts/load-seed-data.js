const client = require('../lib/db-client');

const goals = [
  { name: 'go to sleep', duedate: '2018/12/10' },
  { name: 'wake up', duedate: '2018/12/11' },
  { name: 'go to school', duedate: '2018/12/11' }
];

client.query(`
  INSERT INTO profile (username, password)
  VALUES ($1, $2)
  RETURNING id;
`,
['hlmparks', 'abc123']
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
          INSERT INTO goal (name, duedate, profile_id)
          VALUES ($1, $2, $3)
        `,
        [goal.name, goal.duedate, profile.id]);
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