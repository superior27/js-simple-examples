import { myList } from "./list-payload.js";


const firstMiddleAgeElement = myList.find((element) => {
    if(element.age >= 30)
    {
        return element;
    }
});


console.log(myList);
console.log(`The first middle age person, in my list is: ${firstMiddleAgeElement.name}, with ${firstMiddleAgeElement.age} years!`);

