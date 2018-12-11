const client = require('../lib/db-client');

const goals = [
  { title: 'Finish Coding', startdate: '2018-01-01', completed: false },
  { title: 'Xmas shopping done', startdate: '2018-01-01', completed: false },
  { title: 'Halloween Costume', startdate: '2018-01-01', completed: false }
];

client.query(`
  INSERT INTO profiles (username, password, firstname, lastname)
  VALUES ($1, $2, $3, $4)
  RETURNING id;
`,
['hans', 'abc123', 'Hans', 'Janowitz']
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goals => {
        return client.query(`
          INSERT INTO goals (title, startdate, completed, profile_id)
          VALUES ($1, $2, $3, $4)
        `,
        [goals.title, goals.startdate, goals.completed, profile.id]);
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