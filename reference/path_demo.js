const path = require('path');

//baseName
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

console.log(path.extname(__filename));


// create path object

console.log(path.parse(__filename).base);

//concantenate path
../test/hello.html

console.log(path.join(__dirname, 'test',  'hello.html'));