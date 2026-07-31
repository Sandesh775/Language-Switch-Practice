let btn = document.getElementById("btn");

btn.addEventListener("click",deletetext);

function deletetext(){
    let item = document.getElementById("text")
    item.remove();
}