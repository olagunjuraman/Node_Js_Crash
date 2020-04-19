const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=aactive');

console.log(myUrl.href);

console.log(myUrl.host);
//path name
console.log(myUrl.pathname);
//serialized query
console.log(myUrl.search);
// params object
console.log(myUrl.searchParams);
//Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value, name)=>{console.log(`${value}: ${name}`)});



