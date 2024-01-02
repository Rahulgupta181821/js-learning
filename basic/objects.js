//singleton
//object.create

//object literals
//decleare symbole
const mySym = Symbol("key1")
const JsUser={
    name:"Rahul",
    // but system take "name"
    "full name":"Rahul kumar Gupta",
    //conver symbol into key
    // mySym:"mykey1",
    [mySym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"rahul@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email)
// console.log(JsUser."full name") we can't access using dot
console.log(JsUser["full name"])
// console.log(typeof JsUser["mySym"])//string but we want symbol
console.log(typeof JsUser[mySym])
console.log(JsUser[mySym])
JsUser.email="Rahul@#123.com"
// Object.freeze(JsUser)
JsUser.email="Rahul@microsoft.com"
console.log(JsUser)//does not change email.
// {
//     name: 'Rahul',
//     'full name': 'Rahul kumar Gupta',
//     age: 18,
//     location: 'jaipur',
//     email: 'Rahul@#123.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
//   }
JsUser.greeting = function(){
    console.log("Hello JS user")
}
console.log(JsUser.greeting)
JsUser.greeting()
// console.log()
// [Function (anonymous)]
// Hello JS user

JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`)
}
JsUser.greetingTwo()