const reqLine = require("readline-sync");
let num1 = reqLine.questionInt("Enter num1: ");
let num2 = reqLine.questionInt("Enter num2: ");
let num3 = reqLine.questionInt("Enter num3: ");

if ((num1>num2) && (num1>num3)){
    console.log("num1 is greater");
} else if ((num2>num1) && (num2>num3)){
    console.log("num2 is greater");
}else {
    console.log("num3 is greater");
}