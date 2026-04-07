const reqLine = require("readline-sync");

let num1 = reqLine.questionInt("Enter num1: ");
let num2 = reqLine.questionInt("Enter num2: ");
let Operator = reqLine.question("Enter Operator: ");

switch(Operator){
    case "+":
        console.log("Addition of num1 and num2: ", num1+num2);
        break;
    case "-":
        console.log("Subtraction of num1 and num2: ", num1-num2);
        break;
    case "*":
        console.log("Multiplication of num1 and num2: ", num1*num2);
        break;
    case "/":
        console.log("Division of num1 and num2: ", num1/num2);
        break;
    default:
        console.log("Invalid Operator");
}