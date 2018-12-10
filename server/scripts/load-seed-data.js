const client = require('../lib/db-client');

const goals = [
  { title: 'Finish this lab!', start_date: '12/10/2018', end_date: '12/11/2018' },
  { title: 'Get some sleep.', start_date: '10/22/2018', end_date: '05/01/2019' },
  { title: 'Finish BCII', start_date: '11/26/2018', end_date: '12/22/2018' }
];

return Promise.all(
  goals.map(goal => { 
    return client.query(`
            INSERT INTO goal(title, start_date, end_date)
            VALUES ($1, $2, $3)
        `, 
    [goal.title, goal.start_date, goal.end_date]);
  }))
  .then(
    () => console.log('seed load data complete'),
    err => console.log(err)
  ).then(() => {
    client.end;
  });