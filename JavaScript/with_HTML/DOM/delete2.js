let addButton = document.getElementById("addBtn");

addButton.addEventListener("click",addName);
function addName(){
    let item = document.createElement("div");
    let para = document.createElement("p");
    let btn = document.createElement("button");
    let name = document.getElementById("name");
    para.textContent = name.value;
    btn.textContent = "Delete";

    item.appendChild(para);
    item.appendChild(btn);

    btn.addEventListener("click", function () {
        item.remove();
    });

    document.getElementById("container").appendChild(item);
}
