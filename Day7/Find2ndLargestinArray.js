// let funcLargest=(arr)=>{
//     largest=arr[0];
//     for(let i=1; i<arr.length;i++ ){
//         if(arr[i]>largest){
//             largest=arr[i];
//         }
//     }
//     console.log(largest);

// }
// funcLargest([32,45,67]);

// let funcsecoundlargest=(arr)=>{
//     let arr2=[...arr].sort((a,b)=>(b-a));
//     console.log(arr2[1]);
// }
// funcsecoundlargest([56,23,45,89,66]);

let arr=[45,78,90,22,100];

smallest = Infinity;
SecoundSmallest = Infinity;

for (let i=0; i<arr.length;i++){
    let current=arr[i];
    if(current<smallest){
        SecoundSmallest=smallest;
        smallest=current;

    }else if (current<SecoundSmallest && current!==smallest){
        SecoundSmallest=current;
    }
}
console.log(SecoundSmallest);