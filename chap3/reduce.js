/*Assume i have ages of students and I would want to get
the average of all the ages.*/
var reduceNamespace;
(function (reduceNamespace) {
    const students = [
        { first_name: 'Esther', last_name: 'Naddumba', age: 14 },
        { first_name: 'Simon', last_name: 'Male', age: 13 },
        { first_name: 'Esther', last_name: 'Kitiibwa', age: 14 },
        { first_name: 'Melvin', last_name: 'Muganyizi', age: 13 },
        { first_name: 'Esther', last_name: 'Mutebi', age: 13 },
    ];
    const inittotal = 0;
    const average = students.reduce((accumulator, currStudent, currIdx) => {
        accumulator = accumulator + currStudent.age;
        return accumulator / (currIdx); /// computer and return average.
    }, inittotal);
    console.log(average);
})(reduceNamespace || (reduceNamespace = {}));
