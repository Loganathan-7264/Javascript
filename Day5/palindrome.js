const reqLine = require("readline-sync");

let word = reqLine.question("Enter your word: ").toLowerCase();
console.log(`Entered word is: ${word}`);
let reverseWord = word.split("").reverse().join("");
console.log(`Reversed word is: ${reverseWord}`);

if (word === reverseWord){
    console.log(`${word} is Palindrome`);
}else{
    console.log(`${word} is not an Palindrome`);
}
