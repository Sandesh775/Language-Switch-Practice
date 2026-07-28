function addNumbers(){
    let n1 = document.getElementById("first");
    let n2 = document.getElementById("second");

    let num1 = Number(n1.value);
    let num2 = Number(n2.value);

    let sum = num1+num2;

    let result = document.getElementById("result");

    result.textContent = "Sum : "+sum;
}
function subNumbers(){
    let n1 = document.getElementById("first");
    let n2 = document.getElementById("second");

    let num1 = Number(n1.value);
    let num2 = Number(n2.value);

    let sub = num1-num2;

    let result = document.getElementById("result");
    result.textContent = "Subtraction : "+sub;
}
function multNumbers(){
    let n1 = document.getElementById("first");
    let n2 = document.getElementById("second");

    let num1 = Number(n1.value);
    let num2 = Number(n2.value);

    let mult = num1*num2;

    let result = document.getElementById("result");
    result.textContent = "Multiplication : "+mult;
}