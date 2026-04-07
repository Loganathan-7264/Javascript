const reqLine = require("readline-sync");

let number = reqLine.question("Enter your number: ");
let sum =0;

for (number; number>0; number=parseInt(number/10)){
    let lastDigit = number%10;
    sum = sum+lastDigit;
}
console.log(`sum of the digits is :${sum}`);