const client = require('../lib/db-client');
const bcrypt = require('bcryptjs');

const goals = [
  { title: 'Go grocery shopping', startDate: 20181208, endDate: 20181210 },
  { title: 'Learn Python', startDate: 20161102 },
  { title: 'Go Christmas Shopping', startDate: 20181115, endDate: 20181206 },
  { title: 'Learn Hallelujah on the Piano', startDate: 20170620, endDate: 20170701 },
  { title: 'Understand the Meaning of Life', startDate: 19920423 },
  { title: 'Become a (Somewhat) Decent Golfer', startDate: 20000704 },
  { title: 'Longboard Well Enough to Not Die', startDate: 20100901, endDate: 20110531 }
];

client.query(`
  INSERT INTO profile (username, first_name, last_name, email, hash)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING id;
`,
['kristinhortsch', 'kristin', 'hortsch', 'kristinhortsch@gmail.com', bcrypt.hashSync('roxy', 8)]
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