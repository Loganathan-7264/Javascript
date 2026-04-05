// let a=89;

// if (a>=90 && a<=100){
//     console.log("Grade A");
// }else if(a>=80 && a<90){
//     console.log("Grade B");
// }else if(a>=70 && a<80){
//     console.log("Grade C");
// }else if (a<69 && a>=0){
//     console.log("Fail");
// }else{
//     console.log("Invalid")
// }

// Ternary operator
// a (cond)? "true block" : "false block"
// let a = 22;
// let result = (a>=18)? "Eligible for vote" : "Not eligible for vote";
// console.log(result);

// nullish coaliching
// a = b??"value";
let name=null;   
console.log(typeof(name));
let result=name??true;
console.log(result)