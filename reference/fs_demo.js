const fs = require('fs');
const path = require('path');

//Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
//     if(err) throw err;
//     console.log('Folder Created'); 
// });

//Create and write to file

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World:!', err =>{
    if(err) throw err;
    console.log('File Written to');
})


// // fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
// //     'I love Node.js',
// //     err=>{
// //         if (err) throw err;
// //         console.log('File written....');

// //         fs.appendFile(
// //             path.join(__dirname, '/test', 'hello.txt'),
// //             'I love Allah',

// //             err =>{
// //                 if(err) throw err;
// //                 console.log('File Written to oit...')
// //             }
// //         )
// //     }

// )
//Read a File
fs.readFile(path.join(__dirname, '/text', 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data)
});

fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloWorld.txt'), (err) =>{
    if(err) throw err;
    console.log('File renamed');
})