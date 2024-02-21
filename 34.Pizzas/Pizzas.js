"use strict";
let favoritePizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
// Print the name of each pizza
console.log("My favorite pizzas:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}
// Print a sentence using the name of each pizza
console.log("\nStatements about my favorite pizzas:");
for (let pizza of favoritePizzas) {
    switch (pizza) {
        case "Pepperoni":
            console.log(`I absolutely adore ${pizza} pizza with its spicy pepperoni slices.`);
            break;
        case "Margherita":
            console.log(`A classic ${pizza} pizza with fresh basil and mozzarella is always a delight.`);
            break;
        case "BBQ Chicken":
            console.log(`The tangy sweetness of ${pizza} pizza topped with barbecue sauce and tender chicken is irresistible.`);
            break;
        default:
            console.log(`I like ${pizza} pizza.`);
            break;
    }
}
// Additional sentence expressing love for pizza
console.log("\nI really love pizza!");
