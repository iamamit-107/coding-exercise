function isPrime(n) {
    const limit = Math.sqrt(n);
    if (n < 2) return false;

    if (n == 2) return true;

    if (n % 2 == 0) return false;

    for (let i = 3; i <= limit; i += 2) {
        if (n % i == 0) return false;
    }

    return true;
}
console.log(isPrime(10));
