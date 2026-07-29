let a = 10;
var b = 200;

console.log(window);

{
    var global = 900;
    let block1 = 500;
    const block2 = 404;

    // not problem all these variables and constant can be easily printed or used , or access inside a block
    console.log(global);
    console.log(block1);
    console.log(block2);
}
// but whenever we tried to access speically let and const we can't because those are block scope variables, but var is not !
    console.log(global);
    console.log(block1);
    console.log(block2);