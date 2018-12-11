const bcrypt = require('bcryptjs');
const client = require('../lib/db-client');

const goals = [
  { name: 'Eat', startDate: '12/10/18', endDate: '12/10/18' },
  { name: 'Finish BC2', startDate: '12/10/18', endDate: '4/3/18' },
  { name: 'Move to Island', startDate: '8/22/20', endDate: '12/10/25' }
];

client.query(`
  INSERT INTO profile (username, password)
  VALUES ($1, $2)
  RETURNING id;
`,
['jei', bcrypt.hashSync('jeijei', 8)]
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
          INSERT INTO goal (name, start_date, end_date, profile_id)
          VALUES ($1, $2, $3, $4)
        `,
        [goal.name, goal.startDate, goal.endDate, profile.id]);
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