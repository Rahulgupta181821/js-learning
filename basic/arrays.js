//array
const myArr =[0,1,2,3,4,5] 
// array based on shallow copy(share the references)
const myHeros = ["shaktiman", "naagraj"]
const myArray2= new Array(1,2,3,4)
console.log(myArray2[0])

// Array methods
myArr.push(6)
console.log(myArr)
myArr.pop()// remove last value
console.log(myArr)
myArr.unshift(9)
//[9,0,1,2,3,4,5]
console.log(myArr)
myArr.shift()
//[0,1,2,3,4,5]
console.log(myArr)
console.log(myArr.includes(9))//false
console.log(myArr.indexOf(9))//-1
console.log(myArr.indexOf(3))//3

const newArr = myArr.join()
console.log(newArr)//0,1,2,3,4,5
console.log(typeof newArr)//string

// slice, splice
const myn1= myArr.slice(1,3)
console.log(myn1)//[1,2]
console.log("B: ", myArr)//B: [0,1,2,3,4,5]


const myn2 = myArr.splice(1,3)
console.log(myn2)//[1,2,3]
console.log("C: ", myArr)//C: [0,4,5] it changes the original array.