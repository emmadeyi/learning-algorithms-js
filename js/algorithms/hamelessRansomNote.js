function hamelessRansomNote(noteText, magazineText) {
    const noteArr = noteText.split(' ');
    const magazineArr = magazineText.split(' ');
    const magazineObj = {};

    magazineArr.forEach(word => {
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });


    let isPossible = true;
    let index = 0
    noteArr.forEach(word => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) isPossible = false;
        } else isPossible = false;
        console.log(index, magazineObj[word], word);
        index++
    });
    return isPossible;
}