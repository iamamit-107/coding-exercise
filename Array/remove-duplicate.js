/**
 *
 * @param arr
 * @returns arr of individual numbers
 */

function removeDuplicate(arr) {
  const cleanArr = [];

  for (let num of arr) {
    if (!cleanArr.includes(num)) {
      cleanArr.push(num);
    }
  }

  return cleanArr;
}

console.log(removeDuplicate([1, 3, 3, 3, 1, 5, 8, 6, 7, 8, 1]));
//output:[1, 3, 5, 6, 7, 8]

/**
 * Assume array is sorted
 * You cant use extra memory
 * @returns length of clean array
 */
function removeDuplicateNoMemory(arr) {
  // we will start from 2nd index..as first index number is already unique
  let currentIndex = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[currentIndex] = arr[i];
      currentIndex++;
    }
  }

  return currentIndex;
}

console.log(removeDuplicateNoMemory([1, 1, 2, 2, 2, 3, 4, 5, 5]));
