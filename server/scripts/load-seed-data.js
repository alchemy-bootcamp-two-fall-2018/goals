const client = require('../lib/db-client');

const goals = [
  { title: 'Go grocery shopping', startDate: '12/11/2018', endDate: '12/25/2018' },
  { title: 'Learn Python', startDate: '12/22/2018', endDate: '7/4/2019' }

];

client.query(`
  INSERT INTO profile (username, first_name, last_name, email, password)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING id;
`,
['kristinhortsch', 'kristin', 'hortsch', 'kristinhortsch@gmail.com', 'roxy']
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
          INSERT INTO goal (title, start_date, end_date, profile_id)
          VALUES ($1, $2, $3, $4)
        `,
        [goal.title, goal.startDate, goal.endDate, profile.id]);
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