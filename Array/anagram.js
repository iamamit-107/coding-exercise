// input: 'abcedb' , 'bdceba'
// output: true

/**
 * Build String Map Object
 * {
 *  a: 1,
 *  b: 2,
 *  c: 1,
 *  d: 1,
 *  e: 1
 * }
 */
function buildStrMap(str) {
  const strMap = {};

  for (let char of str.toLowerCase()) {
    strMap[char] = strMap[char] + 1 || 1;
  }

  return strMap;
}

function anagram(str1, str2) {
  const strA = buildStrMap(str1); // object of char
  const strB = buildStrMap(str2); // object of char

  for (let char in strA) {
    if (strA[char] !== strB[char]) {
      return false;
    }
  }

  return true;
}

/**
 * Solution 2
 */

// Format string to lowercase and asc sorting the string
function formatStr(str) {
  return str.toLowerCase().split("").sort().join("");
}

function anagram2(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

console.log(anagram2("abbcde", "bbdeca"));
