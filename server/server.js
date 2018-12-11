const app = require('./library/app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});