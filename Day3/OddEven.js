const reqLine = require("readline-sync");
let number = reqLine.questionInt("Enter the number: ");

if (number%2==0){
    console.log("Number",number+" is Even");
}else {
    console.log("Number", number+" is Odd");
}