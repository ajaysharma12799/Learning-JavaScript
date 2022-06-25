// Error Handling

// Try-Catch only Work For RunTime Errors
function divideByZero() {
    return 10/0;
}

try {
    console.log("Try Start");
    divideByZero();
    console.log("Try End");
} catch(err) {
    console.log(err);
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}
finally {
    console.log("Finally Will Always Execute");
}