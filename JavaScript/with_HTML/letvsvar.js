var num = 10;
var num = 30;
// var can be re-declare, but let can't only value can be changed
let name = "Sandesh"
// let name = "John" // not allowed

if(true){
    let city = "KTM";
    var country = "Nepal"

    console.log(city);
    console.log(country);
}
// console.log(city);, city is not defined error !
console.log(country);// but this allowed ?