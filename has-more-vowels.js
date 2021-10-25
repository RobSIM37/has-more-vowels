function hasMoreVowels(word) {

    const vowels = ['a', 'e', 'i', 'o', 'u']; // Define what a vowel is
    const letters = word.toLowerCase().split(''); // convert the word to an array for easy filtering
    const vowelCount = letters.reduce((runningTotal, currentLetter) => vowels.includes(currentLetter) ? ++runningTotal : runningTotal, 0);
    return vowelCount > letters.length / 2;

}

// const vowelArr = letters.filter(currentLetter => vowels.includes(currentLetter)); // filter for all the vowels
//     return vowelArr.length > letters.length / 2; // return the boolean "the number of vowels is greater than half the total letters" (has more vowels than non-vowels)
function logResult(word) {

    let not = '';
    if (!hasMoreVowels(word)) {
        not = ' NOT';
    }

    console.log(`${word} does${not} have more vowels than consonants.`)

}

logResult('moose');
logResult('happy');
logResult('be');
logResult('bee');
logResult('Axe');
logResult('ooooo');