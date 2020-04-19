// const p = Promise.resolve({id:1 });
// p.then(result=> console.log(result));

// const p1 = Promise.reject(new Error('reason for rejection'));
// p1.catch(error => console.log(error));

const p1 = new Promise((resolve) =>{
    setTimeout(()=> {
        console.log('Aync operation going...');
        reject(new Error('because something failed..'));
    }, 2000)
});


const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
    console.log('Async operation 2...');
    resolve(2)
    }, 2000);
});

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log('Error', err.message));

Promise.race([p1, p2])
.then(result => {
    console.log(race)
}).catch(error => console.log(error.message));