function divideNums(){
    let first = document.getElementById("first");
    let second = document.getElementById("second");

    let n1 = Number(first.value);
    let n2 = Number(second.value);

    let result = document.getElementById("result");
    if(n2 === 0){
        result.textContent = "Cannot divide by Zero";
    }
    else{
        let div = n1/n2;
        result.textContent = "Division : "+div;
    }
}