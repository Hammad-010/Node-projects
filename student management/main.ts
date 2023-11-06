class School {
    name : string;
    students : Student[]=[];
    teachers : Teacher[]=[];

    addstudent(stdobj:Student){
        this.students.push(stdobj)
    }
    addteacher(teachobj:Teacher){
        this.teachers.push(teachobj)
    }
    constructor(name : string){
        this.name = name;
    }
}

class Student {
    name : string;
    id : number;
    schoolname : string;

    constructor(name : string ,id : number ,schoolname : string){
        this.name = name;
        this.id = id;
        this.schoolname = schoolname;
    }
}

class Teacher extends Student {}

let school1 = new School("city");
let school2 = new School("beaconhouse");

let student1 = new Student("Hammad",17740,school1.name);
let student2 = new Student("Ahmed",12840,school2.name);
let student3 = new Student("Haris",18891,school2.name);

let teacher1 = new Teacher("Sikander",1010,school1.name);
let teacher2 = new Teacher("Atif",1011,school1.name);
let teacher3 = new Teacher("Faisal",1101,school2.name);


school1.addstudent(student1)
school2.addstudent(student2)
school2.addstudent(student3)

school1.addteacher(teacher1)
school1.addteacher(teacher2)
school2.addteacher(teacher3)

console.log(school1);
console.log(school2);














