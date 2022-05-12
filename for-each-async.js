const forEachAsync = (arr, func) =>
  arr.reduce((promise, c) => promise.then(() => func(c)), Promise.resolve());

module.exports = forEachAsync;
