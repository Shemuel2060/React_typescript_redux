
function callCallbackOnceMyLogicIsDone(size, callback) {
    //  callback(); // it can run first
    var reducer = 0;
    for (var i = 1; i < size; i++){
        reducer = Math.sin(reducer * i);
        //  callback(); // it can be part of the logic
        console.log(`computational reducer: ${reducer} `);
    } // end:: logic of the main function

    // then call the callback() - which is another function
    callback(); // it can run at the end of the main logic
}

// function ImAcallback(){
//     console.log("I am a callback function");
// } // if passed to the main, it is not seen as a callback function. WHy?


// 
callCallbackOnceMyLogicIsDone(10, function () {
    console.log('I am a callback function....The main logic is done, so am called');
});

