function isPalindrome(string) {
    string = string.toLowerCase();
    const characterArr = string.split('');
    const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const letterArr = [];
    characterArr.forEach(char => {
        if (validCharacters.indexOf(char) > -1) letterArr.push(char);
    });

    if (letterArr.join('') === letterArr.reverse().join('')) return true;
    else return false;
}

isPalindrome('race car');