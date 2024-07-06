// The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.

// allSettled Polyfill implementation, I have named it as "customAllSettled":

Promise.customAllSettled = function (promise) {
  return new Promise((resolve, reject) => {
    // Check if the input is an array
    if (!Array.isArray(promise)) {
      return reject(new TypeError("Promises should be iterable"));
    }

    // Initialize the results array and count variable
    let results = [];
    let count = 0;

    // If the input array is empty, resolve immediately with an empty array
    if (promise.length === 0) {
      return resolve(results);
    }

    // Iterate over each promise in the input array
    for (let i = 0; i < promise.length; i++) {
      // Handle each promise
      promise[i]
        .then((result) => {
          // If the promise resolves, store the result with status "fulfilled"
          results[i] = {
            status: "fulfilled",
            value: result,
          };
        })
        .catch((error) => {
          // If the promise rejects, store the reason with status "rejected"
          results[i] = {
            status: "rejected",
            reason: error,
          };
        })
        .finally(() => {
          // Increment the count after each promise settles
          count++;
          // If all promises have settled, resolve with the results array
          if (count === promise.length) {
            resolve(results);
          }
        });
    }
  });
};

// Example usage
const promise1 = Promise.resolve(3); // A resolved promise with value 3
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
); // A promise that rejects with "foo" after 100ms
const promise3 = Promise.resolve(20); // A resolved promise with value 20
const promises = [promise1, promise2, promise3]; // An array of promises

// Call customAllSettled and handle the results
Promise.customAllSettled(promises).then((results) => {
  results.forEach((result) => console.log(result.status));
  // Log the status of each result
});
