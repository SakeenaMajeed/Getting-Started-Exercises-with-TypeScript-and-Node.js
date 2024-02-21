"use strict";
// Define an array of language names
const languages = [
    "English",
    "Turkish",
    "Hindi",
    "Spanish",
    "French",
    "Arabic",
    "Bengali",
    "Russian",
    "Urdu",
    "Indonesian"
];
// Print each language name
console.log("List of Languages:");
languages.forEach((language, index) => {
    console.log(`${index + 1}. ${language}`);
});
