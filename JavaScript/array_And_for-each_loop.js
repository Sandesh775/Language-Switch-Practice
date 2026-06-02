// now here will see how array is created in JS, and i keept for-of array which is equivalent to 
// for-each loop in Java
// nothing new 
let arr = [1,2,33,4,56,6];

// traverse through array !
// for-of = your enhanced for-each.
for(let i of arr){
    console.log(i);
}

// array declaration 
let array2 = [];// empty array 

// something interesting is here !
let mixedArray = ["Hello", true, 10, 39.89, null]; // now this mf doesn't care anymore :-)
//                  string, boolean, integer, double, object itself !?

// Access
console.log("Value in index 0 of mixedArray is : "+mixedArray[0]);// thank god this mf care of indexing at least 0-(size-1)

// now interesting thing is Array in JS is not an Array , I mean not like usual normal array 
// static, type declaration, homogenous data, here it acts like ArrayList in collection of java
mixedArray.length; // which seems normal property of an array also got in java

// acts like ArrayList here : 
mixedArray.push("World");// add element at end
mixedArray.pop();// remove from end 
// mixedArray.pop(true);// remove specific value , to remove a specific item is not valid ?
mixedArray.shift();// remove start
mixedArray.unshift("Kiwi");// add element at start
// mixedArray.push(2,90);, adding element at specific is weird here ?