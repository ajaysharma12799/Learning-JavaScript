// Function Borrowing is Concept that Can be achieved with the help of call, bind and apply Method of Vanilla JS

// let person1 = {
//     firstName: "Ajay",
//     lastName: "Sharma",
// };

// let person2 = {
//     firstName: "John",
//     lastName: "Doe"
// };

// let printFullName = function(country) {
//     console.log(this.firstName, this.lastName, country);
// }

// with call Method
// printFullName.call(person1, "India");
// printFullName.call(person2, "USA");

// with apple Method
// printFullName.apply(person1, ["India"]);
// printFullName.apply(person2, ["USA"]);

// with bind Method
// let person1_PrintFullName = printFullName.bind(person1, "India");
// let person2_PrintFullName = printFullName.bind(person2, "USA");

// person1_PrintFullName();
// person2_PrintFullName();

// Polyfill For Bind Method

Function.prototype.myBind = function(...args) {
    let obj = this;
    let name = args[0];
    let params = args.slice(1);
    return function(...args) {
        obj.apply(name, [...params, ...args]);
    }
};

let person = {
    firstName: "Ajay",
    lastName: "Sharma"
};

let printFullName = function(country, state) {
    console.log(this.firstName, this.lastName, country, state);
}

let prtFullName1 = printFullName.bind(person);
let prtFullName2 = printFullName.myBind(person, "USA");

prtFullName1("India", "UP");
prtFullName2("State", "Toxic")