const client = require('../lib/db-client');

const goals = [
  { title: 'Build fullstack app', startDate: '12/11/2018', endDate: '12/23/2018' },
  { title: 'Get 8 hours of sleep', startDate: '12/11/2018', endDate: '12/12/2018' },
  { title: 'Get a developer job', startDate: '4/01/2019', endDate: '8/01/2019' }
];

client.query(`
  INSERT INTO profile(username, first_name, last_name, email, password)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING id;
`,
['abelq16', 'abel', 'quintero', 'abel.j.quintero@gmail.com', 'abc123']
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