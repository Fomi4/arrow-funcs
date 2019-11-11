// Write a function nameValidator which takes an array of strings and returns only those which have length <= 7
// const emailValidator = names => [];

let names = ['Name5', 'Name_6', 'Name_77', 'Name_888', 'Name_9999'];
let emailValidator = names.filter(names => names.length <= 7);

console.log(emailValidator);