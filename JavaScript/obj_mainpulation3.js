const student = {
    name : "John",
    roll : 10,
    faculty : "Humanities",
    marks : [10,90,80,45,39],

    // function inside a class / object
    averageMarks(){

    let sum = 0;
    for(let mark of this.marks){
        sum += mark;
    }
    return sum/(this.marks.length);
}
}

console.log(student.averageMarks());