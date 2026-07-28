// array destructuring
const [a,b,c] = [1,2,3];
const [first,,third] = [10,20,30];

const obj = { name : "Sandesh", age : 19};

const array = [{name : "John", age : 20},obj,["good","strong"]];// array can contain object and array

// object destructuring
const {name,age} = {name : "Jimmy", age : 19};
const {name:fullname} = {name : "Sandesh"};

// demo of spread operator
let a = [1, 2, 3];
let b = [0, ...a, 4]; // b == [0, 1, 2, 3, 4]

let obj1 = {name : "Hari",age:20};
let obj2 = {...obj1,name : "Ram", age: 21};

// demo of rest operator
function sum(a, b, ...rest) { }  // rest = remaining args as array, so in case we don't have idea how many 
// number of argument are we getting for calling sum function !
// instead varargs in Java we use ...rest in JS