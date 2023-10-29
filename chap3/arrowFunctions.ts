const myFunction = (message:string): void => {
    console.log(message);
}

myFunction("hello, Uganda!");

const func = () => console.log("Me...me...me...me...NOW");/*single line arrow function
                                return value is undefined. 
                                */
const func1 = () => ({ name: 'Samuel Me...me..' }); /*returns an object. The  parentheses
                            only needed because of the returned object.
                             */
const func2 = () => {
    const val = 20;
    return val; // explicitly stated return. 
}/*multiline arrow functions. Braces a must */

// invoking the last three forms

// console.log(func());
console.log(func1());
console.log(func2());