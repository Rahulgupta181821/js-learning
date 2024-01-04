// if 
/* 
if (2=='2'){
  console.log("executed");
}
// output: executed
*/

/* // it check both value and type.
if (2==='2'){
  console.log("executed");
}else{
    console.log("not execute")
}
// output: not execute
*/

/*
//scope
const score =200

if (score>100){
    const power ="fly"
    console.log(`User power: ${power}`)
}
// console.log(`User power2:${power}`)//it gives error.
*/


/*
//shotHand notation
But we don't use this syntax. it is very unreadable code.
const balance =1000
if (balance>500) console.log("test"),console.log("test")
*/


// falsy values
// false,0, -0, BigInt 0n, "",null, undefined, NaN

//truthy values
// "0",'false', " ",[],{}, function(){}

/* 
// checking for empty array
const array =[]
if (array.length===0){
  console.log("empyt array")
}
*/


/*
//How to check Object is empty 
const emptyObj ={}

if (Object.keys(emptyObj).length===0){
  console.log("empty object")
}
*/

/*
// Always check carefully.
false==0: true
false=='':true
0=='':true
*/
/*
//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1)//5
*/
/*
val1=null ?? 10
console.log(val1)//10
*/
// val1 = undefined ?? 18
// console.log(val1)//18

// let val1;
// val1 = null ?? 10 ?? 20
// console.log(val1)//it returns 1st value after null or undefined.

/*
// Ternairy Operator
//condition ? true : false

// const iceTeaPrice =100
// iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80")
// // less than 80

*/