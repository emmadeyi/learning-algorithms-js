function twoSum(numArray, sum) {
    var pairs = [];
    var hashtable = [];

    for (var i = 0; i < numArray.length; i++) {
        var currNum = numArray[i];
        var counterpart = sum - currNum;
        if (hashtable.indexOf(counterpart) !== -1) {
            pairs.push([currNum, counterpart]);
        }
        hashtable.push(currNum);
    }
    console.log(pairs);

    return pairs;
}

twoSum([1, 2, 3, 4, 3, 2, 3, 2, 4, 5, 3, 1, 3, 4, 5, 3, 1, 1], 5);
