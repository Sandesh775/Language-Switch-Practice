// so whay an object looks like in Js
// we don't need class here !
// and everything is just another value for an object , even functions too...

let person1 = {
    name : "Sandesh",
    age : 20,
    city : "Kathmandu"
};
person1 = {  // person1 can point to an entirely different object. where const variable car cannot point somewhere else.
    name: "Bob",//  but can modify Object itself. code line no : 40
    age: 30,    //   The object will be updated, but the variable should always refer to the same user object.
    city: "Pokhara"
};
let person2 = {
    name : "Manjil",
    age : 19,
    city : "Kathmandu"
};
let person3 = {
    name : "Manoj",
    age : 15,
    city : "Kathmandu"
};

// access
person1.name;
person2.age;
person3.city;


// so where the fuck are methods or function in an object !?
const car = {
    brand : "Toyota",

    drive() {
      console.log("Driving");
   }
}
car.brand = "Rolls Royce";
car.drive();
const x = function(){};

console.log("x is "+typeof x);
const z = {
    function(){}
}

console.log("z is "+typeof z);