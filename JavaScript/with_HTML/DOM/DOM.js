function addNumbers(a,b){
    // find the HTMl elements
    let first = document.getElementById("first");
    let second = document.getElementById("second");


    // read what the user typed or entered 
    let num1 = Number(first.value);
    let num2 = Number(second.value);

    // caluclate 
    let sum = num1+num2;

    // find the result element 
    let result = document.getElementById("result");

    // change it's context or text , or modify it
    result.textContent = "Sum = "+sum;

    // writing context in h5 tag, which is empty at first 
    let h5 = document.getElementById("h5");
    h5.textContent = "Hello it's my first DOM program !";
}