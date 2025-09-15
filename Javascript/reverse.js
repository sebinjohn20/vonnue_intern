function reverseWords(str) {
    let word = '';
    let result = '';
    
    // Loop from end to start
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === ' ') {
            result += word + ' ';
            word = '';
        } else {
            word = str[i] + word;
        }
    }
    result += word;  // Add the last word

    return result;
}

console.log(reverseWords("hello sebin john"));
