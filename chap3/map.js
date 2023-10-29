/*Consider a class with students. The array represents
objects of each student with first name, last name and id.
Assuming we want to get all students with the same first name.
*/
var mapNamespace;
(function (mapNamespace) {
    const students = [
        { first_name: 'Esther', last_name: 'Naddumba', id: 1 },
        { first_name: 'Simon', last_name: 'Male', id: 2 },
        { first_name: 'Esther', last_name: 'Kitiibwa', id: 3 },
        { first_name: 'Melvin', last_name: 'Muganyizi', id: 4 },
        { first_name: 'Esther', last_name: 'Mutebi', id: 5 },
    ];
    const allstudents = students.map((student, index) => {
        //return student.first_name == 'Esther'; // [ true, false, true, false, true ]
        return `<p>${student.id}-->${student.first_name} ${student.last_name}</p>`; /*
                                                        returns an array with p-tag
                                                        elements. These can be used on the
                                                        webpage...  */
    });
    //console.log(firtnameEsther); // [ true, false, true, false, true ]
    console.log(allstudents);
})(mapNamespace || (mapNamespace = {}));
