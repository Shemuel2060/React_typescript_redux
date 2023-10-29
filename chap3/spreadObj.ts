namespace NamespaceA{
    class A{
        aname: string = 'A';
    }
    class B{
        bname: string = 'B';
    }

    // create instances of the two classes
    const a = new A();
    const b = new B();

    // the spread syntax
    const c = {...a , ...b }/*creates a new object c with
                    both the properties of a and b */
    
    // the Object.assign
    const d = Object.assign(a, b); /*get properties of b and 
                    give them to a, and return a assigned to d. */
    
    // testing spread
    console.log('TESTING spread syntax')
    console.log(`new object created: ${c}`)
    console.log(c)

    console.log('\nTESTING the Object.assign() syntax')
    console.log(d);

    // demonstrating the changes that happen
    a.aname = 'Samuel';
    console.log(c); // c is a new unique object
    console.log(d); // d is actually a. changes on a happen also in d
}