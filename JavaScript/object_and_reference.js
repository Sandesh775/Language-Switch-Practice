let user1 = {
    name: "John"
};

let user2 = user1;

user2.name = "Mike";

// because both reference variable pointing to the same object !

console.log(user1.name);
console.log(user2.name);