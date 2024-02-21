// Program: TemperatureConverter.ts
// Author: sakeena
// Date: 2024-02-20
// This program converts temperatures between Celsius and Fahrenheit.

class TemperatureConverter {
    static celsiusToFahrenheit(celsius: number): number {
        return (celsius * 9 / 5) + 32;
    }

    static fahrenheitToCelsius(fahrenheit: number): number {
        return (fahrenheit - 32) * 5 / 9;
    }
}

console.log(TemperatureConverter.celsiusToFahrenheit(0)); // Output: 32
console.log(TemperatureConverter.fahrenheitToCelsius(32)); // Output: 0
