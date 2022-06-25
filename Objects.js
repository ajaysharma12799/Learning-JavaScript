// Object Creation Using Braces
let person = {
    fName: "Ajay",
    lName: "Sharma",
    email: "ajay@gmail.com",
    favLanguages: ["C++", "Python", "JS"],
    salary: function() {
        return 35000;
    }
};
console.log(person); // Printing Complete Object
console.log(person.fName);
console.log(person["lName"]);
console.log(person.favLanguages);
console.log(person.salary());

// Object Creation Using Object Constructor
let animal = new Object();
animal.eat = "Food";
animal.speak = function() {
    return "Sound Depends";
}

console.log(animal);
console.log(animal.eat);
console.log(animal.speak());