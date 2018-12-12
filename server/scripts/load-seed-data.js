const client = require('../lib/db-client');

const goals = [
  { name: 'wash dog', start_date: '12/1/18' },
  { name: 'laundry', start_date: '11/5/17' },
  { name: 'vacuum', start_date: '10/31/16' }
];


client.query(`
  INSERT INTO profile (username, password)
  VALUES ($1, $2)
  RETURNING id;  
  
`,

['cherip', 'abc123']
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
          INSERT INTO goals (name, start_date, profile_id)
          VALUES ($1, $2, $3)
        `,
        [goal.name, goal.start_date, profile.id]);
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