const client = require('../lib/db-client');

const goals = [
  { title: 'Sisters trip to Europe', startDate: '2019-01-28T08:00:00.000Z', endDate:'2019-01-28T08:00:00.000Z' },
  { title: 'Finish coding school', startDate: '2018-08-28T08:00:00.000Z', endDate:'2019-04-28T08:00:00.000Z' },
  { title: 'Work Out more', startDate: '2019-12-28T08:00:00.000Z', endDate:'2019-01-28T08:00:00.000Z' },  
];

client.query(`
  INSERT INTO profile (username, first_name, last_name, email, hash)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING id;
`,
['user123', 'Mary', 'Smith', 'mary@hello.com', 'abc123']
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