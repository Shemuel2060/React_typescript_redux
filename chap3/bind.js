var A = /** @class */ (function () {
    function A() {
        this.name = "A";
    }
    A.prototype.go = function () {
        console.log(this.name);
    }; // end:: go() method
    return A;
}()); // end:: class A
var B = /** @class */ (function () {
    function B() {
        this.name = "B";
    }
    B.prototype.go = function () {
        console.log(this.name);
    }; // end:: go() method
    return B;
}()); // end:: class B
var a = new A();
a.go(); // output: prints A to console
// const b = new B();
// b.go(); // output: prints out B to console
var b = new B();
b.go = b.go.bind(a); // first bind to what you want
b.go(); // then call the function you have bound.
