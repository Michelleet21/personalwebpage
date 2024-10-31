function translateToPigLatin() {
    let text = document.getElementById('txtVal').value;


    function toPigLatin(word) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let firstVowelIndex = word.search(/[aeiou]/i);

        if (firstVowelIndex === 0) {
            return word + "way";
        } else {
            return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + "ay";
        }
    }

    let pigLatinTranslation = text.split(" ").map(toPigLatin).join(" ");

    document.getElementById('pigLatin').innerText = pigLatinTranslation;
}
