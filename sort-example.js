import { myList } from "./list-payload.js";


const listOrderByAge = [...myList];
listOrderByAge.sort((before, after) => {
    if(before.age < after.age)
    {
        return -1;
    }
    else if(before.age > after.age)
    {
        return 1;
    }
    return 0;
});

const listOrderByName = [...myList];

listOrderByName.sort((before, after) => {
    if(before.name.toUpperCase() < after.name.toUpperCase())
    {
        return -1;
    }
    else if(before.name.toUpperCase() > after.name.toUpperCase())
    {
        return 1;
    }
    return 0;
});


console.log('Original List:')
console.log(myList);

console.log('List Order By Age:')
console.log(listOrderByAge);

console.log('List Order By Name:')
console.log(listOrderByName);