class A{
    name: string = "A";
    go(){
        console.log(this.name);
    } // end:: go() method
} // end:: class A

class B{
    name: string = "B";
    go(){
        console.log(this.name);
    } // end:: go() method
} // end:: class B

const a = new A();
a.go(); // output: prints A to console

// const b = new B();
// b.go(); // output: prints out B to console

const b = new B();
b.go = b.go.bind(a);  // first bind to what you want
b.go();  // then call the function you have bound. output: prints A to console.