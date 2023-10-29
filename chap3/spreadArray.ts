namespace spreadArray{
    const a = [1, 2, 3];
    const b = [4, 5, 6];

    const c = [...a, ...b]; /*creates a new array containing
                both a and b but distinct  and 
                independent from them*/
    
    const d = a.concat(b); /* creates a new array which is a
                combination of a and b, but distincit and 
                independent from them*/
    
    console.log('c before changing a: ' + c);
    console.log(`d before changing a: ${d}`);

    console.log('\nTO SHOW THAT c and d are indepedent from a and b even when changed')
    a.push(10); // add new value to a
    console.log(`new a: ${a}`);
    console.log(`c after changing a: ${c}`);
    console.log(`d after changing a: ${d}`);



}