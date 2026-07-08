let a = Number(prompt("Enter a number : "));

function prime(num){
    for(let i = 2; i<num; i++){
        if (num < 2) {
    return false;
        }
    if(num%i === 0){
        return false;
        }
    }
    return true;
}
// let isPrime = prime(a);
// if (isPrime) {
//     alert("Prime");
// } else {
//     alert("Not Prime");
// }
if (prime(a)) {
    alert("Prime");
} else {
    alert("Not Prime");
}