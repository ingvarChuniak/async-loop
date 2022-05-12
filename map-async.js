const mapAsync = (arr, func) => Promise.all(arr.map(i => func(i)));

module.exports = mapAsync;
