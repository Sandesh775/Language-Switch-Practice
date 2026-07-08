const student = {
    name : "John",
    roll : 10,
    faculty : "Humanities",
    marks : [10,90,80,45,39]
}

// function 
function averageMarks(a){

    let sum = 0;
    for(let mark of a.marks){
        sum += mark;
    }
    return sum/(a.marks.length);
}

let avg = averageMarks(student);

console.log(avg);