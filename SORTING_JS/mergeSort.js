function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let center = arr.length / 2;
  let left = arr.slice(0, center);
  let right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  return [...result, ...left, ...right];
}

console.log(mergeSort([64, 34, 25, 12, 22, 11, 90]));
