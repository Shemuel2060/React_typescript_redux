var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var spreadArray;
(function (spreadArray) {
    var a = [1, 2, 3];
    var b = [4, 5, 6];
    var c = __spreadArray(__spreadArray([], a, true), b, true); /*creates a new array containing
                both a and b but distinct  and
                independent from them*/
    var d = a.concat(b); /* creates a new array which is a
                combination of a and b, but distincit and
                independent from them*/
    console.log('c before changing a: ' + c);
    console.log("d before changing a: ".concat(d));
    console.log('\nTO SHOW THAT c and d are indepedent from a and b even when changed');
    a.push(10); // add new value to a
    console.log("new a: ".concat(a));
    console.log("c after changing a: ".concat(c));
    console.log("d after changing a: ".concat(d));
})(spreadArray || (spreadArray = {}));
