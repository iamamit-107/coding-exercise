function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return slowFib(n - 1) + slowFib(n - 2);
}

function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const results = fn.apply(this, args);
    cache[args] = results;

    return results;
  };
}

const fib = memoize(slowFib);

console.log(fib(4));
