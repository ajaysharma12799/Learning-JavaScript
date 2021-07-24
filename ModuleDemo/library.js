let message = "Hello World!";

function showDetails() {
    console.log("Hi, I am Exported Fnction");
}

export default function() {
    console.log("Hi, I am a Default Function Which is Being Exported");
}

export { message, showDetails };