// this keyword use for current context(values) 
// const user ={
//     username:"hitesh",
//     price:999,

//     welcomeMessage: function(){
//        console.log(`${this.username}, welcome to website`)
//     }
// }
// // console.log(user.welcomeMessage)//[Function: welcomeMessage]
// console.log(user.welcomeMessage())
// // hitesh, welcome to website
// user.username="sam"
// user.welcomeMessage()//sam, welcome to website 


// ******************2nd***************

// const user ={
//     username:"hitesh",
//     price:999,

//     welcomeMessage: function(){
//        console.log(`${this.username}, welcome to website`);
//        console.log("Inner:",this)
//     }
    
// }
// console.log(user.welcomeMessage())
// user.username="sam"
// user.welcomeMessage()
/*
output
hitesh, welcome to website
Inner: {
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
undefined
sam, welcome to website
Inner: {
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/

// ********************3rd******************

// const user ={
//     username:"hitesh",
//     price:999,

//     welcomeMessage: function(){
//        console.log(`${this.username}, welcome to website`);
//        console.log("Inner:",this)
//     }
    
// }
// console.log(this)
/* 
output: {}
but if we use inspect then console it gives window
Gloable object is window in browser.
*/
// **************** this on function**********
// function chai(){
//     // when we print this in the function.
//     console.log(this)
// }
// chai()
//it gives many values



// **********************2nd***************
/* 
function chai(){
    let username="hitesh"
    console.log(this.username)
    // we does not access in function
}
chai()
//oputput: it gives undefined
*/



// ************Arrow functions****************
/* 
const chai = () => {
    let username ="hitesh"
    console.log(this.username)
}
chai()
//output: undefined

 */

// **************2nd*************
/* 
const addTwo = (num1,num2) => {
    return num1+ num2
}
console.log(addTwo(3,4))//7
*/


//*************implict return ***************** */
/* 
const addTwo = (num1,num2) => num1+ num2
console.log(addTwo(3,4))//7
*/

// *********************3rd**************
/* 
const addTwo = (num1,num2) => (num1+ num2)
console.log(addTwo(3,4))//7
// return use when {} otherwise we do not use return key word.
*/
// **********4th***********
const addTwo = (num1,num2) => ({username:"hitesh"})
console.log(addTwo(3,4))
// we don't return {} without return keyword so we use ().
