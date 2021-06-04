function swap(a, b) {
    console.log("before Swap: ", a, " ", b);

    b = a + b;
    a = b - a;
    b = b - a;

    console.log("after Swap: ", a, " ", b);
}

console.log(swap(10, 5));
