const reqLine = require("readline-sync");

let name = reqLine.question("Enter name: ");
let id = reqLine.questionInt("Enter ID: ");
let sub1 = reqLine.questionInt("Enter sub1 mark: ");
let sub2 = reqLine.questionInt("Enter sub2 mark: ");
let sub3 = reqLine.questionInt("Enter sub3 mark: ");
let sub4 = reqLine.questionInt("Enter sub4 mark: ");
let sub5 = reqLine.questionInt("Enter sub5 mark: ");
let total = (sub1+sub2+sub3+sub4+sub5);
let percentage = (total/5);
console.log("Name: ", name);
console.log("ID: ", id);
console.log("Total of all subjects: ", total);
console.log("Percentage of marks: ", percentage+"%");