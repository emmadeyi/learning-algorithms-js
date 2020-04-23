function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let tempVal = arr[i];

        console.log(tempVal, arr.length, arr.length - 1, arr.length - 1 - i, i);
        arr[i] = arr[arr.length - 1 - i];
        console.log(i, arr[i]);
        arr[arr.length - 1 - i] = tempVal;
        console.log(i, arr[arr.length - 1 - i]);
    }
    return arr;
}