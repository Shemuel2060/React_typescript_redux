var _this = this;
/*
this is lost when an object's function is called outside the context
of the object. This is not always desirable, and it may lead to
confusion. Here we have some suggested solves:
1. using a wrapper function to call the function
2. using function binding with the bind() method.
*/
var user = {
    firstName: "John",
    sayHi: function () {
        console.log("Hello, ".concat(this.firstName));
    }
};
// console.log('\nPROBLEM:this LOST')
// setTimeout(user.sayHi, 1000); // Hello, undefined! -- thisis lost is
// setTimeout(function () {
//     console.log('SOLUTION:USING WRAPPER FUNCTION');
//     user.sayHi();
// }, 2000);
var user2 = {
    firstName: "Peter"
};
var func = function () {
    console.log(_this.firstName);
};
var funcUser = func.bind(user2); /*bind the this context of the
                                user object to the functions.
                                funcUser is a copy of func but
                                with a fixed this context.
                                 */
console.log("\nSOLUTION: FUNCTION BINDING TO A this CONTEXT");
funcUser(); // like a direct call of func()
