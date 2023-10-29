/**
 * The function returns an object containing
 * employee details... * 
 * @param {number} id 
 * @returns {object}employee object.
 */
function getEmployeeById(id) {
    return {
        name: "John",
        age: 25,
        address: "Blocked str",
        country: "Uganda"
    }
}

/**
 * The function returns an array containing the employee
 * id and work location info
 * @param {number} id 
 * @returns {any[]} work location info
 */
function getEmployeeWorkLocationInfoById(id) {
    return [
        id,
        'Closed str',
        'Uganda'
    ]
}

// object destructuring
/** Get only the wanted info from the object */
const { name: fullName, age } = getEmployeeById(90);/* We give an alias
                         fullName to the name field in the object. We
                         access only two properties, of the four since
                         they are what we want. */
console.log('employee', '\nname: ', fullName, '\nage: ', age);

const [,street,country] = getEmployeeWorkLocationInfoById(99);/*udr comma to 
                                        separate between elements and also 
                                        to indicate some fields left out.. */
console.log('\n');
console.log(street,':', country);