import { myList } from "./list-payload.js";


const persons = myList.reduce((acc, element) => {
    return {
        ...acc,
        [element.name]: {
            age: element.age
        }
    }
}, {});


console.log(myList);
console.log(persons);

