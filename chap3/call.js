var callerObj = {
    name: "jon"
};
function checkMyThis(age) {
    console.log("what is my this: ".concat(this));
    console.log("Do I have an name? ".concat(this.name));
    this.age = age; // set the age of the this for the particualar object that will be called. 
    console.log("What's my age? ".concat(this.age));
}
checkMyThis(3); // a syntax error: expected an argument, but got none. 
checkMyThis.call(callerObj, 25);
