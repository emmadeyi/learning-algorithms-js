function reverseWords(string) {
    const strArr = string.split(" ");
    const reverseWordArr = []
    strArr.forEach(str => {
        const splitStr = str.split('');
        const reverseStr = splitStr.reverse().join('');
        reverseWordArr.push(reverseStr);
    });

    return reverseWordArr.join(" ");
}

reverseWords("welcome to school");