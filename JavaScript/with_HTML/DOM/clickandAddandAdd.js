let btn = document.getElementById("btn");
btn.addEventListener("click",addNametoList);
let input = document.getElementById("input");
function addNametoList(){
    if (input.value === "") {
        return;
    }
    let parent = document.getElementById("Parentcontainer");
    let p = document.createElement("p");
    p.textContent = input.value;
    parent.appendChild(p);
    input.value = "";
}