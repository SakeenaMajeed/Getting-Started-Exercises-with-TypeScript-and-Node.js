"use strict";
function show_magicians(magicians) {
    magicians.forEach((magician, index) => {
        console.log(`${index + 1}. ${magician}`);
    });
}
const magicians = [
    "Harry Houdini",
    "David Copperfield",
    "Penn Jillette",
    "Teller",
    "Derren Brown",
    "Criss Angel"
];
show_magicians(magicians);
function add_magician(magician, magicians) {
    return [...magicians, magician];
}
const updatedMagicians = add_magician("Dynamo", magicians);
console.log("\nMagicians after adding Dynamo:");
show_magicians(updatedMagicians);
