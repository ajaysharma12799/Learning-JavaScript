// Basic Class

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         console.log("Person Constructor");
//     }
//     showInformation() {
//         console.log(this.firstName, this.lastName);
//     }
//     static designation() {
//         console.log("I am Working as SDE at Rhym.io");
//     }
// }

// let obj = new Person("Ajay", "Sharma");
// obj.showInformation();
// Person.designation();

// Properties, Private Variables, Getters & Setters
// class Person {
//     // General Properties
//     firstName = "Ajay";
//     lastName = "Sharma";

//     // Private Properties
//     #salary = 45000;
    
//     // Getters & Setters
//     getSalary() { // Getter
//         return this.#salary;
//     }
//     setSalary = (salary) => { // Setter
//         this.#salary = salary;
//     }
// }

// let obj = new Person();
// console.log(obj.firstName);
// console.log(obj.lastName);
// obj.setSalary(50000);
// console.log(obj.getSalary());

// Inheritance
// class Fruits {
//     constructor() {
//         console.log("Fruit Class Constructor");
//     }
//     info() {
//         console.log("Fruit Information");
//     }
// }

// class Mango extends Fruits {
//     constructor() {
//         super();
//         console.log("Mango Class Constructor");
//     }
//     info() {
//         console.log("Mango Information");
//     }
// }

// let obj1 = new Fruits();
// let obj2 = new Mango();
// obj2.info();