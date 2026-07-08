let sum = 0;
let choice;

do {
    let num = Number(prompt("Enter a number:"));
    sum += num;

    choice = confirm("Do you want to enter another number?");
} while (choice);

alert("Sum = " + sum);