import { myList } from "./list-payload.js";


const agesList = myList.map((element) => {
    return {age: element.age};
});

const namesList = myList.map((element) => {
    return {name: element.name};
})

const nameAndBirthYearList = myList.map((element) => {
    const birthYear = (new Date()).getFullYear() - element.age;
    return `${element.name} birth in ${birthYear}`;
})

console.log(myList);
console.log(agesList);
console.log(namesList);
console.log(nameAndBirthYearList);