function isSumEven(a, b) {
    return (a + b) % 2 === 0;
}

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));

if (isSumEven(a, b)) {
    alert("Sum is Even!");
} else {
    alert("Sum is Odd!");
}