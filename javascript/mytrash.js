
//var, let, const
//string, numbers, boolean, undefined, symbol

const name = "alex";
//const age = 21;
const iscool = true;
const x =null;
const y = undefined;
let z;


//templet string
//console.log(`my name is ${name} and i am ${age} years old`)

const s = 'hello world';

console.log(s.toUpperCase());

//arrays
//arrays are 0 based

const numbers = new Array(1, 2, 3, 4, 5);

numbers.push('mangos');
numbers.unshift('lmao');
numbers.pop();

console.log(Array.isArray(numbers));

console.log(numbers);

//object literals

const person = {
    firsname: 'alex',
    age: 21,
    hobbies: ['league', 'movies', 'sports'],
    address: {
        street: 'lul',
        city: 'kek',
        state: 'hehe xd'
    }
}

person.email = 'lol@lel.com'

const {firsname, address: {city}} = person;

console.log(person);
console.log(person.hobbies[1]);
console.log(person.address.city)

const todos = [
    {
        id: 1,
        text:'kms',
        isComplete: true
    },
    {
        id: 2,
        text:'aaaa',
        isComplete: true
    },
    {
        id: 3,
        text:'reee',
        isComplete: false
    },
];

console.log(todos[1].text)
//jason

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//for

for(let todo of todos){
    console.log(todo.text);
}

// forEach, map, filter
todos.forEach(function(todoo){
    console.log(todoo.text);
})

const todoText = todos.filter(function(todooo) {
    return todooo.isComplete === true;
}).map(function(todooo) {
    return todooo.text;
})
console.log(todoText);

//functions

function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums(5,4));

const addNumss = (num1 =2, num2 = 4) => num1 + num2;

console.log(addNumss(2,2))

//class

class personn {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getBirthYear() {
        return `${this.dob.getFullYear()}`;
    }
}

//instantiate object
const person1 = new personn('alex', 'keklord', '20-07-1998');

console.log(person1.getFullName())