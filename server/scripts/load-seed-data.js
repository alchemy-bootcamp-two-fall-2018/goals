const client = require('../lib/db-client');

const goals = [
  { 
    title: 'Finish Goals Lab', 
    type: 'school', 
    startDate: '2019-01-12T08:00:00.000Z',
    endDate: '2019-02-19T08:00:00.000Z'
  },
  { 
    title: 'Do Laundry',
    type: 'home',
    startDate: '2019-01-08T08:00:00.000Z',
    endDate: '2019-03-01T08:00:00.000Z'
  }
];

client.query(`
  INSERT INTO profile (username, password, first_name, last_name, email)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING id;
`,
['user1', 'password1', 'first1', 'last1', 'email@email.com'])
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
          INSERT INTO goal (title, type, profile_id, start_date, end_date)
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