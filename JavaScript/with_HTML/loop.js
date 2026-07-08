let a = Number(prompt("Enter a number:"));

let output = "";

for (let i = 1; i <= 10; i++) {
    output += `${a} × ${i} = ${a * i}<br>`;
}

document.getElementById("result").innerHTML = output;