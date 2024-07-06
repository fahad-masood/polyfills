// The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.

// any Polyfill implementation, I have named it as "customAny":

Promise.customAny = function (promise) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promise)) {
      return reject(new TypeError("Promises should be iterable"));
    }
    if (promise.length === 0) {
      return reject("All promises were rejected");
    }
    for (let i = 0; i < promise.length; i++) {
      promise[i]
        .then((result) => {
          return resolve(result);
        })
        .catch((error) => {
          if (i === promise.length) {
            return reject("All promises were rejected");
          }
        });
    }
  });
};

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promises = [];

Promise.customAny(promises).then((value) => console.log(value));
