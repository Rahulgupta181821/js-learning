const accounId=1234;
let accountEmail="Rahul@google.com";
var password="13455";
accountCity="Delhi";
let accountState;
console.log(accounId);
// accounId=234; // const can't be change.
// console.log(accounId);
console.table([accounId,accountCity,password,accountEmail,accountState]);
/*
prefer not to use var 
because of issue in block scope and functional scope.
*/