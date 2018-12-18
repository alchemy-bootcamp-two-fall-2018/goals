var fs = require('fs');

console.log('read started');
fs.readFile('main.txt', function(err, data) {
  var str = data.toString();
  console.log(str);
  console.log('main data converted to string');
});
console.log('read finished');
