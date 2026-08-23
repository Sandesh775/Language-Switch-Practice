function a(b, callback_function){
    console.log("Hello! "+b);
    callback_function();
}

function greet(){
    console.log("Greeting done!");
}

a("Sandesh",greet);

// demo that JS don't wait for any function to done and then execute other remaining lines 
console.log("1");
setTimeout(greet, 2000); // wait 2 seconds, then call done
console.log("2");