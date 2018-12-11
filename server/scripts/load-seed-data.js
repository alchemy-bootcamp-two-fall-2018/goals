const client = require('../lib/db-client');

const goals = [
    { goal: 'don`t die', date: '1/1/19' },
    { goal: 'drink water', date: '9/9/19' },
 
];

client.query(`

INSERT INTO profile (username, password)
VALUES ($1, $2)
RETURNING id, username;
`, 
['lance', '123']
)
    .then(result => {
        const profile = result.rows[0];

        return Promise.all(
            goals.map(goal => {
                return client.query(`
            INSERT INTO goals (goal, date, profile_id)
            VALUES ($1, $2, $3)
            `, 
                [goal.goal, goal.date, profile.id]);
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