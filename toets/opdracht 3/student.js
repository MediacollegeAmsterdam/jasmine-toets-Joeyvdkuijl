function Student(naam, studentId) {

    let obj = this;
    obj.name = naam + 'Hi';
    obj.id = studentId;
    obj.cijfers = [];
    obj.klas = klas;

    let objectValues = function () {
        console.log( obj.klas );
    }
    this.info = function() {
        objectValues;
    }
}

let student = new Student('myName', '0001', 'md2a');

// Hier moet je de variabele klas een waarde geven bijvoorbeeld MD2
// console.log(
//     /* Hier moet de variabele klas getoond worden */
//     student.klas
// )