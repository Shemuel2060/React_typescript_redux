namespace constants{
    const val1 = 1;
    // val1 = 2;  // compile error

    // const val2 = [];  // val2 is of type never

    // creating an empty array
    const val2: string[] = [];  // create empty string array
    val2.push("hello"); 

    console.log(val2);
}   