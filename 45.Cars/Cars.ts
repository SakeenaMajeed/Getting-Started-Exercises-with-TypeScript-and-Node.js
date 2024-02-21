interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary additional properties
}

function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
    const car: Car = {
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
