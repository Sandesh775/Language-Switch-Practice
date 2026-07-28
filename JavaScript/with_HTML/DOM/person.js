let button = document.getElementById("btn");

button.addEventListener("click", createName);

function createName() {
    let name = document.createElement("p");

    let container = document.getElementById("container");

    name.textContent = document.getElementById("addName").value;

    container.appendChild(name);
}