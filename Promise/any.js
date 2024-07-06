// The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.

// any Polyfill implementation, I have named it as "customAny":

Promise.customAny = function (promise) {
  return new Promise((resolve, reject) => {
    // Check if the input is an array
    if (!Array.isArray(promise)) {
      return reject(new TypeError("Promises should be iterable"));
    }

    let results = [];
    let count = 0;

    // Handle case where no promises are provided
    if (promise.length === 0) {
      return reject(
        new AggregateError(results, "All the promises are rejected")
      );
    }

    // Iterate through each promise in the array
    for (let i = 0; i < promise.length; i++) {
      promise[i]
        .then((result) => {
          // Resolve with the first successful promise encountered
          resolve(result);
        })
        .catch((error) => {
          // Store the error and count rejections
          results[i] = error;
          count++;

          // If all promises are rejected, reject with an AggregateError
          if (count === promise.length) {
            reject(
              new AggregateError(results, "All the promises are rejected")
            );
          }
        });
    }
  });
};

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promises = [promise1, promise2, promise3];

Promise.customAny(promises).then((value) => console.log(value));
