function bubbleSort(arr) {
    //sort the array
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }

    //returning the array
    return arr;
}

console.log(bubbleSort([10, 4, 3, 8]));
//output : [ 3, 4, 8, 10 ]
