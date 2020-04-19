const p = new Promise((resolve, reject)=>{
    //kick of some asynchrous code
    setTimeout(()=>{
       // resolve(1)
       reject(new Error('message'))
    }, 2000);
    resolve(1);
    reject(new Error('message'));
} );

p.then(result => console.log('Result', result).catch(err => console.log('Error', err.message));