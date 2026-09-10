function lengthOfLastWord(s) {
    let length = 0;
    let i = s.length - 1;

    // Skip trailing spaces
    while (i >= 0 && s[i] === " ") {
        i--;
    }

    // Count characters of the last word
    while (i >= 0 && s[i] !== " ") {
        length++;
        i--;
    }

    return length;
}

let s = "Hello World"; //" fly me to the moon "
console.log( s + " -> " + lengthOfLastWord(s)); // 5