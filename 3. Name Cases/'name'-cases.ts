function printNameCases(name: string): void {
    // Print the name in lowercase
    console.log("Lowercase:", name.toLowerCase());

    // Print the name in uppercase
    console.log("Uppercase:", name.toUpperCase());

    // Print the name in titlecase
    console.log("Titlecase:", name.charAt(0).toUpperCase() + name.slice(1));
}

// Store the person's name in a variable
let personName: string = "sakeena";

// Call the function with the person's name
printNameCases(personName);
