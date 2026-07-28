let button = document.getElementById("btn");

button.addEventListener("click",sayHello);

function sayHello(){
    document.getElementById("output").textContent = "Hello John !";
}