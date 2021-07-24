// Scope, Scope Chain and Lexical Environment
function a() {
    var x = 10;
    b();
    function b() {
        console.log(x);
    }
}
a();

// Asynchronous JS
/* 
    1. Callback
    2. Promises
    3. Async/Await
    4. fetch API => Modern and Versatile Method
*/
/* 
    fetch API :-
        1. Syntax of fetch API 
            let promise = fetch(url, [options]);
            Withod options there would be simple GET Request for Downloading Content
*/

async function getJokes1() {
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    if(response.ok) {
        console.log(await response.json());
    }
    else {
        console.log(response);
    }
}
function getJokes2() {
    let response = fetch("https://api.chucknorris.io/jokes/random");
    response
    .then(resp => resp.json())
    .then(jsonresp => console.log(jsonresp))
    .catch(error => console.log(error));
}
// getJokes1();
// getJokes2();

function xhrDemo() {
    let xhr = new XMLHttpRequest(); // Creating New XHR Object
    xhr.open("GET", "https://api.chucknorris.io/jokes/random");
    xhr.send();
    xhr.onload = function() {
        if(xhr.status === 200) {
            console.log(xhr.response);
        }
        else {
            console.log("Error");
        }
    }
    xhr.onprogress = function(event) {
        console.log(event.loaded, event.total);
    }
    console.log(xhr);
}
xhrDemo();