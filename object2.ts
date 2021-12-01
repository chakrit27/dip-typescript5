class Student{
    firstName: string;
    lastName: string;
}

let std1 = new Student(); //std1 object is heap memory
let std2 = new Student(); //std2 object is heap memory
// console.log(std1);
std2.firstName = "Steav";
std2.lastName = "Job";
console.log(`${std1.firstName} ${std1.lastName}`);
console.log(`${std2.firstName} ${std2.lastName}`);