let number=[10,55,23,77,66,14,33,89,3];

let small=number[0];

for (i=1; i<number.length;i++){
    if(number[i]<small){
        small=number[i];
    }
}
console.log(`smallest number: ${small}`);