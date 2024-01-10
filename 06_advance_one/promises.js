// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     })
// })

// promiseOne.then(function(){
//     console.log('Promise consumed');
// })



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThreee = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Chai", email:"chai@example.com"})
//     },1000)
// })

// promiseThreee.then(function(user){
//     console.log(user);
// }) 



// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"rahul",password:"123"})
//         }else{
//             reject("ERROR: Something went wrong")
//         }
//     },1000)
// })


// const username= promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// })

// console.log(username)
//it gives error because we don't access through any other reference. Only access another .then() function. it is know as then() chaning.


// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username;
// })
// .then((myusername) => {
// console.log(myusername)
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(() => console.log("The promise is either resolve or reject"))
// // finally always execute.




// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username:"JavaScript",password:"123"})
//         }else{
//             reject("ERROR: JS went wrong")
//         }
//     },1000)
// });

// async function consumePromiseFive(){
//     try {
//     const response = await promiseFive;
//     console.log(response);
//     } catch (error) {
//        console.log(error);  
//     }
// }

// consumePromiseFive()





// async function getAllUsers(){
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json()
//         console.log(data)
//         // console.log(response)
//     } catch (error) {
//         console.log("E: ",error)
//     }
// }

// getAllUsers()


// OR use another method. It gives same response.




fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))