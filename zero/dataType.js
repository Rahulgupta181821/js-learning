//primative data type
// 7 types: number,bigInt, string, boolean , null, undefined, symbole

//number => 2 to power 53
//bigInt
//string =>""
//boolean => true/false
//null=> standalone value
//undefined
//symbole=>unique

//********************************** */
//Referenc(Non primative datatype)
// Array, Objects, Functions

//object

console.log(typeof "Rahul")//string
console.log(typeof null)//object
console.log(typeof undefined)//undefined


//****************************************************How to work memory */
// Stack(primitive) and Heap(Non primitive type)

// Stack: When we use Primitive data type, It gives a copy of variable.
// Heap: It gives reference of the variable
//example
let myYoutubeName="Code with chai";
let anotherName=myYoutubeName;
console.log(myYoutubeName);//Code with chai
console.log(anotherName);//Code with chai
anotherName="Rahul";
console.log(anotherName);//Rahul
console.log(myYoutubeName);//Code with chai

let userOne={
    email:'rahul@gmail.com',
    upi:"rahul@ybl"
}
let userTwo=userOne;
console.log(userTwo)//{ email: 'rahul@gmail.com', upi: 'rahul@ybl' }
console.log(userOne)//{ email: 'rahul@gmail.com', upi: 'rahul@ybl' }
userTwo.upi='3878883@ybl'
console.log(userTwo)//{ email: 'rahul@gmail.com', upi: '3878883@ybl' }
console.log(userOne)//{ email: 'rahul@gmail.com', upi: '3878883@ybl' }
