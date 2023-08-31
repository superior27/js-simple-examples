import { myList } from "./list-payload.js";


const existSomeoneOver18 = myList.some((element) => {
    return element.age >= 18;
});

const existSomeoneOver30 = myList.some((element) => {
    return element.age >= 30;
});

const existSomeoneOver60 = myList.some((element) => {
    return element.age >= 60;
});

const existSomeoneOver90 = myList.some((element) => {
    return element.age >= 90;
});

const alwaysInListOver18 = myList.every((element) => {
    return element.age >= 18;
});

const alwaysInListOver10 = myList.every((element) => {
    return element.age >= 10;
});


console.log('Original List:')
console.log(myList);

console.log(`Exist someone over 18: ${existSomeoneOver18}`);
console.log(`Exist someone over 30: ${existSomeoneOver30}`);
console.log(`Exist someone over 60: ${existSomeoneOver60}`);
console.log(`Exist someone over 90: ${existSomeoneOver90}`);
console.log(`All people in list have more 18 years? ${alwaysInListOver18}`);
console.log(`All people in list have more 10 years? ${alwaysInListOver10}`);
