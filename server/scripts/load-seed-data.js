const client = require('../lib/db-client');

const goals = [
  { name:'Bench press 205', type: 'fitness', startDate: '2018-11-20', endDate: '2018-11-23', completed: false },
  { name:'Buy Audi', type: 'finance', startDate: '2018-11-20', endDate: '2018-11-23', completed: false },
  { name:'Graduate boot camp', type: 'professional', startDate: '2018-11-20', endDate: '2018-11-23', completed: false }
];

client.query(`
    INSERT INTO profile (username, password)
    VALUES ($1, $2)
    RETURNING id;
`,
['thetylercorbett', 'abc123']
)
  .then(result => {
    const profile = result.rows[0];
    return Promise.all(
      goals.map(goal => {
        return client.query(`
                    INSERT INTO goal (name, type, profile_id, start_date, end_date, completed)
                    VALUES ($1, $2, $3, $4, $5, $6)
                `,
        [goal.name, goal.type, profile.id, goal.startDate, goal.endDate, goal.completed]);
      })
    );
  })
  .then(
    () => console.log('seed data has been loaded. auto bots roll out.'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });