function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()
function addTwoNumber(number1,number2){
    console.log(number1+number2)
}
addTwoNumber()//NaN
addTwoNumber(3,4)//7
addTwoNumber(3,"4")//34
addTwoNumber(3,"a")//3a
addTwoNumber(3,null)//3
const result = addTwoNumber(3,5)//8
// console.log(result)//undefined => because we do not return any value.
function loginUserMessage(username){
    return `${username} just logged in` 
}
const res=loginUserMessage("hitesh")
console.log(res)
console.log(loginUserMessage())
//undefined just logged in

// rest operator 
function calculateCartPrice(...num1){
    return num1 
}
console.log(calculateCartPrice(200,400,500))//[ 200, 400, 500 ]

function calculateCartPrice1(val1,val2,...num1){
    return num1 
}
console.log(calculateCartPrice1(200,400,500,600,7000))
// [ 500, 600, 7000 ]

// how to pass object into a functions

const user={
    username:"hitesh",
    price:100
}
function handleObject(anyObject){
 console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
//direct pass the object
handleObject({
    username:"sam",
    price:399
})
// Username is sam and price is 399

// passing array
const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))//400
console.log(returnSecondValue([300,6000,500,800]))//6000
