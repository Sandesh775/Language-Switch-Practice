let num = Number(prompt("Enter a number:"));

if (isNaN(num)) {
    alert("Please enter a valid number.");
} else {
    let absNum = Math.abs(num);

    if (absNum <= 9) {
        alert("Single digit number");
    } else if (absNum <= 99) {
        alert("Double digit number");
    } else if (absNum <= 999) {
        alert("Triple digit number");
    } else {
        alert("Multiple digit number");
    }
}