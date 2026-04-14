//sum of digit    1234   -  1+2+3+4  = 10




// let num=1234;
// let sum=0;
//                                // 123      123.4
// for(num  ; num>0  ;num=parseInt(num/10)){


//     let lastDigit=num%10;      //4
//     sum=sum+lastDigit          //0+4   =4


// }
// console.log(`sum of the digit ${sum}`);




//1234     1234>0   true     lastDigit=4    sum=0+4  sum=4    num=123
//123      123>0    true     lastDigit=3    sum=4+3  sum=7    num=12
//12       12>0     true     lastDigit=2    sum=7+2  sum=9    num=1
//1        1>0       true    lastDigit=1    sum=9+1  sum=10   num=0.
//       X








//anything that enclosed within   =  " " /  ' ' /  ` `


//uppercase
// let name1="automation";
// let name2=name1.toUpperCase();
// console.log(name2);


//lowercase
// let name1="AUTOMATION";
// let name2=name1.toLowerCase();
// console.log(name2);


//trim
// let comp="    Automation Training    ";
// let comp1=comp.trim();
// console.log(comp1);


// let comp="    Automation Training    ";
// let comp1=comp.trimStart();
// console.log(comp1);




// let comp="    Automation Training    ";
// let comp1=comp.trimEnd();
// console.log(comp1);


//replace
// let language="javascript is a programming  javascript lang";
// // let lang=language.replace("javascript","js");
// let lang=language.replace(/Javascript/i,"js");
// console.log(lang);


//replacaAll
// let language="javascript is a programming  javascript lang";
// // let lang=language.replaceAll("javascript","js");
// let lang=language.replace(/Javascript/gi,"js");
// console.log(lang);


// let lang="javascript";
// let lang1=lang.replace('a','#');
// console.log(lang1);


// let lang="javascript";
// let lang1=lang.replaceAll("a","#");
// console.log(lang1);


//includes
// let comp="Auto-mation is a training mate testing";
// let comp1=comp.includes("Auto");
// console.log(comp1);




//    123456
// let a="hellow ";
// console.log(a.length);




//     012345  - index value
// let a="Hellow world";
// console.log(a);
// console.log(a.charAt());
// console.log(a.charAt(3));
// console.log(a.charAt(a.length-1));


//
// let a="Hellow world";
// console.log(a.indexOf("o"));
// console.log(a.lastIndexOf("o"));


// let a="hellow";
// console.log(a[7]);
// console.log(a.charAt(7));




// let a="automation";
// a.substring(0,4);
// a.substring(4,0);
// let a1=a.substring(-3); //0
// console.log(a1);


//     01234         +ve indexing
// let a="automation";
// //                -3-2-1   -ve indexing
// console.log(a.slice(0,4));    //auto
// console.log(a.slice(4,0));    //" "  cant able to swap  
// console.log(a.slice(-6));     //allow -ve indexing




// let ins="Javascript playwright frameworks";
// let ins1=ins.split("a");
// console.log(ins1);




// let sentence = "Hello World";
// let words = sentence.split(" ");
// //  0    1  - index
// // [Hello,World]


// console.log(words[1]);


// let sentence="automate";
// // let a=sentence.replace("a","A");
// let a= sentence[0].toUpperCase()+sentence.slice(1);
// console.log(a);
