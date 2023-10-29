
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I can continue to execute more parts");
        // reject("Unknown error occurred")
    },500)
})

myPromise
    .then(done => {
        console.log("I ran successfully and I'm done");
    })// runs only when the promise is resolved .. as here..
    .catch(err => {
        console.log(`I was rejected because of this error: ${err}`)
}) /*runs only when the promise is rejected... reject() is uncommented.
    The error is defined in the reject() call. */

    /*Promises become very complex when we have very many chained then() and
    catch()...For this reason, we have async await calls */