const client = require('../db-client'); 
const goals = require('./goals.json');
const profiles = require('./profiles'); 
console.log('loading', goals);

Promise.all(
  profiles.map(profile => {
    return client.query(`
    INSERT INTO profile (username, short_name)
      VALUES($1, $2);
    `,
    [profile.name, profile.shortName]);
  })
)
  .then(() => {
    return Promise.all (
      goals.map(goal =>{
        return client.query(`
      INSERT INTO goal(name, url, year, description, profile_id, rating)
      SELECT
      $1 as name,
      $2 as date,
      $3 as description,
      id as profile_id,
      FROM profile
      WHERE short_name = $4;
      `,
        [goal.name, goal.url, goal.year, goal.description, goal.rating, goal.profile]);
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