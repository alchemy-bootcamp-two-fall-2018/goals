const express = require('express');
const app = express();
const client = require('./db-client');

app.use(express.json());


const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});