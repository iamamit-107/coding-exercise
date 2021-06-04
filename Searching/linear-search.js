function linearSearch(arr, item) {
    for (const element of arr) {
        if (element === item) {
            return "Found";
        }
    }

    return "Not Found";
}

console.log(linearSearch([10, 15, 20, 30], 30));
//output: Found
