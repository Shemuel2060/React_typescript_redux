
/*
this is lost when an object's function is called outside the context
of the object. This is not always desirable, and it may lead to 
confusion. Here we have some suggested solves:
1. using a wrapper function to call the function
2. using function binding with the bind() method. 
*/
let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}`);
    }
}

    // console.log('\nPROBLEM:this LOST')
    // setTimeout(user.sayHi, 1000); // Hello, undefined! -- thisis lost is


    // setTimeout(function () {
    //     console.log('SOLUTION:USING WRAPPER FUNCTION');
    //     user.sayHi();
    // }, 2000);

let user2 = {
    firstName: "Peter"
    }

const func = () =>{ // void - implicit return type
    console.log(this.firstName);
}

let funcUser = func.bind(user2); /*bind the this context of the 
                                user object to the functions. 
                                funcUser is a copy of func but 
                                with a fixed this context.
                                 */
console.log(`\nSOLUTION: FUNCTION BINDING TO A this CONTEXT`)
funcUser(); // like a direct call of func()
