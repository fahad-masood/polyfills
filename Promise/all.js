// The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

// all Polyfill implementation, I have named it as "customAll":

Promise.customAll = function (promise) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promise)) {
      return new TypeError("Promises should be iterable");
    }

    let results = [];
    let count = 0;

    if (promise.length === 0) {
      return resolve(results);
    }

    for (let i = 0; i < promise.length; i++) {
      promise[i]
        .then((result) => {
          results[i] = result;
          count++;
          if (count === promise.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          return reject(err);
        });
    }
  });
};

const promise1 = Promise.resolve(3);
const promise2 = Promise.reject(42);
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.customAll([promise1, promise2, promise3]).catch((values) => {
  console.log(values);
});

// Expected output: Array [3, 42, "foo"]
