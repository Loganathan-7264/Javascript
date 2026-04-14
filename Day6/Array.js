//Array  - To store multiple values in single reference - []

const { title } = require("node:process");


//      0      1        2     - index value
// let a=["jai","arun", "ram"];
// console.log(a);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[5]);




// let arr=[23,"java",45.67,true]
// console.log(arr);


//push   - to add the value  last
// let num=[23,45,66];
// num.push(12);
// console.log(num);


//unshift   - to add the value   - front
// let num=[23,55,33];
// num.unshift(10);
// console.log(num);


//pop - to remove the value from last
// let num=[3,4,5];
// num.pop();
// console.log(num);


//shift   -  to remove the value from frst
// let num=[3,4,5];
// num.shift();
// console.log(num);


//length
// let num=[23,55,67,34];
// console.log(num.length);




//includes
// let batch=["dec25" ,"feb26","mar26"]
// let batch1=batch.includes("dec25")
// console.log(batch1);


//indexOf
// let batch=["dec25" ,"feb26","mar26","dec25"]
// let batch1=batch.indexOf("dec25");
// console.log(batch1);


//lastIndexOf
// let batch=["dec25" ,"feb26","mar26","dec25"]
// let batch1=batch.lastIndexOf("dec25");
// console.log(batch1);


//slice
// let num=[34,55,77,33,22,11];
// let slc=num.slice(1,4);    
// console.log(slc);


//join
// let a=["java", "script" , 23 ,true];
// let str=a.join(" ");
// console.log(str);


//splice
// let num=[23,45,12,67,76,89];
// num.splice(2,3);
// console.log(num);




// let num1=[23,45,12,67,76,89];
// let del=num1.splice(2,0,"java");
// console.log(del);
// console.log(num1);


// let num1=[23,45,12,67,76,89];
// let del=num1.splice(2,1,"java");
// // console.log(del);
// console.log(num1);


//spread ... operator
// let a=[1,2,3];
// let b=["  "];
// let d=[5,6,7];
// let c=[...a,...b,...d];
// console.log(c);

// let a=[4,1,7,9,2,10,12,111,222];
// let a1=a.sort();
// console.log(a1);

// Sort using for loop
// let a = [3,5,"loga",67.87,true];

// for (i=0; i<a.length; i++){
//     console.log(a[i]);
// }

// For loop usin 'in'

// let a = [3,5,"loga",67.87,true];

// for (let x in a){
//     console.log(a[x]);
// }

// for loop using 'of'

// let a = [3,false,5,"loga",67.87,true];

// for (let x of a){
//     console.log(x);
// }

// const detail = {"name":"loga","age":78,"city":"chennai"}

// console.log(detail.name);
// console.log(detail.age);
// console.log(detail.city);

// for (x in detail){
//     console.log(detail[x]);
// }

// console.log(detail);

// const readline= require("readline-sync");
// const details={"name":"","Id":"","Subject_1":""}
// const name = readline.question("Enter the student name:");
// const Id= readline.questionInt("Enter the student ID:");
// const Subject_1= readline.questionInt("Enter the Language1 mark:");

// console.log("Student name is: "+details[name]);
// console.log("Student ID is: "+details.Id);
// console.log("Language1 mark is: "+details.Subject_1);

// let a=["jai","arun", "ram"];
// a.push("loga");
// console.log(a);
// // console.log(a.indexOf("loga"));
// console.log(a.includes("mani"));

// array of...loop

// let results = ["Pass", "Fail", "Pass", "Pass", "Fail"];

// for (let result of results){
//     if(result==="Fail"){
//         console.log(`Found a bug!`);
//     }
// }

//  for....in loop
// let testCase = {
//     id:101,
//     title:"Login Validation",
//     priority:"High"
// }

// for(x in testCase){
//     console.log(`Field ${x} id has value ${testCase[x]}`);
//     console.log(`Field ${x} title has value ${testCase[x]}`);
//     console.log(`Field ${x} priority has value ${testCase[x]}`);
// }

// let testCase = {
//     id: 101,
//     title: "Login Validation",
//     priority: "High"
// };

// for (let x in testCase) {
//     // x will be "id", then "title", then "priority"
//     console.log(`Field ${x} has value ${testCase[x]}`);
// }

let arr=[10,34,11,44,45];
let arr1= (a,b)