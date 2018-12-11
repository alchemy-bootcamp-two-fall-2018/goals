
const app = require('./lib/app');
console.log('i am the server file');
const PORT = 3000;

app.listen(PORT, () => {
  console.log('running on', PORT);
});
