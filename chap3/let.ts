namespace let{

    // not block scoped or global scoping       
    let val1 = 1;
    val1 = 2;

    if (true) {
        let val2 = 3;
        val2= 4; // update val1 to 2
    }

    console.log(val1);
    // console.log(val2) // failing due to block-local scoping


}