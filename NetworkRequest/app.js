let getButton = document.getElementById("getData");
let sendButton = document.getElementById("sendData");

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);

function sendXMLHttpRequest(method, url, data) {
    let promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open(method, url);
        if(data) {
            xhr.setRequestHeader("Content-Type", "application/json");
        }
        xhr.onload = function() {
            if(xhr.status === 200) {
                resolve(xhr.response.data);
            }
        }
        xhr.onerror = function() {
            reject("Something Went Wrong");
        }
        xhr.send(JSON.stringify(data));
    });
    return promise;
}

function getData() {
    sendXMLHttpRequest("GET", "https://reqres.in/api/users")
    .then(resp => console.log(resp))
    .catch(error => console.log(error));
}

function sendData() {
    sendXMLHttpRequest("POST", "https://reqres.in/api/register", {
        email: "eve.holt@reqres.in",
        password: "pistol"
    })
    .then(resp => console.log(resp))
    .catch(error => console.log(error));
}