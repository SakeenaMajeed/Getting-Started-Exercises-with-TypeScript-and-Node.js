function show_magicians(magicians: string[]): void {
    magicians.forEach((magician, index) => {
        console.log(`${index + 1}. ${magician}`);
    });
}

const magicians: string[] = [
    "Harry Houdini",
    "David Copperfield",
    "Penn Jillette",
    "Teller",
    "Derren Brown",
    "Criss Angel"
];

show_magicians(magicians);

function add_magician(magician: string, magicians: string[]): string[] {
    return [...magicians, magician];
}

const updatedMagicians = add_magician("Dynamo", magicians);
console.log("\nMagicians after adding Dynamo:");
show_magicians(updatedMagicians);
