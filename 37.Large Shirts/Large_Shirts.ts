type ShirtSize = "small" | "medium" | "large";

function make_shirt(size: ShirtSize = "large", message: string = "I love TypeScript") {
    console.log(`Creating a ${size} shirt with the message: ${message}`);
}

// Create a large shirt with the default message
make_shirt();

// Create a medium shirt with the default message
make_shirt("medium");

// Create a shirt of any size with a different message
make_shirt("small", "TypeScript is awesome!");
