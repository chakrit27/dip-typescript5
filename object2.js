var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var std1 = new Student(); //std1 object is heap memory
var std2 = new Student(); //std2 object is heap memory
// console.log(std1);
std2.firstName = "Steav";
std2.lastName = "Job";
console.log("".concat(std1.firstName, " ").concat(std1.lastName));
console.log("".concat(std2.firstName, " ").concat(std2.lastName));
