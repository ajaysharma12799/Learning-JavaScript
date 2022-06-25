// function alertBox() {
//     alert("Hello From Events");
// }

// Single Dimensional Arrays

let arr1 = [];
let arr2 = new Array();

arr1[0] = 12345;
arr1[1] = true;

arr2[0] = "A";
arr2[1] = 23;

console.log(arr1);
console.log(arr2);

// Multi Dimensional Array
let arr = [[1,2,3,4,5], [5,4,3,2,1]];
console.table(arr);

// Sort and Reverse Array
let names = ["Ajay", "Raju", "Karan", "Sanjay"];
console.log(names + " Before Sorting");
names.sort();
console.log(names + " After Sorting");

let nums = [1,2,3,4,5, 15];
console.log(nums + " Before Reverse");
nums.reverse();
console.log(nums + " After Reverse");

// Shift and Unshift
let number = [1, 2, 5, 3, 4];
console.log(number + " Before Removing");
let removedNumber = number.shift();
console.log(removedNumber + " Removed Number");
console.log(number + " After Removing");

let doub = [11, 12, 22, 44];
console.log(doub + " Before Adding");
doub.unshift(50);
console.log(doub + " After Adding");
/* 
    push() and pop() Reverse Methods are shift() and unshift()
*/

// Concat and Join
let person = ["Ab", "Bc", "Cd"];
let newPersonArray = person.concat(["De", "Ef"]); // Return New Array
console.log(newPersonArray);

let newPersonJoinedArray = person.join("--"); // Return Complete String
console.log(newPersonJoinedArray);
console.log(typeof newPersonJoinedArray);

// Slice and Splice
let char = [1,2,3,4,5];
let newSlicedArray = char.slice(1, 4);
console.log(newSlicedArray + " Sliced Array");

let character = [1,2,3,4,5];
character.splice(4, 1, "Ball", "Cat"); // Will Add Extra Value After Removing Selected Value From Array
// character.splice(4, 1); // Will Remove Value From Array
console.log(character);

// isArray
let arry = [1,2,3,4,5];
console.log(Array.isArray(arry)); // Check Whether Object is an Array or Not

// includes
let a = [1,2,3,4,5];
let result = a.includes(5);
console.log(result);

// Some and Every
function checkAdult(age) {
    return age >= 18;
}
function checkTeen(age) {
    return age >= 50;
}
let ages = [12, 15, 18, 22];
let adultAge = 18;
let resultSome = ages.some(checkAdult); // Check if Any Value is Passing the Test
console.log(resultSome);

let resultEvery = ages.every(checkTeen);
console.log(resultEvery);

// Filter
let numbers = [1,20,22,33,56];
let resultFilter = [];
resultFilter.push(numbers.filter(element => element % 2 == 0));
console.log(resultFilter);

// Fill
let zeroArray = [1,2,3,4,5];
console.log(zeroArray + " Before Fill");
zeroArray.fill(0);
console.log(zeroArray + " After Fill");