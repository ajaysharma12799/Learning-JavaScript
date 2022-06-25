// There are Two Type of Currying Implementation
// 1. Using bind Method
// 2. Using Closure

// bind Method Implementation
const multiply = (a, b) => {
    return a * b;
}

const multiplyByTwo = multiply.bind(this, 2);
let res1 = multiplyByTwo(5);
console.log(res1);

// Closure Implementation
function sum(a) {
    return function(b) {
        return a + b;
    }
}

let res2 = sum(5)(10);
console.log(res2);

// Infinite Currying sum()()()()()()
function add(a) {
    return function(b) {
        if(b) return add(a + b);
        return a;
    }
}

let res3 = add(5)(6)(7)(8)(9)();
console.log(res3);