function vowels(str) {
  const checker = ["a", "i", "e", "o", "u"];
  let counter = 0;

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      counter++;
    }
  }

  return counter;
}

console.log(vowels("I am Amit"));
