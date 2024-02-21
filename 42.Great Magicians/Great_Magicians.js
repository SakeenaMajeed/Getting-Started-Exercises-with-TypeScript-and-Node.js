"use strict";
// Define a function to modify the array of magicians by adding "the Great" to each name
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
// Define a function to display the magicians
function show_magicians(magicians) {
    console.log("Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Example usage
const magicians = ["Merlin", "Gandalf", "Harry Potter"];
make_great(magicians);
show_magicians(magicians);
