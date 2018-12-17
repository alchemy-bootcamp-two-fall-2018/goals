//const env = require('dotenv').config();  // keep as top line
const client = require('../lib/db-client');

const goals = [
  { title: 'Set alarm', startdate: '2019-01-01' },
  { title: 'Finish lab', startdate: '2019-01-01' },
  { title: 'Sleep', startdate: '2019-01-01' }
];

client.query(`
  INSERT INTO profile (username, password)
  VALUES ($1, $2)
  RETURNING id;
`,
['testserveruser', '1234']
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
          INSERT INTO goal (title, startdate, enddate, profile_id)
          VALUES ($1, $2, $3, $4)
        `,
        [goal.title, goal.startdate, goal.enddate, profile.id]);
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