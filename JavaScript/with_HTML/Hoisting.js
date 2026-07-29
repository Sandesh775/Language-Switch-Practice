
console.log(x);// display undefined
console.log(getValue());// print 505
console.log(getValue);// display exact code inside function

var x = 10;

function getValue(){
    console.log("Value is : "+505);
}

console.log(x);// display 10
console.log(getValue());// display 505
console.log(getValue);// will still display exact code as it is !