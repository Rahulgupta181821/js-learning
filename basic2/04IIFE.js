/* Immediately Invoked Function Expressions (IIFE)
=> when we write a function, we want to execute immediately then use IIFE.

    1.IIFEs have their own scope i.e. the variables you declare in the Function Expression will not be available outside the function.
    2.Similarly to other functions IIFEs can also be named or anonymous, but even if an IIFE does have a name it is impossible to refer/invoke it.
Use Cases Of IIFE:
  
   ######important a.Avoid polluting the global namespace 
    b.To create closures
    c.Avoid conflict of variable names between libraries and programs.
    d.IIFE is used to create private and  public variables and methods
    e.It is used to execute the async and await function
    f.It is used in JQuery Library
    g.It is used to work with require function

**************************2nd***************
IIFE starting with a semicolon (;)

Sometimes, you may see an IIFE that starts with a semicolon(;):
;(function() {
})();
// otherwise it gives error.
*/


/* 
1.If you have many global variables and functions, the JavaScript engine will only release the memory allocated for them until the global object loses its scopes.

2.As a result, the script may use the memory inefficiently. On top of that, having global variables and functions will likely cause name collisions.

3.One way to prevent the functions and variables from polluting the global object is to use immediately invoked function expressions.
*/


/*
********1st*******
var x=100;
(function chai(){
    var x=10//it scope is with in this function.
    console.log("value:",x)
})();
console.log(x)
// output:value: 10
// 100

*/

/*
*************2nd**************
var x=100;
(function chai(){
    x=10
    console.log("value:",x)
})();
console.log(x)
// output:value: 10
// 10

*/



/* 
// Arrow functions
( () => {
    console.log(`DB Connected two`)
})();// always use semicolon because it does not know when it terminate.
// output: DB Connected two 
*/


/* 
(async () => {
    console.log("Db is connected.")
  })();
  //output: Db is connected.
*/


/* 
( (name) => {
    console.log(`DB connected two ${name}`)
})('hitesh')
//output: DB connected two hitesh
*/