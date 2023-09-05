function wordsToUpper(str){
    const regex = /\w+/g;
    const output = str.match(regex).join(', ').toUpperCase();
    console.log(output);
}

wordsToUpper('Hi, how are you?');
wordsToUpper('hello' );