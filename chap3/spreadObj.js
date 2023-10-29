var NamespaceA;
(function (NamespaceA) {
    class A {
        constructor() {
            this.aname = 'A';
        }
    }
    class B {
        constructor() {
            this.bname = 'B';
        }
    }
    // create instances of the two classes
    const a = new A();
    const b = new B();
    // the spread syntax
    const c = Object.assign(Object.assign({}, a), b); /*creates a new object c with
                    both the properties of a and b */
    // the Object.assign
    const d = Object.assign(a, b); /*get properties of b and
                    give them to a, and return a assigned to d. */
    // testing spread
    console.log('TESTING spread syntax');
    console.log(`new object created: ${c}`);
    console.log(c);
    console.log('\nTESTING the Object.assign() syntax');
    console.log(d);
    // demonstrating the changes that happen
    a.aname = 'Samuel';
    console.log("New unique object: " + c); // c is a new unique object
    console.log("d is actually the a object: " + d); // d is actually a. changes on a happen also in d
})(NamespaceA || (NamespaceA = {}));
