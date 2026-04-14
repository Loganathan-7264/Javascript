// function output(result){
//     console.log(`Result is ${result}`);
// }

function calc(a,b,result){
    const value=a+b;
    result(value);
}
calc(5,10,function(value){
console.log("this is a callback function using anonymous function")
})