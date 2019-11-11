
// Write a function that takes an array of people (objects) and removes those which have age < 18
// Example:
// let objects = [
//   {
//     name: 'Steve',
//     age: 11
//   },
//   {
//     name: 'Jack',
//     age: 20
//   },
//   {
//     name: 'Kate',
//     age: 17
//   },
//   {
//     name: 'Alfred',
//     age: 30
//   }
// ];
// The function should keep only Jack and Alfred.

// const filterAges = people => [];

let objects = [
  {
    name: 'Steve',
    age: 11
  },
  {
    name: 'Jack',
    age: 20
  },
  {
    name: 'Kate',
    age: 19
  },
  {
    name: 'Alfred',
    age: 30
  }
];

let filterAges = objects.filter(objects => objects.age > 18);

console.log(filterAges);