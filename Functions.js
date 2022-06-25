// Constructor Function

/* 
    Note :- Important Point While Using Constructor Function
    1. Empty Object is Created and "this" Value is Assigned.
    2. When Function Execute, Value of "this" is Modified.
    3. Value of "this" is Returned.
*/
function User(name, age) {
    this.name = name;
    this.age = age;
    this.printInfo = function() {
        console.log(`Name : ${this.name}, Age : ${this.age}`);
    }
}

let ajay = new User("Ajay", 23);
let tanu = new User("Tanu", 19);
console.log(ajay);
console.log(tanu);

// Optional Chaining
let user = {
    fullName: "Ajay",
    // address: {
    //     street: "Raj Nagar",
    //     city: "GZB",
    //     state: "UP"
    // }
}
let result = user?.address; // Return undefined If Address is Not Present
console.log(result);

// Some Fun Check
console.log(null === undefined); // false, because of Strict Equality Check
console.log(null == undefined); // true, because of Non-Strict Equality Check

// Rest and Spread Operator
function checkRest(...rest) {
    let sum = 0;
    for(let e of rest) { sum += e; }
    console.log(sum);
}
checkRest(1,2,5,3,4);

function checkSpread(spread) {
    console.log(Math.max(...spread));
}
checkSpread([1,5,2,4,3]);

// Prototypes, Inheritance
/* 
    In JavaScript Object has a Special hidden Property "prototype" that can either be null or reference of another object.

    When we try to Read a property from an Object and it is Missing, JavaScript Automatically Take it from "prototype" this is Prototypal Inheritance.

    The Value of __proto__ either can be null or object.

    Difference between __proto__ and prototype => __proto__ is historical getter/setter for prototype

    __proto__ is Outdated and is not Used instead of this we can use Object.getPrototypeOf/Object.setPrototypeOf.

    Note :- Value of "this" is not Affected By setting prototype.

*/