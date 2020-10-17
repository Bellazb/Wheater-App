// store data in local storage
// localStorage.setItem('name','bella');
// localStorage.setItem('age', 24);


// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);


// updating data
localStorage.setItem('name', 'cena');
localStorage.age = '40';

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);

// deleting data from local storage

//remove single key (item) in local storage
// localStorage.removeItem('name');

//remove all item in local storage
//doesnt take any key, just clear all of the stuff
localStorage.clear();

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name);

// stringifying & parsing data

const todos = [
    {text: 'play mario', author: 'shaun'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'luigi'}
];

//turn the array into string (valid JSON) good format, to store in local storage

// console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));