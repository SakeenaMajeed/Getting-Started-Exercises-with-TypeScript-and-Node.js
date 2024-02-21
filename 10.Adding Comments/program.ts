// Program: Calculator.ts
// Author: Sakeena
// Date: 2024-02-20
// This program implements a basic calculator with addition, subtraction, multiplication, and division operations.

class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

const calculator = new Calculator();

console.log(calculator.add(5, 3)); // Output: 8

console.log(calculator.subtract(5, 3)); // Output: 2

console.log(calculator.multiply(5, 3)); // Output: 15

console.log(calculator.divide(6, 3)); // Output: 2
