const client = require('../lib/db-client');

const goals = [
  { title: 'Finish Coding', startdate: '01/01/2018', enddate:'12/31/2018', completed: false },
  { title: 'Xmas shopping done', startdate: '01/01/2018', enddate:'12/20/2018', completed: false },
  { title: 'Halloween Costume', startdate: '01/01/2018', enddate:'10/20/2018', completed: false }
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