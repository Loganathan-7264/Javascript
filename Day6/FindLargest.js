let number=[10,55,23,77,66,14,33,89];

let largest=number[0];

for (let i=1; i<number.length; i++){
    if(number[i]>largest){
        largest=number[i];
    }
}
console.log(largest);