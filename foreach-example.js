import { myList } from "./list-payload.js";

let somedAge = 0;

myList.forEach((element) => {
    somedAge += element.age;
});

const averageAge = somedAge/myList.length;

console.log(myList);
console.log(`The sum of all ages is: ${somedAge}`);
console.log(`The average of all ages is: ${averageAge}`);
