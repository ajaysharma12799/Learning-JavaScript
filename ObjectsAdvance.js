// Object Oriented Programming
let obj1 = {}; // Creating Object Using Object Literals
let obj2 = new Object(); // Creating Object Using Object Constructor
console.log(obj1);
console.log(obj2);

let targetObj = {a: 1, b: 2};
let sourceObj = {b: 4, c: 5};
let returnedObject = Object.assign(targetObj, sourceObj); // Copy Source Object Value and Modify Them into Target Object and Return Target Object With Modified Values;
console.log(returnedObject);

let person = {
    fullName: function () {
        console.log(`Person Name : ${this.name}`);
    }
};

let chris = Object.create(person); // Creating Object Using Object.create() Method
chris.name = "Chris Evans";
chris.fullName();
console.log(chris);

let objEntries = Object.entries(returnedObject); // Return Array of Containing Key, Value Pair of All Object Elements.
console.log(objEntries);

let objKeys = Object.keys(returnedObject); // Return an Array Containing Keys
console.log(objKeys);

let objValues = Object.values(returnedObject); // Return an Array Containing Keys
console.log(objValues);

console.log(returnedObject.constructor); // Return Function That Create Object Prototype
console.log(returnedObject.__proto__); // Point to That Object Which is Used as Prototype When Object Was Being Created
console.log(returnedObject.hasOwnProperty("a")); // Return Boolean Value If Given Value is Current Object Property.

// Some Extra Fun Stuff
// let o1 = new Object(null);
// let o2 = new Object(undefined);
// console.log(o1);
// console.log(o2);

// delete Operator > Used to Delete Property From an Object
let user = {
    name: "Ajay",
    age: 23,
    isAdmin: true,
    sex: "Male"
}

let secondUser = user;
console.log(user === secondUser); // Return True Because Both Object Share Same Reference.

// console.log(user);
// delete user.sex;

// let name = "name";
// console.log(name in user); // To Check Property in Object We Can Use in Keyword

// for(let element in user) { // Iterate Over Object and Print Key
//     console.log(element);
// }

/* 
    const Objects and Arrays Can be Modified but Can't be Re-Created.
*/

// this Keyword
let abc = {
    name: "Ajay"
};

let bca = {
    name: "Sharma"
}

function sayHi() {
    console.log(`Name : ${this.name}`);
}

abc.f = sayHi;
bca.f = sayHi;

abc.f(); // this == Ajay
bca.f(); // this == Sharma


function checkThis() {
    console.log(this);
    /* 
        Note :- In Non-Strict Mode "this" Will Refer to Global Object Which is Windows Object, But in Strict Mode "this" Will Refer to Undefined.
    */
}
checkThis();

// Note :- Arrow Function Does't Have "this" Keyword
let checkArrowThis = () => {
    console.log(this); // Refering to Global Window Object
}
checkArrowThis();
