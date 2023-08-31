import { myList } from "./list-payload.js";


const phoneNumberList = myList.flatMap((element) => {
    return element.phone_number;
});


console.log('Original List:')
console.log(myList);

console.log('List with all phone numbers:')
console.log(phoneNumberList);