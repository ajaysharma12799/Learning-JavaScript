/* 
    Functional Programming :-
    In Functional Programming We Think and Code in Term of Function.
    JavaScript is Multi-Paradign Language and Functional Programming is Part of it.

    Feature of Functional Programming :- 
    1. First Class Citizens Function => In Functional Programming Function are First Class Citizen, means You can Insert a Function inside a Function Without Parent Restriction.

    2. Higher Order Function => Type of Function Which Take Function as Argument and May or May Not Return a Function.

    3. Function Composition => Act of Creating Function That allow you to Simplify or Compress Function by Taking Function as Argument, It May also Return a Function.
*/

/* 
    First Class Function means When Function are Treated Like any Other Variable, that means you can Store Function in a Variable, You can pass Function to Another Function or You can Return Function From Another Function.

    A Function that is Passed as an Argument is called Callback Function
*/

let hi = function() { // Store Function in Variable
    console.log("Hi");
}

function add() {
    return 1 + 2;
}
function showResult(addCallbackFunction, anotherNumber) { // Passing Function into Another Function
    console.log(addCallbackFunction() + anotherNumber);
}
showResult(add, 10);

function printDetails() { // Returning Function From Another Function, Higher Order Function
    return function () {
        console.log("Returned Function From Function");
    }
}
let fun = printDetails();
fun();

/*
    Array.prototype.map
    => Always Return a new Array From The Input Passed into it.
    => Take 3 Parameter into Callback Function that is Element, index, array.
*/
let numbers = [1,5,2,4,3];
let newArray = numbers.map(e => e * 2);
console.log(newArray);

let num = [1,2,3];
num.map((element, index, array) => {
    // console.log(element, index, array); // array is Passed Input Array
    console.log(element, index); // Giving Element and It's Index
})

/*
    Array.prototype.filter
    => Always Return a new Array From The Input Passed into it.
    => Take 3 Parameter into Callback Function that is Element, index, array.
*/
let numbers = [1,5,2,4,3];
let newArray = numbers.filter(e => e % 2 === 0);
console.log(newArray);

/*
    Array.prototype.reduce
    => Return a Single Value From The Input Passed into it.
    => Callback Function Take 4 Value.
    If Initial Value is Provided then Accumulator will be Initial Value, rest You Can Understand By Name.
*/

let numbers = [1,2,3,4,5,15];
// let result = numbers.reduce((accumulator, currentValue, currentIndex, sourceArray) => {
//     console.log(`Accumulator : ${accumulator}, CurrentValue : ${currentValue}, CurrentIndex : ${currentIndex}, SourceArray : ${sourceArray}`);
// });
let result = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(result);