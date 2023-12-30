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

// ******************************Operations************************************

let value2=3;
let negativeValue=-value2;
console.log(negativeValue);
console.log("1"+2);//12
console.log(2+"1");//21
console.log("1"+2+2);//122
console.log(1+2+"2");//32
console.log(2+3*5%3);//2
console.log(true);//true
console.log(+true);//1
console.log(+"");//0
let x = 3;
const y = x++;
// x is 4; y is 3
console.log(`x:${x}, y:${y}`)
let x2 = 3n;
const y2 = x2++;
// x2 is 4; y2 is 3
console.log(`x2:${x2}, y2:${y2}`)