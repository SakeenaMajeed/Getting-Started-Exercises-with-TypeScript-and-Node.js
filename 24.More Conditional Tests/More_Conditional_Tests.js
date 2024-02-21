"use strict";
// Test for item not in array
let colors = ["red", "green", "blue"];
let colorToCheck = "yellow";
if (!colors.includes(colorToCheck)) {
    console.log(`${colorToCheck} is not in the array.`);
}
else {
    console.log(`${colorToCheck} is in the array.`);
}
