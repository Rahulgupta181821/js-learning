const myObject={
    js: 'javascript',
    cpp: 'C++',
    rb: 'rubby',
    swift: 'swift by apple'
}
// for (const key in myObject) {
//     console.log(key)
// }
// for (const key in myObject) {
//     console.log(myObject[key])
// }

// const programming = ["js","rb","py","cpp"]
// for (const key in programming) {
//     console.log(key)
// }// it given key(index value)

// for (const key in programming) {
//     console.log(programming[key])
// }
// //it gives value


const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

// for (const key in map1) {
//     console.log(key)
// }
// // map is not iterable so it doesn't work on forin and forof loop.


//foreach loop
const coding= ["js","ruby", "java","python","c++"]

// coding.forEach( function (item) {
// console.log(item);
// })

// coding.forEach( (val) => {
//     console.log(val)
// })

// function pritnMe(item){
//     console.log(item)
// }
// coding.forEach(pritnMe)

// coding.forEach( (item,index ,arr)=> {
//     console.log(item,index,arr);
// })

const myCoding =[
    {
        languageName: "Java Script",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

// myCoding.forEach( (item) => {
//     console.log(item.languageName)
// })

