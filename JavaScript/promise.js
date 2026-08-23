const myPromise = new Promise((resolve, reject) => {
  resolve("Done!");
});
myPromise.then(result => console.log(result)); // "Done!"

const myPromise2 = new Promise((resolve, reject) => {
  reject("Failed!");
});

myPromise.catch(error => console.log(error)); // "Failed!"

/*

const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data received!");
  } else {
    reject("Something went wrong!");
  }
});

promise
  .then(result => console.log(result))  // success
  .catch(error => console.log(error));  // failure
  
*/