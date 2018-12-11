// const express = require('express');
// const client = require('../db-client');
// const Router = express.Router;
// const router = Router();

// router 
//   .get('/', (req, res) => {
//       console.log('\n\n\n banana', req.userId);
//     client.query(`
//         SELECT 
//             id, 
//             title, 
//             start_date, 
//             end_date
//         FROM goal
//         WHERE profile_id = $1;
//       `, 
//     [1])
//       .then(result => {
//         res.json(result.rows);
//       });
//   });

// module.exports = router;  