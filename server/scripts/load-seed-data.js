const client = require('../lib/db-client'); 
const bcrypt = require('bcryptjs');
const goals = [

  { name: 'Buy Cool Things', startDate: 20181213, endDate: 20181213, description:'You should buy all the cool things', complete:false },
  { name: 'Sell Uncool Things', startDate: 20181214, endDate: 20181215, description:'You do not want them', complete:false },
  { name: 'Fix Broken Things', startDate: 20181215, endDate: 20181215, description:'Download all user manuals first', complete:false }
  
];

client.query(`
  INSERT INTO profile (username, hash, first, last, email)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING id;
`,
['pickuppatterns', bcrypt.hashSync('33233323', 8), 'mike', 'elliott', 'pickup.patterns']
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
        INSERT INTO goal (name, start_date, end_date, description, profile_id, complete)
        VALUES ($1, $2, $3, $4, $5, $6);
        `,
        [goal.name, goal.startDate, goal.endDate, goal.description, profile.id, goal.complete]);
      })
    );
  })
  .then(
    () => console.log('seed data load complete'),
    err =>console.log(err)
  )
  .then(() => {
    client.end();
  });