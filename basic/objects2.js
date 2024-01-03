//singlton
const tinderUser = new Object()//it is singleton object.
// console.log(tinderUser)
const tinderUser1={}// Non singleton object and all the things are same.
// console.log(tinderUser1)

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser)

const regularUser = {
    fullname:{
        userfullname:{
            firstname:"Rahul",
            lastname:"gupta"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
// const obj3 ={obj1,obj2}
// console.log(obj3)

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj1)
// console.log(obj3)
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = Object.assign({},obj1,obj2)
// console.log(obj1)
// console.log(obj3)
// { '1': 'a', '2': 'b' }
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj4 = {...obj1, ...obj2}
// console.log(obj3)

console.log(tinderUser)
console.log(Object.keys(tinderUser))//[ 'id', 'name', 'isLoggedIn' ]
const course={
    coursename:" js is hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor
//Object destructuring and Api
// const {courseInstructor}=course
// console.lastname(courseInstructor)//hitesh

// const {courseInstructor: instructor} = course
// console.log(instructor)//hitesh

//Json

// {
//     name:"hitesh",
//     courseName: "js in hindi",
//     price:"free"
// }