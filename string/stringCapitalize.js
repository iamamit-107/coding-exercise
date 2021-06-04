// Input: hello gello
// output: Hello Gello

/**
 * @ Solution 1
 */
function capitalize(str) {
  let words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}

/**
 * @ Solution 2
 */
function capitalize2(str) {
  let cap = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      cap = cap + str[i].toUpperCase();
    } else {
      cap = cap + str[i];
    }
  }

  return cap;
}

console.log(capitalize2("hello, gello"));
