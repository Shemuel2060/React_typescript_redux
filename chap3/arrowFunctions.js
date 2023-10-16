var myFunction = function (message) {
    console.log(message);
};
myFunction("hello, Uganda!");
var func = function () { return console.log("Me...me...me...me...NOW"); }; /*single line arrow function
                                no return value.
                                */
var func1 = function () { return ({ name: 'Samuel Me...me..' }); }; /*returns an object. The  parentheses
                            only needed because of the returned object.
                             */
var func2 = function () {
    var val = 20;
    return val; // explicitly stated return. 
}; /*multiline arrow functions. Braces a must */
// invoking the last three forms
// console.log(func());
console.log(func1());
console.log(func2());
