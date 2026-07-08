const college = {
    name : "ABC college",
    student : {
        name : "John",
        marks : [80,90,70]
    }
};

console.log(college.name);

console.log(college.student.name);

console.log(college.student.marks[1]);

college.student.address = "Kathmandu";

console.log(college);