// let a=10
// const b=20
// var c=30
// console.log(a)
// console.log(b)
// console.log(c)
//**************************Scope************ */
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
let a =500
if (true){
    let a=10
    const b=20
    console.log("Inner:",a)//Inner: 10

}
console.log(a)//500
// console.log(b)//error: b is not defined
