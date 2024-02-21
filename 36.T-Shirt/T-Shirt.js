"use strict";
function make_shirt(size, message) {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
    return { size, message };
}
// Call the function
const myShirt = make_shirt("medium", "Hello, World!");
console.log("My Shirt:", myShirt);
