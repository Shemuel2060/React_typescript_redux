/*Consider an array of objects of people from
which we want to get the first instance of the
person wih name =jon */
const people = [
    { name: 'jon', age: 20 },
    { name: 'linda', age: 22 },
    { name: 'jon', age: 44 },
];
const firstjonPerson = people.find(person => {
    return person.name === 'jon';
});
console.log(firstjonPerson);
