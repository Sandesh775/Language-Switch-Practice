let lightBtn = document.getElementById("light");
let darkBtn = document.getElementById("dark");

function lightMode() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

lightBtn.addEventListener("click", lightMode);

darkBtn.addEventListener("click", darkMode);