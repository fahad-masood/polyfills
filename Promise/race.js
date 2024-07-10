// The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.

// race Polyfill implementation, I have named it as "customRace":

// Define a custom race function on the Promise object
Promise.customRace = function (promise) {
  return new Promise((resolve, reject) => {
    // Check if the input is an array of promises
    if (!Array.isArray(promise)) {
      // If not, throw a TypeError
      throw new TypeError("Promises should be iterable");
    }
    // Iterate through each promise in the array
    for (let i = 0; i < promise.length; i++) {
      // Attach then and catch handlers to each promise
      promise[i]
        .then((result) => {
          // Resolve the custom race promise if any promise resolves
          resolve(result);
        })
        .catch((error) => {
          // Reject the custom race promise if any promise rejects
          reject(error);
        });
    }
  });
};

// Define a promise that resolves after 800ms
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 800, "one");
});

// Define a promise that resolves after 700ms
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 700, "two");
});

// Use the custom race function with the defined promises
Promise.customRace([promise1, promise2]).then((value) => {
  console.log(value);
  // Expected output: "two" because promise2 resolves faster
});
