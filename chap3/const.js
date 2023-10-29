var constants;
(function (constants) {
    var val1 = 1;
    // val1 = 2;  // compile error
    // const val2 = [];  // val2 is of type never
    // creating an empty array
    var val2 = []; // create empty string array
    val2.push("hello");
    console.log(val2);
})(constants || (constants = {}));
