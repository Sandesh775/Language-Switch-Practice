let button = document.getElementById("btn");
button.addEventListener("click",createParagraph);

function createParagraph(){
    let para = document.createElement("p");
    para.textContent = "Hello from JavaScript !";
    document.getElementById("container").appendChild(para);
}