function promiseDemo(completed) {
    return new Promise(function(resolve, reject) {
        if(completed) {
            resolve("Promise is FulFilled");
        }
        else {
            reject("Promise is Failed");
        }
    });
}

let completed = false;
promiseDemo(completed).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})