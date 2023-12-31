//Dates

let myDate = new Date()
console.log(myDate.toString())
//Sun Dec 31 2023 18:43:11 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())
//Sun Dec 31 2023
console.log(myDate.toISOString())
//2023-12-31T18:43:11.974Z
console.log(myDate.toJSON())
//2023-12-31T18:43:11.974Z
console.log(myDate.toLocaleDateString())
//12/31/2023
console.log(myDate.toLocaleString())
//12/31/2023, 6:43:11 PM
console.log(typeof myDate)
//object
let myCreatedDate = new Date(2023,0, 23)
console.log(myCreatedDate.toDateString())
//Mon Jan 23 2023
let myCreatedDate1= new Date(2023,0,23,5,3)
console.log(myCreatedDate1.toLocaleString())
//1/23/2023, 5:03:00 AM
let myCreatedDate2= new Date("2023-01-14")
console.log(myCreatedDate2.toLocaleString())
//1/14/2023, 12:00:00 AM
let myCreatedDate3= new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleString())
//1/14/2023, 12:00:00 AM
let myTimeStamp = Date.now()
console.log(myTimeStamp)
// gives time in mili second
//1704048920760
console.log(Math.floor(Date.now()/1000))
//1704048920
let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)//it gives current month. 0:January ,1:February