// Classes
class User {
    constructor() {
        console.log("This is User Constructor");
    }
    sayHi() {
        console.log("Say Hi, My Friend");
    }
}
let user = new User();
console.log(user);
user.sayHi(); // Calling Method From User Class

// Class Arrow Function have no super keyword

// Extending a Class
class Animal {
    constructor() {
        console.log("Animal Constructor");
    }
    eat() {
        console.log("Animal Eat");
    }
    walk() {
        console.log("Animal Walk");
    }
}

class Tiger extends Animal {
    static getDetails() {
        console.log("Hello Everyone I Hope You are Doing Great, I am Feeling Hungry");
    }
    static legs = 5;
    constructor() {
        super(); // Calling Parent Class Constructor
        console.log("Tiger Constructor");
    }
    eat() {
        super.eat(); // Calling Parent Class Method
        console.log("I am a Carnivorus Animal"); // Overriding Parent Class Method
    }
    legs() {
        console.log("I Have 4 Legs and I Feed on Prey");
    }
}

let tiger = new Tiger();
// Tiger.getDetails(); // Calling Static Method
// console.log(Tiger.legs);
// tiger.eat();
// tiger.walk();
// tiger.legs();
console.log(tiger instanceof Tiger); // Checking if tiger Object is an Instance of Tiger Class