let button = document.getElementById("btn");
let count = 0;

function counter(){
    document.getElementById("output").textContent = "Counter : "+count++;
}

button.addEventListener("click",counter);