let num = Number(prompt("Enter a number:"));

let fact = 1;

for (let i = num; i >= 1; i--) {
    fact *= i;
}

alert("Factorial = " + fact);