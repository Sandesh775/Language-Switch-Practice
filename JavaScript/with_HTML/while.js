let num = Number(prompt("Enter a number:"));

let cp = num;
let sum = 0;

while (cp > 0) {
    let digit = cp % 10;
    sum += digit;
    cp = Math.floor(cp / 10);
}

alert("The sum of digits is " + sum);