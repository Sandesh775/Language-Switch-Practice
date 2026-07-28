let button = document.getElementById("btn");

button.addEventListener("click",removeMessage);

function removeMessage(){
    let message = document.getElementById("message");

    message.remove();
}