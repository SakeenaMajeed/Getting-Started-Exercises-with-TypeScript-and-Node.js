"use strict";
// Define a list of animals
let animals = ["dog", "cat", "rabbit"];
// Loop through each animal and print its name
for (let animal of animals) {
    console.log(animal);
}
// Print statements about each animal
for (let animal of animals) {
    switch (animal) {
        case "dog":
            console.log(`A ${animal} would make a great pet.`);
            break;
        case "cat":
            console.log(`A ${animal} can be a wonderful companion.`);
            break;
        case "rabbit":
            console.log(`A ${animal} is adorable and fun to play with.`);
            break;
        default:
            console.log(`Not sure about ${animal}.`);
    }
}
// Print the common characteristic
console.log("Any of these animals would make a great pet!");
