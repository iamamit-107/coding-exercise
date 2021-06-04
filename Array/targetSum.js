//input: [1,2,3,4], 6
// output: [2,4]

/**
 * Solution 1
 * Brutforce
 */
function targetSum(str, value) {
  for (let i = 0; i < str.length - 1; i++) {
    let firstValue = str[i];

    for (let j = i; j < str.length; j++) {
      let secondValue = str[j];

      if (firstValue + secondValue === value) {
        return [firstValue, secondValue];
      }
    }
  }

  return [];
}

/**
 * Solution 2
 * Its like binary search solution
 */

function targetSum2(arr, value) {
  let firstIndex = 0;
  let lastIndex = arr.length - 1;

  while (firstIndex < lastIndex) {
    let sum = arr[firstIndex] + arr[lastIndex];

    if (value < sum) {
      lastIndex--;
    } else if (value > sum) {
      firstIndex++;
    } else {
      return [arr[firstIndex], arr[lastIndex]];
    }
  }

  return [];
}

/**
 * Solution 3
 * building Object
 */

function targetSum3(arr, value) {
  const obj = {};

  for (let i in arr) {
    const first = arr[i];
    const other = value - arr[i];

    if (obj[other]) {
      return [first, other];
    }

    obj[first] = true;
  }

  return [];
}

console.log(targetSum3([1, 2, 3, 4], 6));
