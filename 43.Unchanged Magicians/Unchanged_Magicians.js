"use strict";
// Function to make magicians great
function makeGreat(magicians) {
    // Create a new array to store the modified magicians
    const greatMagicians = [];
    // Loop through each magician and add "the Great" to their name
    magicians.forEach(magician => {
        const greatMagician = {
            name: `the Great ${magician.name}`
        };
        greatMagicians.push(greatMagician);
    });
    return greatMagicians;
}
// Function to display magicians' names
function showMagicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician.name);
    });
}
// Array of magicians' names
const magicians = [
    { name: "Merlin" },
    { name: "Gandalf" },
    { name: "Dumbledore" }
];
// Create a copy of the array of magicians' names
const originalMagicians = [...magicians];
// Call makeGreat() with the copy of the array
const greatMagicians = makeGreat([...magicians]);
// Display the original magicians' names
console.log("Original Magicians:");
showMagicians(originalMagicians);
// Display the great magicians' names
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
