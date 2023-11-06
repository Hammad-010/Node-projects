var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var School = /** @class */ (function () {
    function School(name) {
        this.students = [];
        this.teachers = [];
        this.name = name;
    }
    School.prototype.addstudent = function (stdobj) {
        this.students.push(stdobj);
    };
    School.prototype.addteacher = function (teachobj) {
        this.teachers.push(teachobj);
    };
    return School;
}());
var Student = /** @class */ (function () {
    function Student(name, id, schoolname) {
        this.name = name;
        this.id = id;
        this.schoolname = schoolname;
    }
    return Student;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teacher;
}(Student));
var school1 = new School("city");
var school2 = new School("beaconhouse");
var student1 = new Student("Hammad", 17740, school1.name);
var student2 = new Student("Ahmed", 12840, school2.name);
var student3 = new Student("Haris", 18891, school2.name);
var teacher1 = new Teacher("Sikander", 1010, school1.name);
var teacher2 = new Teacher("Atif", 1011, school1.name);
var teacher3 = new Teacher("Faisal", 1101, school2.name);
school1.addstudent(student1);
school2.addstudent(student2);
school2.addstudent(student3);
school1.addteacher(teacher1);
school1.addteacher(teacher2);
school2.addteacher(teacher3);
console.log(school1);
console.log(school2);
