// Switch Case

// switch(expression){
//     case:
//         // statement
//         // break
//      default:
            // statement
            // break
// }

const personName="MANI";

switch(personName.toLowerCase()){
    case "sathish":
        console.log("from TCS");
        break;
    case "loga":
    case "mani":
        console.log("from google");
        break;
    default:
        console.log("Invalid name");
}