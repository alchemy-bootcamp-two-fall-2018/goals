const client = require('../lib/db-client');

const goals = [
  { name:'Bench press 205', type: 'fitness' },
  { name:'Buy Audi', type: 'finance' },
  { name:'Graduate boot camp', type: 'professional' }
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
                    INSERT INTO goal (name, type, profile_id)
                    VALUES ($1, $2, $3)
                `,
        [goal.name, goal.type, profile.id]);
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