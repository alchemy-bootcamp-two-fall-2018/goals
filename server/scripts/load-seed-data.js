const client = require('../lib/db-client');
const bcrypt = require('bcryptjs');

const goals = [
  { title: 'walk dogs', startDate: '2020-10-12', endDate: null },
  { title: 'wash car', startDate: '2020-11-11', endDate: null },
  { title: 'laundry', startDate: '2020-10-20', endDate: null }
];

client.query(`
  INSERT INTO profile(username, first_name, last_name, email, hash)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING id;
`,
['motleydog', 'motley', 'poblete', 'motley@gmail.com', bcrypt.hashSync('abc123', 8)]
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