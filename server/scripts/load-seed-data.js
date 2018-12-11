const client = require('../lib/db-client');

const goals = [
  { title: 'Finish reports', type: 'Work', startDate: '11/5/18', endDate: '12/12/12' },
  { title: 'Learn Apis', type: 'School', startDate: '10/7/18', endDate: '4/2/19' },
  { title: 'Finish laundry', type: 'Home', startDate: '12/4/18', endDate: '5/4/19' }
];

client.query(`
  INSERT INTO profile (username, password, first, last)
  VALUES ($1, $2, $3, $4)
  RETURNING id;
`,
['aarond87', 'abc123', 'Aaron', 'Dennis']
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
          INSERT INTO goals (title, type, profile_id, start_date, end_date)
          VALUES ($1, $2, $3, $4, $5)
        `,
        [goal.title, goal.type, profile.id, goal.startDate, goal.endDate]);
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