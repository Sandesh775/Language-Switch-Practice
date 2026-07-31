let btn = document.getElementById("btn");

btn.addEventListener("click",addtolist);

let input = document.getElementById("input");

let container = document.getElementById("container");

function addtolist(){
    // input validation if name is empty directly return !
    if(input.value === ""){
        return;
    }

    //let container = document.getElementById("container");// reference of container div existing 

    let p = document.createElement("p");// create paragraph tag
    p.textContent = input.value;

    let dltbtn = document.createElement("button");// create delete button
    dltbtn.textContent = "Delete";

    let wrapperDiv = document.createElement("div");
    // wrapping paragraph and div tag in wrapperdiv
    // wrapperDiv.append(p);
    // wrapperDiv.append(dltbtn);
    wrapperDiv.appendChild(p);
    wrapperDiv.appendChild(dltbtn);

    // now wrapping this wrapper div inside the existing container div 
    container.appendChild(wrapperDiv);

    // dltbtn delete function
    dltbtn.addEventListener("click",function(){
        wrapperDiv.remove();
    })

    // clear textbox
    input.value = "";
}