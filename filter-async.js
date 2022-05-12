const mapAsync = require("./map-async");

const filterAsync = (arr, func) =>
  mapAsync(arr, func).then(mappedArray => arr.filter((_, index) => !!mappedArray[index]));

module.exports = filterAsync;
