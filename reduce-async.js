const reduceAsync = (arr, func, initialValue) =>
  Promise.resolve(initialValue).then(accum =>
    forEachAsync(arr, async (value, index) => {
      accum = await func(accum, value, index);
    }).then(() => accum)
  );

module.exports = reduceAsync;
