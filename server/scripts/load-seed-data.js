const client = require('../lib/db-client'); 

const goals = [

  { name: 'Buy Cool Things', date:'121318', description:'You should buy all the cool things' },
  { name: 'Sell Uncool Things', date:'121218', description:'You do not want them' },
  { name: 'Fix Broken Things', date:'121118', description:'Download all user manuals first' }
  
];

client.query(`
  INSERT INTO profile (username, password)
  VALUES ($1, $2)
  RETURNING id;
`,
['mike', '33233323']
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all (
      goals.map(goal => {
        return client.query(`
          INSERT INTO goal (name, date, description, profile_id)
          VALUES ($1, $2, $3, $4)
      `,
        [goal.name, goal.date, goal.description, profile.id]);
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