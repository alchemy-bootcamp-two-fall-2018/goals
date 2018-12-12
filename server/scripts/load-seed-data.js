const client = require('../lib/db-client');

const goals = [
  { title: 'walk dogs', startDate: '2020-10-12' },
  { title: 'wash car', startDate: '2020-11-11' },
  { title: 'laundry', startDate: '2020-10-20' }
];

client.query(`
  INSERT INTO profile(username, first_name, last_name, email, password)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING id;
`,
['motleydog', 'motley', 'poblete', 'motley@gmail.com', 'abc123']
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
          INSERT INTO goal (title, start_date, profile_id)
          VALUES ($1, $2, $3)
        `,
        [goal.title, goal.startDate, profile.id]);
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