const client = require('../lib/db-client');
const bcrypt = require('bcryptjs');

const goals = [
  { title: 'Finish Coding', startdate: 20180101, enddate: 20190101, completed: false },
  { title: 'Xmas shopping done', startdate: 20180202, enddate: 20190101, completed: false },
  { title: 'Halloween Costume', startdate: 20180303, enddate: 20190101, completed: false }
];

client.query(`
  INSERT INTO profiles (username, hash, firstname, lastname)
  VALUES ($1, $2, $3, $4)
  RETURNING id;
`,
['hans', bcrypt.hashSync('abc123', 8), 'Hans', 'Janowitz']
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goals => {
        return client.query(`
          INSERT INTO goals (title, startdate, enddate, completed, profile_id)
          VALUES ($1, $2, $3, $4, $5)
        `,
        [goals.title, goals.startdate, goals.enddate, goals.completed, profile.id]);
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