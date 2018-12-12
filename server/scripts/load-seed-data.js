const client = require('../lib/db-client');

const goals = [
  { title: 'Complete JS Training at ACL', start_date: '2018-10-22', end_date: null },
  { title: 'Get job after JS Training', start_date: '2019-04-08', end_date: null },
  { title: 'Start a walking exercise ', start_date: '2018-12-22', end_date: null },
  { title: 'Organize office', start_date: '2018-12-31', end_date: null }
];

client.query(`
  INSERT INTO profile (username, first_name, last_name, email, password)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING id;
`,
['user1', 'user1first', 'user1last', 'user1@email.com', 'user1']
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
          INSERT INTO goal (title, start_date, end_date, user_id)
          VALUES ($1, $2, $3, $4)
        `,
        [goal.title, goal.start_date, goal.end_date, profile.id]);
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