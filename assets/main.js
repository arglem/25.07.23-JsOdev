
const student = {
    name: name,
    surname : surmane,
    age: age,
    gender: gender,
    classroom:''

};

function addStudent() {
    const name = document.querySelector('.inputName').value;
    const surname = document.querySelector('.inputSurname').value;
    const age = document.querySelector('.inputAge').value;
    const gender = document.querySelector('.inputGender').value;
    const classroom = document.querySelector('.inputClass').value;

    const student = {
        name: name,
        surname: surname,
        age: age,
        gender: gender,
        classroom: classroom
    };

    students.push(student);
    updateStudentList();
}

btns.forEach(function(btn,i) {
    btn.addEventListener('click', add);
    
});


function editStudent(i) {
    const student = students[i];
    const newName = prompt(' new name:', student.name);
    const newSurname = prompt('new surname:', student.surname);
    const newAge = prompt(' new age:', student.age);
    const newGender = prompt('new gender:', student.gender);
    const newClassroom = prompt(' new classroom:', student.classroom);

    student.name = newName || student.name;
    student.surname = newSurname || student.surname;
    student.age = newAge || student.age;
    student.gender = newGender || student.gender;
    student.classroom = newClassroom || student.classroom;

    updateStudentList();
}

function deleteStudent(index) {
    students.splice(index, 1);
    updateStudentList();
};

btns.forEach(function(btn,i) {
    btn.addEventListener('click', add);
    
});


students.push({
    name: 'Nildem',
    surname: 'Ertürk',
    age: 25,
    gender: 'Woman',
    class: 'Lab2',
});

students.push({
    name: 'Buse',
    surname: 'Kara',
    age: 26,
    gender: 'Woman',
    class: 'Lab1',
});












