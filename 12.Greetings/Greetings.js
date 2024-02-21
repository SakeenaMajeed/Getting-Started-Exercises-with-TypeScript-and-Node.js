"use strict";
let personnames = ["Manahil", "Mariyam", "Alishba", "Nilofar", "Eman", "Majeed", "Ali", "Hamza", "Qasim"];
function printMessageToPerson(person) {
    console.log(`Hello, ${person}! We hope you're having a great day!`);
}
for (let person of personnames) {
    printMessageToPerson(person);
}
