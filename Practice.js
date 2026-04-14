// // Sample 1

// // let a = 10;
// // let b =3;
// // console.log("Sum of a & b: ",a+b);
// // console.log("Differene of a & b: ", a-b);
// // console.log("Product of a & b: ", a*b);
// // console.log("Quotient of a & b: ", a/b);

// // sample 2

// // let num =7;
// // num = num + 5;
// // console.log(num*2)

// // sample 3
// let Price = 50;
// let Tax = (Price*8)/100
// Price = Price + Tax
// console.log(Price)
// -----------------------------------------------------------------------------
// ex 1:
// let priceString = "50";
// let priceNumber = Number(priceString);
// console.log(typeof(priceString));
// console.log(typeof(priceNumber));
// -----------------------------------------------------------------------------
// ex2:
// let isLoggedIn = true;
// let isAdmin = true;
// console.log("Delete User button is visible: ", (isLoggedIn && isAdmin));

// let totalItems = 10;

// if (totalItems = 0) { 
//     console.log("Your cart is empty!");
// } else {
//     console.log("Proceed to checkout");
// }
// -----------------------------------------------------------------------------
// ODD or Even

// const reqLine = require("readline-sync");
// let num = reqLine.questionInt("Enter the number: ");
// let result = (num%2==0)?"Even": "Odd"
// console.log(result);
// -----------------------------------------------------------------------------
// The Grade Calculator

// const reqLine = require("readline-sync");
// let score = reqLine.questionInt("Enter your score: ");

// if (score>=90 && score<=100){
//     console.log("Grade A");
// } else if (score>=80 && score<=89){
//     console.log("Grade B");
// }else if (score>=70 && score<=79){
//     console.log("Grade C");
// }else if (score<=70 && score>=0){
//     console.log("Fail");
// }else{
//     console.log("Invalid score")
// }

// ----------------------------------------------------------------------
// The "Discount Ninja"

// const reqLine = require("readline-sync");
// let age = reqLine.questionInt("Enter your age: ");
// let MC = reqLine.question("Do you have a Membership Card? (true/false): ");

// if (age>=60 || MC==="true"){
//     console.log("Discount Applied!");
// }else{
//     console.log("Full price!");
// }
// -------------------------------------------------------------------------------
// nullish coalesching

// let name;
// let result = name??"sathish";
// console.log(result);

