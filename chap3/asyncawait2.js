/*Make a call to a network resource to get some data
--- install the fetch API in the terminal as : 
        npm i node-fetch
*/



// const fetch = require('node-fetch');// ERROR: not supported

import fetch from 'node-fetch';/*ERROR: cannot use import outside module
                    What to do: To load an ES module, set "type":"module" 
                    in the package.json or use the .mjs extension */

(async function getData() {
    /*get response from the network API. We await because 
    we cannot continue without this data...  */
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/');
                                /* URL is a public API for pokemon characters
                                that requires no authentication...
                                */
    if (response.ok) { // check if data is got
        // convert it to a json object
        const result = await response.json();/*we await because we need this data 
                                                in json format to use it... */
        // print the result
        console.log(result);
    } else { // data not got
        console.log('Failed to get any data');
        
    }
    
})(); // IIFE - Immediately Invoked Function Expression

