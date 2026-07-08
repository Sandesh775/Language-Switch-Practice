let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let num3 = Number(prompt("Enter third number: "));

function smallest(a, b, c) {

    if (a < b && a < c) {
        alert(a + " is the smallest!");
    }
    else if (b < c) {
        alert(b + " is the smallest!");
    }
    else {
        alert(c + " is the smallest!");
    }
}

smallest(num1, num2, num3);