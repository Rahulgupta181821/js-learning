const score = 400
console.log(score)
//400
console.log(score.toString())
const balance = new Number(100)
console.log(balance)
//[Number: 100]
console.log(balance.toString().length)
//300
console.log(balance.toFixed(2))
//100.00
const hundreds =10000000
console.log(hundreds.toLocaleString())
//10,000,000
//*************************************************************Math */
console.log(Math)
// go to the inspect on the browser
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.round(4.2))
console.log(Math.ceil(4.9))
console.log(Math.floor(4.9))
console.log(Math.min(4,3,4,5,8))
console.log(Math.max(4,5,6,9,10))
console.log(Math.random())//range b/w 0-1
console.log((Math.random()*10)+1)
//value b/w 1 to 9

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)) + min)
// value b/w 10 to 20