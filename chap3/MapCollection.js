

const studentsMap = new Map(); // instantiates a Map object
/*add objects to the map. These can be arrays, objects, strings,
numbers or any data type - depending on the scenario*/

studentsMap.set('estherRose',{ firstName: 'Esther Rose', lastName: 'Naddumba', age: 14 });
studentsMap.set('esterKit',{ firstName: 'Esther', lastName: 'Kitiibwa', age: 13 });
studentsMap.set('danT',{ firstName: 'Daniel Trevor', lastName: 'Nsubuga', age: 14 });
studentsMap.set('melvM',{ firstName: 'Melvin', lastName: 'Muganyizi', age: 14 });
studentsMap.set('johnM',{ firstName: 'Johnson', lastName: 'Male', age: 13 });

console.log(studentsMap); /*output: Map(5) {
                                        'estherRose' => { firstName: 'Esther Rose', lastName: 'Naddumba', age: 14 },
                                        'esterKit' => { firstName: 'Esther', lastName: 'Kitiibwa', age: 13 },
                                        'danT' => { firstName: 'Daniel Trevor', lastName: 'Nsubuga', age: 14 },
                                        'melvM' => { firstName: 'Melvin', lastName: 'Muganyizi', age: 14 },
                                        'johnM' => { firstName: 'Johnson', lastName: 'Male', age: 13 }
                                        } */

console.log('\nGetting: ', studentsMap.get('estherRose')); // output: Getting:  { firstName: 'Esther Rose', lastName: 'Naddumba', age: 14 }

console.log(studentsMap.size); // output: 5

console.log(ages);

