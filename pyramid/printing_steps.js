// input: 4
// output: *
//         **
//         ***
//         ****

function printStep(n) {
  for (let row = 0; row < n; row++) {
    let str = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

/**
 * Recursive solution
 */
function printStep2(n) {
  if (n === 0) {
    return;
  }

  while (n > 0) {
    console.log(n);
    n = n - 1;
  }
}
printStep2(4);
