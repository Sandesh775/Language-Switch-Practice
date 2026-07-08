const book = {
    title : "Man and his Dog",
    author : "Sandesh",
    price : 250,
    available : true
}
// access
console.log(book.title)

// modify 
book.title = "Man search for meaning ";

// add , new property
book.country = "Nepal";

// delete
delete book.available;

// print object 
console.log(book);