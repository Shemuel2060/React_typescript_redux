
/**
 * Sets are collections of objects that are unique. Even when there
 * repeating objects, it ignores the rest and chooses one of them. 
 */

const student_ages_array = [ // the array contains repeated ages
    14, 13, 15, 14, 13
] // end: student_ages array

// make a set from the array data. It ignores repeated data
const student_ages_set = new Set(student_ages_array);

console.log(student_ages_array); // output [ 14, 13, 15, 14, 13 ]
console.log(student_ages_set); // output Set(3) { 14, 13, 15 }

//  add an element to the set
student_ages_set.add(10); 
console.log(student_ages_set); // output: Set(4) { 14, 13, 15, 10 }

// check whether set has a 14;
console.log(student_ages_set.has(14)); // output: true

// check whether set has a 3
console.log(student_ages_set.has(3)); // output: false

// get the size of the set after adding the new element
console.log(student_ages_set.size); // output: 4


