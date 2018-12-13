const client = require('../lib/db-client');
const bcrypt = require('bcryptjs');

const goals = [
    { goal: 'don`t die', date_start: 20181120, date_end: 20181130 },
 
];

client.query(`

INSERT INTO profile (username, hash)
VALUES ($1, $2)
RETURNING id, username;
`, 
['lance', bcrypt.hashSync('123', 8)]
)
    .then(result => {
        const profile = result.rows[0];

        return Promise.all(
            goals.map(goal => {
                return client.query(`
            INSERT INTO goals (goal, date_start, date_end, profile_id)
            VALUES ($1, $2, $3, $4)
            `, 
                [goal.goal, goal.date_start, goal.date_end, profile.id]);
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