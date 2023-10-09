// =============== with JavaScript's dynamic typing===============
// let a = 5;
// let b = '6';
// console.log(a + b);
// tsc string-vs-number.ts to compile it. It produces string-vs-number.js file
// then to run the .js version: node string-vs-number.js
/*
 The result is a concatenation of the number and string, which may not always
 be the desired operation, especially with numbers...
*/
/**
 * ERROR
 * tsc : The term 'tsc' is not recognized as the name of a cmdlet, function, script file, or operable
    program.
SOLUTION
 install typescript globally by running
    npm install typescript@latest -g  or
 prefix tsc with npx by running
    npx --package typescript tsc --init
 */
// =============== with Typescript's static typing===============
var a = 5;
// let b: number = '6'; // a syntax error: Tpe string is not assignable to type number
// the correct one is
var b = 6;
console.log(a + b);
