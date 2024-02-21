"use strict";
function orderSandwich(...items) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected for the sandwich.");
    }
    else {
        console.log("Items:");
        items.forEach(item => console.log("- " + item));
    }
    console.log("--------------------");
}
// Call the function three times with different numbers of arguments
orderSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
orderSandwich("Ham", "Cheese");
orderSandwich();
