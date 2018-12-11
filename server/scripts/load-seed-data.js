const client = require('../library/db-client');

const goals = [
  { title: 'run 100 miles', startDate: '2019-01-01' },
  { title: 'sign-up for ML', startDate: '2019-02-01' },
  { title: 'volunteer for Smith Rock', startDate: '2019-03-01' },
];

client.query(`
    INSERT INTO profile (username, first_name, last_name, email, password)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id;
`,
['teonnapdx', 'Teonna', 'Zaragoza', 'teonna.zaragoza@gmail.com', 'abc123']
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all (
      goals.map(goal => {
        return client.query(`
            INSERT INTO goal (title, start_date, profile_id)
            VALUES ($1, $2, $3)
        `,
        [goal.title, goal.startDate, profile.id]);
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