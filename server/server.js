//const env = require('dotenv').config();  //keep as top line
const app = require('./lib/app');
const express = require('express');

app.use(express.static('public'));
// const PORT = process.env.PORT;
// const DATABASE_URL = process.env.DATABASE_URL;
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});