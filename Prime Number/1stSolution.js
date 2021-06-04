function isPrime(n) {
    if (n < 2) return false;

    if (n == 2) return true;

    for (let i = 3; i < n / 2; i++) {
        if (n % i == 0) return false;
    }

    return true;
}
console.log(isPrime(137));

//   > isPrime(137);
//   = true
//   > isPrime(237);
//     = false
