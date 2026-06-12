// Functions Are Values
// now i need to recall what function were look like in C
// Regular function 
let name = prompt("Whoever you are enter you name here : ");

function greet(name){
    //console.log("Hello "+name);
    return "Hello "+name;
}

// Function Expression
let name1 = "Sandesh";
let greet = function(name1) { return "Hello " + name1; };// this shouldn't feel suprising
console.log(greet);//what's so new rather than calling function using object and storing in return type variable
// here no object is calling function ?, but we are capable to store return type directly not new !!
