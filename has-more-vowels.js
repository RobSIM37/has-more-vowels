function hasMoreVowels(word) {

    const vowels = ['a', 'e', 'i', 'o', 'u']; // Define what a vowel is
    const letters = word.toLowerCase().split(''); // convert the word to an array for easy filtering
    // reduce the letters down to a single vowelCount by checking if the current letter is included in the vowels and incrimenting the running total if it is.
    const vowelCount = letters.reduce((runningTotal, currentLetter) => vowels.includes(currentLetter) ? ++runningTotal : runningTotal, 0);
    return vowelCount > letters.length / 2; // return the boolean "vowel count is greater than half the total letters" (it has more vowels)

}

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