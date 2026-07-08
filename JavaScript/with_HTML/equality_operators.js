console.log("== Operator (Loose Equality)");
console.log(10 == "10");        // true
console.log(true == 1);         // true
console.log(false == 0);        // true
console.log(null == undefined); // true

console.log("----------------------------");

console.log("=== Operator (Strict Equality)");
console.log(10 === "10");        // false
console.log(true === 1);         // false
console.log(false === 0);        // false
console.log(null === undefined); // false

console.log("----------------------------");

let a = 100;
let b = "100";
console.log(a)
console.log(b)
console.log("a == b")
console.log("Using ==");
console.log(a == b);
console.log("a === b")
console.log("Using ===");
console.log(a === b);