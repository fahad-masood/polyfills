// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// every Polyfill implementation, I have named it as "customEvery":

// const isBelowThreshold = (currentValue) => currentValue > 1;
// const mixedArray = ["apple", "s", "banana", "sks"];

const evenNumbers = [6, 2, 4, 28, 10, 12];
// const allStrings = (element) => typeof element === "string";
const allEven = (number, index) => {
  //   return number % 2 === 0 ? true : false;
  return index % 2 === 0 ? number === evenNumbers[index] : true;
};

Array.prototype.customEvery = function (cb, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, thisArg ? thisArg : this)) {
      return false;
    }
  }
  return true;
};

console.log(evenNumbers.customEvery(allEven));
