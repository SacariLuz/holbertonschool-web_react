interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: '',
    lastName: '',
    age: 20,
    location: '',
};

const student2: Student = {
    firstName: '',
    lastName: '',
    age: 25,
    location: '',
};

// Almacena students en un array
const studentsList: Student[] = [student1, student2];
