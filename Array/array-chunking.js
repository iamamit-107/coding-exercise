// array = [1, 2, 3, 4, 5]
// size = 2
// output = [[1, 2], [3, 4], [5]]

function arrayChunk(array, size) {
  const chunked = [];

  for (let value of array) {
    const lastArray = chunked[chunked.length - 1];

    if (!lastArray || lastArray.length === size) {
      chunked.push([value]);
    } else {
      lastArray.push(value);
    }
  }

  return chunked;
}

function arrayChunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index = index + size;
  }

  return chunked;
}
console.log(arrayChunk([1, 2, 3, 4, 5], 2));
