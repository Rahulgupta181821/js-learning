// let a=10
// const b=20
// var c=30
// console.log(a)
// console.log(b)
// console.log(c)
//**************************Scope=> {} it is know as scope.************ */
// var c=400
// if (true){
//     let a=10
//     const b=20
//     // console.log(c)
//     // var c=30// it override the c values.
// }
// // console.log(a) //error: a is not defined
// console.log(b)//error: b is not defined
// console.log(c)//30 it can access out of the given scope

// ***********************2nd*****************
// let a =500
// if (true){
//     let a=10
//     const b=20
//     console.log("Inner:",a)//Inner: 10

// }
// console.log(a)//500
// console.log(b)//error: b is not defined

// *****************nested scope*************

// function one(){
//     const username="hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }
//     // console.log(website)// give error
//     two()
// }
// one()

// ***********Interesting***************
// functions
// function addone(num){
//     return num +1

// }
// console.log(addone(5))//6

// //expression

// const addTwo = function(num){
//     return num +2
// }
// addTwo(5)

// ####################2nd######################

// functions
// console.log(addone(5))//6
// function addone(num){
//     return num +1

// }


// //expression

// const addTwo = function(num){
//     return num +2
// }
// addTwo(5)
// ##############3rd####################
// console.log(addone(5))//6
// function addone(num){
//     return num +1

// }


// //expression

// const addTwo = function(num){
//     return num +2
// }
// console.log(addTwo(5))//7

// ####################4th#######################

console.log(addone(5))//6
function addone(num){
    return num +1

}


//expression
console.log(addTwo(5))//Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num +2
}
