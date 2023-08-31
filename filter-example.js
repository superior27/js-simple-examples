import { myList } from "./list-payload.js";


const legalAgeList = myList.filter((element) => {
    if(element.age >= 18)
    {
        return element;
    }
});


console.log(myList);
console.log(`The people who are of legal age are:`);
console.log(legalAgeList);
