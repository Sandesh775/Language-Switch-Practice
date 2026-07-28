const user = {
  name: "Sandesh",
  greet() {
    console.log(this.name); // 'this' = user object
  }
};
user.greet();

const user2 = {
  name: "Sandesh",
  greet: () => {
    console.log(this.name); // undefined! arrow has no 'this'
  }
};
user2.greet();