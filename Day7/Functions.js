// // named function

// function fname(){
//     console.log("Named function");
// }

// fname();

// // annonymous function

// let ann=function (){
//     console.log("Annonymous function");
// }

// ann();

// // Arrow function
// let arr=()=>{
//     console.log("Arrow function");
// }
// arr();

// function detail(Name,ID){
//     console.log(`Name is ${Name}, Id is ${ID}`);
// } 
// detail("sathish",89);

// function reverString(str){
//     let revstr="";
//     for (let i=str.length-1; i>=0; i--){
//         revstr=revstr+str[i];
//     }
//     console.log(revstr);
// }
// reverString("loga");

let tot=(a,b)=>{
    return a+b;
}
console.log(tot(4,5));