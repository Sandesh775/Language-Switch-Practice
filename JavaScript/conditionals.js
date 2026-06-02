// what other alien thing can be in conditionals in this universe other than if-else
let age = 7;
if(age<18){
    console.log("You are not eligible for voting !");
}
else{
    console.log("You are eligible for voting !");
}

let num = 69;

if(num > 0){
    console.log("Number is positive !");
}
else if(num === 0){// use === (strict) instead of == for comparisons.
    console.log("Number is 0 !");
}
else{
    console.log("Number is negative !");
}

// bonus Ternary operator ? : 
let a = 6;
let b = 9;
let greater = (a>b) ? a : b;
console.log("Greater number is : "+greater);