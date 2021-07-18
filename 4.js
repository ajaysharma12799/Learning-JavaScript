// Type Conversion and Type Coercion
const num1 = "5";
const num2 = 9;
let res1 = num1 + num2; // Automatic Type Coercion or Implicity Type Casting
let res2 = Number(num1) + num2; // Explicit Type Casting
console.log(res1);
console.log(res2);

// LocalStorage and SessionStorage
let arr = [1,2,3,4,5];
// localStorage.setItem("name", "Ajay Sharma"); // Set Item into LocalStorage
// let name = localStorage.getItem("name"); // Get Item From LocalStorage, Return Null If Not Found
// console.log(name);
// console.log(localStorage.key(1)); // Return Key of Given Particular Given Index
// localStorage.clear(); // Clear LocalStorage
localStorage.setItem("numbers", JSON.stringify(arr));
console.log(JSON.parse(localStorage.getItem("numbers")));
/* 
    Note:- To Store Array in LocalStorage We need to do JSON.stringify
    Note:- To Get Array from LocalStorage We need to do JSON.parse
*/