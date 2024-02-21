// Define an array containing numbers 1 through 9
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through each number in the array
for (const num of numbers) {
    // Initialize a variable to store the ordinal ending
    let ordinalEnding: string;

    // Use an if-else chain to determine the ordinal ending based on the number
    if (num === 1) {
        ordinalEnding = "st"; // if the number is 1, use "st"
    } else if (num === 2) {
        ordinalEnding = "nd"; // if the number is 2, use "nd"
    } else if (num === 3) {
        ordinalEnding = "rd"; // if the number is 3, use "rd"
    } else {
        ordinalEnding = "th"; // for all other numbers, use "th"
    }

    // Print the number followed by its ordinal ending
    console.log(`${num}${ordinalEnding}`);
}
