/**
 * Solution 1;
 * input: 'abcba'
 * output: true
 */

function palindrome(str) {
  let reverse = str.split("").reverse().join("");

  return reverse === str;
}

/**
 * Solution 2
 * input: 'abcba'
 * output: true
 */

function palindrome2(str) {
  let firstIndex = 0;
  let lastIndex = str.length - 1;

  while (firstIndex < lastIndex) {
    if (str[firstIndex] !== str[lastIndex]) {
      return false;
    } else {
      firstIndex++;
      lastIndex--;
    }
  }

  return true;
}

console.log(palindrome2("abcdcba"));
