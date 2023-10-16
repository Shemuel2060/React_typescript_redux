if (true) {
    var val1 = 1;
}
function go() {
    var val2 = 2;
}

/* shows a compile error: cannot find name val2.
   since this is a global scope and val2 is in the 
   local scope of the function body. It is val1 which
   is in the global scobe as seen below*/

// console.log(val2); 

console.log(val1);

