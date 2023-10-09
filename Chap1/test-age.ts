
interface User{ // interface - a kind of type in typescript
    name: string; // parameterName:its type
    age: number;
} // end of the interface definition - no functions, only attributes

function canDrive(usr: User) {
    console.log(`User is ${usr.name}`);

    // if above 16, then can drive
    if (usr.age >= 16) {
        console.log('allow to drive');
    } else {
        console.log('do not allow to drive');
    }
} // end of canDrive() function

const tom = {
    name: "Tom",
    age: 24
} // end of variable definition, tom

// call canDrive on tom
canDrive(tom); // this shows a syntax error...