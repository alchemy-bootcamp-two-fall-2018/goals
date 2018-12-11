const client = require('../lib/db-client');
const goals = [
  { title: 'sisters trip to Europe', start_date: '01012017', end_date:'02012017' },
  { title: 'finish coding school', start_date: '04072018', end_date:'04072019' },  
];
client.query(`
  INSERT INTO users (username, first_name, last_name, email, password)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING id;
`,
['user123', 'Mary', 'Smith', 'mary@hello.com', 'abc123']
)
  .then(result => {
    const users = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
          INSERT INTO goal (title, start_date, end_date, users_id)
          VALUES ($1, $2, $3, $4)
        `,
        [goal.title, goal.start_date, goal.end_date, users.id]);
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