function Student(naam, studentId, klas) {

    let obj = this;
    obj.name = naam + 'Hi';
    obj.id = studentId;
    obj.cijfers = [];
    obj.klas = klas;
}
let student = new Student('myName', '0001', 'md2a');
student.

// Hier moet je de variabele klas een waarde geven bijvoorbeeld MD2
console.log(
    student.klas
)