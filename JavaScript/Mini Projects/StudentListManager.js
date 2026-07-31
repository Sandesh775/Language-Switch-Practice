let btn = document.getElementById("btn");
let input = document.getElementById("input");
let container = document.getElementById("StudentTable");
let counter = document.getElementById("counterShow");

let count = 0;
btn.addEventListener("click",addStudent);

function addStudent(){
    if(input.value.trim() === ""){
        return;
    }

    let p = document.createElement("p");
    let dltbtn = document.createElement("button");
    let studentRow = document.createElement("div");

    p.textContent = input.value;
    dltbtn.textContent = "Delete";

    studentRow.appendChild(p);
    studentRow.appendChild(dltbtn);

    container.appendChild(studentRow);

    dltbtn.addEventListener("click",function(){
        studentRow.remove();
        count--;
        // counter.textContent = "Total Students : "+count;
        updateCounter();
    })

    input.value = "";
    input.focus();//the cursor disappears from the textbox.


    count++;
    //counter.textContent = "Total Students : "+count;
    updateCounter();
}
function updateCounter(){
        counter.textContent = "Total Students : " + count;
}