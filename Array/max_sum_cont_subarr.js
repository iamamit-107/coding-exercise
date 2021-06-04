function max_sum(arr) {
  let maxSum = -10000000; //assume maxSum is a very small number at first
  let currentSum = 0;

  for (let num of arr) {
    currentSum += num;
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}

console.log(max_sum([-1, -2, 1, 2, 3, -5, 4]));
console.log(max_sum([-1, -2, 1, 2, 3, -5, 4, 5]));
