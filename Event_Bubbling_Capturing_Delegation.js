// By Default UseCapture Behaviour is False So Bubbling Phase Will Happen
// document.querySelector("#grandparent").addEventListener('click', () => {
//     console.log("GrandParent Clicked");
// })

// document.querySelector("#parent").addEventListener('click', () => {
//     console.log("Parent Clicked");
// })

// document.querySelector("#child").addEventListener('click', () => {
//     console.log("Child Clicked");
// })


// Make UseCapture Flag as True Then Event Capture Will Happen
// document.querySelector("#grandparent").addEventListener('click', () => {
//     console.log("GrandParent Clicked");
// }, true)

// document.querySelector("#parent").addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log("Parent Clicked");
// }, true)

// document.querySelector("#child").addEventListener('click', () => {
//     console.log("Child Clicked");
// }, true)

/**
 * 
 * We Can Also Prevent Bubbling and Capturing with The Help of stopPropogation Behaviour
 * Event Capturing is also Known as Event Trickling
 * 
*/

// Event Delegation
document.querySelector("#categories").addEventListener('click', (e) => {
    console.log(e.target.textContent);
    window.location.href = 'category' + "/" + e.target.textContent.toLowerCase();
})
