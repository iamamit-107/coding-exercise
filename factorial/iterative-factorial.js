function iterativeFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }

    for (let i = num - 1; i >= 1; i--) {
        num = num * i;
    }

    return num;
}

console.log(iterativeFactorial(5));
//output: 120
