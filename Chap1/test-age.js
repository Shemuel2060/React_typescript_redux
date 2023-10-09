function canDrive(usr) {
    console.log("User is ".concat(usr.name));
    // if above 16, then can drive
    if (usr.age >= 16) {
        console.log('allow to drive');
    }
    else {
        console.log('do not allow to drive');
    }
} // end of canDrive() function
var tom = {
    name: "Tom",
    age: 24
}; // end of variable definition, tom
// call canDrive on tom
canDrive(tom); // this shows a syntax error...
