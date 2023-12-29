let score="33"
console.log(typeof score)//string
console.log(typeof(score))//string

let valueInNumber=Number(score)
console.log(typeof valueInNumber);//number
console.log(valueInNumber)//33


score="33abe"
valueInNumber=Number(score)
console.log(typeof valueInNumber)//number
console.log(valueInNumber)//NaN=> not a number so please check the conversion carefully.


let score1=null
let value= Number(score1)
console.log(typeof value)//number
console.log(value)//0


score1=undefined
value=Number(score1)
console.log(typeof value)//number
console.log(value)//NaN


score1=true
value=Number(score1)
console.log(typeof value)
console.log(value)//1


let isLoggedIn=1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)//true
// 1=> true ,0=> false
//"rahul"=> true , ''=>false

let someNumber=33
let stringInSomeNumber= String(someNumber)
console.log(typeof stringInSomeNumber)//string
console.log(stringInSomeNumber)//33