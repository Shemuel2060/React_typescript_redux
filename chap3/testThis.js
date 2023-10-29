function MyFunction() {
    console.log(this);
}
// MyFunction(); // called directly - scope parent: Node's global object
var test = new MyFunction(); /* creating a new object using
                        new keyword, the this object becomes
                        that object instance.*/
