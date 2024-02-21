
let guests: string[] = ["Alishba", "Mariyam", "Sakeena"];

// Informing people about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");

// Add one new guest to the beginning of the array
guests.unshift("Qirat");

// Add one new guest to the middle of the array
const middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Areeba");

// Add one new guest to the end of the array using append()
guests.push("Fiza");

// Print invitation messages
guests.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner at my place.`);
});
