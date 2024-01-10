// literals

const user ={
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database")
        
        /*
        // console.log(`Username:${username}`);
        ReferenceError: username is not defined
        => because it does not know which object to refer.
        So we use this keyword. it refer to current object or current context.
        */
        console.log(`Username:${this.username}`);
        console.log(this)// it gives current object

    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)
//{} but in browser it gives window and many other things.


// ********************************************
// But if we want to add another user then generally we copy whole user object and creates the another user object.

const user2 ={
    username: "Rahul",
    loginCount: 19,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database")
        
        /*
        // console.log(`Username:${username}`);
        ReferenceError: username is not defined
        => because it does not know which object to refer.
        So we use this keyword. it refer to current object or current context.
        */
        console.log(`Username:${this.username}`);
        console.log(this)// it gives current object

    }
}

// console.log(user2.getUserDetails())


//******Constructor**********

// const promiseOne = new Promise()
// const date = new Date()
// this new keyword is a constructor function. it uses to construct multiple intences using one object literals.



function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount= loginCount;
    this.isLoggedIn= isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
    // but it is implicitely always return this
}

// const userOne = User("hitesh",12 , true)
// const usertwo = User("Rahul",11 , true)// it changes the previous value and set new values
// console.log(userOne)


const userOne = new User("hitesh",12 , true)
const usertwo = new User("Rahul",11 , true)
// console.log(userOne)
// console.log(usertwo)


// new keyword gives new copy of the functions and all are differents.
// 1.new keyword allways creates empty object.
// 2.constructer function call for new keyword.
// 3. all the argument inject into the constructor function.
// 4. and last step It generally give a basic function.


console.log(userOne.constructor)
// [Function: User]// it is reference of itself.
