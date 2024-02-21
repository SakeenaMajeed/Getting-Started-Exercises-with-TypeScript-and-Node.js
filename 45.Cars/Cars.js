"use strict";
function createCar(manufacturer, model, ...options) {
    const car = {
        manufacturer,
        model
    };
    // Add additional properties
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
// Example usage
const myCar = createCar('Toyota', 'Corolla', ['color', 'blue'], ['year', 2023], ['sunroof', true]);
console.log(myCar);
