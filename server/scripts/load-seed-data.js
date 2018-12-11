const client = require('../lib/db-client');
const bcrypt = require('bcryptjs');

const goals = [
  { title: 'Build fullstack app', startDate: '12/11/2018', endDate: '12/23/2018' },
  { title: 'Get 8 hours of sleep', startDate: '12/11/2018', endDate: '12/12/2018' },
  { title: 'Get a developer job', startDate: '4/01/2019', endDate: '8/01/2019' }
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
client.query(`
  INSERT INTO profile(username, first_name, last_name, email, password)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING id;
`,
['abelq16', 'abel', 'quintero', 'abel.j.quintero@gmail.com', bcrypt.hashSync('abc123', 8)]
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
          INSERT INTO goal (title, start_date, end_date, profile_id)
          VALUES ($1, $2, $3, $4)
          RETURNING id;
        `,
        [goal.title, goal.startDate, goal.endDate, profile.id])
          .then(result => result.rows[0].id);
      })
    );
  }) 
  .then(profileIds => {
    return Promise.all(
      profileIds.map(id => {
        const count = getRandomInt(10, 100);
        return Promise.all(
          new Array(count).fill(null).map(() => {
            return client.query(`
              INSERT INTO game(score, profile_id)
              VALUES($1, $2);
            `,
            [getRandomInt(50, 200), id]
            );
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