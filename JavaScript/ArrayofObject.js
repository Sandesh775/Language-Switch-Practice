let person = {
    name : "Sandesh"
};

// Array of Objects
let people = [
    person,
    { name: "Alice", age: 25 },
    { name: "Bob",   age: 30 },
    { name: "Charlie", age: 22 }
];

// print array of object !, using for-each loop 
// java : for(int i : arr){}
for(let i of people){
    console.log(i);
}