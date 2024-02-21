"use strict";
// Define an array
const cars = ["Toyota", "Honda", "Ford"];
// Intentionally accessing an invalid index to produce an error
const index = 10;
const car = index < cars.length ? cars[index] : null;
// Handling the error using conditional logic
if (car !== null) {
    console.log(`Car at index ${index}: ${car}`);
}
else {
    console.error(`Index ${index} is out of bounds.`);
}
// Recovering from the error by providing a default value
const safeIndex = 2;
const safeCar = cars[safeIndex] || "Unknown";
console.log(`Car at index ${safeIndex}: ${safeCar}`);
