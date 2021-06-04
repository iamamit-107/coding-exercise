function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (max < charMap[char]) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
console.log(maxChar("abbccce"));
