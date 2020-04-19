console.log('Before');
 getUser(1, function(user){
     console.log('User', user)
 });

 getUser(1, (user)=>{

     getRepositories(user.gitHubUsername, displayRepository); 
     });


 function displayRepository(repo){
     console.log('reposiory', repo)
 }


console.log('after');

function getUser(id, callback){
    setTimeout(()=>{
        console.log('Reading a user from a database');
        callback({id:1, gitHubUsername: 'mosh'})
       
    }, 2000);
}

function getRepositories(username, callback){
    setTimeout(()=>{
        console.log('reading an object from a database');
        callback( ['repo1', 'repo2', 'repo3'])
    }, 2000)
   
}

//modify function to use promise

getUser(1, (user)=>{
    console.log(user.name);

});

function getUser(id, callback){
    setTimeout(()=> {
    console.log('raman');
    callback({id: 1, name: 'raman'});
    },
     2000);
    
};

 getUser(1)
 .then(user => getRepositories(user.gitHubUsername))
 .then(repos => console.log(repos))
 .catch(error => console.log('Error', err.message));


function getUser(id){
    return new Promise(resolve, reject);
    setTimeout(()=>{
        resolve({id:1, gitHubUsername: ede});
    }, 2000);
}


function getRepositories(username){
    return Promise(resolve, reject);
    setTimeout(() =>{
        console.log('getting repositories');
        resolve(['repo1', 'repo2', 'repo3']);
    })
}

async function displayRepos(){
 try{
    const user = await getUser(1);
const repos = await getRepositories(user.name);
console.log(repos);
 
}
catch(err){
    console.log('Error', err.message);
}


}

