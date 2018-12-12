const client = require('../lib/db-client');
const bcrypt = require('bcryptjs');

const goals = [
  { title: 'Finish reports', type: 'Work', startDate: 20181120, endDate: 20181231 },
  { title: 'Learn Apis', type: 'School', startDate: 20181230, endDate: 20181215 },
  { title: 'Finish laundry', type: 'Home', startDate: 20181129, endDate: 20190215 }
];

client.query(`
  INSERT INTO profile (username, hash, first, last)
  VALUES ($1, $2, $3, $4)
  RETURNING id;
`,
['aarond87', bcrypt.hashSync('abc123', 8), 'Aaron', 'Dennis']
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