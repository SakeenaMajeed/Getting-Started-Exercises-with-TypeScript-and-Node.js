// Define the interface for a magician
interface Magician {
    name: string;
}

// Function to make magicians great
function makeGreat(magicians: Magician[]): Magician[] {
    // Create a new array to store the modified magicians
    const greatMagicians: Magician[] = [];

    // Loop through each magician and add "the Great" to their name
    magicians.forEach(magician => {
        const greatMagician: Magician = {
            name: `the Great ${magician.name}`
        };
        greatMagicians.push(greatMagician);
    });

    return greatMagicians;
}

// Function to display magicians' names
function showMagicians(magicians: Magician[]): void {
    magicians.forEach(magician => {
        console.log(magician.name);
    });
}

// Array of magicians' names
const magicians: Magician[] = [
    { name: "Merlin" },
    { name: "Gandalf" },
    { name: "Dumbledore" }
];

// Create a copy of the array of magicians' names
const originalMagicians: Magician[] = [...magicians];

// Call makeGreat() with the copy of the array
const greatMagicians: Magician[] = makeGreat([...magicians]);

// Display the original magicians' names
console.log("Original Magicians:");
showMagicians(originalMagicians);

// Display the great magicians' names
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
