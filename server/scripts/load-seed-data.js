const client = require('../lib/db-client');
const bcrypt = require('bcryptjs');

const goals = [
  { 
    title: 'Finish Goals Lab', 
    type: 'school', 
    startDate: '2019-01-12T08:00:00.000Z',
    endDate: '2019-02-19T08:00:00.000Z',
    completed: false
  },
  { 
    title: 'Do Laundry',
    type: 'home',
    startDate: '2019-01-08T08:00:00.000Z',
    endDate: '2019-02-10T08:00:00.000Z',
    completed: false
  }
];

client.query(`
  INSERT INTO profile (username, hash, first_name, last_name, email)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING id;
`,
['user1', bcrypt.hashSync('password1', 8), 'first1', 'last1', 'email@email.com'])
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
          INSERT INTO goal (title, type, profile_id, start_date, end_date, completed)
          VALUES ($1, $2, $3, $4, $5, $6)
          RETURNING id;
        `,
        [goal.title, goal.type, profile.id, goal.startDate, goal.endDate, goal.completed])
          .then(result => result.rows[0].id);
      })
    );
  })
  .then(goalIds => {
    return Promise.all(
      goalIds.map(id => {
        const count = 6;
        return Promise.all(
          new Array(count).fill(null).map(() => {
            return client.query(`
              INSERT INTO complete (time, goal_id)
              VALUES ($1, $2);
            `, 
            [5, id]);
          })
        );
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