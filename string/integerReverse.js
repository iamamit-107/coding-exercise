function reverse(number) {
  let str = number.toString();

  str = str.split("").reverse().join("");

  return parseInt(str) * Math.sign(number);
}

console.log(reverse(-12345));
