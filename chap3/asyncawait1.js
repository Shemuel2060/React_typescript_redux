
/*
async tells the runtime this function will return a promise
and so should be handled asynchronously....
 */

async function delayedResult() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I completed successfully");
        }, 3000); /*function logic runs after 3 seconds... */
    });
}

(async function execAsyncFunc() {
    const result = await delayedResult(); /*wait for this function to finish and 
                                        then uses its output... below */
    console.log(`Waited for delayedResult() to give this result: ${result}`)
    
})(); /*IIFE - Immediately Invoked Function Expression - both 
        declares and executes the function. */